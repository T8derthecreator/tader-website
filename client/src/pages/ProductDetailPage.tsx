/*
  /products/:slug — product detail page showing a single product family (series).
  The :slug matches a series_slug (e.g. "zb2-ln" for Ball Nose 2-Flute Long Neck).
  Shows: CategoryNav → hero with model info → spec table (all SKUs in series)
       → construction legend → related series in same category → CTA
*/
import { useEffect, useMemo } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import {
  ProductCategoryNav,
  ConstructionLegend,
  CoatingOptions,
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
  legacy_series?: string | null;
};

type CategoryMeta = { slug: string; label: string };

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
  series_slug: string;
  slug?: string;
};

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  const family = useMemo(() => {
    const all = (taderData.productFamilies ?? []) as unknown as ProductFamily[];
    return all.find((f) => f.series_slug === slug);
  }, [slug]);

  const categoryMeta = useMemo(() => {
    if (!family) return undefined;
    const cats = (taderData.categoryPages ?? []) as unknown as CategoryMeta[];
    return cats.find((c) => c.slug === family.category_slug);
  }, [family]);

  const skus = useMemo(() => {
    const all = (taderData.skus ?? []) as unknown as Sku[];
    return all
      .filter((s) => s.series_slug === slug)
      .sort((a, b) => (a.diameter_mm ?? 0) - (b.diameter_mm ?? 0));
  }, [slug]);

  const relatedFamilies = useMemo(() => {
    if (!family) return [];
    const all = (taderData.productFamilies ?? []) as unknown as ProductFamily[];
    return all
      .filter((f) => f.category_slug === family.category_slug && f.series_slug !== family.series_slug)
      .slice(0, 3);
  }, [family]);

  if (!family) {
    return (
      <SiteLayout>
        <section className="container-wrap py-32 text-center">
          <h1 className="font-[var(--font-display)] text-3xl text-graphite">Product not found</h1>
          <Link
            href="/products"
            className="mt-6 inline-block font-[var(--font-mono)] text-sm text-blue hover:underline"
          >
            ← Back to Products
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const rangeLabel =
    family.diameter_range_mm[0] != null && family.diameter_range_mm[1] != null
      ? `Ø ${family.diameter_range_mm[0]}–${family.diameter_range_mm[1]} mm`
      : "—";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: family.line_name,
    description: family.intro,
    brand: { "@type": "Brand", name: "ZENOK" },
  };

  return (
    <SiteLayout>
      <SeoHead
        title={`${family.series} · ${family.line_name} | ZENOK`}
        description={`${family.line_name}. ${family.sku_count} SKUs, ${rangeLabel}, flutes ${family.flutes ?? "—"}, construction ${family.construction ?? "—"}. ${family.intro}`}
        canonicalPath={`/products/${family.series_slug}`}
        schema={schema}
        keywords={[family.series, family.line_name, family.category, "ZENOK"]}
      />

      {categoryMeta && (
        <ProductCategoryNav currentSlug={categoryMeta.slug} categoryLabel={categoryMeta.label} />
      )}

      {/* Back to category */}
      <div className="border-b border-line bg-bg-2">
        <div className="container-wrap py-4">
          {categoryMeta && (
            <Link
              href={categoryMeta ? `/products/${categoryMeta.slug}` : "/products"}
              className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel hover:text-blue"
            >
              <ArrowLeft className="size-3" />
              Back to {categoryMeta.label}
            </Link>
          )}
        </div>
      </div>

      {/* Page hero */}
      <section className="relative border-b border-line pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Series · {family.series}
              {family.legacy_series && (
                <span className="text-steel-faint">· legacy {family.legacy_series}</span>
              )}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              {family.line_name}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              {family.intro}
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-line pt-8 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] sm:grid-cols-4">
              <div>
                <div className="text-steel">Ø Range</div>
                <div className="mt-2 font-[var(--font-display)] text-xl font-bold text-graphite tracking-tight">
                  {rangeLabel}
                </div>
              </div>
              <div>
                <div className="text-steel">Flutes</div>
                <div className="mt-2 font-[var(--font-display)] text-xl font-bold text-graphite tracking-tight">
                  {family.flutes ?? "—"}
                </div>
              </div>
              <div>
                <div className="text-steel">Construction</div>
                <div className="mt-2 font-[var(--font-display)] text-xl font-bold text-blue tracking-tight">
                  {family.construction ?? "—"}
                </div>
              </div>
              <div>
                <div className="text-steel">SKUs</div>
                <div className="mt-2 font-[var(--font-display)] text-xl font-bold text-graphite tracking-tight">
                  {family.sku_count}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={350}>
            <div className="mt-10">
              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Request Quote for This Series</span>
                <span className="ar">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Construction + Coatings (inline reference, side-by-side) */}
      <section className="relative py-14 lg:py-16">
        <div className="container-wrap">
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-2">
              <ConstructionLegend />
              <CoatingOptions />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKU Spec Sheet (TOPGREEN-style table) */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Spec Sheet
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
              {skus.length} SKUs in this series.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                All dimensions in mm.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 overflow-x-auto border border-line bg-panel">
              <table className="w-full border-collapse">
                <thead className="bg-panel-2">
                  <tr className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-steel">
                    <th className="whitespace-nowrap p-3 text-left">Model No.</th>
                    <th className="whitespace-nowrap p-3 text-right">Ø (D)</th>
                    <th className="whitespace-nowrap p-3 text-right">Cut (l)</th>
                    <th className="whitespace-nowrap p-3 text-right">OAL (L)</th>
                    <th className="whitespace-nowrap p-3 text-right">Shank (d)</th>
                    <th className="whitespace-nowrap p-3 text-center">Construction</th>
                    <th className="whitespace-nowrap p-3"></th>
                  </tr>
                </thead>
                <tbody className="font-[var(--font-mono)] text-xs">
                  {skus.map((s) => (
                    <tr
                      key={s.model_no}
                      className="border-t border-line-soft transition-colors hover:bg-panel-2"
                    >
                      <td className="p-3 font-semibold text-graphite">{s.model_no}</td>
                      <td className="p-3 text-right tabular-nums text-graphite">
                        {s.diameter_mm ?? "—"}
                      </td>
                      <td className="p-3 text-right tabular-nums text-steel">
                        {s.cut_length_mm ?? "—"}
                      </td>
                      <td className="p-3 text-right tabular-nums text-steel">
                        {s.overall_length_mm ?? "—"}
                      </td>
                      <td className="p-3 text-right tabular-nums text-steel">
                        {s.shank_diameter_mm ?? "—"}
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-1">
                          {s.construction_options.map((opt) => (
                            <span
                              key={opt}
                              className={`inline-flex items-center justify-center border px-1.5 py-0.5 text-[10px] font-bold ${
                                opt === "C"
                                  ? "border-blue bg-blue text-white"
                                  : "border-line bg-white text-graphite"
                              }`}
                            >
                              {opt}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 text-right">
                        <a
                          href={INQUIRY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-blue hover:underline"
                        >
                          Quote →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-6 text-xs text-steel">
              <strong className="text-graphite-soft">Column legend:</strong> D = diameter, l = cut length, L = overall length, d = shank diameter. All in millimeters.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Related series */}
      {relatedFamilies.length > 0 && (
        <section className="relative border-t border-line py-20 lg:py-24">
          <div className="container-wrap">
            <Reveal>
              <div className="sec-eyebrow">
                Related Series
                <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                  [ 02 ]
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                Other {categoryMeta?.label.toLowerCase() ?? "products"} you might compare.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {relatedFamilies.map((f, i) => (
                <Reveal key={f.series} delay={i * 100}>
                  <Link href={`/products/${f.series_slug}`}>
                    <div className="group h-full border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                      <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
                        {f.series}
                      </div>
                      <div className="mt-3 font-[var(--font-display)] text-lg font-bold leading-snug text-graphite">
                        {f.line_name}
                      </div>
                      <p className="mt-3 line-clamp-3 text-[13px] leading-[1.6] text-graphite-soft">
                        {f.intro}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-blue transition-transform duration-200 group-hover:translate-x-1">
                        View
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
              Specify model, volume, target price.
              <br />
              <span className="text-blue">Proposal in 48 hours.</span>
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

export { ProductDetailPage };
