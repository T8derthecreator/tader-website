/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Sections should feel like composed catalog spreads with exact spacing and technical labeling.
- Favor grid tension, fine borders, and restrained motion over soft consumer-style cards.
- Use copper only as a controlled signal for emphasis, never as decoration everywhere.
*/
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "right";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-5 border-t border-black/8 pt-5 lg:grid-cols-[180px_minmax(0,1fr)]",
        align === "right" && "lg:grid-cols-[minmax(0,1fr)_180px]",
      )}
    >
      <p
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.28em] text-copper/85",
          align === "right" && "lg:order-2 lg:text-right",
        )}
      >
        {eyebrow}
      </p>
      <div className={cn("max-w-3xl space-y-4", align === "right" && "lg:text-right") }>
        <h2 className="font-display text-3xl leading-tight text-graphite lg:text-5xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-7 text-steel-500 lg:text-base">{description}</p>
      </div>
    </div>
  );
}

type MetricStripProps = {
  items: ReadonlyArray<{ label: string; value: string }>;
};

export function MetricStrip({ items }: MetricStripProps) {
  return (
    <div className="grid gap-px border border-black/8 bg-black/8 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="bg-white/88 px-6 py-7 backdrop-blur-sm">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-steel-400">{item.label}</p>
          <p className="mt-3 font-display text-3xl text-graphite">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

type InsightCardProps = {
  index: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  children?: ReactNode;
};

export function InsightCard({ index, title, description, href, ctaLabel, children }: InsightCardProps) {
  const content = (
    <div className="group h-full rounded-none border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:border-copper/40 hover:bg-white">
      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-copper/80">{index}</p>
      <h3 className="mt-5 font-display text-2xl text-graphite">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-steel-500">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
      {href && ctaLabel ? (
        <div className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400 transition-colors duration-200 group-hover:text-graphite">
          {ctaLabel}
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      ) : null}
    </div>
  );

  if (href && ctaLabel) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

type DataPillProps = {
  label: string;
  value: string;
};

export function DataPill({ label, value }: DataPillProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/8 py-3 text-sm text-steel-500">
      <span>{label}</span>
      <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-graphite">{value}</span>
    </div>
  );
}
