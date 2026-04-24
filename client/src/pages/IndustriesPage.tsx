/*
  /industries — main industries overview page.
  Shows 3 industry cards at top, then detail section for each inline.
*/
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import { INDUSTRIES } from "@/components/site/IndustryComponents";
import { useReveal } from "@/hooks/useReveal";

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

const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Industries — Aerospace, Medical, Electronics | ZENOK",
  description: "ZENOK-qualified precision carbide tooling for aerospace, medical device, and electronics manufacturing programs.",
};

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <SiteLayout>
      <SeoHead
        title="Industries — Aerospace · Medical · Electronics | ZENOK Taiwan"
        description="ZENOK serves aerospace, medical device, and electronics manufacturing programs with precision carbide micro tooling qualified for each industry's specific material and tolerance requirements."
        canonicalPath="/industries"
        schema={industriesSchema}
        keywords={["aerospace tooling", "medical device machining", "electronics manufacturing", "precision carbide", "ZENOK"]}
      />

      {/* Page hero */}
      <section className="relative border-b border-line pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Industries
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              Three programs.
              <br />
              <span className="text-blue">One toolmaker.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              ZENOK tooling is qualified for aerospace, medical device, and electronics manufacturing. Each industry has its own dominant failure mode — and a different cost-down case. Pick yours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 Industry cards */}
      <section className="relative py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Quick Select
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 01 ]
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 100}>
                <Link href={ind.route}>
                  <div className="group relative h-full border border-line bg-panel p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                    <div className="flex items-start justify-between">
                      <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-steel">
                        Industry / 0{i + 1}
                      </div>
                      <div className="text-xl text-steel transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue">
                        ↗
                      </div>
                    </div>
                    <h3
                      className="mt-6 font-[var(--font-display)] font-bold tracking-[-0.02em] text-graphite leading-[1.05]"
                      style={{ fontSize: "clamp(24px, 2.6vw, 30px)" }}
                    >
                      {ind.label}
                    </h3>
                    <p className="mt-4 text-[14px] leading-[1.7] text-graphite-soft">
                      {ind.tagline}
                    </p>
                    <div className="mt-8 border-t border-line pt-5">
                      <div
                        className="font-[var(--font-display)] font-black leading-none text-blue tracking-[-0.03em]"
                        style={{ fontSize: "clamp(36px, 4vw, 44px)" }}
                      >
                        {ind.keyStat.value}
                      </div>
                      <div className="mt-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-steel">
                        {ind.keyStat.label}
                      </div>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue transition-transform duration-200 group-hover:translate-x-1">
                      View detail
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inline detailed sections (alternating left/right layout) */}
      {INDUSTRIES.map((ind, i) => {
        const reverse = i % 2 === 1;
        return (
          <section
            key={`detail-${ind.slug}`}
            className={`relative border-t border-line py-20 lg:py-28 ${
              i % 2 === 1 ? "bg-bg-2" : ""
            }`}
          >
            <div className="container-wrap">
              <div
                className={`grid gap-12 lg:gap-16 lg:items-center ${
                  reverse ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1fr_1fr]"
                }`}
              >
                {/* Content */}
                <Reveal>
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.2em] text-blue">
                      Industry / 0{i + 1}
                    </div>
                    <h3
                      className="mt-5 font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
                      style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}
                    >
                      {ind.label.split(" ").slice(0, -1).join(" ")}
                      <br />
                      <span className="serif-italic font-normal text-graphite-soft">
                        {ind.label.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                    <div className="mt-6 space-y-5 text-[16px] leading-[1.75] text-graphite-soft">
                      <p>{ind.summary}</p>
                      <p>{ind.secondary}</p>
                    </div>
                    <Link
                      href={ind.route}
                      className="btn-secondary mt-8 inline-flex items-center gap-2"
                    >
                      <span>View {ind.shortLabel} detail</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </Reveal>

                {/* Visual + specs */}
                <Reveal delay={150}>
                  <div className={reverse ? "lg:order-1" : ""}>
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
                          {ind.keyStat.value}
                        </div>
                        <div className="mt-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
                          {ind.keyStat.label}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-px border border-line bg-line">
                      {ind.specs.map((spec) => (
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
        );
      })}

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-2 py-28 text-center lg:py-36">
        <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />
        <div className="container-wrap relative z-10">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
            >
              Which program is yours?
              <br />
              <span className="text-blue">Tell us the spec.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.65] text-graphite-soft">
              Share your material, tolerance, and volume target. Our engineering team returns a written proposal within 48 hours.
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
              <span>Request Cost-Down Proposal</span>
              <span className="ar">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export { IndustriesPage };
