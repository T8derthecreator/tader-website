/*
  /quote-request — Intro page that explains the quote process then directs to external form.
  Structure: Hero → 3-step process → Form link + what to include → CTA
*/
import { useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
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

const STEPS = [
  {
    num: "01",
    title: "Submit specs",
    body: "Share your geometry, material, tolerance, annual volume, and target landed price. The more specific the spec, the more accurate the proposal.",
    time: "~5 min",
  },
  {
    num: "02",
    title: "Engineering review",
    body: "An application engineer — not a sales rep — evaluates feasibility, picks construction and coating, and calculates landed cost with duty and logistics.",
    time: "< 48 hr",
  },
  {
    num: "03",
    title: "Written proposal",
    body: "You receive a formal cost-down proposal with landed pricing, lead time, and sample plan. Free evaluation samples for qualified programs.",
    time: "Per program",
  },
];

const WHAT_TO_INCLUDE = [
  "Tool type (end mill, ball nose, corner radius, aluminum spec, or custom)",
  "Diameter, cut length, overall length, shank diameter",
  "Body construction preference (B composite / C solid carbide / B or C)",
  "Coating preference (Uncoated / TiAlN / Platinum TiAlN / DLC / open)",
  "Number of flutes",
  "Workpiece material (Ti, Inconel, SS, Al, CFRP, etc.)",
  "Toolholder type (shrink-fit, collet, Weldon, ER)",
  "Monthly or annual quantity",
  "Target landed price per unit",
];

const quoteSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Request a Quote — ZENOK Taiwan Precision Tools",
  description: "Submit your tooling specs and target price. ZENOK returns a written cost-down proposal within 48 hours.",
};

export default function QuoteRequestPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <SiteLayout>
      <SeoHead
        title="Request Quote — 48-Hour Cost-Down Proposal | ZENOK Taiwan"
        description="Share your tooling specs and target landed price. Our application engineers return a written proposal with landed cost, lead time, and sample plan within 48 hours."
        canonicalPath="/quote-request"
        schema={quoteSchema}
        keywords={["quote request", "custom carbide tools", "cost-down proposal", "ZENOK"]}
      />

      {/* Page hero */}
      <section className="relative border-b border-line pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Request Quote
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              Send us the spec.
              <br />
              <span className="text-blue">Proposal in 48 hours.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              ZENOK's inquiry form is a cost-down specification request — not a generic contact form. Share your target price and we'll tell you whether we can meet it, beat it, or explain why it's not feasible. No sales runaround.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Open Inquiry Form</span>
                <span className="ar">→</span>
              </a>
              <a
                href="mailto:info@zenoktool.com"
                className="btn-secondary"
              >
                <span>Or email info@zenoktool.com</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3-step process */}
      <section className="relative py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Process
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 01 ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
            >
              Three steps.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                Engineer-routed from step two.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div className="relative h-full border border-line bg-panel p-8">
                  <div className="flex items-baseline justify-between">
                    <div
                      className="font-[var(--font-display)] font-black leading-none text-blue tracking-[-0.03em]"
                      style={{ fontSize: "clamp(44px, 4.5vw, 56px)" }}
                    >
                      {s.num}
                    </div>
                    <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.12em] text-steel">
                      {s.time}
                    </div>
                  </div>
                  <div className="mt-5 font-[var(--font-display)] text-xl font-bold text-graphite">
                    {s.title}
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.75] text-graphite-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to include + form button */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-28">
        <div className="container-wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <div>
                <div className="sec-eyebrow">
                  What to include
                  <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                    [ 02 ]
                  </span>
                </div>
                <h2
                  className="mt-8 font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                >
                  Specify enough that we can
                  <br />
                  <span className="serif-italic font-normal text-graphite-soft">
                    actually answer the question.
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-graphite-soft">
                  The more detailed your spec, the more accurate our proposal. A partial spec is OK — we'll come back with questions before the 48 hours are up.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="border border-line bg-panel p-8 lg:p-10">
                <div className="mb-5 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                  Inquiry Form Fields
                </div>
                <ul className="space-y-3">
                  {WHAT_TO_INCLUDE.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.65] text-graphite-soft">
                      <CheckCircle2 className="mt-0.5 size-4 flex-none text-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 w-full justify-center"
                >
                  <span>Start Your Inquiry</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Alternative contacts */}
      <section className="relative border-t border-line py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Other Ways to Reach Us
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 03 ]
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Email",
                value: "info@zenoktool.com",
                href: "mailto:info@zenoktool.com",
                note: "For general inquiries and follow-ups on existing programs.",
              },
              {
                label: "Direct samples",
                value: "Request with specs",
                href: INQUIRY_URL,
                note: "Free evaluation samples for qualified aerospace and medical programs.",
              },
              {
                label: "Bar stock",
                value: "Rod supply inquiry",
                href: INQUIRY_URL,
                note: "SS308 tungsten carbide bar stock — Ø 3–20 mm, MOQ 100 kg.",
              },
            ].map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block h-full border border-line bg-panel p-7 transition-all hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]"
                >
                  <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-steel">
                    {c.label}
                  </div>
                  <div className="mt-3 font-[var(--font-display)] text-lg font-bold text-graphite transition-colors group-hover:text-blue">
                    {c.value}
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.65] text-graphite-soft">{c.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export { QuoteRequestPage };
