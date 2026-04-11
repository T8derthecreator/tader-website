from pathlib import Path
import json
import math
import re
from collections import Counter, defaultdict

source = Path('/home/ubuntu/tader-website/.manus-work/site_product_data.json')
target = Path('/home/ubuntu/tader-website/client/src/data/taderData.ts')


def clean(value):
    if isinstance(value, float) and math.isnan(value):
        return None
    if isinstance(value, dict):
        return {key: clean(item) for key, item in value.items()}
    if isinstance(value, list):
        return [clean(item) for item in value]
    return value


data = clean(json.loads(source.read_text()))

category_meta = {
    'flat-end-mills': {
        'label': 'Flat End Mills',
        'singular': 'Flat End Mill',
        'shortLabel': 'Flat',
        'description': 'Regular and long-neck micro flat end mills for general high-precision milling.',
        'route': '/flat-end-mills',
        'family_prefix': 'ZF',
        'sku_prefix': 'ZF',
    },
    'ball-nose-end-mills': {
        'label': 'Ball Nose End Mills',
        'singular': 'Ball Nose End Mill',
        'shortLabel': 'Ball Nose',
        'description': 'Ball nose micro tools for contouring, finishing, and 3D micro features.',
        'route': '/ball-nose-end-mills',
        'family_prefix': 'ZB',
        'sku_prefix': 'ZB',
    },
    'corner-radius-end-mills': {
        'label': 'Corner Radius End Mills',
        'singular': 'Corner Radius End Mill',
        'shortLabel': 'Corner Radius',
        'description': 'Corner radius geometries for longer life and improved edge strength.',
        'route': '/corner-radius-end-mills',
        'family_prefix': 'ZR',
        'sku_prefix': 'ZR',
    },
    'aluminum-end-mills': {
        'label': 'Aluminum End Mills',
        'singular': 'Aluminum End Mill',
        'shortLabel': 'Aluminum',
        'description': 'Dedicated aluminum cutting product lines optimized for chip evacuation and finish.',
        'route': '/aluminum-end-mills',
        'family_prefix': 'ZA',
        'sku_prefix': 'ZA',
    },
    'carbide-rods': {
        'label': 'Carbide Rods',
        'singular': 'Carbide Rod',
        'shortLabel': 'Carbide Rods',
        'description': 'Integrated carbide rod capability supporting toolmaking cost control and supply consistency.',
        'route': '/carbide-rods',
        'family_prefix': 'ZC',
        'sku_prefix': 'ZC',
    },
}

variant_suffix = {
    'regular': '',
    'long neck': 'LN',
    'long shank': 'LS',
    'hardened': 'H',
}

variant_copy = {
    'regular': 'for core micro-machining programs and everyday high-precision features.',
    'long neck': 'for deep micro features where reach and clearance are critical.',
    'long shank': 'for extended projection setups that need added reach from the holder.',
    'hardened': 'for hard-material programs that prioritize rigidity and edge security.',
}

applications = [
    {
        'slug': 'medical',
        'title': 'Medical Machining',
        'eyebrow': 'Application / Medical',
        'description': 'Micro tools for implant components, surgical devices, and miniature precision features where consistency and clean edge quality matter.',
        'focus': ['Titanium and stainless workflows', 'Tight tolerance miniature features', 'Stable surface finish for critical parts'],
        'image': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-medical-machining-89pKNW65wEEfmggUukooMH.webp',
    },
    {
        'slug': 'aerospace',
        'title': 'Aerospace Machining',
        'eyebrow': 'Application / Aerospace',
        'description': 'Precision cutting tools for aerospace subcontractors handling high-value materials, fine geometries, and repeatable process windows.',
        'focus': ['Small features on critical components', 'Rigidity for demanding geometries', 'Reliable performance in high-value part programs'],
        'image': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-aerospace-machining-N5egC8RrQrLpFZVuhcC8Dg.webp',
    },
    {
        'slug': 'electronics',
        'title': 'Electronics Manufacturing',
        'eyebrow': 'Application / Electronics',
        'description': 'Micro end mills for molds, connectors, housings, and miniature precision components used across electronics and device manufacturing.',
        'focus': ['Tiny cavities and connector details', 'Fine geometry replication', 'Stable chip control in small-part machining'],
        'image': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-electronics-machining-j7uSMhPF9xWBScJSQ2djkx.webp',
    },
]

