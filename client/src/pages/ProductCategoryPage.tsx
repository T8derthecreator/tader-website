/*
  Product category page — generic component used by 4 routes:
  /products/flat-end-mills, /products/ball-nose-end-mills,
  /products/corner-radius-end-mills, /products/aluminum-end-mills

  Structure: CategoryNav → Page Hero → Product Family cards → SKU Table (filtered)
           → ConstructionLegend (inline B/S/C brief) → CTA
*/
import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import {
  ProductCategoryNav,
  ConstructionLegend,
  SkuFilterableTable,
  type SkuTableRow,
} from "@/components/site/ProductComponents";
import { useReveal } from "@/hooks/useReveal";
import { taderData } from "@/data/taderData";

const INQUIRY_URL = "https://toolinginquiryform.netlify.app/";

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal-on-scroll" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

type CategoryMeta = {
  slug: string;
  label: string;
  shortLabel?: string;
  description?: string;
  route: string;
  seriesCodes?: string[];
  skuCount?: number;
  diameterRangeMm?: readonly [number, number];
};

type ProductFamily = {
  series: string;
  category: string;
  category_slug: string;
  sub_type: string | null;
  series_slug: string;
  flutes: number | null;
  construction: string | null;
  sku_count: number;
  diameter_range_mm: readonly [number | null, number | null];
  line_name: string;
  route: string;
  intro: string;
};

type Sku = {
  model_no: string;
  series: string;
  category: string;
  category_slug: string;
  sub_type?: string | null;
  diameter_mm: number | null;
  cut_length_mm: number | null;
  overall_length_mm: number | null;
  shank_diameter_mm: number | null;
  construction_options: string[];
  slug?: string;
};

function formatRange(range: readonly [number | null, number | null] | undefined) {
  if (!range) return "—";
  const [a, b] = range;
  if (a == null && b == null) return "—";
  if (a != null && b != null) return `${a}–${b} mm`;
  if (a != null) return `≥ ${a} mm`;
  return `≤ ${b} mm`;
}

