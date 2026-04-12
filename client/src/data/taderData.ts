/*
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

export const FORM_URL = "https://toolinginquiryform.netlify.app/";

export const taderData = {
  "siteMeta": {
    "brand": "ZENOK",
    "company": "ZENOK",
    "heroTitle": "Taiwan Micro Cutting Tool Cost-Down Partner",
    "heroSubtitle": "Submit your tooling specs and target price. We evaluate feasibility and respond with a cost-down proposal within 2 business days.",
    "heroImage": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-hero-precision-tooling-cexGHiUD3iLL8zn8jgmMrm.webp",
    "blueprintImage": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-technology-blueprint-GeB22kQRd5mwYcCuzMguar.webp",
    "primaryCta": {
      "label": "Submit Cost-Down Request",
      "href": FORM_URL
    },
    "secondaryCta": {
      "label": "Browse Products",
      "href": "/products"
    },
    "inquiryFormUrl": FORM_URL,
    "heroHighlights": [
      {
        "label": "ZENOK lines",
        "value": "14"
      },
      {
        "label": "Active micro SKUs",
        "value": "156"
      },
      {
        "label": "Diameter range",
        "value": "0.1–3.0 mm"
      },
      {
        "label": "Taiwan MFN",
        "value": "4.8%"
      }
    ],
    "tariffBadge": "Taiwan MFN 4.8% duty advantage"
  },
  "navigation": [
    {
      "label": "Products",
      "href": "/products"
    },
    {
      "label": "Applications",
      "href": "/applications"
    },
    {
      "label": "Technology",
      "href": "/technology"
    },
    {
      "label": "About",
      "href": "/about"
    }
  ],
  "categoryPages": [
    {
      "slug": "flat-end-mills",
      "label": "Flat End Mills",
      "shortLabel": "Flat",
      "description": "Regular and long-neck micro flat end mills for general high-precision milling.",
      "route": "/flat-end-mills",
      "seriesCodes": [
        "ZF2",
        "ZF2-LN",
        "ZF4",
        "ZF4-LN"
      ],
      "skuCount": 97,
      "diameterRangeMm": [
        0.1,
        3.0
      ]
    },
    {
      "slug": "ball-nose-end-mills",
      "label": "Ball Nose End Mills",
      "shortLabel": "Ball Nose",
      "description": "Ball nose micro tools for contouring, finishing, and 3D micro features.",
      "route": "/ball-nose-end-mills",
      "seriesCodes": [
        "ZB2",
        "ZB2-LS",
        "ZB2-LN"
      ],
      "skuCount": 37,
      "diameterRangeMm": [
        0.2,
        3.0
      ]
    },
    {
      "slug": "corner-radius-end-mills",
      "label": "Corner Radius End Mills",
      "shortLabel": "Corner Radius",
      "description": "Corner radius geometries for longer life and improved edge strength.",
      "route": "/corner-radius-end-mills",
      "seriesCodes": [
        "ZR2"
      ],
      "skuCount": 6,
      "diameterRangeMm": [
        1.0,
        3.0
      ]
    },
    {
      "slug": "aluminum-end-mills",
      "label": "Aluminum End Mills",
      "shortLabel": "Aluminum",
      "description": "Dedicated aluminum cutting product lines optimized for chip evacuation and finish.",
      "route": "/aluminum-end-mills",
      "seriesCodes": [
        "ZA2",
        "ZA3",
        "ZA2-LS",
        "ZA3-LS"
      ],
      "skuCount": 16,
      "diameterRangeMm": [
        1.0,
        3.0
      ]
    },
    {
      "slug": "carbide-rods",
      "label": "Carbide Rods",
      "shortLabel": "Carbide Rods",
      "description": "Disciplined micro-tool production supporting cost control and supply consistency across standard programs.",
      "route": "/carbide-rods",
      "seriesCodes": [],
      "skuCount": 0,
      "diameterRangeMm": [
        null,
        null
      ]
    }
  ],
  "productFamilies": [
    {
      "series": "ZF2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "series_slug": "zf2",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 14,
      "diameter_range_mm": [
        0.1,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "route": "/flat-end-mills",
      "intro": "2-flute regular flat end mill product line for core micro-machining programs and everyday high-precision features.",
      "skuCount": 14
    },
    {
      "series": "ZF2-LN",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "series_slug": "zf2-ln",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 61,
      "diameter_range_mm": [
        0.2,
        2.5
      ],
      "effective_length_range_mm": [
        1.0,
        25.0
      ],
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "route": "/flat-end-mills",
      "intro": "2-flute long neck flat end mill product line for deep micro features where reach and clearance are critical.",
      "skuCount": 61
    },
    {
      "series": "ZF4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "series_slug": "zf4",
      "flutes": 4,
      "construction": "B/C",
      "sku_count": 5,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "MS4",
      "line_name": "Flat End Mill · 4-Flute · Regular",
      "route": "/flat-end-mills",
      "intro": "4-flute regular flat end mill product line for core micro-machining programs and everyday high-precision features.",
      "skuCount": 5
    },
    {
      "series": "ZF4-LN",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "series_slug": "zf4-ln",
      "flutes": 4,
      "construction": "B/C",
      "sku_count": 17,
      "diameter_range_mm": [
        1.0,
        2.5
      ],
      "effective_length_range_mm": [
        6.0,
        20.0
      ],
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "route": "/flat-end-mills",
      "intro": "4-flute long neck flat end mill product line for deep micro features where reach and clearance are critical.",
      "skuCount": 17
    },
    {
      "series": "ZR2",
      "category": "Corner Radius End Mill",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "series_slug": "zr2",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 6,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "MS2R",
      "line_name": "Corner Radius End Mill · 2-Flute · Regular",
      "route": "/corner-radius-end-mills",
      "intro": "2-flute regular corner radius end mill product line for core micro-machining programs and everyday high-precision features.",
      "skuCount": 6
    },
    {
      "series": "ZB2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "series_slug": "zb2",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 12,
      "diameter_range_mm": [
        0.2,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "route": "/ball-nose-end-mills",
      "intro": "2-flute regular ball nose end mill product line for core micro-machining programs and everyday high-precision features.",
      "skuCount": 12
    },
    {
      "series": "ZB2-LS",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Shank",
      "series_slug": "zb2-ls",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 1,
      "diameter_range_mm": [
        2.0,
        2.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "SB2L",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Shank",
      "route": "/ball-nose-end-mills",
      "intro": "2-flute long shank ball nose end mill product line for extended projection setups that need added reach from the holder.",
      "skuCount": 1
    },
    {
      "series": "ZB2-LN",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "series_slug": "zb2-ln",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 24,
      "diameter_range_mm": [
        0.4,
        2.0
      ],
      "effective_length_range_mm": [
        2.0,
        20.0
      ],
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "route": "/ball-nose-end-mills",
      "intro": "2-flute long neck ball nose end mill product line for deep micro features where reach and clearance are critical.",
      "skuCount": 24
    },
    {
      "series": "ZA2",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "series_slug": "za2",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 4,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "2HA",
      "line_name": "Aluminum End Mill · 2-Flute · Regular",
      "route": "/aluminum-end-mills",
      "intro": "2-flute regular aluminum end mill product line for core micro-machining programs and everyday high-precision features.",
      "skuCount": 4
    },
    {
      "series": "ZA3",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "series_slug": "za3",
      "flutes": 3,
      "construction": "B/C",
      "sku_count": 4,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "3HA",
      "line_name": "Aluminum End Mill · 3-Flute · Regular",
      "route": "/aluminum-end-mills",
      "intro": "3-flute regular aluminum end mill product line for core micro-machining programs and everyday high-precision features.",
      "skuCount": 4
    },
    {
      "series": "ZA2-LS",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "series_slug": "za2-ls",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 4,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "2HAL",
      "line_name": "Aluminum End Mill · 2-Flute · Long Shank",
      "route": "/aluminum-end-mills",
      "intro": "2-flute long shank aluminum end mill product line for extended projection setups that need added reach from the holder.",
      "skuCount": 4
    },
    {
      "series": "ZA3-LS",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "series_slug": "za3-ls",
      "flutes": 3,
      "construction": "B/C",
      "sku_count": 4,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "legacy_series": "3HAL",
      "line_name": "Aluminum End Mill · 3-Flute · Long Shank",
      "route": "/aluminum-end-mills",
      "intro": "3-flute long shank aluminum end mill product line for extended projection setups that need added reach from the holder.",
      "skuCount": 4
    }
  ],
  "skus": [
    {
      "model_no": "MS2D0010S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.1,
      "radius_mm": null,
      "cut_length_mm": 0.2,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0010s04",
      "catalog_sku": "ZF2-D0010",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0020S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.2,
      "radius_mm": null,
      "cut_length_mm": 0.4,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0020s04",
      "catalog_sku": "ZF2-D0020",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0030S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.3,
      "radius_mm": null,
      "cut_length_mm": 0.6,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0030s04",
      "catalog_sku": "ZF2-D0030",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0040S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": null,
      "cut_length_mm": 0.8,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0040s04",
      "catalog_sku": "ZF2-D0040",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0050S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": null,
      "cut_length_mm": 1.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0050s04",
      "catalog_sku": "ZF2-D0050",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0060S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": null,
      "cut_length_mm": 1.2,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0060s04",
      "catalog_sku": "ZF2-D0060",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0070S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.7,
      "radius_mm": null,
      "cut_length_mm": 1.4,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0070s04",
      "catalog_sku": "ZF2-D0070",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0080S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": null,
      "cut_length_mm": 1.6,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0080s04",
      "catalog_sku": "ZF2-D0080",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0090S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.9,
      "radius_mm": null,
      "cut_length_mm": 2.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0090s04",
      "catalog_sku": "ZF2-D0090",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0100S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 2.5,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0100s04",
      "catalog_sku": "ZF2-D0100",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0150S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 4.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0150s04",
      "catalog_sku": "ZF2-D0150",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0200S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0200s04",
      "catalog_sku": "ZF2-D0200",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0250S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 8.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0250s04",
      "catalog_sku": "ZF2-D0250",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0300S04",
      "series": "ZF2",
      "series_slug": "zf2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 8.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2d0300s04",
      "catalog_sku": "ZF2-D0300",
      "legacy_series": "MS2",
      "line_name": "Flat End Mill · 2-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0020E010",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.2,
      "radius_mm": null,
      "cut_length_mm": 0.3,
      "effective_length_mm": 1.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0020e010",
      "catalog_sku": "ZF2-D0020-EL0100-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0020E015",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.2,
      "radius_mm": null,
      "cut_length_mm": 0.3,
      "effective_length_mm": 1.5,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0020e015",
      "catalog_sku": "ZF2-D0020-EL0150-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0020E020",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.2,
      "radius_mm": null,
      "cut_length_mm": 0.3,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0020e020",
      "catalog_sku": "ZF2-D0020-EL0200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E010",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.3,
      "radius_mm": null,
      "cut_length_mm": 0.4,
      "effective_length_mm": 1.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0030e010",
      "catalog_sku": "ZF2-D0030-EL0100-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E020",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.3,
      "radius_mm": null,
      "cut_length_mm": 0.4,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0030e020",
      "catalog_sku": "ZF2-D0030-EL0200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E030",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.3,
      "radius_mm": null,
      "cut_length_mm": 0.4,
      "effective_length_mm": 3.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0030e030",
      "catalog_sku": "ZF2-D0030-EL0300-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.3,
      "radius_mm": null,
      "cut_length_mm": 0.4,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0030e040",
      "catalog_sku": "ZF2-D0030-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E010",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": null,
      "cut_length_mm": 0.6,
      "effective_length_mm": 1.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0040e010",
      "catalog_sku": "ZF2-D0040-EL0100-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E020",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": null,
      "cut_length_mm": 0.6,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0040e020",
      "catalog_sku": "ZF2-D0040-EL0200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E030",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": null,
      "cut_length_mm": 0.6,
      "effective_length_mm": 3.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0040e030",
      "catalog_sku": "ZF2-D0040-EL0300-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": null,
      "cut_length_mm": 0.6,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0040e040",
      "catalog_sku": "ZF2-D0040-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E050",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": null,
      "cut_length_mm": 0.6,
      "effective_length_mm": 5.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0040e050",
      "catalog_sku": "ZF2-D0040-EL0500-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E020",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": null,
      "cut_length_mm": 0.7,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0050e020",
      "catalog_sku": "ZF2-D0050-EL0200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E030",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": null,
      "cut_length_mm": 0.7,
      "effective_length_mm": 3.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0050e030",
      "catalog_sku": "ZF2-D0050-EL0300-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": null,
      "cut_length_mm": 0.7,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0050e040",
      "catalog_sku": "ZF2-D0050-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E060",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": null,
      "cut_length_mm": 0.7,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0050e060",
      "catalog_sku": "ZF2-D0050-EL0600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E080",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": null,
      "cut_length_mm": 0.7,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0050e080",
      "catalog_sku": "ZF2-D0050-EL0800-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": null,
      "cut_length_mm": 0.7,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0050e100",
      "catalog_sku": "ZF2-D0050-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E020",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": null,
      "cut_length_mm": 0.9,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0060e020",
      "catalog_sku": "ZF2-D0060-EL0200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E030",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": null,
      "cut_length_mm": 0.9,
      "effective_length_mm": 3.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0060e030",
      "catalog_sku": "ZF2-D0060-EL0300-LN-S0400",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": null,
      "cut_length_mm": 0.9,
      "effective_length_mm": 3.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0060e040",
      "catalog_sku": "ZF2-D0060-EL0300-LN-S0400-XL2D0060E040",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E060",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": null,
      "cut_length_mm": 0.9,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0060e060",
      "catalog_sku": "ZF2-D0060-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E080",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": null,
      "cut_length_mm": 0.9,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0060e080",
      "catalog_sku": "ZF2-D0060-EL0800-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": null,
      "cut_length_mm": 0.9,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0060e100",
      "catalog_sku": "ZF2-D0060-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E020",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.7,
      "radius_mm": null,
      "cut_length_mm": 1.0,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0070e020",
      "catalog_sku": "ZF2-D0070-EL0200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.7,
      "radius_mm": null,
      "cut_length_mm": 1.0,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0070e040",
      "catalog_sku": "ZF2-D0070-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E060",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.7,
      "radius_mm": null,
      "cut_length_mm": 1.0,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0070e060",
      "catalog_sku": "ZF2-D0070-EL0600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E080",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.7,
      "radius_mm": null,
      "cut_length_mm": 1.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0070e080",
      "catalog_sku": "ZF2-D0070-EL0800-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.7,
      "radius_mm": null,
      "cut_length_mm": 1.0,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0070e100",
      "catalog_sku": "ZF2-D0070-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E020",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": null,
      "cut_length_mm": 1.2,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0080e020",
      "catalog_sku": "ZF2-D0080-EL0200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": null,
      "cut_length_mm": 1.2,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0080e040",
      "catalog_sku": "ZF2-D0080-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E060",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": null,
      "cut_length_mm": 1.2,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0080e060",
      "catalog_sku": "ZF2-D0080-EL0600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E080",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": null,
      "cut_length_mm": 1.2,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0080e080",
      "catalog_sku": "ZF2-D0080-EL0800-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": null,
      "cut_length_mm": 1.2,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0080e100",
      "catalog_sku": "ZF2-D0080-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E030",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 3.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e030",
      "catalog_sku": "ZF2-D0100-EL0300-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e040",
      "catalog_sku": "ZF2-D0100-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E060",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e060",
      "catalog_sku": "ZF2-D0100-EL0600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E080",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e080",
      "catalog_sku": "ZF2-D0100-EL0800-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e100",
      "catalog_sku": "ZF2-D0100-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E120",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e120",
      "catalog_sku": "ZF2-D0100-EL1200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E140",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 14.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e140",
      "catalog_sku": "ZF2-D0100-EL1400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E200",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0100e200",
      "catalog_sku": "ZF2-D0100-EL2000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E040",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0150e040",
      "catalog_sku": "ZF2-D0150-EL0400-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E060",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0150e060",
      "catalog_sku": "ZF2-D0150-EL0600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E080",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0150e080",
      "catalog_sku": "ZF2-D0150-EL0800-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0150e100",
      "catalog_sku": "ZF2-D0150-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E120",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0150e120",
      "catalog_sku": "ZF2-D0150-EL1200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E160",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0150e160",
      "catalog_sku": "ZF2-D0150-EL1600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E200",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0150e200",
      "catalog_sku": "ZF2-D0150-EL2000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E060",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0200e060",
      "catalog_sku": "ZF2-D0200-EL0600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E080",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0200e080",
      "catalog_sku": "ZF2-D0200-EL0800-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0200e100",
      "catalog_sku": "ZF2-D0200-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E120",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0200e120",
      "catalog_sku": "ZF2-D0200-EL1200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E160",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0200e160",
      "catalog_sku": "ZF2-D0200-EL1600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E200",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0200e200",
      "catalog_sku": "ZF2-D0200-EL2000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E250",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 25.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0200e250",
      "catalog_sku": "ZF2-D0200-EL2500-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E100",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0250e100",
      "catalog_sku": "ZF2-D0250-EL1000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E120",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0250e120",
      "catalog_sku": "ZF2-D0250-EL1200-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E160",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0250e160",
      "catalog_sku": "ZF2-D0250-EL1600-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E200",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0250e200",
      "catalog_sku": "ZF2-D0250-EL2000-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E250",
      "series": "ZF2-LN",
      "series_slug": "zf2-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 25.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl2d0250e250",
      "catalog_sku": "ZF2-D0250-EL2500-LN",
      "legacy_series": "XL2",
      "line_name": "Flat End Mill · 2-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0100S04",
      "series": "ZF4",
      "series_slug": "zf4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 4,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 2.5,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms4d0100s04",
      "catalog_sku": "ZF4-D0100",
      "legacy_series": "MS4",
      "line_name": "Flat End Mill · 4-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0150S04",
      "series": "ZF4",
      "series_slug": "zf4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 4,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 4.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms4d0150s04",
      "catalog_sku": "ZF4-D0150",
      "legacy_series": "MS4",
      "line_name": "Flat End Mill · 4-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0200S04",
      "series": "ZF4",
      "series_slug": "zf4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 4,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms4d0200s04",
      "catalog_sku": "ZF4-D0200",
      "legacy_series": "MS4",
      "line_name": "Flat End Mill · 4-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0250S04",
      "series": "ZF4",
      "series_slug": "zf4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 4,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 8.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms4d0250s04",
      "catalog_sku": "ZF4-D0250",
      "legacy_series": "MS4",
      "line_name": "Flat End Mill · 4-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0300S04",
      "series": "ZF4",
      "series_slug": "zf4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "flutes": 4,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 8.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms4d0300s04",
      "catalog_sku": "ZF4-D0300",
      "legacy_series": "MS4",
      "line_name": "Flat End Mill · 4-Flute · Regular",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E060",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0100e060",
      "catalog_sku": "ZF4-D0100-EL0600-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E080",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0100e080",
      "catalog_sku": "ZF4-D0100-EL0800-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E100",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0100e100",
      "catalog_sku": "ZF4-D0100-EL1000-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E120",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 1.5,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0100e120",
      "catalog_sku": "ZF4-D0100-EL1200-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E080",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0150e080",
      "catalog_sku": "ZF4-D0150-EL0800-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E100",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0150e100",
      "catalog_sku": "ZF4-D0150-EL1000-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E120",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0150e120",
      "catalog_sku": "ZF4-D0150-EL1200-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E160",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 2.3,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0150e160",
      "catalog_sku": "ZF4-D0150-EL1600-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E080",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0200e080",
      "catalog_sku": "ZF4-D0200-EL0800-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E100",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0200e100",
      "catalog_sku": "ZF4-D0200-EL1000-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E120",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0200e120",
      "catalog_sku": "ZF4-D0200-EL1200-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E160",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0200e160",
      "catalog_sku": "ZF4-D0200-EL1600-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E200",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0200e200",
      "catalog_sku": "ZF4-D0200-EL2000-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E100",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0250e100",
      "catalog_sku": "ZF4-D0250-EL1000-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E120",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0250e120",
      "catalog_sku": "ZF4-D0250-EL1200-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E160",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0250e160",
      "catalog_sku": "ZF4-D0250-EL1600-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E200",
      "series": "ZF4-LN",
      "series_slug": "zf4-ln",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 2.5,
      "radius_mm": null,
      "cut_length_mm": 3.7,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xl4d0250e200",
      "catalog_sku": "ZF4-D0250-EL2000-LN",
      "legacy_series": "XL4",
      "line_name": "Flat End Mill · 4-Flute · Long Neck",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0100R010",
      "series": "ZR2",
      "series_slug": "zr2",
      "category": "Corner Radius End Mill",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 2.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2rd0100r010",
      "catalog_sku": "ZR2-D0100-R0010",
      "legacy_series": "MS2R",
      "line_name": "Corner Radius End Mill · 2-Flute · Regular",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0100R020",
      "series": "ZR2",
      "series_slug": "zr2",
      "category": "Corner Radius End Mill",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2rd0100r020",
      "catalog_sku": "ZR2-D0100-R0020",
      "legacy_series": "MS2R",
      "line_name": "Corner Radius End Mill · 2-Flute · Regular",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0200R020",
      "series": "ZR2",
      "series_slug": "zr2",
      "category": "Corner Radius End Mill",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 4.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2rd0200r020",
      "catalog_sku": "ZR2-D0200-R0020",
      "legacy_series": "MS2R",
      "line_name": "Corner Radius End Mill · 2-Flute · Regular",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0200R050",
      "series": "ZR2",
      "series_slug": "zr2",
      "category": "Corner Radius End Mill",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.5,
      "cut_length_mm": 4.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2rd0200r050",
      "catalog_sku": "ZR2-D0200-R0050",
      "legacy_series": "MS2R",
      "line_name": "Corner Radius End Mill · 2-Flute · Regular",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0300R020",
      "series": "ZR2",
      "series_slug": "zr2",
      "category": "Corner Radius End Mill",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2rd0300r020",
      "catalog_sku": "ZR2-D0300-R0020",
      "legacy_series": "MS2R",
      "line_name": "Corner Radius End Mill · 2-Flute · Regular",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0300R050",
      "series": "ZR2",
      "series_slug": "zr2",
      "category": "Corner Radius End Mill",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.5,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "ms2rd0300r050",
      "catalog_sku": "ZR2-D0300-R0050",
      "legacy_series": "MS2R",
      "line_name": "Corner Radius End Mill · 2-Flute · Regular",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0010S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.2,
      "radius_mm": 0.1,
      "cut_length_mm": 0.2,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0010s04",
      "catalog_sku": "ZB2-D0020",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0015S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.3,
      "radius_mm": 0.15,
      "cut_length_mm": 0.5,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0015s04",
      "catalog_sku": "ZB2-D0030",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0020S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": 0.2,
      "cut_length_mm": 0.6,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0020s04",
      "catalog_sku": "ZB2-D0040",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0025S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": 0.25,
      "cut_length_mm": 0.8,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0025s04",
      "catalog_sku": "ZB2-D0050",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0030S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": 0.3,
      "cut_length_mm": 0.9,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0030s04",
      "catalog_sku": "ZB2-D0060",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0040S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": 0.4,
      "cut_length_mm": 1.2,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0040s04",
      "catalog_sku": "ZB2-D0080",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0050S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.5,
      "cut_length_mm": 1.5,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0050s04",
      "catalog_sku": "ZB2-D0100",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0075S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.75,
      "cut_length_mm": 2.3,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0075s04",
      "catalog_sku": "ZB2-D0150",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0100S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 3.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0100s04",
      "catalog_sku": "ZB2-D0200",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0125S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": 1.25,
      "cut_length_mm": 3.8,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0125s04",
      "catalog_sku": "ZB2-D0250",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0150S03",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 1.5,
      "cut_length_mm": 4.5,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 3.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0150s03",
      "catalog_sku": "ZB2-D0300-S0300",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0150S04",
      "series": "ZB2",
      "series_slug": "zb2",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 1.5,
      "cut_length_mm": 4.5,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2r0150s04",
      "catalog_sku": "ZB2-D0300-S0400",
      "legacy_series": "SB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Regular",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2LR0100L075",
      "series": "ZB2-LS",
      "series_slug": "zb2-ls",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Shank",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 3.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "sb2lr0100l075",
      "catalog_sku": "ZB2-D0200-OL7500-LS",
      "legacy_series": "SB2L",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Shank",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0020E020",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": 0.2,
      "cut_length_mm": 0.7,
      "effective_length_mm": 2.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0020e020",
      "catalog_sku": "ZB2-D0040-EL0200-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0020E040",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": 0.2,
      "cut_length_mm": 0.7,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0020e040",
      "catalog_sku": "ZB2-D0040-EL0400-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0025E040",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": 0.25,
      "cut_length_mm": 0.8,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0025e040",
      "catalog_sku": "ZB2-D0050-EL0400-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0025E060",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": 0.25,
      "cut_length_mm": 0.8,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0025e060",
      "catalog_sku": "ZB2-D0050-EL0600-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0030E040",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": 0.3,
      "cut_length_mm": 0.9,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0030e040",
      "catalog_sku": "ZB2-D0060-EL0400-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0030E060",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": 0.3,
      "cut_length_mm": 0.9,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0030e060",
      "catalog_sku": "ZB2-D0060-EL0600-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0030E080",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": 0.3,
      "cut_length_mm": 0.9,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0030e080",
      "catalog_sku": "ZB2-D0060-EL0800-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0040E040",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": 0.4,
      "cut_length_mm": 1.2,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0040e040",
      "catalog_sku": "ZB2-D0080-EL0400-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0040E060",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": 0.4,
      "cut_length_mm": 1.2,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0040e060",
      "catalog_sku": "ZB2-D0080-EL0600-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0040E080",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": 0.4,
      "cut_length_mm": 1.2,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0040e080",
      "catalog_sku": "ZB2-D0080-EL0800-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E040",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.5,
      "cut_length_mm": 1.5,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0050e040",
      "catalog_sku": "ZB2-D0100-EL0400-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E060",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.5,
      "cut_length_mm": 1.5,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0050e060",
      "catalog_sku": "ZB2-D0100-EL0600-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E080",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.5,
      "cut_length_mm": 1.5,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0050e080",
      "catalog_sku": "ZB2-D0100-EL0800-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E100",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.5,
      "cut_length_mm": 1.5,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0050e100",
      "catalog_sku": "ZB2-D0100-EL1000-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E120",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.5,
      "cut_length_mm": 1.5,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0050e120",
      "catalog_sku": "ZB2-D0100-EL1200-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E080",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.75,
      "cut_length_mm": 1.5,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0075e080",
      "catalog_sku": "ZB2-D0150-EL0800-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E100",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.75,
      "cut_length_mm": 1.5,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0075e100",
      "catalog_sku": "ZB2-D0150-EL1000-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E120",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.75,
      "cut_length_mm": 1.5,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0075e120",
      "catalog_sku": "ZB2-D0150-EL1200-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E160",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.75,
      "cut_length_mm": 1.5,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0075e160",
      "catalog_sku": "ZB2-D0150-EL1600-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E080",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 2.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0100e080",
      "catalog_sku": "ZB2-D0200-EL0800-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E100",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 2.0,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0100e100",
      "catalog_sku": "ZB2-D0200-EL1000-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E120",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 2.0,
      "effective_length_mm": 12.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0100e120",
      "catalog_sku": "ZB2-D0200-EL1200-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E160",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 2.0,
      "effective_length_mm": 16.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0100e160",
      "catalog_sku": "ZB2-D0200-EL1600-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E200",
      "series": "ZB2-LN",
      "series_slug": "zb2-ln",
      "category": "Ball Nose End Mill",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 2.0,
      "effective_length_mm": 20.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "xlb2r0100e200",
      "catalog_sku": "ZB2-D0200-EL2000-LN",
      "legacy_series": "XLB2",
      "line_name": "Ball Nose End Mill · 2-Flute · Long Neck",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0100S04/6",
      "series": "ZA2",
      "series_slug": "za2",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2had0100s04/6",
      "catalog_sku": "ZA2-D0100",
      "legacy_series": "2HA",
      "line_name": "Aluminum End Mill · 2-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0150S04/6",
      "series": "ZA2",
      "series_slug": "za2",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2had0150s04/6",
      "catalog_sku": "ZA2-D0150",
      "legacy_series": "2HA",
      "line_name": "Aluminum End Mill · 2-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0200S04/6",
      "series": "ZA2",
      "series_slug": "za2",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2had0200s04/6",
      "catalog_sku": "ZA2-D0200",
      "legacy_series": "2HA",
      "line_name": "Aluminum End Mill · 2-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0300S04/6",
      "series": "ZA2",
      "series_slug": "za2",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 9.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2had0300s04/6",
      "catalog_sku": "ZA2-D0300",
      "legacy_series": "2HA",
      "line_name": "Aluminum End Mill · 2-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0100S04",
      "series": "ZA3",
      "series_slug": "za3",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 3,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3had0100s04",
      "catalog_sku": "ZA3-D0100",
      "legacy_series": "3HA",
      "line_name": "Aluminum End Mill · 3-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0150S04",
      "series": "ZA3",
      "series_slug": "za3",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 3,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 4.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3had0150s04",
      "catalog_sku": "ZA3-D0150",
      "legacy_series": "3HA",
      "line_name": "Aluminum End Mill · 3-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0200S04",
      "series": "ZA3",
      "series_slug": "za3",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 3,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3had0200s04",
      "catalog_sku": "ZA3-D0200",
      "legacy_series": "3HA",
      "line_name": "Aluminum End Mill · 3-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0300S04",
      "series": "ZA3",
      "series_slug": "za3",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "flutes": 3,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 9.0,
      "effective_length_mm": null,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3had0300s04",
      "catalog_sku": "ZA3-D0300",
      "legacy_series": "3HA",
      "line_name": "Aluminum End Mill · 3-Flute · Regular",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0100L075",
      "series": "ZA2-LS",
      "series_slug": "za2-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2hald0100l075",
      "catalog_sku": "ZA2-D0100-OL7500-LS",
      "legacy_series": "2HAL",
      "line_name": "Aluminum End Mill · 2-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0150L075",
      "series": "ZA2-LS",
      "series_slug": "za2-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 4.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2hald0150l075",
      "catalog_sku": "ZA2-D0150-OL7500-LS",
      "legacy_series": "2HAL",
      "line_name": "Aluminum End Mill · 2-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0200L075",
      "series": "ZA2-LS",
      "series_slug": "za2-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2hald0200l075",
      "catalog_sku": "ZA2-D0200-OL7500-LS",
      "legacy_series": "2HAL",
      "line_name": "Aluminum End Mill · 2-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0300L075",
      "series": "ZA2-LS",
      "series_slug": "za2-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 12.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "2hald0300l075",
      "catalog_sku": "ZA2-D0300-OL7500-LS",
      "legacy_series": "2HAL",
      "line_name": "Aluminum End Mill · 2-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0100L075",
      "series": "ZA3-LS",
      "series_slug": "za3-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 3,
      "diameter_mm": 1.0,
      "radius_mm": null,
      "cut_length_mm": 3.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3hald0100l075",
      "catalog_sku": "ZA3-D0100-OL7500-LS",
      "legacy_series": "3HAL",
      "line_name": "Aluminum End Mill · 3-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0150L075",
      "series": "ZA3-LS",
      "series_slug": "za3-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 3,
      "diameter_mm": 1.5,
      "radius_mm": null,
      "cut_length_mm": 4.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3hald0150l075",
      "catalog_sku": "ZA3-D0150-OL7500-LS",
      "legacy_series": "3HAL",
      "line_name": "Aluminum End Mill · 3-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0200L075",
      "series": "ZA3-LS",
      "series_slug": "za3-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 3,
      "diameter_mm": 2.0,
      "radius_mm": null,
      "cut_length_mm": 6.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3hald0200l075",
      "catalog_sku": "ZA3-D0200-OL7500-LS",
      "legacy_series": "3HAL",
      "line_name": "Aluminum End Mill · 3-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0300L075",
      "series": "ZA3-LS",
      "series_slug": "za3-ls",
      "category": "Aluminum End Mill",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "flutes": 3,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 12.0,
      "effective_length_mm": null,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 4.0,
      "construction_options": [
        "B",
        "C"
      ],
      "has_b": true,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": "Not compatible with shrink-fit toolholders",
      "slug": "3hald0300l075",
      "catalog_sku": "ZA3-D0300-OL7500-LS",
      "legacy_series": "3HAL",
      "line_name": "Aluminum End Mill · 3-Flute · Long Shank",
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    }
  ],
  "applications": [
    {
      "slug": "medical",
      "title": "Medical Machining",
      "eyebrow": "Application / Medical",
      "description": "Medical programs reward suppliers who can protect miniature-feature quality while lowering tool cost across repeat production.",
      "focus": [
        "Titanium and stainless steel workflows (Ti-6Al-4V, 316L)",
        "Tolerances down to ±0.005 mm on miniature features",
        "Stable surface finish Ra requirements for implant-grade parts",
        "High consumption volume = high cost-down leverage"
      ],
      "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-medical-machining-89pKNW65wEEfmggUukooMH.webp"
    },
    {
      "slug": "aerospace",
      "title": "Aerospace Machining",
      "eyebrow": "Application / Aerospace",
      "description": "Aerospace programs need lower landed cost without compromising qualified process windows on high-value materials.",
      "focus": [
        "High-value materials: Inconel, titanium alloys, hardened steels",
        "Small features on structural and fluid-path components",
        "Repeatable process windows to protect part qualification status",
        "Per-tool cost reduction compounds across long production runs"
      ],
      "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-aerospace-machining-N5egC8RrQrLpFZVuhcC8Dg.webp"
    },
    {
      "slug": "electronics",
      "title": "Electronics Manufacturing",
      "eyebrow": "Application / Electronics",
      "description": "Electronics tooling programs gain the most when micro-diameter consumption is high and each cost-down win repeats across many cycles.",
      "focus": [
        "Micro cavities, connector molds, and housing details",
        "Feature replication accuracy in high-cycle tooling programs",
        "Fine geometry at 0.1–1.0 mm diameter range",
        "Volume consumption makes cost-down proposals most impactful"
      ],
      "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-electronics-machining-j7uSMhPF9xWBScJSQ2djkx.webp"
    }
  ],
  "technologyTopics": [
    {
      "id": "construction-b-vs-c",
      "title": "Construction B vs C",
      "summary": "B (Composite) uses a carbide-tipped configuration on a steel shank. It is not compatible with shrink-fit toolholders and is limited to shank diameters of 6 mm and below. C (Solid Carbide) is full one-piece carbide — SS308 grade — with no shank restriction and broad holder compatibility including shrink-fit. For most cost-down proposals, B construction offers the best price-to-performance ratio within its compatible use range.",
      "points": [
        "B construction: shank ≤ 6 mm, not shrink-fit compatible",
        "C construction: shrink-fit compatible, full-body rigidity",
        "Cost-down proposals will specify which construction suits your holder setup and tolerance requirements"
      ]
    },
    {
      "id": "taiwan-duty",
      "title": "Taiwan 4.8% MFN Duty Advantage",
      "summary": "Taiwan-origin tooling can offer a tariff position advantage versus higher-duty sourcing routes, helping landed cost discussions with U.S. buyers. This duty advantage is factored into every cost-down proposal ZENOK submits — giving U.S. buyers a structurally lower landed cost versus China-origin alternatives.",
      "points": [
        "Home page highlights Taiwan MFN 4.8% as a commercial differentiator.",
        "Technology page frames duty advantage in procurement language, not consumer marketing language.",
        "Messaging is positioned as a sourcing advantage alongside precision and disciplined process control."
      ]
    },
    {
      "id": "coating-options",
      "title": "Coating Options and Application Fit",
      "summary": "Coating selection affects tool life, surface finish, and total cost-per-part. ZENOK offers four standard coatings matched to workpiece material.",
      "points": [
        "TiAlN — general purpose; stainless, alloy steel, titanium",
        "AlTiN — high-heat applications; Inconel, hardened steel",
        "TiN — cost-effective; aluminum, brass, soft materials",
        "Uncoated — micro features below 0.5 mm where coating thickness affects dimensional accuracy"
      ]
    },
    {
      "id": "carbide-comparison",
      "title": "Carbide Tipped vs Solid Carbide",
      "summary": "The site explains trade-offs between tipped and full solid carbide construction so buyers can match holder strategy, rigidity, and cost to application needs.",
      "points": [
        "Tipped construction can lower cost in selected programs.",
        "Full solid carbide supports broader rigidity and holder options.",
        "Selection depends on application, setup, and sourcing priorities."
      ]
    },
    {
      "id": "carbide-rod-supply-chain",
      "title": "Carbide Rod to Finished Tool — One Supply Chain",
      "summary": "ZENOK sources and supplies tungsten carbide rod stock directly. This vertical integration means our finished tool cost structure starts below where most competitors begin purchasing. The result: cost-down proposals that are commercially realistic, not just theoretically possible.",
      "points": [
        "Bar stock supply to other manufacturers is part of our business",
        "Competitors purchasing bar stock from the same supply chain cannot structurally undercut ZENOK's finished tool pricing",
        "Every proposal reflects actual production economics, not discounted list prices"
      ]
    }
  ],
  "aboutSections": [
    {
      "title": "Cost-Down Solution Partner",
      "body": "ZENOK is positioned first as a cost-down solution partner for U.S. buyers who need micro-tooling proposals tied to target price, feasibility, and delivery speed."
    },
    {
      "title": "Integrated Cost Basis",
      "body": "Direct carbide-rod sourcing and finished-tool production create a commercial structure that supports realistic cost-down proposals rather than promotional pricing."
    },
    {
      "title": "Manufacturing Capability",
      "body": "The active range focuses on 0.1–3.0 mm micro end mills with application-fit constructions for medical, aerospace, and electronics programs where tooling consumption can justify a cost-down review."
    }
  ],
  "filters": {
    "categories": [
      "flat-end-mills",
      "ball-nose-end-mills",
      "corner-radius-end-mills",
      "aluminum-end-mills"
    ],
    "flutes": [
      2,
      3,
      4
    ],
    "sub_types": [
      "Long Neck",
      "Long Shank",
      "Regular"
    ],
    "construction": [
      "B",
      "C"
    ],
    "diameter_min_mm": 0.1,
    "diameter_max_mm": 3.0,
    "radius_min_mm": 0.1,
    "radius_max_mm": 1.5,
    "effective_length_min_mm": 1.0,
    "effective_length_max_mm": 25.0,
    "overall_length_values_mm": [
      50.0,
      60.0,
      75.0
    ],
    "shank_values_mm": [
      3.0,
      4.0
    ]
  },
  "notes": {
    "duplicateDisplaySkuCount": 0,
    "skuSlugStrategy": "Use model_no-derived slug because display SKU is human-readable while route stability stays anchored to model numbers.",
    "carbideRodsDatasetAvailable": false,
    "rule_refresh": {
      "diameter_limit_mm": 3.0,
      "shank_limit_rule": "Remove all standard SKUs with shank diameter >= 6.0 mm; 1/8 inch is quote-only custom MOQ.",
      "source_rows": 209,
      "active_rows": 156,
      "removed_rows": 53
    }
  }
} as const;