technology_topics = [
    {
        'id': 'construction-b-vs-c',
        'title': 'Construction B vs C',
        'summary': 'B uses a carbide tipped configuration and is not compatible with shrink-fit toolholders. C is full solid carbide with broader holder compatibility.',
        'points': [
            'B construction is limited to shank diameter 4 mm and below.',
            'C construction removes that shank restriction and suits broader setups.',
            'Product detail pages explicitly show shrink-fit compatibility warnings when B is selected.',
        ],
    },
    {
        'id': 'taiwan-duty',
        'title': 'Taiwan 4.8% MFN Duty Advantage',
        'summary': 'Taiwan-origin tooling can offer a tariff position advantage versus higher-duty sourcing routes, helping landed cost discussions with U.S. buyers.',
        'points': [
            'Home page highlights Taiwan MFN 4.8% as a commercial differentiator.',
            'Technology page frames duty advantage in procurement language, not consumer marketing language.',
            'Messaging is positioned as a sourcing advantage alongside precision and vertical integration.',
        ],
    },
    {
        'id': 'carbide-comparison',
        'title': 'Carbide Tipped vs Solid Carbide',
        'summary': 'The site explains trade-offs between tipped and full solid carbide construction so buyers can match holder strategy, rigidity, and cost to application needs.',
        'points': [
            'Solid carbide supports broader holder compatibility and full-body rigidity.',
            'Carbide tipped construction remains viable in suitable size ranges.',
            'Selection guidance is embedded into category and SKU detail views.',
        ],
    },
]

about_sections = [
    {
        'title': 'Company Positioning',
        'body': 'ZENOK presents a Taiwan-based precision tooling catalog focused on micro end mills for demanding U.S. machining applications.',
    },
    {
        'title': 'Vertical Integration',
        'body': 'From carbide rod capability to finished tooling, vertical integration supports cost control, lead-time consistency, and defensible pricing in specialized micro-tool programs.',
    },
    {
        'title': 'Manufacturing Capability',
        'body': 'The product structure emphasizes micro diameters, long-neck geometries, and application-fit constructions for shops serving medical, aerospace, and electronics work.',
    },
]


