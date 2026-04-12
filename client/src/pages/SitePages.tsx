/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Every page should read like a high-precision tooling dossier with clear procurement logic.
- Use asymmetrical composition, dimensional evidence, and technical labeling before marketing language.
- Maintain high contrast, measured motion, and disciplined catalog-style hierarchy throughout.
*/
import { type FormEvent, type ReactNode, useMemo, useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import {
  AlertTriangle,
  ArrowRight,
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
import { DataPill, InsightCard, MetricStrip, SectionHeading } from "@/components/site/SectionPrimitives";
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
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-b border-black/8">
      <div className="container grid gap-8 py-10 lg:grid-cols-[1.2fr_0.85fr] lg:py-14">
        <div className="flex min-h-[32rem] flex-col justify-between gap-12">
          <div className="space-y-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-copper/85">{eyebrow}</p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-graphite sm:text-6xl xl:text-7xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-steel-300 xl:text-lg">{description}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {primaryHref && primaryLabel ? (
              <Link href={primaryHref}>
                <Button className="rounded-none border border-copper/50 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white shadow-[0_18px_36px_rgba(194,121,74,0.14)] hover:bg-copper-soft">
                  {primaryLabel}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref}>
                <Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite hover:bg-[#f3efe8]">
                  {secondaryLabel}
                </Button>
              </Link>
            ) : null}
          </div>
        </div>

        <div className="relative overflow-hidden border border-black/8 bg-white/88 shadow-[0_28px_60px_rgba(15,23,42,0.08)]">
          <img src={image} alt={title} className="h-full min-h-[26rem] w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,18,0.08),rgba(11,15,18,0.72))]" />
          <div className="absolute inset-x-0 bottom-0 grid gap-4 border-t border-black/8 bg-black/30 p-6 backdrop-blur-sm sm:grid-cols-2">
            {taderData.siteMeta.heroHighlights.map((item) => (
              <div key={item.label} className="border-l border-copper/60 pl-4">
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
          ? "border-copper bg-copper text-white"
          : "border-black/10 bg-white/84 text-steel-500 hover:border-copper/40 hover:text-graphite"
      }`}
    >
      {label}
    </button>
  );

  return (
    <aside className="space-y-8 border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between border-b border-black/8 pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-copper/80">Filter Catalog</p>
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
          className="rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
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
          <thead className="bg-[#f3efe8] font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">
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
              <th className="px-4 py-3">Detail</th>
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
                        className="rounded-none border border-copper/30 bg-copper/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-copper"
                      >
                        {option}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <Link href={`/products/${sku.slug}`} className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-graphite transition-colors duration-200 hover:text-copper">
                    View
                    <ArrowRight className="size-4" />
                  </Link>
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
          href={family.route}
          ctaLabel="Open category"
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
        eyebrow={category ? `Products / ${category.shortLabel}` : "Product Catalog"}
        title={category ? category.label : "Micro Carbide End Mills & Cutting Tools"}
        description={
          category
            ? `${category.description} Standard production is limited to shank diameters below 6.0 mm, while 1/8 inch shank requests are reviewed as custom MOQ only.`
            : "Filter by tool type, flute count, construction, and ZENOK geometry family to reach the exact SKU geometry for your machining program. The active standard catalog is limited to shank diameters below 6.0 mm."
        }
        image={taderData.siteMeta.blueprintImage}
        primaryHref={category ? "/products" : "/technology"}
        primaryLabel={category ? "View Full Catalog" : "Review Construction Logic"}
        secondaryHref={category ? "/technology" : "/applications"}
        secondaryLabel={category ? "Review Production Scope" : "Browse Applications"}
      />

      <section className="container space-y-12 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Structured Catalog"
          title="Search the dimensional envelope before comparing price."
          description="The product overview is built for engineering review: filter by geometry family, scan B/C construction availability, and move directly into SKU-level dimensional tables."
        />

        <div className="grid gap-4 border border-black/8 bg-[#f6f1e9] p-6 text-sm leading-7 text-steel-400 shadow-[0_20px_44px_rgba(15,23,42,0.04)] lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper/80">Standard production scope</p>
            <p className="mt-3">{STANDARD_SCOPE_NOTE}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper/80">Program status</p>
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
            <div className="grid gap-px border border-black/8 bg-black/8 sm:grid-cols-3">
              <div className="bg-white/88 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Visible SKUs</p>
                <p className="mt-3 font-display text-4xl text-graphite">{filtered.length}</p>
              </div>
              <div className="bg-white/88 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Base category count</p>
                <p className="mt-3 font-display text-4xl text-graphite">{baseSkus.length}</p>
              </div>
              <div className="bg-white/88 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Active category routes</p>
                <p className="mt-3 font-display text-4xl text-graphite">{category ? getFamiliesByCategory(category.slug).length : categoryCards.length}</p>
              </div>
            </div>

            <CatalogTable items={filtered.slice(0, 120)} />
            {filtered.length > 120 ? (
              <p className="text-sm text-steel-400">Showing first 120 filtered SKUs for scanning speed. Narrow the filter set to isolate a tighter comparison list.</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="container space-y-10 border-t border-black/8 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Product Line Access"
          title="Navigate by product line once the geometry path is already known."
          description="Each product line card summarizes flute count, construction options, and size envelope so buyers can move quickly between regular, long-neck, hardened, and aluminum-specific configurations."
        />
        <ProductFamilyGrid categorySlug={categorySlug} />
      </section>
    </SiteLayout>
  );
}

export function HomePage() {
  return (
    <SiteLayout>
      <SeoHead
        title="ZENOK | Precision Micro End Mills for U.S. CNC Shops"
        description="Taiwan-made micro end mills for U.S. CNC shops in medical, aerospace, and electronics. Explore product-line structure, B vs C construction, and quote-ready SKU data."
        canonicalPath="/"
        schema={homepageSchema}
        keywords={["micro end mills", "Taiwan carbide tools", "4.8% duty"]}
      />

      <PageHero
        eyebrow="Micro Precision Tooling"
        title={taderData.siteMeta.heroTitle}
        description={taderData.siteMeta.heroSubtitle}
        image={taderData.siteMeta.heroImage}
        primaryHref={taderData.siteMeta.primaryCta.href}
        primaryLabel={taderData.siteMeta.primaryCta.label}
        secondaryHref={taderData.siteMeta.secondaryCta.href}
        secondaryLabel={taderData.siteMeta.secondaryCta.label}
      />

      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Commercial USP"
          title="Taiwan MFN 4.8% duty advantage paired with micro-tooling specialization."
          description="ZENOK is positioned for U.S. industrial buyers who assess both process fit and landed cost. The value proposition combines Taiwan-origin sourcing, disciplined micro-tool production, and category depth in miniature carbide tooling."
        />
        <MetricStrip items={taderData.siteMeta.heroHighlights} />
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
              ctaLabel="Browse route"
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
          title="Built around the requirements of medical, aerospace, and electronics machining."
          description="These sectors share a need for tiny features, clean edge quality, and predictable dimensional behavior. ZENOK’s catalog structure makes those needs legible at the specification level rather than burying them in sales copy."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {taderData.applications.map((application, index) => (
            <Link key={application.slug} href={`/applications/${application.slug}`} className="group relative overflow-hidden border border-black/8 bg-white/88 shadow-[0_20px_44px_rgba(15,23,42,0.08)]">
              <img src={application.image} alt={application.title} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,18,0.08),rgba(11,15,18,0.82))]" />
              <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper/80">0{index + 1}</p>
                <h3 className="font-display text-3xl text-white">{application.title}</h3>
                <p className="text-sm leading-7 text-steel-200">{application.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container space-y-10 border-t border-black/8 py-14 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper/82">Technology Focus</p>
            <h2 className="font-display text-4xl leading-tight text-graphite lg:text-5xl">
              Construction logic, holder compatibility, and carbide strategy made explicit.
            </h2>
            <p className="max-w-xl text-base leading-8 text-steel-500">
              This technology page explains B vs C construction, highlights shrink-fit compatibility limitations, and compares carbide tipped versus solid carbide choices through application-fit logic.
            </p>
            <Link href="/technology">
              <Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite hover:bg-[#f3efe8]">
                Explore Technology
              </Button>
            </Link>
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
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper/82">SKU Detail / {sku.type_label}</p>
              <h1 className="font-display text-5xl leading-[0.94] text-graphite lg:text-6xl">
                {sku.diameter_mm} mm {sku.type_label}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-steel-300">
                ZENOK line {sku.series} / {sku.line_name}. Built for demanding micro-machining programs where dimensional readability and holder compatibility matter before commitment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-none border border-copper/30 bg-copper/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
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
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-copper/80">Commercial Scope</p>
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
                  <AlertTriangle className="mt-1 size-5 text-copper-soft" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper-soft">Amazon-style Warning</p>
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
        title="Applications | ZENOK"
        description="Explore ZENOK micro end mill applications across medical, aerospace, and electronics machining environments."
        canonicalPath="/applications"
      />
      <PageHero
        eyebrow="Applications"
        title="Three demanding sectors. One precision-first tooling story."
        description="Our target industries share a need for miniature features, process stability, and close dimensional communication between tooling supplier and machine shop."
        image={taderData.siteMeta.heroImage}
        primaryHref="/products"
        primaryLabel="Open Catalog"
        secondaryHref="/technology"
        secondaryLabel="Review Construction Logic"
      />
      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Industry Pages"
          title="Navigate by production context, not just by geometry."
          description="Medical, aerospace, and electronics buyers each prioritize slightly different risk factors. The application pages frame those differences through production reality rather than generic sector language."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {taderData.applications.map((application, index) => (
            <InsightCard
              key={application.slug}
              index={`0${index + 1}`}
              title={application.title}
              description={application.description}
              href={`/applications/${application.slug}`}
              ctaLabel="Open application"
            >
              <div className="space-y-3 pt-2 text-sm leading-7 text-steel-300">
                {application.focus.map((point) => (
                  <p key={point}>• {point}</p>
                ))}
              </div>
            </InsightCard>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function ApplicationDetailView({ slug }: { slug: string }) {
  const application = getApplication(slug);
  if (!application) return <ApplicationsPage />;

  const iconMap: Record<string, ReactNode> = {
    medical: <Microscope className="size-8 text-copper-soft" />,
    aerospace: <Orbit className="size-8 text-copper-soft" />,
    electronics: <ShieldCheck className="size-8 text-copper-soft" />,
  };

  return (
    <SiteLayout>
      <SeoHead
        title={`${application.title} | ZENOK`}
        description={application.description}
        canonicalPath={`/applications/${application.slug}`}
      />
      <PageHero
        eyebrow={application.eyebrow}
        title={application.title}
        description={application.description}
        image={application.image}
        primaryHref="/products"
        primaryLabel="Review Tool Catalog"
        secondaryHref="/technology"
        secondaryLabel="Compare Construction Logic"
      />
      <section className="container grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="space-y-6 border border-black/8 bg-white/82 p-8 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
          {iconMap[slug]}
          <h2 className="font-display text-4xl text-graphite">Process fit for high-consequence components.</h2>
          <p className="text-sm leading-8 text-steel-300">
            ZENOK positions this application space around miniature features, dimensional consistency, and clear construction choices that can be discussed alongside machine setup and holder strategy.
          </p>
        </div>
        <div className="space-y-4">
          {application.focus.map((point, index) => (
            <div key={point} className="border border-black/8 bg-white p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-copper/80">0{index + 1}</p>
              <p className="mt-4 text-lg text-graphite">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

export function MedicalPage() {
  return <ApplicationDetailView slug="medical" />;
}

export function AerospacePage() {
  return <ApplicationDetailView slug="aerospace" />;
}

export function ElectronicsPage() {
  return <ApplicationDetailView slug="electronics" />;
}

export function TechnologyPage() {
  return (
    <SiteLayout>
      <SeoHead
        title="Technology | ZENOK"
        description="Compare B vs C construction, Taiwan 4.8% MFN duty positioning, and carbide tipped versus solid carbide trade-offs."
        canonicalPath="/technology"
      />
      <PageHero
        eyebrow="Technology"
        title="Construction, sourcing, and carbide strategy explained in buyer language."
        description="The technology layer translates technical distinctions into procurement implications: holder compatibility, geometry reach, and sourcing economics."
        image={taderData.siteMeta.blueprintImage}
        primaryHref="/products"
        primaryLabel="Compare SKUs"
        secondaryHref="/about"
        secondaryLabel="Review Company Positioning"
      />
      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Engineering Topics"
          title="The site makes technical trade-offs explicit instead of leaving them to email follow-up."
          description="B vs C construction, Taiwan duty positioning, and holder compatibility are presented as decision variables for engineers and buyers evaluating micro-tooling options."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {taderData.technologyTopics.map((topic, index) => (
            <InsightCard key={topic.id} index={`0${index + 1}`} title={topic.title} description={topic.summary}>
              <div className="space-y-3 pt-2 text-sm leading-7 text-steel-300">
                {topic.points.map((point) => (
                  <p key={point}>• {point}</p>
                ))}
              </div>
            </InsightCard>
          ))}
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
        title="A tooling story built around disciplined micro-tool production."
        description="The brand narrative emphasizes Taiwan-based manufacturing discipline, stable execution in sub-3.0 mm tooling, and the ability to support U.S. buyers who compare tooling cost against process-critical performance."
        image={taderData.siteMeta.heroImage}
        primaryHref="/technology"
        primaryLabel="Review Technical Basis"
        secondaryHref="/products"
        secondaryLabel="Open Active Catalog"
      />
      <section className="container space-y-10 py-14 lg:py-20">
        <SectionHeading
          eyebrow="Company Profile"
          title="Vertical integration is positioned as both a technical and pricing moat."
          description="The site frames ZENOK’s advantage through disciplined process control, which matters for consistency, supply reliability, and defensible cost structure in specialized micro programs."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {taderData.aboutSections.map((section, index) => (
            <InsightCard key={section.title} index={`0${index + 1}`} title={section.title} description={section.body} />
          ))}
        </div>
        <div className="grid gap-px border border-black/8 bg-black/8 md:grid-cols-3">
          <div className="bg-white/88 p-7"><Factory className="size-7 text-copper-soft" /><p className="mt-4 text-sm leading-7 text-steel-300">Manufacturing capability aligned to micro-diameter, long-neck, and application-specific carbide tooling.</p></div>
          <div className="bg-white/88 p-7"><Boxes className="size-7 text-copper-soft" /><p className="mt-4 text-sm leading-7 text-steel-300">Integrated product architecture spanning flat, ball nose, corner radius, and aluminum product lines.</p></div>
          <div className="bg-white/88 p-7"><CircleDollarSign className="size-7 text-copper-soft" /><p className="mt-4 text-sm leading-7 text-steel-300">Pricing moat narrative supported by Taiwan-origin sourcing position and disciplined micro-tool production scope.</p></div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function QuoteRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${taderData.siteMeta.formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to submit quote request.");
      }

      form.reset();
      setSubmitMessage("Your RFQ has been sent. The ZENOK team can now review the submitted product line, quantity, and application context.");
    } catch {
      setSubmitError("The form could not be submitted right now. Please try again, or email the same RFQ details directly if needed.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SiteLayout>
      <SeoHead
        title="Quote Request | ZENOK"
        description="Submit your ZENOK quote request with Formspree and reference specific product lines, model numbers, and application context."
        canonicalPath="/quote-request"
      />
      <PageHero
        eyebrow="Quote Request"
        title="Send your RFQ with the product line, dimensions, and application context already defined."
        description="The quote page is structured for engineering buyers: mention the product line, SKU or model number, required quantity, material, and holder constraints so discussion can start with the right assumptions."
        image={taderData.siteMeta.blueprintImage}
        secondaryHref="/products"
        secondaryLabel="Back to Catalog"
      />
      <section className="container grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="space-y-6 border border-black/8 bg-white/82 p-8 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">
          <h2 className="font-display text-4xl text-graphite">Information to include</h2>
          <div className="space-y-4 text-sm leading-8 text-steel-300">
            <p>Include the SKU or model number if your selection is already narrowed.</p>
            <p>State the workpiece material, application sector, and any feature-size requirement that matters to tool choice.</p>
            <p>Clarify quantity, expected timing, and whether B or C construction guidance is part of the evaluation.</p>
            <p>Call out holder constraints, especially if shrink-fit compatibility must be confirmed before quotation.</p>
          </div>
          <div className="border border-black/8 bg-[#f7f3ec] p-5 text-sm leading-7 text-steel-400">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper/80">Program scope reminder</p>
            <p className="mt-3">{STANDARD_SCOPE_NOTE}</p>
            <p className="mt-3">{PROGRAM_STATUS_NOTE}</p>
          </div>
          <div className="border border-copper/25 bg-copper/8 p-5 text-sm leading-7 text-steel-500">
            Use the existing Formspree workflow below so your request goes directly into the current RFQ intake channel.
          </div>
        </div>
        <div
          id="formspree-embed"
          className="border border-black/8 bg-white/88 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
        >
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="ZENOK Quote Request" />
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-steel-200">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Name</span>
                <Input
                  required
                  name="name"
                  className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
                  placeholder="Procurement or engineering contact"
                />
              </label>
              <label className="grid gap-2 text-sm text-steel-200">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Work Email</span>
                <Input
                  required
                  type="email"
                  name="email"
                  className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
                  placeholder="name@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-steel-200">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Company</span>
                <Input
                  required
                  name="company"
                  className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
                  placeholder="Company or facility name"
                />
              </label>
              <label className="grid gap-2 text-sm text-steel-200">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Sector</span>
                <Input
                  name="sector"
                  className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
                  placeholder="Medical, aerospace, electronics..."
                />
              </label>
              <label className="grid gap-2 text-sm text-steel-200 md:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">ZENOK line / SKU / Model</span>
                <Input
                  name="model"
                  className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
                  placeholder="Example: FEM-RG-2F-D0010"
                />
              </label>
              <label className="grid gap-2 text-sm text-steel-200">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Quantity</span>
                <Input
                  name="quantity"
                  className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
                  placeholder="Example: 50 pcs"
                />
              </label>
              <label className="grid gap-2 text-sm text-steel-200">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Holder Constraint</span>
                <Input
                  name="holder"
                  className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"
                  placeholder="Shrink-fit, collet, 1/8 inch custom MOQ, guidance needed"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-steel-200">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">Application Notes</span>
              <textarea
                required
                name="message"
                rows={8}
                className="min-h-[220px] rounded-none border border-black/10 bg-[#f8f5ef] px-3 py-3 text-graphite outline-none transition-colors placeholder:text-steel-400 focus:border-copper/60"
                placeholder="Describe material, feature size, tolerance concerns, coating preferences, and any B vs C evaluation questions."
              />
            </label>
            <div className="flex flex-col gap-4 border-t border-black/8 pt-5 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 text-sm leading-6 text-steel-300">
                <p>This form submits through Formspree using the existing intake ID <span className="font-mono text-graphite">{taderData.siteMeta.formspreeId}</span>.</p>
                {submitMessage ? <p className="text-copper-soft">{submitMessage}</p> : null}
                {submitError ? <p className="text-[#f4b08c]">{submitError}</p> : null}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-none border border-copper/50 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.25em] text-white hover:bg-copper-soft disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Submit RFQ"}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </form>
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
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper/82">404 / Route Missing</p>
        <h1 className="font-display text-5xl text-graphite lg:text-7xl">The requested page is outside the current tooling map.</h1>
        <p className="max-w-2xl text-base leading-8 text-steel-500">The route <span className="font-mono text-graphite">{location}</span> is not available in the current ZENOK site structure.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/"><Button className="rounded-none border border-copper/50 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white">Return Home</Button></Link>
          <Link href="/products"><Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite">Open Products</Button></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
