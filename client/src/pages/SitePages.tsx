/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Every page should read like a high-precision tooling dossier with clear procurement logic.
- Use asymmetrical composition, dimensional evidence, and technical labeling before marketing language.
- Maintain high contrast, measured motion, and disciplined catalog-style hierarchy throughout.
*/
import { type ReactNode, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link, useLocation, useRoute } from "wouter";
import {
  AlertTriangle,
  Boxes,
  Building2,
  CircleDollarSign,
  Factory,
  Filter,
  Microscope,
  Orbit,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SeoHead } from "@/components/site/SeoHead";
import { SiteLayout } from "@/components/site/SiteLayout";
import { DataPill, InsightCard, SectionHeading } from "@/components/site/SectionPrimitives";
import { taderData, type SkuRecord } from "@/data/taderData";
import {
  filterSkus,
  formatMillimeter,
  getApplication,
  getCategoryBySlug,
  getFamiliesByCategory,
  getRelatedSkus,
  getSkuBySlug,
  getSkusByCategory,
  productSchema,
  productTitle,
} from "@/lib/catalog";

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZENOK",
  parentOrganization: {
    "@type": "Organization",
    name: "ZENOK",
  },
  url: typeof window !== "undefined" ? window.location.origin : "",
  slogan: "Micro-Precision End Mills Built for Demanding Applications",
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ZENOK Carbide End Mills & Cutting Tools",
  numberOfItems: taderData.skus.length,
  itemListElement: taderData.categoryPages
    .filter((category) => category.skuCount > 0)
    .map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.label,
      url: typeof window !== "undefined" ? `${window.location.origin}${category.route}` : category.route,
    })),
};

const STANDARD_FLUTE_OPTIONS = [2, 3, 4, 5, 6] as const;
const STANDARD_SCOPE_NOTE = "Standard production covers tool diameters up to 3.0 mm and shank diameters below 6.0 mm. A 1/8 inch (3.175 mm) shank is handled as custom MOQ only.";
const PROGRAM_STATUS_NOTE = "Composite carbide-to-carbide programs outside the current B/C catalog are not in standard production and should be handled as special review only.";

const categoryCards = taderData.categoryPages.filter((category) => category.skuCount > 0);
const technologyTopicIcons = [Building2, ShieldCheck, Boxes, Microscope, Factory] as const;
const aboutTopicIcons = [CircleDollarSign, Boxes, Factory] as const;

