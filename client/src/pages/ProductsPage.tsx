/*
  /products — main products entry page.
  Sections: Page Hero → By Geometry (4 cards) → SKU Catalog (filterable) → CTA
  (Construction Types and Coatings are NOT standalone sections per user decision;
  brief explanation appears inline on category pages via ConstructionLegend.)
*/
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import { SkuFilterableTable, type SkuTableRow } from "@/components/site/ProductComponents";
import { useReveal } from "@/hooks/useReveal";
import { taderData } from "@/data/taderData";

const INQUIRY_URL = "https://toolinginquiryform.netlify.app/";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- Geometry cards (4 of them) ---------- */

const GEOM_CARDS = [
  {
    num: "01 / FLAT",
    name: "Flat End Mills",
    range: "Ø 0.1–3 mm",
    href: "/products/flat-end-mills",
    slug: "flat-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="80" />
        <rect x="25" y="90" width="10" height="35" />
        <path d="M 25 125 L 35 125 M 22 90 L 38 90" />
      </g>
    ),
  },
  {
    num: "02 / BALL",
    name: "Ball Nose",
    range: "Ø 0.2–3 mm",
    href: "/products/ball-nose-end-mills",
    slug: "ball-nose-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="85" />
        <circle cx="30" cy="105" r="10" />
        <path d="M 22 95 L 38 95" />
      </g>
    ),
  },
  {
    num: "03 / CORNER",
    name: "Corner Radius",
    range: "Ø 1–3 mm",
    href: "/products/corner-radius-end-mills",
    slug: "corner-radius-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="85" />
        <path d="M 22 95 Q 22 110 30 110 Q 38 110 38 95 Z" fill="rgba(29,78,216,0.12)" />
        <path d="M 30 110 L 30 125" />
      </g>
    ),
  },
  {
    num: "04 / AL",
    name: "Aluminum Spec",
    range: "Ø 1–3 mm",
    href: "/products/aluminum-end-mills",
    slug: "aluminum-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="80" />
        <path d="M 22 90 L 38 90 L 42 120 L 18 120 Z" fill="rgba(29,78,216,0.15)" />
        <path d="M 26 95 L 30 115 M 34 95 L 30 115" strokeDasharray="2 2" />
      </g>
    ),
  },
];

/* ---------- Build SKU rows from taderData.skus ---------- */

function buildSkuRows(): SkuTableRow[] {
  const skus = (taderData.skus ?? []) as unknown as Array<{
    model_no: string;
    series: string;
    category: string;
    category_slug: string;
    type_label?: string;
    sub_type?: string;
    diameter_mm: number | null;
    cut_length_mm: number | null;
    overall_length_mm: number | null;
    shank_diameter_mm: number | null;
    construction_options: string[];
    slug?: string;
  }>;
  return skus.map((s) => ({
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
}

/* ---------- Page ---------- */

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ZENOK Products — Taiwan Carbide Micro End Mills",
  description:
    "156 active SKUs across four geometry families. Flat, ball nose, corner radius, aluminum. Ø 0.1–3.0 mm. Taiwan 4.8% MFN duty.",
};

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const skuRows = buildSkuRows();
  const totalSkuCount = skuRows.length;

  return (
    <SiteLayout>
      <SeoHead
        title="Products — 156 SKUs across 4 Geometry Families | ZENOK Taiwan"
        description="Browse ZENOK's full catalog: 156 SKUs of precision carbide micro end mills. Flat, ball nose, corner radius, aluminum spec. Ø 0.1–3.0 mm from Taiwan at 4.8% MFN duty."
        canonicalPath="/products"
        schema={productsSchema}
        keywords={["carbide end mills", "micro tooling catalog", "Taiwan tools", "ZENOK products"]}
      />

      {/* Page hero */}
      <section className="relative border-b border-line pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Products
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              {totalSkuCount} SKUs.
              <br />
              <span className="text-blue">Start from geometry.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-graphite-soft">
              Four geometry families cover the full catalog. Custom work beyond the catalog is available at MOQ 200 — contact us with specs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By Geometry */}
      <section id="geometry" className="relative py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              By Geometry
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 01 ]
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2
              className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
            >
              Four families.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                Pick the geometry, we'll handle the rest.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {GEOM_CARDS.map((c, i) => {
              const categoryData = (taderData.categoryPages ?? []).find(
                (cat: { slug: string }) => cat.slug === c.slug,
              ) as { skuCount?: number } | undefined;
              const skuCount = categoryData?.skuCount ?? 0;
              return (
                <Reveal key={c.num} delay={i * 100}>
                  <Link href={c.href}>
                    <div className="group relative h-full border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                      <div className="flex items-start justify-between">
                        <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
                          {c.num}
                        </div>
                        <div className="text-xl text-steel transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue">
                          ↗
                        </div>
                      </div>
                      <div className="mt-6 flex h-[140px] items-center justify-center text-blue">
                        <svg width="60" height="140" viewBox="0 0 60 140">
                          {c.svg}
                        </svg>
                      </div>
                      <div className="mt-6 font-[var(--font-display)] text-xl font-bold text-graphite">
                        {c.name}
                      </div>
                      <div className="mt-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-steel">
                        {c.range} · {skuCount} SKU
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKU Catalog */}
      <section id="catalog" className="relative border-t border-line bg-bg-2 py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              SKU Catalog
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 02 ]
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2
              className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
            >
              Browse by spec.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                What engineers actually want to see.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-[17px] leading-[1.8] text-graphite-soft">
              Filter by geometry, search by model or diameter. Click <strong className="text-graphite">Quote →</strong> on any row to request that exact configuration.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <SkuFilterableTable
                skus={skuRows}
                totalLabel={`${totalSkuCount} total in catalog`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-2 py-28 text-center lg:py-36">
        <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />
        <div className="container-wrap relative z-10">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
            >
              Can't find your spec?
              <br />
              <span className="text-blue">We'll build it.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.65] text-graphite-soft">
              Custom geometries available from MOQ 200. Submit specs and target price — our engineering team returns a cost-down proposal within 48 hours.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-12"
              style={{ padding: "20px 32px", fontSize: "13px" }}
            >
              <span>Request Custom Quote</span>
              <span className="ar">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export { ProductsPage };
