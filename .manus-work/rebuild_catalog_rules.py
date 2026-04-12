from __future__ import annotations

import json
import re
from pathlib import Path

import pandas as pd

PROJECT = Path('/home/ubuntu/tader-website')
DATA_TS = PROJECT / 'client/src/data/taderData.ts'
WORK_JSON = PROJECT / '.manus-work/site_product_data.json'
XLSX = Path('/home/ubuntu/upload/ZENOK_SKU_Master.xlsx')

TS_PREFIX = '''/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Use disciplined industrial typography, asymmetrical spacing, and technical annotations.
- Prioritize procurement clarity, dimensional readability, and engineered trust over decorative marketing.
- Keep the palette graphite, misted steel, off-white, and restrained copper accents.
*/
export type ProductFamily = {
  series: string;
  legacy_series: string | null;
  line_name: string;
  category: string | null;
  category_slug: string | null;
  sub_type: string | null;
  series_slug: string;
  flutes: number | null;
  construction: string | null;
  sku_count: number;
  diameter_range_mm: readonly [number | null, number | null];
  effective_length_range_mm: readonly [number | null, number | null];
  route: string;
  intro: string;
  skuCount: number;
};

export type SkuRecord = {
  model_no: string;
  catalog_sku: string;
  series: string;
  legacy_series: string | null;
  line_name: string;
  series_slug: string;
  category: string | null;
  category_slug: string | null;
  sub_type: string | null;
  flutes: number | null;
  diameter_mm: number | null;
  radius_mm: number | null;
  cut_length_mm: number | null;
  effective_length_mm: number | null;
  overall_length_mm: number | null;
  shank_diameter_mm: number | null;
  construction_options: readonly string[];
  has_b: boolean;
  has_c: boolean;
  price_label: string;
  amazon_warning: string | null;
  slug: string;
  type_label: string;
  coating: string;
  construction_labels: readonly string[];
};

export const taderData = '''


def load_excel_models() -> tuple[set[str], dict[str, int]]:
    df = pd.read_excel(XLSX, sheet_name='SKU Master', header=1)
    df.columns = [
        'model_no', 'tader_sku', 'series', 'category', 'sub_type', 'flutes', 'diameter_mm', 'radius_mm',
        'cut_length_mm', 'effective_length_mm', 'overall_length_mm', 'shank_diameter_mm', 'has_b', 'has_c',
        'price_label', 'internal_notes'
    ]
    for col in ['flutes', 'diameter_mm', 'radius_mm', 'cut_length_mm', 'effective_length_mm', 'overall_length_mm', 'shank_diameter_mm']:
        df[col] = pd.to_numeric(df[col], errors='coerce')

    filtered = df[(df['diameter_mm'] <= 3.0) & (df['shank_diameter_mm'] < 6.0)].copy()
    allowed_models = set(filtered['model_no'].astype(str).tolist())
    counts = {
        'source_rows': int(len(df)),
        'allowed_rows': int(len(filtered)),
        'removed_rows': int(len(df) - len(filtered)),
    }
    return allowed_models, counts


def load_tader_data() -> dict:
    source = DATA_TS.read_text()
    match = re.search(r'export const taderData = (\{[\s\S]*\}) as const;', source)
    if not match:
        raise RuntimeError('Unable to parse taderData.ts object literal')
    return json.loads(match.group(1))


def mm_range(items: list[dict], key: str) -> list[float | None]:
    values = [item.get(key) for item in items if item.get(key) is not None]
    if not values:
        return [None, None]
    return [min(values), max(values)]


def family_construction(items: list[dict]) -> str | None:
    constructions = []
    for item in items:
        constructions.extend(item.get('construction_options', []))
    seen = sorted(set([c for c in constructions if c in {'B', 'C'}]))
    if seen == ['B', 'C']:
        return 'B/C'
    if seen == ['C']:
        return 'C only'
    if seen == ['B']:
        return 'B only'
    return None


