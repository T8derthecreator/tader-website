/*
  Shared product components used across /products, /products/:category, /products/:slug, /carbide-rods.
  - ProductCategoryNav: breadcrumb + 5 category tabs (sticky-style)
  - ConstructionLegend: inline brief B/S/C explanation (replaces full section)
  - SkuFilterableTable: reusable filterable/searchable SKU table
*/
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Search } from "lucide-react";

const INQUIRY_URL = "https://toolinginquiryform.netlify.app/";

const CATEGORIES = [
  { slug: "flat-end-mills", label: "Flat", href: "/products/flat-end-mills" },
  { slug: "ball-nose-end-mills", label: "Ball Nose", href: "/products/ball-nose-end-mills" },
  { slug: "corner-radius-end-mills", label: "Corner Radius", href: "/products/corner-radius-end-mills" },
  { slug: "aluminum-end-mills", label: "Aluminum", href: "/products/aluminum-end-mills" },
  { slug: "carbide-rods", label: "Carbide Rods", href: "/carbide-rods" },
];

/* ---------- ProductCategoryNav ---------- */

export function ProductCategoryNav({
  currentSlug,
  categoryLabel,
}: {
  currentSlug: string;
  categoryLabel: string;
}) {
  return (
    <div className="relative z-[3] border-b border-line bg-panel-2">
      <div className="container-wrap">
        {/* Top row: breadcrumb + back link */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 pb-4">
          <div className="flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
            <Link href="/products" className="hover:text-blue transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-graphite">{categoryLabel}</span>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-blue hover:underline"
          >
            <ArrowLeft className="size-3" />
            All Products
          </Link>
        </div>

        {/* Category tabs */}
        <div className="flex gap-0 overflow-x-auto border-t border-line -mb-px">
          {CATEGORIES.map((cat) => {
            const isActive = currentSlug === cat.slug;
            return (
              <Link
                key={cat.slug}
                href={cat.href}
                className={`relative whitespace-nowrap border-b-2 px-4 py-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "border-blue text-blue font-semibold"
                    : "border-transparent text-steel hover:text-graphite"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- ConstructionLegend (inline brief explanation) ---------- */

export function ConstructionLegend() {
  return (
    <div className="border border-line bg-panel p-6 lg:p-8">
      <div className="mb-4 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
        Construction Types — Quick Reference
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-[var(--font-display)] text-2xl font-bold text-blue">B</span>
            <span className="font-semibold text-graphite">Composite</span>
          </div>
          <p className="mt-2 text-[13px] leading-[1.6] text-graphite-soft">
            SS shank + carbide tip. Lowest cost. <strong className="text-graphite">Shank ≤ 6 mm. Not shrink-fit compatible.</strong>
          </p>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-[var(--font-display)] text-2xl font-bold text-blue">C</span>
            <span className="font-semibold text-graphite">Solid Carbide SS308</span>
          </div>
          <p className="mt-2 text-[13px] leading-[1.6] text-graphite-soft">
            One-piece full carbide. Highest precision. <strong className="text-graphite">Shrink-fit compatible.</strong>
          </p>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-[var(--font-display)] text-2xl font-bold text-blue">S</span>
            <span className="font-semibold text-graphite">New Brazing</span>
          </div>
          <p className="mt-2 text-[13px] leading-[1.6] text-graphite-soft">
            Carbide-to-carbide brazed. Middle ground. <strong className="text-graphite">Produced on request.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- CoatingOptions (inline brief coating reference) ---------- */

export function CoatingOptions() {
  const COATINGS = [
    {
      tag: "COAT / 01",
      name: "Uncoated",
      hardness: "HRC 62",
      bestFor: "Al, Cu, soft alloys",
      cost: "Base",
    },
    {
      tag: "COAT / 02",
      name: "TiAlN",
      hardness: "HV 3200",
      bestFor: "Steel, Ti, Ni",
      cost: "+18%",
    },
    {
      tag: "COAT / 03",
      name: "Platinum TiAlN",
      hardness: "HV 3500",
      bestFor: "Inconel, hardened",
      cost: "+32%",
    },
    {
      tag: "COAT / 04",
      name: "DLC",
      hardness: "HV 5000",
      bestFor: "Aluminum, CFRP",
      cost: "+28%",
    },
  ];

  return (
    <div className="border border-line bg-panel p-6 lg:p-8">
      <div className="mb-4 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
        Available Coatings — Quick Reference
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {COATINGS.map((c) => (
          <div key={c.name} className="border border-line-soft bg-panel-2 p-4">
            <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-steel">
              {c.tag}
            </div>
            <div className="mt-2 font-[var(--font-display)] text-lg font-bold text-graphite">
              {c.name}
            </div>
            <div className="mt-3 space-y-1.5 border-t border-line-soft pt-3 font-[var(--font-mono)] text-[11px]">
              <div className="flex justify-between">
                <span className="text-steel">Hardness</span>
                <span className="text-graphite">{c.hardness}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel">Best for</span>
                <span className="text-graphite">{c.bestFor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel">Cost</span>
                <span className="font-semibold text-blue">{c.cost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[12px] leading-[1.6] text-steel">
        Coating selection depends on workpiece material and program thermal envelope. Submit specs for optimal recommendation.
      </p>
    </div>
  );
}

/* ---------- CoatingOptions (inline brief reference, mirrors ConstructionLegend) ---------- */

export function CoatingOptions() {
  return (
    <div className="border border-line bg-panel p-6 lg:p-8">
      <div className="mb-4 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
        Coating Options — Match to Your Workpiece
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-steel">COAT / 01</div>
          <div className="mt-1 font-[var(--font-display)] text-lg font-bold text-graphite">Uncoated</div>
          <div className="mt-3 space-y-1.5 font-[var(--font-mono)] text-[11px]">
            <div className="flex justify-between"><span className="text-steel">Hardness</span><span className="text-graphite">HRC 62</span></div>
            <div className="flex justify-between"><span className="text-steel">Best for</span><span className="text-graphite">Al · Cu · soft</span></div>
            <div className="flex justify-between"><span className="text-steel">Cost</span><span className="text-graphite">Base</span></div>
          </div>
        </div>
        <div>
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-steel">COAT / 02</div>
          <div className="mt-1 font-[var(--font-display)] text-lg font-bold text-graphite">TiAlN</div>
          <div className="mt-3 space-y-1.5 font-[var(--font-mono)] text-[11px]">
            <div className="flex justify-between"><span className="text-steel">Hardness</span><span className="text-graphite">HV 3200</span></div>
            <div className="flex justify-between"><span className="text-steel">Best for</span><span className="text-graphite">Steel · Ti · Ni</span></div>
            <div className="flex justify-between"><span className="text-steel">Cost</span><span className="text-graphite">+18%</span></div>
          </div>
        </div>
        <div>
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-steel">COAT / 03</div>
          <div className="mt-1 font-[var(--font-display)] text-lg font-bold text-blue">Platinum TiAlN</div>
          <div className="mt-3 space-y-1.5 font-[var(--font-mono)] text-[11px]">
            <div className="flex justify-between"><span className="text-steel">Hardness</span><span className="text-graphite">HV 3500</span></div>
            <div className="flex justify-between"><span className="text-steel">Best for</span><span className="text-graphite">Inconel · hard</span></div>
            <div className="flex justify-between"><span className="text-steel">Cost</span><span className="text-graphite">+32%</span></div>
          </div>
        </div>
        <div>
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-steel">COAT / 04</div>
          <div className="mt-1 font-[var(--font-display)] text-lg font-bold text-graphite">DLC</div>
          <div className="mt-3 space-y-1.5 font-[var(--font-mono)] text-[11px]">
            <div className="flex justify-between"><span className="text-steel">Hardness</span><span className="text-graphite">HV 5000</span></div>
            <div className="flex justify-between"><span className="text-steel">Best for</span><span className="text-graphite">Al · CFRP</span></div>
            <div className="flex justify-between"><span className="text-steel">Cost</span><span className="text-graphite">+28%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- SkuFilterableTable ---------- */

export type SkuTableRow = {
  model_no: string;
  series: string;
  geometry: string;
  diameter_mm: number | null;
  cut_length_mm: number | null;
  overall_length_mm: number | null;
  shank_diameter_mm: number | null;
  construction_options: string[];
  category_slug: string;
  slug?: string;
};

export function SkuFilterableTable({
  skus,
  initialCategory = "all",
  showCategoryTabs = true,
  totalLabel,
}: {
  skus: SkuTableRow[];
  initialCategory?: string;
  showCategoryTabs?: boolean;
  totalLabel?: string;
}) {
  const [activeCat, setActiveCat] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const CAT_TABS = [
    { k: "all", label: "All" },
    { k: "flat-end-mills", label: "Flat" },
    { k: "ball-nose-end-mills", label: "Ball Nose" },
    { k: "corner-radius-end-mills", label: "Corner R" },
    { k: "aluminum-end-mills", label: "Aluminum" },
  ];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skus
      .filter((s) => (activeCat === "all" ? true : s.category_slug === activeCat))
      .filter((s) => {
        if (!q) return true;
        const hay = `${s.model_no} ${s.series} ${s.geometry} ${s.diameter_mm} ${s.construction_options.join(" ")}`.toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 60); // cap visible rows for performance
  }, [skus, activeCat, query]);

  return (
    <div className="border border-line bg-panel">
      {/* Head controls */}
      <div className="flex flex-wrap items-center gap-3 border-b border-line p-4 lg:p-5">
        {showCategoryTabs && (
          <div className="flex flex-wrap gap-2">
            {CAT_TABS.map((t) => (
              <button
                key={t.k}
                onClick={() => {
                  setActiveCat(t.k);
                  setQuery("");
                }}
                className={`border px-3 py-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] transition-colors ${
                  activeCat === t.k
                    ? "border-blue bg-blue text-white"
                    : "border-line bg-white text-steel hover:border-blue hover:text-blue"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        <div className="ml-auto flex flex-wrap items-center gap-4">
          <div className="font-[var(--font-mono)] text-[11px] text-steel">
            <strong className="text-graphite">{visible.length}</strong> SKUs shown
            {totalLabel && <> · {totalLabel}</>}
          </div>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-steel" />
            <input
              type="text"
              value={query}
              placeholder="Search SKU / Ø / construction..."
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-line bg-white py-2 pl-9 pr-3 font-[var(--font-mono)] text-xs text-graphite outline-none focus:border-blue sm:w-72"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-panel-2">
            <tr className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-steel">
              <th className="whitespace-nowrap p-3 text-left">Model No.</th>
              <th className="whitespace-nowrap p-3 text-left">Series</th>
              <th className="whitespace-nowrap p-3 text-left">Geometry</th>
              <th className="whitespace-nowrap p-3 text-right">Ø (D)</th>
              <th className="whitespace-nowrap p-3 text-right">Cut (l)</th>
              <th className="whitespace-nowrap p-3 text-right">OAL (L)</th>
              <th className="whitespace-nowrap p-3 text-right">Shank (d)</th>
              <th className="whitespace-nowrap p-3 text-center">Construction</th>
              <th className="whitespace-nowrap p-3"></th>
            </tr>
          </thead>
          <tbody className="font-[var(--font-mono)] text-xs">
            {visible.map((s) => (
              <tr
                key={s.model_no}
                className="border-t border-line-soft transition-colors hover:bg-panel-2"
              >
                <td className="p-3 font-semibold text-graphite">{s.model_no}</td>
                <td className="p-3 text-steel">{s.series}</td>
                <td className="p-3 text-graphite-soft">{s.geometry}</td>
                <td className="p-3 text-right tabular-nums text-graphite">{s.diameter_mm ?? "—"}</td>
                <td className="p-3 text-right tabular-nums text-steel">{s.cut_length_mm ?? "—"}</td>
                <td className="p-3 text-right tabular-nums text-steel">{s.overall_length_mm ?? "—"}</td>
                <td className="p-3 text-right tabular-nums text-steel">{s.shank_diameter_mm ?? "—"}</td>
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
            {visible.length === 0 && (
              <tr>
                <td colSpan={9} className="p-10 text-center text-steel">
                  No matching SKUs — try broadening your filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Foot */}
      <div className="flex flex-wrap justify-between gap-4 border-t border-line p-4 lg:p-5">
        <div className="text-xs text-steel">
          Showing up to 60 rows · Use search for specific SKUs · Final pricing via formal quote
        </div>
      </div>
    </div>
  );
}