function DutyComparisonChart() {
  const comparisonRows = [
    {
      label: "China origin (HTS 8207.70)",
      subLabel: "MFN ~5% + Section 301 +25%",
      value: 30,
      barClassName: "bg-[#8b6f63]",
    },
    {
      label: "Taiwan origin — ZENOK (HTS 8207.70)",
      subLabel: "MFN 4.8%, no Section 301",
      value: 4.8,
      barClassName: "bg-cobalt",
    },
  ] as const;

  return (
    <div className="space-y-3 border border-black/8 bg-[#f6f7fb] p-4">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-steel-400">
        <span>Duty comparison</span>
        <span>0%–35%</span>
      </div>
      <div className="space-y-4">
        {comparisonRows.map((row) => (
          <div key={row.label} className="space-y-2">
            <div className="flex items-start justify-between gap-3 text-[12px] leading-5 text-steel-400">
              <div>
                <p className="font-medium text-graphite">{row.label}</p>
                <p>{row.subLabel}</p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-graphite">{row.value}%</span>
            </div>
            <div className="h-2.5 bg-white">
              <div className={`h-full ${row.barClassName}`} style={{ width: `${(row.value / 35) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] leading-6 text-steel-400">
        Duty rates as of 2026. Section 301 List 1 imposes a 25% additional duty on Chinese-origin cutting tools under HTS 8207.70, on top of the standard MFN rate. Taiwan-origin imports pay only the 4.8% MFN rate.
      </p>
    </div>
  );
}

type CatalogViewProps = {
  categorySlug?: string;
  pageTitle: string;
  pageDescription: string;
  canonicalPath: string;
};

function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  image: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  primaryStyle?: "solid" | "outline";
}) {
  return (
    <section className="border-b border-black/8">
      <div className="container grid gap-8 py-10 lg:grid-cols-[1.2fr_0.85fr] lg:py-14">
        <div className="flex min-h-[32rem] flex-col justify-center gap-12">
          <div className="space-y-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-cobalt/85">{eyebrow}</p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-graphite sm:text-6xl xl:text-7xl">
                {title}
              </h1>
              <div className="max-w-2xl text-base leading-8 text-steel-300 xl:text-lg">{description}</div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border border-black/8 bg-white/88 shadow-[0_28px_60px_rgba(15,23,42,0.08)]">
          <img src={image} alt={title} className="h-full min-h-[26rem] w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,18,0.08),rgba(11,15,18,0.72))]" />
          <div className="absolute inset-x-0 bottom-0 grid gap-4 border-t border-black/8 bg-black/30 p-6 backdrop-blur-sm sm:grid-cols-2">
            {taderData.siteMeta.heroHighlights.map((item) => (
              <div key={item.label} className="border-l border-cobalt/60 pl-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-steel-300">{item.label}</p>
                <p className="mt-2 font-display text-2xl text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogFilterPanel({
  categorySlug,
  search,
  setSearch,
  activeFlutes,
  toggleFlute,
  activeConstructions,
  toggleConstruction,
  activeSubTypes,
  toggleSubType,
  activeSeries,
  toggleSeries,
}: {
  categorySlug?: string;
  search: string;
  setSearch: (value: string) => void;
  activeFlutes: number[];
  toggleFlute: (value: number) => void;
  activeConstructions: string[];
  toggleConstruction: (value: string) => void;
  activeSubTypes: string[];
  toggleSubType: (value: string) => void;
  activeSeries: string[];
  toggleSeries: (value: string) => void;
}) {
  const families = categorySlug
    ? getFamiliesByCategory(categorySlug)
    : taderData.productFamilies.filter((family) => typeof family.category === "string");
  const availableFlutes = [...STANDARD_FLUTE_OPTIONS];
  const availableSubTypes = Array.from(
    new Set(families.map((family) => family.sub_type).filter((value): value is string => typeof value === "string" && value.length > 0)),
  );
  const availableSeries = families.map((family) => ({
    value: family.series,
    label: `${family.series} · ${family.line_name}`,
  }));

  const FilterButton = ({
    active,
    label,
    onClick,
  }: {
    active: boolean;
    label: string;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-none border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
        active
          ? "border-cobalt bg-cobalt text-white"
          : "border-black/10 bg-white/84 text-steel-500 hover:border-cobalt/40 hover:text-graphite"
      }`}
    >
      {label}
    </button>
  );

  return (
    <aside className="space-y-8 border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between border-b border-black/8 pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cobalt/80">Filter Catalog</p>
          <p className="mt-2 text-sm text-steel-500">By flute count, construction, configuration, or ZENOK line code.</p>
        </div>
        <Filter className="size-4 text-steel-400" />
      </div>

      <div className="space-y-3">
        <label className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-300">Search SKU / model / line code</label>
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search ZENOK SKU, model no., or family code"
          className="rounded-none border-black/10 bg-[#f6f7fb] text-graphite placeholder:text-steel-400"
        />
      </div>

      <div className="space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-300">Flutes</p>
        <div className="flex flex-wrap gap-2">
          {availableFlutes.map((value) => (
            <FilterButton key={value} active={activeFlutes.includes(value)} label={`${value}F`} onClick={() => toggleFlute(value)} />
          ))}
        </div>
        <p className="text-xs leading-6 text-steel-400">
          The live standard catalog currently lists 2F, 3F, and 4F tools. 5F and 6F requests should be reviewed as program-specific RFQ cases.
        </p>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-300">Construction</p>
        <div className="flex flex-wrap gap-2">
          {[
            ["B", "B / Carbide Tipped"],
            ["C", "C / Solid Carbide"],
          ].map(([value, label]) => (
            <FilterButton
              key={value}
              active={activeConstructions.includes(value)}
              label={label}
              onClick={() => toggleConstruction(value)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-300">Configuration</p>
        <div className="flex flex-wrap gap-2">
          {availableSubTypes.map((value) => (
            <FilterButton
              key={value}
              active={activeSubTypes.includes(value)}
              label={value}
              onClick={() => toggleSubType(value)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-300">ZENOK line code</p>
        <div className="flex flex-wrap gap-2">
          {availableSeries.map((item) => (
            <FilterButton
              key={item.value}
              active={activeSeries.includes(item.value)}
              label={item.label}
              onClick={() => toggleSeries(item.value)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

function CatalogTable({ items }: { items: SkuRecord[] }) {
  return (
    <div className="overflow-hidden border border-black/8 bg-white/82 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm text-steel-500">
          <thead className="bg-[#eef1f7] font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">
            <tr>
              <th className="px-4 py-3">Product family</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Dia.</th>
              <th className="px-4 py-3">R</th>
              <th className="px-4 py-3">l</th>
              <th className="px-4 py-3">l1</th>
              <th className="px-4 py-3">L</th>
              <th className="px-4 py-3">d</th>
              <th className="px-4 py-3">B / C</th>
            </tr>
          </thead>
          <tbody>
            {items.map((sku) => (
              <tr key={sku.slug} className="border-t border-black/8 transition-colors duration-200 hover:bg-[#f8f4ee]">
                <td className="px-4 py-4 font-medium text-graphite">{sku.line_name}</td>
                <td className="px-4 py-4 font-mono text-[12px] uppercase tracking-[0.08em] text-steel-300">{sku.catalog_sku}</td>
                <td className="px-4 py-4">{formatMillimeter(sku.diameter_mm)}</td>
                <td className="px-4 py-4">{formatMillimeter(sku.radius_mm)}</td>
                <td className="px-4 py-4">{formatMillimeter(sku.cut_length_mm)}</td>
                <td className="px-4 py-4">{formatMillimeter(sku.effective_length_mm)}</td>
                <td className="px-4 py-4">{formatMillimeter(sku.overall_length_mm)}</td>
                <td className="px-4 py-4">{formatMillimeter(sku.shank_diameter_mm)}</td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-2">
                    {sku.construction_options.map((option) => (
                      <Badge
                        key={option}
                        className="rounded-none border border-cobalt/30 bg-cobalt/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-cobalt"
                      >
                        {option}
                      </Badge>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductFamilyGrid({ categorySlug }: { categorySlug?: string }) {
  const families = categorySlug
    ? getFamiliesByCategory(categorySlug)
    : taderData.productFamilies.filter((family) => typeof family.category === "string" && family.category_slug);

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {families.map((family) => (
        <InsightCard
          key={`${family.series}-${family.category_slug}`}
          index={family.series}
          title={family.line_name}
          description={`${family.intro} Diameter ${family.diameter_range_mm[0] ?? "—"} to ${family.diameter_range_mm[1] ?? "—"} mm.`}
          href={categorySlug ? undefined : family.route}
          ctaLabel={categorySlug ? undefined : "Open category"}
        >
          <div className="grid gap-2 pt-2 text-sm text-steel-300">
            <DataPill label="Flutes" value={family.flutes ? `${family.flutes}` : "—"} />
            <DataPill label="Construction" value={String(family.construction)} />
            <DataPill label="SKUs" value={`${family.skuCount}`} />
          </div>
        </InsightCard>
      ))}
    </div>
  );
}

function CatalogView({ categorySlug, pageTitle, pageDescription, canonicalPath }: CatalogViewProps) {
  const [search, setSearch] = useState("");
  const [activeFlutes, setActiveFlutes] = useState<number[]>([]);
  const [activeConstructions, setActiveConstructions] = useState<string[]>([]);
  const [activeSubTypes, setActiveSubTypes] = useState<string[]>([]);
  const [activeSeries, setActiveSeries] = useState<string[]>([]);

  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const baseSkus = categorySlug ? getSkusByCategory(categorySlug) : taderData.skus;

  const filtered = useMemo(() => {
    const filteredSkus = filterSkus({
      category: categorySlug,
      flutes: activeFlutes,
      constructions: activeConstructions,
      subTypes: activeSubTypes,
      series: activeSeries,
    });

    return filteredSkus.filter((sku) => {
      if (!search.trim()) return true;
      const query = search.toLowerCase();
      return (
        sku.catalog_sku.toLowerCase().includes(query) ||
        sku.model_no.toLowerCase().includes(query) ||
        sku.series.toLowerCase().includes(query) ||
        sku.line_name.toLowerCase().includes(query) ||
        sku.type_label.toLowerCase().includes(query)
      );
    });
  }, [activeConstructions, activeFlutes, activeSeries, activeSubTypes, categorySlug, search]);

  const toggleListValue = <T extends string | number>(value: T, list: T[], setter: (next: T[]) => void) => {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  return (
    <SiteLayout>
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        schema={productListSchema}
        keywords={["micro end mills", "Taiwan carbide tools", "4.8% duty", "CNC cutting tools"]}
      />
      <PageHero
        eyebrow={category ? `Products / ${category.label}` : "Products"}
        title={category ? category.label : "Micro Carbide End Mills & Cutting Tools"}
        description={
          category
            ? `${category.description} Review the active product lines below, then move into the category-specific SKU table for dimensional comparison and feasibility screening.`
            : "Start from the geometry family that matches the machining problem. Each family card leads to a dedicated category page with product-line structure and category-only specification tables."
        }
        image={taderData.siteMeta.blueprintImage}
      />

      {!category ? (
        <section className="container space-y-10 py-14 lg:py-20">
          <SectionHeading
            eyebrow="Geometry Families"
            title="Select the geometry family first, then open the corresponding category page."
            description="This overview page is intentionally simplified for buyer decision flow. Review the four active geometry families, then continue into the matching Layer 2 category page for product lines and specification tables."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categoryCards.map((categoryCard, index) => (
              <InsightCard
                key={categoryCard.slug}
                index={`${String(index + 1).padStart(2, "0")}`}
                title={categoryCard.label}
                description={`${categoryCard.description} ${categoryCard.skuCount} SKUs in current site data.`}
                href={categoryCard.route}
                ctaLabel="Open category"
              >
                <div className="pt-1">
                  <DataPill label="Diameter range" value={`${categoryCard.diameterRangeMm[0] ?? "—"}–${categoryCard.diameterRangeMm[1] ?? "—"} mm`} />
                </div>
              </InsightCard>
            ))}
          </div>
        </section>
      ) : (
        <>
          <section className="container space-y-10 py-14 lg:py-20">
            <Link href="/products" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400 transition-colors duration-200 hover:text-graphite">
              <span className="h-px w-6 bg-current" />
              Back to Products
            </Link>
            <SectionHeading
              eyebrow="Product Line Access"
              title={`Review the active ${category.label.toLowerCase()} product lines.`}
              description="Only the product lines within this geometry family are shown here, so buyers can move from family-level selection to dimension review without cross-category noise."
            />
            <ProductFamilyGrid categorySlug={categorySlug} />
          </section>

          <section className="container space-y-12 border-t border-black/8 py-14 lg:py-20">
            <SectionHeading
              eyebrow="Structured Catalog"
              title={`${category.label} specification table`}
              description="This table is filtered to the current geometry family only. Use search and line-level filters to compare dimensions, radii, overall reach, shank diameter, and B/C construction availability."
            />

            <div className="grid gap-4 border border-black/8 bg-[#f6f1e9] p-6 text-sm leading-7 text-steel-400 shadow-[0_20px_44px_rgba(15,23,42,0.04)] lg:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt/80">Standard production scope</p>
                <p className="mt-3">{STANDARD_SCOPE_NOTE}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt/80">Program status</p>
                <p className="mt-3">{PROGRAM_STATUS_NOTE}</p>
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[340px_minmax(0,1fr)]">
              <CatalogFilterPanel
                categorySlug={categorySlug}
                search={search}
                setSearch={setSearch}
                activeFlutes={activeFlutes}
                toggleFlute={(value) => toggleListValue(value, activeFlutes, setActiveFlutes)}
                activeConstructions={activeConstructions}
                toggleConstruction={(value) => toggleListValue(value, activeConstructions, setActiveConstructions)}
                activeSubTypes={activeSubTypes}
                toggleSubType={(value) => toggleListValue(value, activeSubTypes, setActiveSubTypes)}
                activeSeries={activeSeries}
                toggleSeries={(value) => toggleListValue(value, activeSeries, setActiveSeries)}
              />

              <div className="space-y-8">
                <CatalogTable items={filtered.slice(0, 120)} />
                {filtered.length > 120 ? (
                  <p className="text-sm text-steel-400">Showing first 120 filtered SKUs for scanning speed. Narrow the filter set to isolate a tighter comparison list.</p>
                ) : null}
              </div>
            </div>
          </section>
        </>
      )}
    </SiteLayout>
  );
}

export function HomePageLegacy() {
  const isMobile = useIsMobile();

  return (
    <SiteLayout>
      <SeoHead
        title="ZENOK — Taiwan Micro Cutting Tool Cost-Down Partner | 4.8% MFN Duty"
        description="Submit your CNC micro tooling specs and target price. ZENOK evaluates feasibility and delivers a cost-down proposal within 2 business days. Taiwan-made carbide end mills, 0.1–3.0 mm, 4.8% MFN duty advantage."
        canonicalPath="/"
        schema={homepageSchema}
        keywords={["micro end mills", "Taiwan carbide tools", "4.8% duty"]}
      />

      <PageHero
        eyebrow="Micro Precision Tooling"
        title={taderData.siteMeta.heroTitle}
        description={
          isMobile ? (
            <p>Submit your specs and target price. Cost-down proposal within 2 business days.</p>
          ) : (
            <p>{taderData.siteMeta.heroSubtitle}</p>
          )
        }
        image={taderData.siteMeta.heroImage}
        primaryHref={taderData.siteMeta.primaryCta.href}
        primaryLabel={taderData.siteMeta.primaryCta.label}
        primaryStyle="outline"
        secondaryHref={taderData.siteMeta.secondaryCta.href}
        secondaryLabel={taderData.siteMeta.secondaryCta.label}
      />

      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Commercial USP"
          title="Taiwan MFN 4.8% duty advantage paired with cost-down proposal discipline."
          description="ZENOK is positioned for U.S. industrial buyers who need a cost-down partner, not another undifferentiated product catalog. Every page now supports one workflow: submit specs, set a target price, and receive a feasibility-backed proposal within 2 business days."
        />
      </section>

      <section className="container space-y-10 border-t border-black/8 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Three-Step Process"
          title="How the cost-down request workflow moves from specs to proposal."
          description="ZENOK starts from your production context and commercial target rather than a generic catalog pitch. Share the key program inputs and the engineering team evaluates whether Taiwan-made micro tooling can meet the cost objective."
        />
        <div className="grid gap-px border border-black/8 bg-black/8 lg:grid-cols-3">
          <div className="bg-white/92 p-7 lg:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/82">Step 1</p>
            <h3 className="mt-4 font-display text-3xl text-graphite">Share Your Specs</h3>
            <p className="mt-4 text-sm leading-7 text-steel-400">Submit tool type, dimensions, current price, and monthly volume.</p>
          </div>
          <div className="bg-[#f6f7fb] p-7 lg:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/82">Step 2</p>
            <h3 className="mt-4 font-display text-3xl text-graphite">We Evaluate Feasibility</h3>
            <p className="mt-4 text-sm leading-7 text-steel-400">Our engineering team reviews against our Taiwan carbide production.</p>
          </div>
          <div className="bg-white/92 p-7 lg:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/82">Step 3</p>
            <h3 className="mt-4 font-display text-3xl text-graphite">Receive Cost-Down Proposal</h3>
            <p className="mt-4 text-sm leading-7 text-steel-400">You get a written proposal within 2 business days — no obligation.</p>
          </div>
        </div>
      </section>

      <section className="container space-y-10 border-t border-black/8 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Quick Product Entry"
          title="Start from the geometry family that matches the machining problem."
          description="The catalog is grouped around flat, ball nose, corner radius, and aluminum-specific geometries so engineering teams can move from family selection to SKU-level specification without ambiguity."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categoryCards.map((category, index) => (
            <InsightCard
              key={category.slug}
              index={`${String(index + 1).padStart(2, "0")}`}
              title={category.label}
              description={`${category.description} ${category.skuCount} SKUs in current site data.`}
              href={category.route}
              ctaLabel="Open category"
            >
              <div className="pt-1">
                <DataPill label="Diameter range" value={`${category.diameterRangeMm[0] ?? "—"}–${category.diameterRangeMm[1] ?? "—"} mm`} />
              </div>
            </InsightCard>
          ))}
        </div>
      </section>

      <section className="container space-y-10 border-t border-black/8 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Target Industries"
          title="Cost-down evaluation starts from production context, not generic catalog selection."
          description="Medical, aerospace, and electronics programs each carry different risk tolerances and tooling consumption patterns. ZENOK's cost-down evaluation starts from your production context — material, feature size, tolerance, and current spend — not from a generic catalog selection."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {taderData.applications.map((application, index) => (
            <article key={application.slug} className="group relative overflow-hidden border border-black/8 bg-white/88 shadow-[0_20px_44px_rgba(15,23,42,0.08)]">
              <img src={application.image} alt={application.title} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,18,0.08),rgba(11,15,18,0.82))]" />
              <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/80">0{index + 1}</p>
                <h3 className="font-display text-3xl text-white">{application.title}</h3>
                <p className="text-sm leading-7 text-steel-200">{application.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10 border-t border-black/8 py-14 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/82">Technology Focus</p>
            <h2 className="font-display text-4xl leading-tight text-graphite lg:text-5xl">
              Construction logic, coating fit, and supply-chain economics made explicit.
            </h2>
            <p className="max-w-xl text-base leading-8 text-steel-500">
              The technology page explains how ZENOK turns holder constraints, coating selection, and Taiwan sourcing economics into proposals that are technically sound and commercially realistic.
            </p>
          </div>
          <div className="overflow-hidden border border-black/8 shadow-[0_20px_44px_rgba(15,23,42,0.08)]">
            <img src={taderData.siteMeta.blueprintImage} alt="Micro tooling technology blueprint" className="h-full min-h-[28rem] w-full object-cover" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function ProductsPage() {
  return (
    <CatalogView
      pageTitle="Carbide End Mills & Cutting Tools | ZENOK"
      pageDescription="Browse ZENOK carbide end mills and cutting tools, filter by geometry and construction, and move from family overview to SKU-level dimensions."
      canonicalPath="/products"
    />
  );
}

function CategoryCatalogPage({ categorySlug }: { categorySlug: string }) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return <ProductsPage />;

  return (
    <CatalogView
      categorySlug={categorySlug}
      pageTitle={`${category.label} | ZENOK`}
      pageDescription={`${category.description} Review product-line structure, filter active SKUs, and move to quote-ready dimensional detail.`}
      canonicalPath={category.route}
    />
  );
}

export function FlatEndMillsPage() {
  return <CategoryCatalogPage categorySlug="flat-end-mills" />;
}

export function BallNoseEndMillsPage() {
  return <CategoryCatalogPage categorySlug="ball-nose-end-mills" />;
}

export function CornerRadiusEndMillsPage() {
  return <CategoryCatalogPage categorySlug="corner-radius-end-mills" />;
}

export function AluminumEndMillsPage() {
  return <CategoryCatalogPage categorySlug="aluminum-end-mills" />;
}

export function CarbideRodsPage() {
  return <CategoryCatalogPage categorySlug="carbide-rods" />;
}

export function ProductDetailPage() {
  const [, params] = useRoute("/products/:slug");
  const slug = params?.slug ?? "";
  const sku = getSkuBySlug(slug);

  if (!sku) {
    return (
      <SiteLayout>
        <SeoHead title="Product Not Found | ZENOK" description="The requested product could not be found." canonicalPath="/products" noIndex />
        <section className="container py-24">
          <h1 className="font-display text-4xl text-graphite">Product not found</h1>
        </section>
      </SiteLayout>
    );
  }

  const related = getRelatedSkus(sku);
  const family = taderData.productFamilies.find((item) => item.series === sku.series);

  return (
    <SiteLayout>
      <SeoHead
        title={productTitle(sku)}
        description={`${sku.type_label} with ${sku.flutes ?? "—"} flutes. Dimensions D ${formatMillimeter(sku.diameter_mm)}, l ${formatMillimeter(sku.cut_length_mm)}, L ${formatMillimeter(sku.overall_length_mm)}. ZENOK line ${sku.series} / ${sku.line_name}.`}
        canonicalPath={`/products/${sku.slug}`}
        schema={productSchema(sku)}
      />

      <section className="container space-y-10 py-14 lg:py-20">
        <div className="grid gap-8 border-b border-black/8 pb-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/82">SKU Detail / {sku.type_label}</p>
              <h1 className="font-display text-5xl leading-[0.94] text-graphite lg:text-6xl">
                {sku.diameter_mm} mm {sku.type_label}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-steel-300">
                ZENOK line {sku.series} / {sku.line_name}. Built for demanding micro-machining programs where dimensional readability and holder compatibility matter before commitment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-none border border-cobalt/30 bg-cobalt/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cobalt">
                SKU {sku.catalog_sku}
              </Badge>
              <Badge className="rounded-none border border-black/8 bg-[#f5f1ea] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel-500">
                Model {sku.model_no}
              </Badge>
              {sku.construction_options.map((option) => (
                <Badge key={option} className="rounded-none border border-black/8 bg-[#f5f1ea] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
                  Construction {option}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4 border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cobalt/80">Commercial Scope</p>
            <p className="text-sm leading-7 text-steel-500">
              {STANDARD_SCOPE_NOTE}
            </p>
            <div className="border border-black/8 bg-[#f7f3ec] p-4 text-sm leading-7 text-steel-400">
              1/8 inch shank requests are custom MOQ only. If this program needs non-standard shank geometry or a discontinued composite construction, note it in the RFQ form for manual review.
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between border-b border-black/8 pb-4">
              <h2 className="font-display text-3xl text-graphite">Specification Table</h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">D / R / l / l1 / L / d</p>
            </div>
            <div className="grid gap-px border border-black/8 bg-black/8 sm:grid-cols-2 xl:grid-cols-3">
              <div className="bg-white/88 p-5"><DataPill label="D" value={formatMillimeter(sku.diameter_mm)} /></div>
              <div className="bg-white/88 p-5"><DataPill label="R" value={formatMillimeter(sku.radius_mm)} /></div>
              <div className="bg-white/88 p-5"><DataPill label="l" value={formatMillimeter(sku.cut_length_mm)} /></div>
              <div className="bg-white/88 p-5"><DataPill label="l1" value={formatMillimeter(sku.effective_length_mm)} /></div>
              <div className="bg-white/88 p-5"><DataPill label="L" value={formatMillimeter(sku.overall_length_mm)} /></div>
              <div className="bg-white/88 p-5"><DataPill label="d" value={formatMillimeter(sku.shank_diameter_mm)} /></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
              <h2 className="font-display text-2xl text-graphite">Construction Notes</h2>
              <div className="mt-5 space-y-2 text-sm leading-7 text-steel-300">
                <DataPill label="B" value="Carbide Tipped" />
                <DataPill label="C" value="Full Solid Carbide" />
                <DataPill label="ZENOK line" value={family ? `${family.series} · ${family.line_name}` : `${sku.series} · ${sku.line_name}`} />
              </div>
            </div>

            {sku.has_b ? (
              <div className="border border-[#6f4d38] bg-[#221712] p-6 text-[#f1d7c6]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 size-5 text-cobalt-soft" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt-soft">Important Notice</p>
                    <p className="mt-3 text-sm leading-7">
                      B-type construction is <strong>not compatible with shrink-fit</strong> toolholders. Confirm holder strategy before ordering.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <section className="space-y-8 border-t border-black/8 pt-10">
          <SectionHeading
            eyebrow="Related SKUs"
            title="Compare nearby options within the same ZENOK line before finalizing the tool list."
            description="Adjacent SKUs within the same ZENOK line can help evaluate alternate diameters, effective lengths, or holder compatibility options for the same application path."
          />
          <CatalogTable items={related} />
        </section>
      </section>
    </SiteLayout>
  );
}

export function ApplicationsPage() {
  return (
    <SiteLayout>
      <SeoHead
        title="Medical, Aerospace & Electronics Micro Tooling Cost-Down | ZENOK"
        description="Cost-down micro tooling for medical, aerospace, and electronics CNC programs. Submit your specs and current spend — proposal within 2 business days."
        canonicalPath="/applications"
      />
      <PageHero
        eyebrow="Applications"
        title="Production context first. Proposal logic second. Catalog third."
        description={<p>Tell us your machining challenge and target cost. We'll evaluate whether our Taiwan-made micro tooling can deliver a cost-down solution for your program.</p>}
        image={taderData.siteMeta.heroImage}
        primaryHref={taderData.siteMeta.inquiryFormUrl}
        primaryLabel={taderData.siteMeta.primaryCta.label}
        primaryStyle="outline"
        secondaryHref={taderData.siteMeta.secondaryCta.href}
        secondaryLabel={taderData.siteMeta.secondaryCta.label}
      />
      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Industry Context"
          title="Evaluate cost-down potential by machining environment."
          description="Medical, aerospace, and electronics programs each carry different risk tolerances and tooling consumption patterns. ZENOK's cost-down evaluation starts from your production context — material, feature size, tolerance, and current spend — not from a generic catalog selection."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {taderData.applications.map((application, index) => (
            <article key={application.slug} className="overflow-hidden border border-black/8 bg-white/90 shadow-[0_20px_44px_rgba(15,23,42,0.08)]">
              <img src={application.image} alt={application.title} className="aspect-[4/3] w-full object-cover" />
              <div className="space-y-4 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/80">0{index + 1}</p>
                <h3 className="font-display text-3xl text-graphite">{application.title}</h3>
                <p className="text-sm leading-7 text-steel-300">{application.description}</p>
                <div className="space-y-3 pt-2 text-sm leading-7 text-steel-300">
                  {application.focus.map((point) => (
                    <p key={point}>• {point}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function ApplicationDetailView() {
  return <ApplicationsPage />;
}

export function MedicalPage() {
  return <ApplicationDetailView />;
}

export function AerospacePage() {
  return <ApplicationDetailView />;
}

export function ElectronicsPage() {
  return <ApplicationDetailView />;
}

export function TechnologyPage() {
  return (
    <SiteLayout>
      <SeoHead
        title="Construction, Coating & Carbide Sourcing Logic | ZENOK"
        description="How ZENOK builds technically sound, cost-competitive micro tooling proposals: B vs C construction, coating selection, Taiwan 4.8% MFN advantage, vertical carbide supply chain."
        canonicalPath="/technology"
      />
      <PageHero
        eyebrow="Technology"
        title="Construction logic that enables cost-down proposals."
        description={<p>Understanding B vs C construction, coating selection, and Taiwan sourcing economics is how ZENOK builds proposals that are technically sound and cost-competitive.</p>}
        image={taderData.siteMeta.blueprintImage}
        primaryHref={taderData.siteMeta.inquiryFormUrl}
        primaryLabel={taderData.siteMeta.primaryCta.label}
        primaryStyle="outline"
        secondaryHref={taderData.siteMeta.secondaryCta.href}
        secondaryLabel={taderData.siteMeta.secondaryCta.label}
      />
      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Engineering Topics"
          title="The site makes technical trade-offs explicit before the proposal is submitted."
          description="B vs C construction, Taiwan duty positioning, coating selection, and carbide supply-chain economics are framed as decision variables buyers can use before opening the form."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {taderData.technologyTopics.map((topic, index) => {
            const Icon = technologyTopicIcons[index] ?? Building2;

            return (
              <article key={topic.id} className="space-y-5 border border-black/8 bg-white/90 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
                <Icon className="size-9 text-cobalt-soft" strokeWidth={1.8} />
                <div className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt/80">0{index + 1}</p>
                  <h3 className="font-display text-3xl text-graphite">{topic.title}</h3>
                  <p className="text-sm leading-7 text-steel-300">{topic.summary}</p>
                </div>
                {index === 1 ? <DutyComparisonChart /> : null}
                <div className="space-y-3 pt-1 text-sm leading-7 text-steel-300">
                  {topic.points.map((point) => (
                    <p key={point}>• {point}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}

export function AboutPage() {
  return (
    <SiteLayout>
      <SeoHead
        title="About | ZENOK"
        description="Learn about ZENOK, its disciplined micro-tool manufacturing capability, and its production positioning for U.S. buyers."
        canonicalPath="/about"
      />
      <PageHero
        eyebrow="About ZENOK"
        title="A cost-down partner built around disciplined micro-tool production."
        description={<p>ZENOK positions micro-tooling around feasibility, target price, and response speed so buyers can move from machining challenge to commercial proposal without a long sourcing cycle.</p>}
        image={taderData.siteMeta.heroImage}
        primaryHref={taderData.siteMeta.inquiryFormUrl}
        primaryLabel={taderData.siteMeta.primaryCta.label}
        primaryStyle="outline"
        secondaryHref={taderData.siteMeta.secondaryCta.href}
        secondaryLabel={taderData.siteMeta.secondaryCta.label}
      />
      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Company Profile"
          title="Vertical integration is positioned as the commercial basis for credible cost-down proposals."
          description="The site frames ZENOK's advantage through disciplined process control, carbide supply access, and manufacturing scope that supports realistic pricing on specialized micro programs."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {taderData.aboutSections.map((section, index) => {
            const Icon = aboutTopicIcons[index] ?? Factory;

            return (
              <article key={section.title} className="space-y-5 border border-black/8 bg-white/90 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
                <Icon className="size-9 text-cobalt-soft" strokeWidth={1.8} />
                <div className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt/80">0{index + 1}</p>
                  <h3 className="font-display text-3xl text-graphite">{section.title}</h3>
                  <p className="text-sm leading-7 text-steel-300">{section.body}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="grid gap-px border border-black/8 bg-black/8 md:grid-cols-3">
          <div className="bg-white/88 p-7"><Factory className="size-7 text-cobalt-soft" /><p className="mt-4 text-sm leading-7 text-steel-300">Manufacturing capability aligned to micro-diameter, long-neck, and application-specific carbide tooling.</p></div>
          <div className="bg-white/88 p-7"><Boxes className="size-7 text-cobalt-soft" /><p className="mt-4 text-sm leading-7 text-steel-300">Integrated product architecture spanning flat, ball nose, corner radius, and aluminum product lines.</p></div>
          <div className="bg-white/88 p-7"><CircleDollarSign className="size-7 text-cobalt-soft" /><p className="mt-4 text-sm leading-7 text-steel-300">Pricing moat narrative supported by Taiwan-origin sourcing position and disciplined micro-tool production scope.</p></div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function QuoteRequestPage() {
  return (
    <SiteLayout>
      <SeoHead
        title="Request a Quote | ZENOK"
        description="Submit your tooling specs, target price, and production context through the external inquiry form. ZENOK evaluates feasibility and responds with a cost-down proposal within 2 business days."
        canonicalPath="/quote-request"
      />
      <PageHero
        eyebrow="Request a Quote"
        title="Submit your specs and target price through the existing inquiry workflow."
        description={<p>This branded handoff keeps your current email notification and spreadsheet intake unchanged while guiding buyers into the dedicated external form for cost-down review.</p>}
        image={taderData.siteMeta.blueprintImage}
        primaryHref={taderData.siteMeta.inquiryFormUrl}
        primaryLabel={taderData.siteMeta.primaryCta.label}
        primaryStyle="outline"
        secondaryHref={taderData.siteMeta.secondaryCta.href}
        secondaryLabel={taderData.siteMeta.secondaryCta.label}
      />
      <section className="container grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="space-y-6 border border-black/8 bg-white/82 p-8 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
          <h2 className="font-display text-4xl text-graphite">What to prepare before opening the form</h2>
          <div className="space-y-4 text-sm leading-8 text-steel-300">
            <p>Include tool type, SKU or model number if your selection is already narrowed.</p>
            <p>State the workpiece material, feature size, tolerance expectation, and current tooling price target.</p>
            <p>Clarify monthly volume, expected timing, and whether B or C construction guidance is part of the evaluation.</p>
            <p>Call out holder constraints, especially if shrink-fit compatibility must be confirmed before proposal.</p>
          </div>
          <div className="border border-black/8 bg-[#f7f3ec] p-5 text-sm leading-7 text-steel-400">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt/80">Program scope reminder</p>
            <p className="mt-3">{STANDARD_SCOPE_NOTE}</p>
            <p className="mt-3">{PROGRAM_STATUS_NOTE}</p>
          </div>
          <div className="border border-cobalt/25 bg-cobalt/8 p-5 text-sm leading-7 text-steel-500">
            This route hands off to the existing external inquiry form so your current email notification and spreadsheet logging workflow can stay unchanged while buyers submit specs and target price in one place.
          </div>
        </div>
        <div className="border border-black/8 bg-white/88 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt/80">Current workflow</p>
              <h2 className="mt-3 font-display text-4xl text-graphite">Continue in the dedicated multi-step inquiry form</h2>
              <p className="mt-4 text-sm leading-7 text-steel-300">
                The external form already matches your intake process, sends notifications to the current mailbox, and keeps responses organized in the existing spreadsheet workflow. Opening it in a new tab preserves the catalog session so buyers can compare SKUs, add target price, and return without losing context.
              </p>
            </div>
            <div className="grid gap-px border border-black/8 bg-black/8 md:grid-cols-2">
              <div className="bg-[#f6f7fb] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Step 1</p>
                <p className="mt-3 text-sm leading-7 text-steel-300">Buyer contact, company name, industry, and current tooling brand.</p>
              </div>
              <div className="bg-[#f6f7fb] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Step 2</p>
                <p className="mt-3 text-sm leading-7 text-steel-300">Tool list, comparison basis, and dimensional references for the requested program.</p>
              </div>
              <div className="bg-[#f6f7fb] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Step 3</p>
                <p className="mt-3 text-sm leading-7 text-steel-300">Application requirements, material, tolerance concerns, and special holder notes.</p>
              </div>
              <div className="bg-[#f6f7fb] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Step 4</p>
                <p className="mt-3 text-sm leading-7 text-steel-300">Submission confirmation through the existing inquiry workflow already tied to your notifications.</p>
              </div>
            </div>
            <div className="border-t border-black/8 pt-5">
              <div className="space-y-2 text-sm leading-6 text-steel-300">
                <p>Destination: <span className="font-mono text-graphite">toolinginquiryform.netlify.app</span></p>
                <p>The form opens in a new tab so the product catalog remains available in the current session.</p>
                <p>Use the primary page action above whenever you're ready to hand off the request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function NotFoundPage() {
  const [location] = useLocation();

  return (
    <SiteLayout>
      <SeoHead title="404 | ZENOK" description="Page not found." canonicalPath="/404" noIndex />
      <section className="container space-y-8 py-24 lg:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/82">404 / Route Missing</p>
        <h1 className="font-display text-5xl text-graphite lg:text-7xl">The requested page is outside the current tooling map.</h1>
        <p className="max-w-2xl text-base leading-8 text-steel-500">The route <span className="font-mono text-graphite">{location}</span> is not available in the current ZENOK site structure.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/"><Button className="rounded-none border border-cobalt/50 bg-cobalt px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white">Return Home</Button></Link>
          <Link href="/products"><Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite">Open Products</Button></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
