/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Filtering logic should support engineering comparison with clarity and deterministic behavior.
- Encode dimensions and constructions as procurement-ready data, not marketing abstractions.
- Keep naming aligned with catalog conventions and dimensional tables.
*/
import { taderData, type ProductFamily, type SkuRecord } from "@/data/taderData";

export type ProductFilters = {
  category?: string;
  flutes?: number[];
  subTypes?: string[];
  constructions?: string[];
  diameter?: [number, number];
  radius?: [number, number];
  effectiveLength?: [number, number];
  overallLength?: number[];
  shank?: number[];
  series?: string[];
};

export function formatMillimeter(value: number | null | undefined) {
  if (value == null || Number.isNaN(value)) return "—";
  return `${Number(value).toFixed(value < 1 ? 2 : Number.isInteger(value) ? 0 : 1)} mm`;
}

export function getCategoryBySlug(slug?: string | null) {
  return taderData.categoryPages.find((item) => item.slug === slug) ?? null;
}

export function getSeriesByCode(series: string) {
  return taderData.productFamilies.find((item) => item.series === series) ?? null;
}

export function getSkuBySlug(slug: string) {
  return taderData.skus.find((item) => item.slug === slug) ?? null;
}

export function getApplication(slug: string) {
  return taderData.applications.find((item) => item.slug === slug) ?? null;
}

export function getSkusByCategory(categorySlug?: string | null) {
  if (!categorySlug) return [];
  return taderData.skus.filter((item) => item.category_slug === categorySlug);
}

export function getFamiliesByCategory(categorySlug?: string | null): ProductFamily[] {
  if (!categorySlug) return [];
  return taderData.productFamilies.filter((item) => item.category_slug === categorySlug);
}

export function filterSkus(filters: ProductFilters): SkuRecord[] {
  return taderData.skus.filter((sku) => {
    if (filters.category && sku.category_slug !== filters.category) return false;
    if (filters.series?.length && !filters.series.includes(sku.series)) return false;
    if (filters.flutes?.length && (sku.flutes == null || !filters.flutes.includes(sku.flutes))) return false;
    if (filters.subTypes?.length && !filters.subTypes.includes(sku.sub_type)) return false;
    if (
      filters.constructions?.length &&
      !filters.constructions.some((construction) =>
        (sku.construction_options as readonly string[]).includes(construction),
      )
    ) {
      return false;
    }
    if (
      filters.diameter &&
      (sku.diameter_mm == null || sku.diameter_mm < filters.diameter[0] || sku.diameter_mm > filters.diameter[1])
    ) {
      return false;
    }
    if (
      filters.radius &&
      sku.radius_mm != null &&
      (sku.radius_mm < filters.radius[0] || sku.radius_mm > filters.radius[1])
    ) {
      return false;
    }
    if (filters.radius && sku.radius_mm == null && filters.radius[0] > 0) return false;
    if (
      filters.effectiveLength &&
      (sku.effective_length_mm == null ||
        sku.effective_length_mm < filters.effectiveLength[0] ||
        sku.effective_length_mm > filters.effectiveLength[1])
    ) {
      return false;
    }
    if (
      filters.overallLength?.length &&
      (sku.overall_length_mm == null || !filters.overallLength.includes(sku.overall_length_mm))
    ) {
      return false;
    }
    if (filters.shank?.length && (sku.shank_diameter_mm == null || !filters.shank.includes(sku.shank_diameter_mm))) {
      return false;
    }

    return true;
  });
}

export function getRelatedSkus(sku: SkuRecord) {
  return taderData.skus
    .filter((item) => item.series === sku.series && item.slug !== sku.slug)
    .slice(0, 6);
}

export function productTitle(sku: SkuRecord) {
  const diameter = sku.diameter_mm ? `${sku.diameter_mm}mm` : "Micro";
  const categoryName = getCategoryBySlug(sku.category_slug)?.label ?? sku.type_label;
  return `${diameter} ${categoryName} | ${sku.coating} | TADER`;
}

export function productSchema(sku: SkuRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${sku.diameter_mm}mm ${sku.type_label}`,
    sku: sku.tader_sku,
    mpn: sku.model_no,
    brand: {
      "@type": "Brand",
      name: "TADER",
    },
    category: sku.type_label,
    description: `${sku.type_label} for demanding micro-machining applications. Series ${sku.series}, ${sku.sub_type}, ${sku.flutes ?? "—"} flutes.` ,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
      url: `${window.location.origin}/products/${sku.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
  };
}
