/*
  Shared industry components:
  - IndustryCategoryNav: breadcrumb + 3 category tabs
  - IndustryData: industry metadata
*/
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export type IndustrySlug = "aerospace" | "medical" | "electronics";

export const INDUSTRIES = [
  {
    slug: "aerospace" as const,
    label: "Aerospace & Defense",
    shortLabel: "Aerospace",
    tagline: "Qualification-grade tooling for titanium and Inconel programs.",
    keyStat: { value: "18%", label: "avg. cost reduction" },
    summary:
      "Aerospace machining demands tools that perform consistently across titanium, Inconel, and hardened steel — materials where tool failure is a program event, not a nuisance. ZENOK's solid carbide (C-type) tooling with Platinum TiAlN coating is engineered for these substrates.",
    secondary:
      "We understand that qualifying a new tool into an aerospace program is a significant investment. Our evaluation process is designed to minimize that commitment — free samples, full documentation, and a dedicated application engineer throughout the qualification window.",
    specs: [
      { label: "Primary substrates", value: "Ti-6Al-4V · Inconel 718", highlight: false },
      { label: "Recommended coating", value: "Platinum TiAlN", highlight: false },
      { label: "Max temp resistance", value: "1100°C", highlight: true },
      { label: "Documentation", value: "CoC · Full traceability", highlight: false },
      { label: "Qualification support", value: "Free samples included", highlight: true },
    ],
    route: "/industries/aerospace",
  },
  {
    slug: "medical" as const,
    label: "Medical Device Machining",
    shortLabel: "Medical",
    tagline: "FDA-traceable precision for ±2μm feature tolerances.",
    keyStat: { value: "±2μm", label: "feature tolerance" },
    summary:
      "Medical device machining operates at tolerances where tool wear is not a performance variable — it's a process control failure. ZENOK's micro tooling maintains consistent geometry across production runs, with inspection data available per lot.",
    secondary:
      "For FDA-regulated programs, we provide full material traceability, lot documentation, and Certificate of Conformance with every shipment. Our ISO 9001:2015 certification covers all product lines with no exclusions.",
    specs: [
      { label: "Primary substrates", value: "Ti · SS · PEEK", highlight: false },
      { label: "Min feature size", value: "Ø 0.1 mm", highlight: false },
      { label: "Tolerance", value: "±2 μm", highlight: true },
      { label: "Regulatory", value: "ISO 9001 · FDA-traceable", highlight: false },
      { label: "Avg cost reduction", value: "22%", highlight: true },
    ],
    route: "/industries/medical",
  },
  {
    slug: "electronics" as const,
    label: "Electronics Manufacturing",
    shortLabel: "Electronics",
    tagline: "High-cycle aluminum and copper machining at line-item cost.",
    keyStat: { value: "28%", label: "avg. cost reduction" },
    summary:
      "Electronics programs run tools at volume — connector housings, heatsink fins, RF enclosures, and structural components measured in thousands of cycles per week. At these volumes, per-unit tool cost is a line item that directly determines margin.",
    secondary:
      "ZENOK's composite (B-type) tooling and DLC-coated aluminum-spec end mills are purpose-built for high-cycle, low-abrasion applications where cost per part matters more than peak temperature resistance.",
    specs: [
      { label: "Primary substrates", value: "Al · Cu · CFRP", highlight: false },
      { label: "Recommended coating", value: "DLC (Al) · Uncoated (Cu)", highlight: false },
      { label: "DLC friction coeff.", value: "0.1 μ", highlight: true },
      { label: "Construction", value: "B-type (composite)", highlight: false },
      { label: "Avg cost reduction", value: "28%", highlight: true },
    ],
    route: "/industries/electronics",
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function IndustryCategoryNav({
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
            <Link href="/industries" className="hover:text-blue transition-colors">
              Industries
            </Link>
            <span>/</span>
            <span className="text-graphite">{categoryLabel}</span>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-blue hover:underline"
          >
            <ArrowLeft className="size-3" />
            All Industries
          </Link>
        </div>

        {/* Category tabs */}
        <div className="flex gap-0 overflow-x-auto border-t border-line -mb-px">
          {INDUSTRIES.map((ind) => {
            const isActive = currentSlug === ind.slug;
            return (
              <Link
                key={ind.slug}
                href={ind.route}
                className={`relative whitespace-nowrap border-b-2 px-4 py-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "border-blue text-blue font-semibold"
                    : "border-transparent text-steel hover:text-graphite"
                }`}
              >
                {ind.shortLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
