/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Use disciplined industrial typography, asymmetrical spacing, and technical annotations.
- Prioritize procurement clarity, dimensional readability, and engineered trust over decorative marketing.
- Keep the palette graphite, misted steel, off-white, and restrained copper accents.
*/
export type ProductFamily = {
  series: string;
  category: string | number;
  category_slug: string | null;
  sub_type: string | number;
  series_slug: string;
  flutes: number | null;
  construction: string | number;
  sku_count: number;
  diameter_range_mm: readonly [number | null, number | null];
  effective_length_range_mm: readonly [number | null, number | null];
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

export const taderData = {
  "siteMeta": {
    "brand": "TADER",
    "company": "ZENOK",
    "heroTitle": "Micro-Precision End Mills Built for Demanding Applications",
    "heroSubtitle": "Taiwan-made carbide tooling for U.S. CNC shops serving medical, aerospace, and electronics programs.",
    "heroImage": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-hero-precision-tooling-cexGHiUD3iLL8zn8jgmMrm.webp",
    "blueprintImage": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-technology-blueprint-GeB22kQRd5mwYcCuzMguar.webp",
    "primaryCta": {
      "label": "Request a Quote",
      "href": "/quote-request"
    },
    "secondaryCta": {
      "label": "Browse Products",
      "href": "/products"
    },
    "formspreeId": "xbdpanvk",
    "heroHighlights": [
      {
        "label": "Product series",
        "value": "15"
      },
      {
        "label": "Active micro SKUs",
        "value": "209"
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
    },
    {
      "label": "Quote Request",
      "href": "/quote-request"
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
        "MS2",
        "XL2",
        "MS4",
        "XL4"
      ],
      "skuCount": 108,
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
        "SB2",
        "SB2L",
        "SB2P",
        "XLB2"
      ],
      "skuCount": 50,
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
        "MS2R",
        "XL2R"
      ],
      "skuCount": 35,
      "diameterRangeMm": [
        1.0,
        3.0
      ]
    },
    {
      "slug": "aluminum-end-mills",
      "label": "Aluminum End Mills",
      "shortLabel": "Aluminum",
      "description": "Dedicated aluminum cutting series optimized for chip evacuation and finish.",
      "route": "/aluminum-end-mills",
      "seriesCodes": [
        "2HA",
        "3HA",
        "2HAL",
        "3HAL"
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
      "description": "Integrated carbide rod capability supporting toolmaking cost control and supply consistency.",
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
      "series": "MS2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "series_slug": "ms2",
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
      "route": "/flat-end-mills",
      "intro": "2-flute regular flat end mill series for ultra-small diameter applications.",
      "skuCount": 14
    },
    {
      "series": "XL2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "series_slug": "xl2",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 67,
      "diameter_range_mm": [
        0.2,
        3.0
      ],
      "effective_length_range_mm": [
        1.0,
        30.0
      ],
      "route": "/flat-end-mills",
      "intro": "2-flute long-neck flat end mill series for reach and clearance in deep micro features.",
      "skuCount": 67
    },
    {
      "series": "MS4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Regular",
      "series_slug": "ms4",
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
      "route": "/flat-end-mills",
      "intro": "4-flute regular flat end mill series for higher rigidity in small-diameter work.",
      "skuCount": 5
    },
    {
      "series": "XL4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "series_slug": "xl4",
      "flutes": 4,
      "construction": "B/C",
      "sku_count": 22,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        6.0,
        25.0
      ],
      "route": "/flat-end-mills",
      "intro": "4-flute long-neck flat end mill series for reach with higher flute count.",
      "skuCount": 22
    },
    {
      "series": "MS2R",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Regular",
      "series_slug": "ms2r",
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
      "route": "/corner-radius-end-mills",
      "intro": "2-flute regular corner radius series for stronger edge condition and finish stability.",
      "skuCount": 6
    },
    {
      "series": "XL2R",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "series_slug": "xl2r",
      "flutes": 2,
      "construction": "C only",
      "sku_count": 29,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        3.0,
        30.0
      ],
      "route": "/corner-radius-end-mills",
      "intro": "Long-neck corner radius series for deeper access and full solid carbide construction.",
      "skuCount": 29
    },
    {
      "series": "SB2",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Regular",
      "series_slug": "sb2",
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
      "route": "/ball-nose-end-mills",
      "intro": "2-flute regular ball nose series for profiling and fine finishing.",
      "skuCount": 12
    },
    {
      "series": "SB2L",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Shank",
      "series_slug": "sb2l",
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
      "route": "/ball-nose-end-mills",
      "intro": "Long shank ball nose series for added projection in specific features.",
      "skuCount": 1
    },
    {
      "series": "SB2P",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "series_slug": "sb2p",
      "flutes": 2,
      "construction": "C only",
      "sku_count": 10,
      "diameter_range_mm": [
        0.3,
        3.0
      ],
      "effective_length_range_mm": [
        0.6,
        8.0
      ],
      "route": "/ball-nose-end-mills",
      "intro": "Hardened material ball nose series for difficult substrates and full carbide rigidity.",
      "skuCount": 10
    },
    {
      "series": "XLB2",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "series_slug": "xlb2",
      "flutes": 2,
      "construction": "B/C",
      "sku_count": 27,
      "diameter_range_mm": [
        0.4,
        3.0
      ],
      "effective_length_range_mm": [
        2.0,
        25.0
      ],
      "route": "/ball-nose-end-mills",
      "intro": "Long-neck ball nose series for deep cavity profiling and miniature 3D forms.",
      "skuCount": 27
    },
    {
      "series": "2HA",
      "category": "Flat End Mill (Aluminum)",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "series_slug": "2ha",
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
      "route": "/aluminum-end-mills",
      "intro": "2-flute aluminum series optimized for non-ferrous materials.",
      "skuCount": 4
    },
    {
      "series": "3HA",
      "category": "Flat End Mill (Aluminum)",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Regular",
      "series_slug": "3ha",
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
      "route": "/aluminum-end-mills",
      "intro": "3-flute aluminum series for balanced finish and chip evacuation.",
      "skuCount": 4
    },
    {
      "series": "2HAL",
      "category": "Flat End Mill (Aluminum)",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "series_slug": "2hal",
      "flutes": 2,
      "construction": "C only",
      "sku_count": 4,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "route": "/aluminum-end-mills",
      "intro": "Long shank aluminum series with extended reach in non-ferrous applications.",
      "skuCount": 4
    },
    {
      "series": "3HAL",
      "category": "Flat End Mill (Aluminum)",
      "category_slug": "aluminum-end-mills",
      "sub_type": "Long Shank",
      "series_slug": "3hal",
      "flutes": 3,
      "construction": "C only",
      "sku_count": 4,
      "diameter_range_mm": [
        1.0,
        3.0
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "route": "/aluminum-end-mills",
      "intro": "3-flute long shank aluminum series for stable high-precision aluminum machining.",
      "skuCount": 4
    },
    {
      "series": "TOTAL",
      "category": NaN,
      "category_slug": null,
      "sub_type": NaN,
      "series_slug": "total",
      "flutes": null,
      "construction": NaN,
      "sku_count": 0,
      "diameter_range_mm": [
        null,
        null
      ],
      "effective_length_range_mm": [
        null,
        null
      ],
      "route": "/products",
      "intro": "TOTAL",
      "skuCount": 0
    }
  ],
  "skus": [
    {
      "model_no": "MS2D0010S04",
      "tader_sku": "TADER-MS2-001-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0020S04",
      "tader_sku": "TADER-MS2-002-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0030S04",
      "tader_sku": "TADER-MS2-003-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0040S04",
      "tader_sku": "TADER-MS2-004-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0050S04",
      "tader_sku": "TADER-MS2-005-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0060S04",
      "tader_sku": "TADER-MS2-006-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0070S04",
      "tader_sku": "TADER-MS2-007-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0080S04",
      "tader_sku": "TADER-MS2-008-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0090S04",
      "tader_sku": "TADER-MS2-009-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0100S04",
      "tader_sku": "TADER-MS2-010-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0150S04",
      "tader_sku": "TADER-MS2-015-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0200S04",
      "tader_sku": "TADER-MS2-020-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0250S04",
      "tader_sku": "TADER-MS2-025-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2D0300S04",
      "tader_sku": "TADER-MS2-030-2F",
      "series": "MS2",
      "series_slug": "ms2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0020E010",
      "tader_sku": "TADER-XL2-002-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0020E015",
      "tader_sku": "TADER-XL2-002-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0020E020",
      "tader_sku": "TADER-XL2-002-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E010",
      "tader_sku": "TADER-XL2-003-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E020",
      "tader_sku": "TADER-XL2-003-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E030",
      "tader_sku": "TADER-XL2-003-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0030E040",
      "tader_sku": "TADER-XL2-003-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E010",
      "tader_sku": "TADER-XL2-004-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E020",
      "tader_sku": "TADER-XL2-004-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E030",
      "tader_sku": "TADER-XL2-004-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E040",
      "tader_sku": "TADER-XL2-004-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0040E050",
      "tader_sku": "TADER-XL2-004-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E020",
      "tader_sku": "TADER-XL2-005-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E030",
      "tader_sku": "TADER-XL2-005-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E040",
      "tader_sku": "TADER-XL2-005-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E060",
      "tader_sku": "TADER-XL2-005-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E080",
      "tader_sku": "TADER-XL2-005-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0050E100",
      "tader_sku": "TADER-XL2-005-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E020",
      "tader_sku": "TADER-XL2-006-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E030",
      "tader_sku": "TADER-XL2-006-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E040",
      "tader_sku": "TADER-XL2-006-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E060",
      "tader_sku": "TADER-XL2-006-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E080",
      "tader_sku": "TADER-XL2-006-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0060E100",
      "tader_sku": "TADER-XL2-006-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E020",
      "tader_sku": "TADER-XL2-007-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E040",
      "tader_sku": "TADER-XL2-007-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E060",
      "tader_sku": "TADER-XL2-007-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E080",
      "tader_sku": "TADER-XL2-007-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0070E100",
      "tader_sku": "TADER-XL2-007-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E020",
      "tader_sku": "TADER-XL2-008-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E040",
      "tader_sku": "TADER-XL2-008-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E060",
      "tader_sku": "TADER-XL2-008-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E080",
      "tader_sku": "TADER-XL2-008-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0080E100",
      "tader_sku": "TADER-XL2-008-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E030",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E040",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E060",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E080",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E100",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E120",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E140",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0100E200",
      "tader_sku": "TADER-XL2-010-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E040",
      "tader_sku": "TADER-XL2-015-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E060",
      "tader_sku": "TADER-XL2-015-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E080",
      "tader_sku": "TADER-XL2-015-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E100",
      "tader_sku": "TADER-XL2-015-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E120",
      "tader_sku": "TADER-XL2-015-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E160",
      "tader_sku": "TADER-XL2-015-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0150E200",
      "tader_sku": "TADER-XL2-015-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E060",
      "tader_sku": "TADER-XL2-020-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E080",
      "tader_sku": "TADER-XL2-020-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E100",
      "tader_sku": "TADER-XL2-020-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E120",
      "tader_sku": "TADER-XL2-020-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E160",
      "tader_sku": "TADER-XL2-020-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E200",
      "tader_sku": "TADER-XL2-020-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0200E250",
      "tader_sku": "TADER-XL2-020-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E100",
      "tader_sku": "TADER-XL2-025-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E120",
      "tader_sku": "TADER-XL2-025-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E160",
      "tader_sku": "TADER-XL2-025-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E200",
      "tader_sku": "TADER-XL2-025-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0250E250",
      "tader_sku": "TADER-XL2-025-2F",
      "series": "XL2",
      "series_slug": "xl2",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0300E100",
      "tader_sku": "TADER-XL2-030-2F",
      "series": "XL2",
      "series_slug": "xl2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2d0300e100",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0300E120",
      "tader_sku": "TADER-XL2-030-2F",
      "series": "XL2",
      "series_slug": "xl2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2d0300e120",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0300E160",
      "tader_sku": "TADER-XL2-030-2F",
      "series": "XL2",
      "series_slug": "xl2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2d0300e160",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0300E200",
      "tader_sku": "TADER-XL2-030-2F",
      "series": "XL2",
      "series_slug": "xl2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 20.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2d0300e200",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0300E250",
      "tader_sku": "TADER-XL2-030-2F",
      "series": "XL2",
      "series_slug": "xl2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 25.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2d0300e250",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2D0300E300",
      "tader_sku": "TADER-XL2-030-2F",
      "series": "XL2",
      "series_slug": "xl2",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 30.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2d0300e300",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0100S04",
      "tader_sku": "TADER-MS4-010-4F",
      "series": "MS4",
      "series_slug": "ms4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0150S04",
      "tader_sku": "TADER-MS4-015-4F",
      "series": "MS4",
      "series_slug": "ms4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0200S04",
      "tader_sku": "TADER-MS4-020-4F",
      "series": "MS4",
      "series_slug": "ms4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0250S04",
      "tader_sku": "TADER-MS4-025-4F",
      "series": "MS4",
      "series_slug": "ms4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS4D0300S04",
      "tader_sku": "TADER-MS4-030-4F",
      "series": "MS4",
      "series_slug": "ms4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E060",
      "tader_sku": "TADER-XL4-010-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E080",
      "tader_sku": "TADER-XL4-010-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E100",
      "tader_sku": "TADER-XL4-010-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0100E120",
      "tader_sku": "TADER-XL4-010-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E080",
      "tader_sku": "TADER-XL4-015-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E100",
      "tader_sku": "TADER-XL4-015-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E120",
      "tader_sku": "TADER-XL4-015-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0150E160",
      "tader_sku": "TADER-XL4-015-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E080",
      "tader_sku": "TADER-XL4-020-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E100",
      "tader_sku": "TADER-XL4-020-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E120",
      "tader_sku": "TADER-XL4-020-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E160",
      "tader_sku": "TADER-XL4-020-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0200E200",
      "tader_sku": "TADER-XL4-020-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E100",
      "tader_sku": "TADER-XL4-025-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E120",
      "tader_sku": "TADER-XL4-025-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E160",
      "tader_sku": "TADER-XL4-025-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0250E200",
      "tader_sku": "TADER-XL4-025-4F",
      "series": "XL4",
      "series_slug": "xl4",
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
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0300E100",
      "tader_sku": "TADER-XL4-030-4F",
      "series": "XL4",
      "series_slug": "xl4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl4d0300e100",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0300E120",
      "tader_sku": "TADER-XL4-030-4F",
      "series": "XL4",
      "series_slug": "xl4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl4d0300e120",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0300E160",
      "tader_sku": "TADER-XL4-030-4F",
      "series": "XL4",
      "series_slug": "xl4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl4d0300e160",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0300E200",
      "tader_sku": "TADER-XL4-030-4F",
      "series": "XL4",
      "series_slug": "xl4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 20.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl4d0300e200",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL4D0300E250",
      "tader_sku": "TADER-XL4-030-4F",
      "series": "XL4",
      "series_slug": "xl4",
      "category": "Flat End Mill",
      "category_slug": "flat-end-mills",
      "sub_type": "Long Neck",
      "flutes": 4,
      "diameter_mm": 3.0,
      "radius_mm": null,
      "cut_length_mm": 4.5,
      "effective_length_mm": 25.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl4d0300e250",
      "type_label": "Flat End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0100R010",
      "tader_sku": "TADER-MS2R-010-2F",
      "series": "MS2R",
      "series_slug": "ms2r",
      "category": "Corner Radius",
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
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0100R020",
      "tader_sku": "TADER-MS2R-010-2F",
      "series": "MS2R",
      "series_slug": "ms2r",
      "category": "Corner Radius",
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
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0200R020",
      "tader_sku": "TADER-MS2R-020-2F",
      "series": "MS2R",
      "series_slug": "ms2r",
      "category": "Corner Radius",
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
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0200R050",
      "tader_sku": "TADER-MS2R-020-2F",
      "series": "MS2R",
      "series_slug": "ms2r",
      "category": "Corner Radius",
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
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0300R020",
      "tader_sku": "TADER-MS2R-030-2F",
      "series": "MS2R",
      "series_slug": "ms2r",
      "category": "Corner Radius",
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
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "MS2RD0300R050",
      "tader_sku": "TADER-MS2R-030-2F",
      "series": "MS2R",
      "series_slug": "ms2r",
      "category": "Corner Radius",
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
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E030",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 3.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e030",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E040",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e040",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E060",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e060",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E080",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e080",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E100",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e100",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E120",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e120",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E140",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 14.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e140",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0100R010E200",
      "tader_sku": "TADER-XL2R-010-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.1,
      "cut_length_mm": 1.0,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0100r010e200",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0150R015E040",
      "tader_sku": "TADER-XL2R-015-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.15,
      "cut_length_mm": 1.5,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0150r015e040",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0150R015E060",
      "tader_sku": "TADER-XL2R-015-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.15,
      "cut_length_mm": 1.5,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0150r015e060",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0150R015E080",
      "tader_sku": "TADER-XL2R-015-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.15,
      "cut_length_mm": 1.5,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0150r015e080",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0150R015E100",
      "tader_sku": "TADER-XL2R-015-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.15,
      "cut_length_mm": 1.5,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0150r015e100",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0150R015E120",
      "tader_sku": "TADER-XL2R-015-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.15,
      "cut_length_mm": 1.5,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0150r015e120",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0150R015E160",
      "tader_sku": "TADER-XL2R-015-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.15,
      "cut_length_mm": 1.5,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0150r015e160",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0150R015E200",
      "tader_sku": "TADER-XL2R-015-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.15,
      "cut_length_mm": 1.5,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0150r015e200",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0200R020E060",
      "tader_sku": "TADER-XL2R-020-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": 6.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0200r020e060",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0200R020E080",
      "tader_sku": "TADER-XL2R-020-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0200r020e080",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0200R020E100",
      "tader_sku": "TADER-XL2R-020-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0200r020e100",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0200R020E120",
      "tader_sku": "TADER-XL2R-020-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0200r020e120",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0200R020E160",
      "tader_sku": "TADER-XL2R-020-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0200r020e160",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0200R020E200",
      "tader_sku": "TADER-XL2R-020-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0200r020e200",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0200R020E250",
      "tader_sku": "TADER-XL2R-020-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 0.2,
      "cut_length_mm": 2.0,
      "effective_length_mm": 25.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0200r020e250",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0300R020E080",
      "tader_sku": "TADER-XL2R-030-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 3.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0300r020e080",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0300R020E100",
      "tader_sku": "TADER-XL2R-030-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 3.0,
      "effective_length_mm": 10.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0300r020e100",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0300R020E120",
      "tader_sku": "TADER-XL2R-030-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 3.0,
      "effective_length_mm": 12.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0300r020e120",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0300R020E160",
      "tader_sku": "TADER-XL2R-030-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 3.0,
      "effective_length_mm": 16.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0300r020e160",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0300R020E200",
      "tader_sku": "TADER-XL2R-030-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 3.0,
      "effective_length_mm": 20.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0300r020e200",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0300R020E250",
      "tader_sku": "TADER-XL2R-030-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 3.0,
      "effective_length_mm": 25.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0300r020e250",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XL2RD0300R020E300",
      "tader_sku": "TADER-XL2R-030-2F",
      "series": "XL2R",
      "series_slug": "xl2r",
      "category": "Corner Radius",
      "category_slug": "corner-radius-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 0.2,
      "cut_length_mm": 3.0,
      "effective_length_mm": 30.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xl2rd0300r020e300",
      "type_label": "Corner Radius End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0010S04",
      "tader_sku": "TADER-SB2-002-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0015S04",
      "tader_sku": "TADER-SB2-003-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0020S04",
      "tader_sku": "TADER-SB2-004-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0025S04",
      "tader_sku": "TADER-SB2-005-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0030S04",
      "tader_sku": "TADER-SB2-006-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0040S04",
      "tader_sku": "TADER-SB2-008-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0050S04",
      "tader_sku": "TADER-SB2-010-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0075S04",
      "tader_sku": "TADER-SB2-015-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0100S04",
      "tader_sku": "TADER-SB2-020-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0125S04",
      "tader_sku": "TADER-SB2-025-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0150S03",
      "tader_sku": "TADER-SB2-030-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2R0150S04",
      "tader_sku": "TADER-SB2-030-2F",
      "series": "SB2",
      "series_slug": "sb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2LR0100L075",
      "tader_sku": "TADER-SB2L-020-2F",
      "series": "SB2L",
      "series_slug": "sb2l",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0015S06",
      "tader_sku": "TADER-SB2P-003-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 0.3,
      "radius_mm": 0.15,
      "cut_length_mm": 0.3,
      "effective_length_mm": 0.6,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0015s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0020S06",
      "tader_sku": "TADER-SB2P-004-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 0.4,
      "radius_mm": 0.2,
      "cut_length_mm": 0.4,
      "effective_length_mm": 0.8,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0020s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0025S06",
      "tader_sku": "TADER-SB2P-005-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 0.5,
      "radius_mm": 0.25,
      "cut_length_mm": 0.5,
      "effective_length_mm": 1.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0025s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0030S06",
      "tader_sku": "TADER-SB2P-006-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 0.6,
      "radius_mm": 0.3,
      "cut_length_mm": 0.6,
      "effective_length_mm": 1.2,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0030s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0040S06",
      "tader_sku": "TADER-SB2P-008-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 0.8,
      "radius_mm": 0.4,
      "cut_length_mm": 0.8,
      "effective_length_mm": 1.6,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0040s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0050S06",
      "tader_sku": "TADER-SB2P-010-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 1.0,
      "radius_mm": 0.5,
      "cut_length_mm": 1.0,
      "effective_length_mm": 2.5,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0050s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0075S06",
      "tader_sku": "TADER-SB2P-015-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 1.5,
      "radius_mm": 0.75,
      "cut_length_mm": 1.5,
      "effective_length_mm": 4.0,
      "overall_length_mm": 50.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0075s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0100S06",
      "tader_sku": "TADER-SB2P-020-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 2.0,
      "radius_mm": 1.0,
      "cut_length_mm": 2.0,
      "effective_length_mm": 6.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0100s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0125S06",
      "tader_sku": "TADER-SB2P-025-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 2.5,
      "radius_mm": 1.25,
      "cut_length_mm": 2.5,
      "effective_length_mm": 6.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0125s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "SB2PR0150S06",
      "tader_sku": "TADER-SB2P-030-2F",
      "series": "SB2P",
      "series_slug": "sb2p",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Hardened",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 1.5,
      "cut_length_mm": 3.0,
      "effective_length_mm": 8.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "sb2pr0150s06",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0020E020",
      "tader_sku": "TADER-XLB2-004-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0020E040",
      "tader_sku": "TADER-XLB2-004-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0025E040",
      "tader_sku": "TADER-XLB2-005-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0025E060",
      "tader_sku": "TADER-XLB2-005-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0030E040",
      "tader_sku": "TADER-XLB2-006-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0030E060",
      "tader_sku": "TADER-XLB2-006-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0030E080",
      "tader_sku": "TADER-XLB2-006-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0040E040",
      "tader_sku": "TADER-XLB2-008-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0040E060",
      "tader_sku": "TADER-XLB2-008-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0040E080",
      "tader_sku": "TADER-XLB2-008-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E040",
      "tader_sku": "TADER-XLB2-010-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E060",
      "tader_sku": "TADER-XLB2-010-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E080",
      "tader_sku": "TADER-XLB2-010-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E100",
      "tader_sku": "TADER-XLB2-010-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0050E120",
      "tader_sku": "TADER-XLB2-010-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E080",
      "tader_sku": "TADER-XLB2-015-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E100",
      "tader_sku": "TADER-XLB2-015-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E120",
      "tader_sku": "TADER-XLB2-015-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0075E160",
      "tader_sku": "TADER-XLB2-015-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E080",
      "tader_sku": "TADER-XLB2-020-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E100",
      "tader_sku": "TADER-XLB2-020-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E120",
      "tader_sku": "TADER-XLB2-020-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E160",
      "tader_sku": "TADER-XLB2-020-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0100E200",
      "tader_sku": "TADER-XLB2-020-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
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
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0150E160",
      "tader_sku": "TADER-XLB2-030-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 1.5,
      "cut_length_mm": 3.0,
      "effective_length_mm": 16.0,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xlb2r0150e160",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0150E200",
      "tader_sku": "TADER-XLB2-030-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 1.5,
      "cut_length_mm": 3.0,
      "effective_length_mm": 20.0,
      "overall_length_mm": 75.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xlb2r0150e200",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "XLB2R0150E250",
      "tader_sku": "TADER-XLB2-030-2F",
      "series": "XLB2",
      "series_slug": "xlb2",
      "category": "Ball Nose",
      "category_slug": "ball-nose-end-mills",
      "sub_type": "Long Neck",
      "flutes": 2,
      "diameter_mm": 3.0,
      "radius_mm": 1.5,
      "cut_length_mm": 3.0,
      "effective_length_mm": 25.0,
      "overall_length_mm": 60.0,
      "shank_diameter_mm": 6.0,
      "construction_options": [
        "C"
      ],
      "has_b": false,
      "has_c": true,
      "price_label": "Contact for Quote",
      "amazon_warning": null,
      "slug": "xlb2r0150e250",
      "type_label": "Ball Nose End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0100S04/6",
      "tader_sku": "TADER-2HA-010-2F",
      "series": "2HA",
      "series_slug": "2ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0150S04/6",
      "tader_sku": "TADER-2HA-015-2F",
      "series": "2HA",
      "series_slug": "2ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0200S04/6",
      "tader_sku": "TADER-2HA-020-2F",
      "series": "2HA",
      "series_slug": "2ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HAD0300S04/6",
      "tader_sku": "TADER-2HA-030-2F",
      "series": "2HA",
      "series_slug": "2ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0100S04",
      "tader_sku": "TADER-3HA-010-3F",
      "series": "3HA",
      "series_slug": "3ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0150S04",
      "tader_sku": "TADER-3HA-015-3F",
      "series": "3HA",
      "series_slug": "3ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0200S04",
      "tader_sku": "TADER-3HA-020-3F",
      "series": "3HA",
      "series_slug": "3ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HAD0300S04",
      "tader_sku": "TADER-3HA-030-3F",
      "series": "3HA",
      "series_slug": "3ha",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0100L075",
      "tader_sku": "TADER-2HAL-010-2F",
      "series": "2HAL",
      "series_slug": "2hal",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0150L075",
      "tader_sku": "TADER-2HAL-015-2F",
      "series": "2HAL",
      "series_slug": "2hal",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0200L075",
      "tader_sku": "TADER-2HAL-020-2F",
      "series": "2HAL",
      "series_slug": "2hal",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "2HALD0300L075",
      "tader_sku": "TADER-2HAL-030-2F",
      "series": "2HAL",
      "series_slug": "2hal",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0100L075",
      "tader_sku": "TADER-3HAL-010-3F",
      "series": "3HAL",
      "series_slug": "3hal",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0150L075",
      "tader_sku": "TADER-3HAL-015-3F",
      "series": "3HAL",
      "series_slug": "3hal",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0200L075",
      "tader_sku": "TADER-3HAL-020-3F",
      "series": "3HAL",
      "series_slug": "3hal",
      "category": "Flat End Mill (Aluminum)",
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
      "type_label": "Aluminum End Mills",
      "coating": "Contact for spec",
      "construction_labels": [
        "Carbide Tipped",
        "Full Solid Carbide"
      ]
    },
    {
      "model_no": "3HALD0300L075",
      "tader_sku": "TADER-3HAL-030-3F",
      "series": "3HAL",
      "series_slug": "3hal",
      "category": "Flat End Mill (Aluminum)",
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
      "description": "Micro tools for implant components, surgical devices, and miniature precision features where consistency and clean edge quality matter.",
      "focus": [
        "Titanium and stainless workflows",
        "Tight tolerance miniature features",
        "Stable surface finish for critical parts"
      ],
      "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-medical-machining-89pKNW65wEEfmggUukooMH.webp"
    },
    {
      "slug": "aerospace",
      "title": "Aerospace Machining",
      "eyebrow": "Application / Aerospace",
      "description": "Precision cutting tools for aerospace subcontractors handling high-value materials, fine geometries, and repeatable process windows.",
      "focus": [
        "Small features on critical components",
        "Rigidity for demanding geometries",
        "Reliable performance in high-value part programs"
      ],
      "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-aerospace-machining-N5egC8RrQrLpFZVuhcC8Dg.webp"
    },
    {
      "slug": "electronics",
      "title": "Electronics Manufacturing",
      "eyebrow": "Application / Electronics",
      "description": "Micro end mills for molds, connectors, housings, and miniature precision components used across electronics and device manufacturing.",
      "focus": [
        "Tiny cavities and connector details",
        "Fine geometry replication",
        "Stable chip control in small-part machining"
      ],
      "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663485537359/5nc8Xoo7szVqMQNqkxLXby/tader-electronics-machining-j7uSMhPF9xWBScJSQ2djkx.webp"
    }
  ],
  "technologyTopics": [
    {
      "id": "construction-b-vs-c",
      "title": "Construction B vs C",
      "summary": "B uses a carbide tipped configuration and is not compatible with shrink-fit toolholders. C is full solid carbide with broader holder compatibility.",
      "points": [
        "B construction is limited to shank diameter 4 mm and below.",
        "C construction removes that shank restriction and suits broader setups.",
        "Product detail pages explicitly show shrink-fit compatibility warnings when B is selected."
      ]
    },
    {
      "id": "taiwan-duty",
      "title": "Taiwan 4.8% MFN Duty Advantage",
      "summary": "Taiwan-origin tooling can offer a tariff position advantage versus higher-duty sourcing routes, helping landed cost discussions with U.S. buyers.",
      "points": [
        "Home page highlights Taiwan MFN 4.8% as a commercial differentiator.",
        "Technology page frames duty advantage in procurement language, not consumer marketing language.",
        "Messaging is positioned as a sourcing advantage alongside precision and vertical integration."
      ]
    },
    {
      "id": "carbide-comparison",
      "title": "Carbide Tipped vs Solid Carbide",
      "summary": "The site explains trade-offs between tipped and full solid carbide construction so buyers can match holder strategy, rigidity, and cost to application needs.",
      "points": [
        "Solid carbide supports broader holder compatibility and full-body rigidity.",
        "Carbide tipped construction remains viable in suitable size ranges.",
        "Selection guidance is embedded into category and SKU detail views."
      ]
    }
  ],
  "aboutSections": [
    {
      "title": "Brand Positioning",
      "body": "ZENOK positions TADER as a Taiwan-based precision tooling source focused on micro end mills for demanding U.S. machining applications."
    },
    {
      "title": "Vertical Integration",
      "body": "From carbide rod capability to finished tooling, vertical integration supports cost control, lead-time consistency, and defensible pricing in specialized micro-tool programs."
    },
    {
      "title": "Manufacturing Capability",
      "body": "The product structure emphasizes micro diameters, long-neck geometries, and application-fit constructions for shops serving medical, aerospace, and electronics work."
    }
  ],
  "filters": {
    "categories": [
      "aluminum-end-mills",
      "ball-nose-end-mills",
      "corner-radius-end-mills",
      "flat-end-mills"
    ],
    "flutes": [
      2,
      3,
      4
    ],
    "sub_types": [
      "Hardened",
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
    "effective_length_min_mm": 0.6,
    "effective_length_max_mm": 30.0,
    "overall_length_values_mm": [
      50.0,
      60.0,
      75.0
    ],
    "shank_values_mm": [
      3.0,
      4.0,
      6.0
    ]
  },
  "notes": {
    "duplicateTaderSkuCount": 0,
    "skuSlugStrategy": "Use model_no-derived slug because TADER SKU repeats across some long-neck effective-length variants.",
    "carbideRodsDatasetAvailable": false
  }
} as const;
