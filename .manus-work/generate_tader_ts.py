from pathlib import Path
import json
from collections import defaultdict

source = Path('/home/ubuntu/tader-website/.manus-work/site_product_data.json')
target = Path('/home/ubuntu/tader-website/client/src/data/taderData.ts')
data = json.loads(source.read_text())

category_meta = {
    'flat-end-mills': {
        'label': 'Flat End Mills',
        'shortLabel': 'Flat',
        'description': 'Regular and long-neck micro flat end mills for general high-precision milling.',
        'route': '/flat-end-mills',
    },
    'ball-nose-end-mills': {
        'label': 'Ball Nose End Mills',
        'shortLabel': 'Ball Nose',
        'description': 'Ball nose micro tools for contouring, finishing, and 3D micro features.',
        'route': '/ball-nose-end-mills',
    },
    'corner-radius-end-mills': {
        'label': 'Corner Radius End Mills',
        'shortLabel': 'Corner Radius',
        'description': 'Corner radius geometries for longer life and improved edge strength.',
        'route': '/corner-radius-end-mills',
    },
    'aluminum-end-mills': {
        'label': 'Aluminum End Mills',
        'shortLabel': 'Aluminum',
        'description': 'Dedicated aluminum cutting series optimized for chip evacuation and finish.',
        'route': '/aluminum-end-mills',
    },
    'carbide-rods': {
        'label': 'Carbide Rods',
        'shortLabel': 'Carbide Rods',
        'description': 'Integrated carbide rod capability supporting toolmaking cost control and supply consistency.',
        'route': '/carbide-rods',
    },
}

series_intro = {
    'MS2': '2-flute regular flat end mill series for ultra-small diameter applications.',
    'XL2': '2-flute long-neck flat end mill series for reach and clearance in deep micro features.',
    'MS4': '4-flute regular flat end mill series for higher rigidity in small-diameter work.',
    'XL4': '4-flute long-neck flat end mill series for reach with higher flute count.',
    'MS2R': '2-flute regular corner radius series for stronger edge condition and finish stability.',
    'XL2R': 'Long-neck corner radius series for deeper access and full solid carbide construction.',
    'SB2': '2-flute regular ball nose series for profiling and fine finishing.',
    'SB2L': 'Long shank ball nose series for added projection in specific features.',
    'SB2P': 'Hardened material ball nose series for difficult substrates and full carbide rigidity.',
    'XLB2': 'Long-neck ball nose series for deep cavity profiling and miniature 3D forms.',
    '2HA': '2-flute aluminum series optimized for non-ferrous materials.',
    '3HA': '3-flute aluminum series for balanced finish and chip evacuation.',
    '2HAL': 'Long shank aluminum series with extended reach in non-ferrous applications.',
    '3HAL': '3-flute long shank aluminum series for stable high-precision aluminum machining.',
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
        'title': 'Brand Positioning',
        'body': 'ZENOK positions TADER as a Taiwan-based precision tooling source focused on micro end mills for demanding U.S. machining applications.',
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

skus = data['skus']
for sku in skus:
    sku['type_label'] = category_meta.get(sku['category_slug'], {}).get('label', sku['category'])
    sku['coating'] = 'Contact for spec'
    sku['construction_labels'] = [
        'Carbide Tipped' if code == 'B' else 'Full Solid Carbide'
        for code in sku['construction_options']
    ]

skus_by_category = defaultdict(list)
series_to_skus = defaultdict(list)
for sku in skus:
    if sku['category_slug']:
        skus_by_category[sku['category_slug']].append(sku)
    series_to_skus[sku['series']].append(sku)

category_pages = []
for slug, meta in category_meta.items():
    items = skus_by_category.get(slug, [])
    series_used = [f for f in data['product_families'] if f['category_slug'] == slug]
    category_pages.append({
        'slug': slug,
        'label': meta['label'],
        'shortLabel': meta['shortLabel'],
        'description': meta['description'],
        'route': meta['route'],
        'seriesCodes': [f['series'] for f in series_used],
        'skuCount': len(items),
        'diameterRangeMm': [min((i['diameter_mm'] for i in items), default=None), max((i['diameter_mm'] for i in items), default=None)],
    })

home_highlights = [
    {'label': 'Product series', 'value': str(len(data['product_families']))},
    {'label': 'Active micro SKUs', 'value': str(len(skus))},
    {'label': 'Diameter range', 'value': '0.1–3.0 mm'},
    {'label': 'Taiwan MFN', 'value': '4.8%'},
]

site_model = {
    'siteMeta': {
        'brand': data['brand'],
        'company': data['company'],
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
    'productFamilies': [
        {
            **family,
            'route': category_meta.get(family['category_slug'], {}).get('route', '/products'),
            'intro': series_intro.get(family['series'], family['series']),
            'skuCount': len(series_to_skus.get(family['series'], [])),
        }
        for family in data['product_families']
    ],
    'skus': skus,
    'applications': applications,
    'technologyTopics': technology_topics,
    'aboutSections': about_sections,
    'filters': data['filters'],
    'notes': {
        'duplicateTaderSkuCount': len(skus) - len({sku['tader_sku'] + '|' + sku['model_no'] for sku in skus}),
        'skuSlugStrategy': 'Use model_no-derived slug because TADER SKU repeats across some long-neck effective-length variants.',
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
  category: string;
  category_slug: string | null;
  sub_type: string;
  series_slug: string;
  flutes: number | null;
  construction: string;
  sku_count: number;
  diameter_range_mm: [number | null, number | null];
  effective_length_range_mm: [number | null, number | null];
  route: string;
  intro: string;
  skuCount: number;
};

export type SkuRecord = {
  model_no: string;
  tader_sku: string;
  series: string;
  series_slug: string;
  category: string;
  category_slug: string | null;
  sub_type: string;
  flutes: number | null;
  diameter_mm: number | null;
  radius_mm: number | null;
  cut_length_mm: number | null;
  effective_length_mm: number | null;
  overall_length_mm: number | null;
  shank_diameter_mm: number | null;
  construction_options: string[];
  has_b: boolean;
  has_c: boolean;
  price_label: string;
  amazon_warning: string | null;
  slug: string;
  type_label: string;
  coating: string;
  construction_labels: string[];
};

export const taderData = """ + json.dumps(site_model, ensure_ascii=False, indent=2) + """ as const;
"""

target.write_text(content)
print(target)
