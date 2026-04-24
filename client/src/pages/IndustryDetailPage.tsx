/*
  /industries/:slug — individual industry detail page.
  Used by /industries/aerospace, /industries/medical, /industries/electronics.
  Structure: IndustryCategoryNav → Hero → Summary + Key stat/specs → Recommended tooling → Other industries → CTA
*/
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import {
  IndustryCategoryNav,
  INDUSTRIES,
  getIndustry,
} from "@/components/site/IndustryComponents";
import { useReveal } from "@/hooks/useReveal";

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

export function IndustryDetailPage({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  const industry = getIndustry(slug);
  const others = INDUSTRIES.filter((i) => i.slug !== slug);

  if (!industry) {
    return (
      <SiteLayout>
        <section className="container-wrap py-32 text-center">
          <h1 className="font-[var(--font-display)] text-3xl text-graphite">Industry not found</h1>
          <Link href="/industries" className="mt-6 inline-block font-[var(--font-mono)] text-sm text-blue hover:underline">
            ← Back to Industries
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${industry.label} — ZENOK Precision Tooling`,
    description: industry.summary,
  };

  return (
    <SiteLayout>
      <SeoHead
        title={`${industry.label} — ZENOK Taiwan Precision Tooling`}
        description={industry.summary}
        canonicalPath={industry.route}
        schema={schema}
        keywords={[industry.label, "carbide tooling", "precision micro tools", "ZENOK"]}
      />

      <IndustryCategoryNav currentSlug={industry.slug} categoryLabel={industry.shortLabel} />

      {/* Page hero */}
      <section className="relative border-b border-line pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              Industry Program
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}
            >
              {industry.label.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-blue">{industry.label.split(" ").slice(-1)[0]}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              {industry.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Summary + Key stat + specs */}
      <section className="relative py-20 lg:py-28">
        <div className="container-wrap">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Prose */}
            <Reveal>
              <div>
                <div className="sec-eyebrow">
                  Program Context
                  <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                    [ 01 ]
                  </span>
                </div>
                <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-graphite-soft">
                  <p>{industry.summary}</p>
                  <p>{industry.secondary}</p>
                </div>
              </div>
            </Reveal>

            {/* Key stat + specs */}
            <Reveal delay={150}>
              <div>
                <div className="relative border border-line bg-panel p-12 shadow-[var(--shadow)]">
                  <span className="absolute -left-px -top-px size-5 border-l-2 border-t-2 border-blue" />
                  <span className="absolute -right-px -top-px size-5 border-r-2 border-t-2 border-blue" />
                  <span className="absolute -bottom-px -left-px size-5 border-b-2 border-l-2 border-blue" />
                  <span className="absolute -bottom-px -right-px size-5 border-b-2 border-r-2 border-blue" />

                  <div className="text-center">
                    <div
                      className="font-[var(--font-display)] font-black leading-none text-graphite tracking-[-0.04em]"
                      style={{ fontSize: "clamp(80px, 10vw, 140px)" }}
                    >
                      {industry.keyStat.value}
                    </div>
                    <div className="mt-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
                      {industry.keyStat.label}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-px border border-line bg-line">
                  {industry.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className={`flex items-center justify-between gap-3 p-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.08em] ${
                        spec.highlight ? "bg-blue-pale" : "bg-panel"
                      }`}
                    >
                      <span className="text-steel">{spec.label}</span>
                      <span
                        className={`text-right font-semibold ${
                          spec.highlight ? "text-blue" : "text-graphite"
                        }`}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Browse matching products link */}
      <section className="relative border-t border-line bg-bg-2 py-16 lg:py-20">
        <div className="container-wrap">
          <Reveal>
            <Link href="/products">
              <div className="group flex flex-col items-start justify-between gap-6 border border-line bg-panel p-8 transition-all duration-300 hover:border-blue hover:shadow-[var(--shadow-blue)] md:flex-row md:items-center md:gap-10 lg:p-10">
                <div>
                  <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                    Recommended Tooling
                  </div>
                  <h3 className="mt-3 font-[var(--font-display)] text-2xl font-bold text-graphite lg:text-3xl">
                    Browse tools qualified for {industry.shortLabel.toLowerCase()} programs.
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-graphite-soft">
                    ZENOK's full catalog includes 156 SKUs across four geometry families — filter by construction and coating.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 whitespace-nowrap font-[var(--font-mono)] text-[13px] font-semibold uppercase tracking-[0.15em] text-blue">
                  Open Products
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Other industries */}
      <section className="relative border-t border-line py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Other Programs
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 02 ]
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {others.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 100}>
                <Link href={ind.route}>
                  <div className="group h-full border border-line bg-panel p-7 transition-all hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                    <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
                      {ind.shortLabel}
                    </div>
                    <h4 className="mt-3 font-[var(--font-display)] text-xl font-bold text-graphite">
                      {ind.label}
                    </h4>
                    <p className="mt-3 text-[14px] leading-[1.7] text-graphite-soft">
                      {ind.tagline}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-blue transition-transform group-hover:translate-x-1">
                      View <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-2 py-24 text-center lg:py-32">
        <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />
        <div className="container-wrap relative z-10">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Qualifying a new tool?
              <br />
              <span className="text-blue">Samples are free.</span>
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
              <span>Request Evaluation Samples</span>
              <span className="ar">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

/* Thin wrappers */
export function AerospacePage() {
  return <IndustryDetailPage slug="aerospace" />;
}
export function MedicalPage() {
  return <IndustryDetailPage slug="medical" />;
}
export function ElectronicsPage() {
  return <IndustryDetailPage slug="electronics" />;
}

export default IndustryDetailPage;
