/*
  /products — main products entry page (v3).
  Structure: By Product Type (4 cards) → Full Catalog CTA card → Final CTA
  Page hero removed per user request; big filterable SKU table lives at /products/catalog.
*/
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
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

  const totalSkuCount = (taderData.skus ?? []).length;

  return (
    <SiteLayout>
      <SeoHead
        title="Products — 156 SKUs across 4 Geometry Families | ZENOK Taiwan"
        description="Browse ZENOK's full catalog: 156 SKUs of precision carbide micro end mills. Flat, ball nose, corner radius, aluminum spec. Ø 0.1–3.0 mm from Taiwan at 4.8% MFN duty."
        canonicalPath="/products"
        schema={productsSchema}
        keywords={["carbide end mills", "micro tooling catalog", "Taiwan tools", "ZENOK products"]}
      />

      {/* By Product Type */}
      <section id="geometry" className="relative pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              By Product Type
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
              <span className="serif-italic font-normal text-graphite-soft">
                Pick your edge, we'll handle the rest.
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

      {/* Full Catalog callout */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Full SKU Catalog
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 02 ]
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Link href="/products/catalog">
              <div className="group mt-10 grid gap-8 border border-line bg-panel p-10 transition-all duration-300 hover:border-blue hover:shadow-[var(--shadow-blue)] lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:p-14">
                {/* Left: prose */}
                <div>
                  <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                    /products/catalog →
                  </div>
                  <h2
                    className="mt-5 font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                  >
                    All {totalSkuCount} SKUs.
                    <br />
                    <span className="serif-italic font-normal text-graphite-soft">
                      One searchable table.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-graphite-soft">
                    Filter by geometry, search by model number, diameter, or construction. Quote request on every row.
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 font-[var(--font-mono)] text-[13px] font-semibold uppercase tracking-[0.15em] text-blue">
                    Browse Full Catalog
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Right: table-style visual */}
                <div className="hidden lg:block">
                  <div className="border border-line bg-bg-2">
                    <div className="grid grid-cols-[1.2fr_0.8fr_0.6fr_0.6fr] gap-3 border-b border-line bg-panel-2 p-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-steel">
                      <div>Model No.</div><div>Series</div><div className="text-right">Ø</div><div className="text-center">B/C</div>
                    </div>
                    {[
                      { m: "MS2D0010S04", s: "ZF2", d: "0.1" },
                      { m: "MS2D0100S04", s: "ZF2", d: "1.0" },
                      { m: "XL2D0030E010", s: "ZF2-LN", d: "0.3" },
                      { m: "MB2R005D0010", s: "ZB2", d: "1.0" },
                      { m: "MR2D0030R005", s: "ZR2", d: "3.0" },
                    ].map((r, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[1.2fr_0.8fr_0.6fr_0.6fr] gap-3 border-b border-line-soft p-3 font-[var(--font-mono)] text-[11px] last:border-b-0"
                      >
                        <div className="font-semibold text-graphite">{r.m}</div>
                        <div className="text-steel">{r.s}</div>
                        <div className="text-right tabular-nums text-graphite">{r.d}</div>
                        <div className="text-center">
                          <span className="inline-flex items-center border border-line px-1 py-0.5 text-[9px] font-bold text-graphite">B</span>{" "}
                          <span className="inline-flex items-center border border-blue bg-blue px-1 py-0.5 text-[9px] font-bold text-white">C</span>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 text-center font-[var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-blue">
                      + {totalSkuCount - 5} more SKUs →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