def main() -> None:
    allowed_models, counts = load_excel_models()
    data = load_tader_data()

    filtered_skus = [
        sku for sku in data['skus']
        if sku['model_no'] in allowed_models
        and (sku.get('diameter_mm') is None or sku['diameter_mm'] <= 3.0)
        and (sku.get('shank_diameter_mm') is None or sku['shank_diameter_mm'] < 6.0)
    ]

    by_series: dict[str, list[dict]] = {}
    for sku in filtered_skus:
        by_series.setdefault(sku['series'], []).append(sku)

    product_families = []
    for family in data['productFamilies']:
        items = by_series.get(family['series'], [])
        if not items:
            continue
        family = dict(family)
        family['sku_count'] = len(items)
        family['skuCount'] = len(items)
        family['diameter_range_mm'] = mm_range(items, 'diameter_mm')
        family['effective_length_range_mm'] = mm_range(items, 'effective_length_mm')
        family['construction'] = family_construction(items)
        product_families.append(family)

    by_category: dict[str, list[dict]] = {}
    for sku in filtered_skus:
        if sku.get('category_slug'):
            by_category.setdefault(sku['category_slug'], []).append(sku)

    category_pages = []
    for category in data['categoryPages']:
        items = by_category.get(category['slug'], [])
        category = dict(category)
        if items:
            category['seriesCodes'] = [family['series'] for family in product_families if family['category_slug'] == category['slug']]
            category['skuCount'] = len(items)
            category['diameterRangeMm'] = mm_range(items, 'diameter_mm')
        category_pages.append(category)

    data['skus'] = filtered_skus
    data['productFamilies'] = product_families
    data['categoryPages'] = category_pages

    sku_count = len(filtered_skus)
    diameter_values = [sku['diameter_mm'] for sku in filtered_skus if sku.get('diameter_mm') is not None]
    radius_values = [sku['radius_mm'] for sku in filtered_skus if sku.get('radius_mm') is not None]
    effective_values = [sku['effective_length_mm'] for sku in filtered_skus if sku.get('effective_length_mm') is not None]
    overall_values = sorted(set([sku['overall_length_mm'] for sku in filtered_skus if sku.get('overall_length_mm') is not None]))
    shank_values = sorted(set([sku['shank_diameter_mm'] for sku in filtered_skus if sku.get('shank_diameter_mm') is not None]))

    for item in data['siteMeta']['heroHighlights']:
        if item['label'] == 'Active micro SKUs':
            item['value'] = str(sku_count)
        if item['label'] == 'Diameter range' and diameter_values:
            item['value'] = f"{min(diameter_values):.1f}–{max(diameter_values):.1f} mm"

    data['filters']['categories'] = [category['slug'] for category in category_pages if category.get('skuCount', 0) > 0]
    data['filters']['flutes'] = sorted(set([sku['flutes'] for sku in filtered_skus if sku.get('flutes') is not None]))
    data['filters']['sub_types'] = sorted(set([sku['sub_type'] for sku in filtered_skus if sku.get('sub_type')]))
    data['filters']['construction'] = ['B', 'C']
    data['filters']['diameter_min_mm'] = min(diameter_values) if diameter_values else None
    data['filters']['diameter_max_mm'] = max(diameter_values) if diameter_values else None
    data['filters']['radius_min_mm'] = min(radius_values) if radius_values else None
    data['filters']['radius_max_mm'] = max(radius_values) if radius_values else None
    data['filters']['effective_length_min_mm'] = min(effective_values) if effective_values else None
    data['filters']['effective_length_max_mm'] = max(effective_values) if effective_values else None
    data['filters']['overall_length_values_mm'] = overall_values
    data['filters']['shank_values_mm'] = shank_values
    data['notes']['rule_refresh'] = {
        'diameter_limit_mm': 3.0,
        'shank_limit_rule': 'Remove all standard SKUs with shank diameter >= 6.0 mm; 1/8 inch is quote-only custom MOQ.',
        'source_rows': counts['source_rows'],
        'active_rows': counts['allowed_rows'],
        'removed_rows': counts['removed_rows'],
    }

    DATA_TS.write_text(TS_PREFIX + json.dumps(data, ensure_ascii=False, indent=2) + ' as const;\n')

    work_payload = {
        'brand': 'ZENOK',
        'company': data['siteMeta']['company'],
        'rule_refresh': data['notes']['rule_refresh'],
        'product_families': [
            {
                'series': family['legacy_series'] or family['series'],
                'zenok_series': family['series'],
                'category': family['category'],
                'category_slug': family['category_slug'],
                'sub_type': family['sub_type'],
                'flutes': family['flutes'],
                'construction': family['construction'],
                'sku_count': family['skuCount'],
                'diameter_range_mm': family['diameter_range_mm'],
                'effective_length_range_mm': family['effective_length_range_mm'],
            }
            for family in product_families
        ],
        'skus': [
            {
                'model_no': sku['model_no'],
                'catalog_sku': sku['catalog_sku'],
                'series': sku['legacy_series'] or sku['series'],
                'zenok_series': sku['series'],
                'category': sku['category'],
                'category_slug': sku['category_slug'],
                'sub_type': sku['sub_type'],
                'flutes': sku['flutes'],
                'diameter_mm': sku['diameter_mm'],
                'radius_mm': sku['radius_mm'],
                'cut_length_mm': sku['cut_length_mm'],
                'effective_length_mm': sku['effective_length_mm'],
                'overall_length_mm': sku['overall_length_mm'],
                'shank_diameter_mm': sku['shank_diameter_mm'],
                'construction_options': sku['construction_options'],
                'has_b': sku['has_b'],
                'has_c': sku['has_c'],
                'price_label': sku['price_label'],
                'amazon_warning': sku['amazon_warning'],
                'slug': sku['slug'],
            }
            for sku in filtered_skus
        ]
    }
    WORK_JSON.write_text(json.dumps(work_payload, ensure_ascii=False, indent=2) + '\n')

    print(json.dumps({
        'source_rows': counts['source_rows'],
        'active_rows': sku_count,
        'removed_rows': counts['removed_rows'],
        'series_remaining': len(product_families),
        'shank_values_mm': shank_values,
    }, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