def slugify(value: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', value.lower()).strip('-')



def mm_code(value: object) -> str | None:
    if value is None or value == '':
        return None
    numeric = float(value)
    return f"{int(round(numeric * 100)):04d}"



def normalize_subtype(value: object) -> str:
    return str(value or 'Regular').strip()



def get_variant_key(value: object) -> str:
    return normalize_subtype(value).lower()



def family_base_code(category_slug: str | None, flutes: object) -> str:
    prefix = category_meta.get(category_slug, {}).get('family_prefix', 'ZP')
    if isinstance(flutes, (int, float)) and flutes:
        return f"{prefix}{int(flutes)}"
    return prefix



def build_family_code(category_slug: str | None, flutes: object, sub_type: object) -> str:
    base = family_base_code(category_slug, flutes)
    suffix = variant_suffix.get(get_variant_key(sub_type), '')
    return f"{base}-{suffix}" if suffix else base



def build_family_name(category_slug: str | None, flutes: object, sub_type: object) -> str:
    meta = category_meta.get(category_slug, {})
    singular = meta.get('singular', 'Precision Tool')
    flute_label = f"{int(flutes)}-Flute" if isinstance(flutes, (int, float)) and flutes else 'Multi-Flute'
    sub_type_label = normalize_subtype(sub_type)
    return f"{singular} · {flute_label} · {sub_type_label}"



def build_family_intro(category_slug: str | None, flutes: object, sub_type: object) -> str:
    singular = category_meta.get(category_slug, {}).get('singular', 'precision tool').lower()
    flute_label = f"{int(flutes)}-flute" if isinstance(flutes, (int, float)) and flutes else 'multi-flute'
    subtype_key = get_variant_key(sub_type)
    subtype_label = normalize_subtype(sub_type).lower()
    tail = variant_copy.get(subtype_key, 'for demanding precision work where dimensional clarity matters.')
    return f"{flute_label} {subtype_label} {singular} product line {tail}"



def build_catalog_sku(sku: dict) -> str:
    category_slug = sku.get('category_slug')
    sub_type = sku.get('sub_type')
    base_code = family_base_code(category_slug, sku.get('flutes'))
    suffix = variant_suffix.get(get_variant_key(sub_type), '')

    parts = [base_code]

    diameter_code = mm_code(sku.get('diameter_mm'))
    if diameter_code:
        parts.append(f"D{diameter_code}")

    radius_code = mm_code(sku.get('radius_mm'))
    if category_slug == 'corner-radius-end-mills' and radius_code:
        parts.append(f"R{radius_code}")

    if suffix == 'LN':
        effective_code = mm_code(sku.get('effective_length_mm'))
        if effective_code:
            parts.append(f"EL{effective_code}")

    if suffix == 'LS':
        overall_code = mm_code(sku.get('overall_length_mm'))
        if overall_code:
            parts.append(f"OL{overall_code}")

    return '-'.join(parts + ([suffix] if suffix else []))


raw_skus = data['skus']
base_counts = Counter(build_catalog_sku(item) for item in raw_skus)
final_counts = Counter()
skus = []
series_to_skus = defaultdict(list)
skus_by_category = defaultdict(list)

for raw_sku in raw_skus:
    sku = dict(raw_sku)
    category_slug = sku.get('category_slug')
    if category_slug not in category_meta:
        continue

    series_code = build_family_code(category_slug, sku.get('flutes'), sku.get('sub_type'))
    line_name = build_family_name(category_slug, sku.get('flutes'), sku.get('sub_type'))
    type_label = category_meta.get(category_slug, {}).get('label', sku.get('category'))
    category_label = category_meta.get(category_slug, {}).get('singular', sku.get('category'))

    new_sku = build_catalog_sku(sku)
    if base_counts[new_sku] > 1:
        shank_code = mm_code(sku.get('shank_diameter_mm'))
        if shank_code:
            new_sku = f"{new_sku}-S{shank_code}"
    if final_counts[new_sku] > 0:
        new_sku = f"{new_sku}-{sku['model_no']}"
    final_counts[new_sku] += 1

    sku.pop('tader_sku', None)
    sku['catalog_sku'] = new_sku
    sku['legacy_series'] = sku.get('series')
    sku['series'] = series_code
    sku['line_name'] = line_name
    sku['series_slug'] = slugify(series_code)
    sku['category'] = category_label
    sku['type_label'] = type_label
    sku['coating'] = 'Contact for spec'
    sku['construction_labels'] = [
        'Carbide Tipped' if code == 'B' else 'Full Solid Carbide'
        for code in sku['construction_options']
    ]

    skus.append(sku)
    skus_by_category[category_slug].append(sku)
    series_to_skus[series_code].append(sku)

product_families = []
for family in data['product_families']:
    category_slug = family.get('category_slug')
    if category_slug not in category_meta:
        continue

    series_code = build_family_code(category_slug, family.get('flutes'), family.get('sub_type'))
    product_families.append({
        **family,
        'legacy_series': family.get('series'),
        'series': series_code,
        'line_name': build_family_name(category_slug, family.get('flutes'), family.get('sub_type')),
        'series_slug': slugify(series_code),
        'category': category_meta.get(category_slug, {}).get('singular', family.get('category')),
        'route': category_meta.get(category_slug, {}).get('route', '/products'),
        'intro': build_family_intro(category_slug, family.get('flutes'), family.get('sub_type')),
        'skuCount': len(series_to_skus.get(series_code, [])),
    })

category_pages = []
for slug, meta in category_meta.items():
    items = skus_by_category.get(slug, [])
    families_for_category = [family for family in product_families if family['category_slug'] == slug]
    category_pages.append({
        'slug': slug,
        'label': meta['label'],
        'shortLabel': meta['shortLabel'],
        'description': meta['description'],
        'route': meta['route'],
        'seriesCodes': [family['series'] for family in families_for_category],
        'skuCount': len(items),
        'diameterRangeMm': [
            min((item['diameter_mm'] for item in items if item.get('diameter_mm') is not None), default=None),
            max((item['diameter_mm'] for item in items if item.get('diameter_mm') is not None), default=None),
        ],
    })

home_highlights = [
    {'label': 'Product lines', 'value': str(len(product_families))},
    {'label': 'Active micro SKUs', 'value': str(len(skus))},
    {'label': 'Diameter range', 'value': '0.1–3.0 mm'},
    {'label': 'Taiwan MFN', 'value': '4.8%'},
]

site_model = {
    'siteMeta': {
        'brand': 'ZENOK',
        'company': 'ZENOK',
        'heroTitle': 'Micro-Precision End Mills Built for Demanding Applications',
        'heroSubtitle': 'Taiwan-made carbide tooling for U.S. CNC shops serving medical, aerospace, and electronics programs.',
        'heroImage': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-hero-precision-tooling-cexGHiUD3iLL8zn8jgmMrm.webp',
        'blueprintImage': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-technology-blueprint-GeB22kQRd5mwYcCuzMguar.webp',
        'primaryCta': {'label': 'Request a Quote', 'href': '/quote-request'},
        'secondaryCta': {'label': 'Browse Products', 'href': '/products'},
        'formspreeId': 'xbdpanvk',
        'heroHighlights': home_highlights,
        'tariffBadge': 'Taiwan MFN 4.8% duty advantage',
    },
    'navigation': [
        {'label': 'Products', 'href': '/products'},
        {'label': 'Applications', 'href': '/applications'},
        {'label': 'Technology', 'href': '/technology'},
        {'label': 'About', 'href': '/about'},
        {'label': 'Quote Request', 'href': '/quote-request'},
    ],
    'categoryPages': category_pages,
    'productFamilies': product_families,
    'skus': skus,
    'applications': applications,
    'technologyTopics': technology_topics,
    'aboutSections': about_sections,
    'filters': data['filters'],
    'notes': {
        'duplicateDisplaySkuCount': len(skus) - len({sku['catalog_sku'] for sku in skus}),
        'skuSlugStrategy': 'Use model_no-derived slug because display SKU is human-readable while route stability stays anchored to model numbers.',
        'carbideRodsDatasetAvailable': False,
    },
}

content = """/*
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

export const taderData = """ + json.dumps(site_model, ensure_ascii=False, indent=2) + """ as const;
"""

target.write_text(content)
print(target)
