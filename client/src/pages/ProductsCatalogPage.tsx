/*
  /products/catalog — the dedicated full SKU catalog page.
  Big filterable table with All/Flat/Ball/Corner/Alum tabs.
  Page title: "Catalog".
*/
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import {
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

function buildSkuRows(): SkuTableRow[] {
  const skus = (taderData.skus ?? []) as unknown as Array<{
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

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ZENOK Catalog — Full SKU Table",
  description: "Searchable table of all 156 ZENOK SKUs — flat, ball nose, corner radius, aluminum end mills.",
};

export default function ProductsCatalogPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const skuRows = buildSkuRows();
  const totalSkuCount = skuRows.length;

  return (
    <SiteLayout>
      <SeoHead
        title={`Catalog — All ${totalSkuCount} SKUs | ZENOK Taiwan`}
        description={`Full searchable ZENOK catalog. All ${totalSkuCount} SKUs across flat, ball nose, corner radius and aluminum end mills. Filter by geometry, search by diameter or construction. Taiwan 4.8% MFN duty.`}
        canonicalPath="/products/catalog"
        schema={catalogSchema}
        keywords={["ZENOK catalog", "carbide end mill catalog", "Taiwan tools", "SKU list"]}
      />

      {/* Back to Products */}
      <div className="border-b border-line bg-bg-2">
        <div className="container-wrap py-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel hover:text-blue"
          >
            <ArrowLeft className="size-3" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Page hero */}
      <section className="relative border-b border-line pt-16 pb-14 lg:pt-20 lg:pb-16">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Catalog
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              Catalog
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              Every active ZENOK SKU in one searchable table — {totalSkuCount} models across four geometry families. Filter by category, search by model number, diameter, or construction type.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Table */}
      <section className="relative bg-bg-2 py-14 lg:py-16">
        <div className="container-wrap">
          <Reveal>
            <SkuFilterableTable
              skus={skuRows}
              totalLabel={`${totalSkuCount} total in catalog`}
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-xs text-steel">
              <strong className="text-graphite-soft">Column legend:</strong> D = diameter, l = cut length, L = overall length, d = shank diameter. All dimensions in millimeters. Construction: B = composite (SS shank + carbide tip), C = solid carbide (SS308).
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 text-center lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <h2
              className="mx-auto max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.05]"
              style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
            >
              Found what you need?
              <br />
              <span className="text-blue">Get a formal quote.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
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

export { ProductsCatalogPage };