export function ProductCategoryPage({ categorySlug }: { categorySlug: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [categorySlug]);

  const categoryMeta = useMemo(() => {
    const cats = (taderData.categoryPages ?? []) as unknown as CategoryMeta[];
    return cats.find((c) => c.slug === categorySlug);
  }, [categorySlug]);

  const families = useMemo(() => {
    const all = (taderData.productFamilies ?? []) as unknown as ProductFamily[];
    return all.filter((f) => f.category_slug === categorySlug);
  }, [categorySlug]);

  const skuRows = useMemo<SkuTableRow[]>(() => {
    const all = (taderData.skus ?? []) as unknown as Sku[];
    return all
      .filter((s) => s.category_slug === categorySlug)
      .map((s) => ({
        model_no: s.model_no,
        series: s.series,
        geometry: s.sub_type ? `${s.category} · ${s.sub_type}` : s.category,
        diameter_mm: s.diameter_mm,
        cut_length_mm: s.cut_length_mm,
        overall_length_mm: s.overall_length_mm,
        shank_diameter_mm: s.shank_diameter_mm,
        construction_options: s.construction_options ?? [],
        category_slug: s.category_slug,
        slug: s.slug,
      }));
  }, [categorySlug]);

  if (!categoryMeta) {
    return (
      <SiteLayout>
        <section className="container-wrap py-32 text-center">
          <h1 className="font-[var(--font-display)] text-3xl text-graphite">Category not found</h1>
          <Link href="/products" className="mt-6 inline-block font-[var(--font-mono)] text-sm text-blue hover:underline">
            ← Back to Products
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryMeta.label} — ZENOK`,
    description: categoryMeta.description,
  };

  return (
    <SiteLayout>
      <SeoHead
        title={`${categoryMeta.label} — ZENOK Taiwan | ${categoryMeta.skuCount} SKUs`}
        description={
          categoryMeta.description ??
          `ZENOK ${categoryMeta.label} — ${categoryMeta.skuCount} SKUs in current catalog, diameter ${formatRange(categoryMeta.diameterRangeMm)}. Taiwan-made carbide micro tools at 4.8% MFN duty.`
        }
        canonicalPath={categoryMeta.route}
        schema={categorySchema}
        keywords={[categoryMeta.label, "carbide end mills", "micro tooling", "ZENOK"]}
      />

      <ProductCategoryNav currentSlug={categorySlug} categoryLabel={categoryMeta.label} />

      {/* Page hero */}
      <section className="relative border-b border-line bg-bg pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-steel">
              Product Line Access
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}
            >
              {categoryMeta.label}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              {categoryMeta.description}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-line pt-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em]">
              <span>
                <strong className="text-graphite">{categoryMeta.skuCount}</strong>{" "}
                <span className="text-steel">SKUs</span>
              </span>
              <span className="h-3 w-px bg-line" />
              <span>
                <span className="text-steel">Ø range</span>{" "}
                <strong className="text-graphite">{formatRange(categoryMeta.diameterRangeMm)}</strong>
              </span>
              <span className="h-3 w-px bg-line" />
              <span>
                <strong className="text-graphite">{families.length}</strong>{" "}
                <span className="text-steel">product lines</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product family cards */}
      {families.length > 0 && (
        <section className="relative py-20 lg:py-24">
          <div className="container-wrap">
            <Reveal>
              <div className="sec-eyebrow">
                Product Lines
                <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                  [ 01 ]
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
              >
                Review the active {categoryMeta.shortLabel?.toLowerCase() ?? categoryMeta.label.toLowerCase()} product lines.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-graphite-soft">
                Only the product lines within this geometry family are shown here, so buyers can move from family-level selection to dimension review without cross-category noise.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {families.map((f, i) => (
                <Reveal key={f.series} delay={i * 80}>
                  <Link href={`/products/${f.series_slug}`}>
                    <div className="group h-full border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                      <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
                        {f.series}
                      </div>
                      <div className="mt-4 font-[var(--font-display)] text-xl font-bold leading-snug text-graphite">
                        {f.line_name}
                      </div>
                      <p className="mt-3 text-sm leading-[1.7] text-graphite-soft">{f.intro}</p>
                      <div className="mt-6 space-y-2 border-t border-line pt-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.1em]">
                        <div className="flex justify-between">
                          <span className="text-steel">Flutes</span>
                          <span className="text-graphite">{f.flutes ?? "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel">Construction</span>
                          <span className="text-graphite">{f.construction ?? "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel">Ø range</span>
                          <span className="text-graphite">{formatRange(f.diameter_range_mm)}</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-line pt-2">
                          <span className="text-steel">SKUs</span>
                          <span className="font-semibold text-blue">{f.sku_count}</span>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-blue transition-transform duration-200 group-hover:translate-x-1">
                        View spec sheet
                        <ArrowRight className="size-3" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inline Construction Legend (brief B/S/C reference) */}
      <section className="relative border-t border-line bg-bg py-14 lg:py-16">
        <div className="container-wrap">
          <Reveal>
            <ConstructionLegend />
          </Reveal>
        </div>
      </section>

      {/* SKU Catalog (filtered to this category) */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Structured Catalog
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 02 ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              {categoryMeta.label} · {categoryMeta.skuCount} SKUs
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-graphite-soft">
              Search by model number or diameter. Click <strong className="text-graphite">Quote →</strong> on any row.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <SkuFilterableTable
                skus={skuRows}
                initialCategory={categorySlug}
                showCategoryTabs={false}
                totalLabel={`${skuRows.length} in ${categoryMeta.label}`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-2 py-24 text-center lg:py-32">
        <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />
        <div className="container-wrap relative z-10">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Need this spec with a target price?
              <br />
              <span className="text-blue">Send us the part.</span>
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10"
              style={{ padding: "20px 32px", fontSize: "13px" }}
            >
              <span>Request Cost-Down Proposal</span>
              <span className="ar">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ---------- Thin wrappers for each category route ---------- */

export function FlatEndMillsPage() {
  return <ProductCategoryPage categorySlug="flat-end-mills" />;
}
export function BallNoseEndMillsPage() {
  return <ProductCategoryPage categorySlug="ball-nose-end-mills" />;
}
export function CornerRadiusEndMillsPage() {
  return <ProductCategoryPage categorySlug="corner-radius-end-mills" />;
}
export function AluminumEndMillsPage() {
  return <ProductCategoryPage categorySlug="aluminum-end-mills" />;
}

export default ProductCategoryPage;
