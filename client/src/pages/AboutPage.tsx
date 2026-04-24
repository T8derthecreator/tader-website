/*
  /about — ZENOK company story, mission, values, timeline, certifications.
  Structure: Page Hero → Intro (prose + stats frame) → Mission quote →
             6 Values grid → Timeline → Certifications → Final CTA
*/
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import { useReveal, useCountUp } from "@/hooks/useReveal";

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

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const { ref, value } = useCountUp(to, 1500);
  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()}
    </span>
  );
}

const VALUES = [
  { num: "01", title: "Arithmetic over marketing", body: "Every cost-down claim we make is backed by a written proposal with real landed numbers. We don't use the word \"savings\" without showing the math." },
  { num: "02", title: "Vertical integration as moat", body: "Owning the substrate supply chain isn't a logistics advantage — it's a pricing floor our competitors structurally cannot break through." },
  { num: "03", title: "Engineer-to-engineer", body: "Every inquiry is handled by an application engineer, not a sales rep. We tell you when we can't help, and why — before you waste time on a qualification run." },
  { num: "04", title: "48-hour commitment", body: "A written proposal with landed pricing, lead time, and sample plan — within 48 hours of receiving your spec. Not an estimate. A commitment." },
  { num: "05", title: "Samples before volume", body: "We provide free evaluation samples for qualified programs. You don't commit to volume until you've run our tools in production. That's the correct order of operations." },
  { num: "06", title: "Trade-law transparency", body: "We publish our HTS classification (8207.70), duty rate (4.8% MFN), and origin documentation. No surprises at customs. No duty reclassification risk." },
];

const TIMELINE = [
  { year: "2019", title: "Founded in Taiwan", body: "ZENOK established in Taichung, Taiwan — the center of precision machining manufacturing in Asia. Initial focus on carbide substrate supply to regional tool manufacturers." },
  { year: "2020", title: "First finished tool line launched", body: "Leveraging existing bar stock supply chain, ZENOK launched its first finished end mill product line — flat and ball nose geometries in composite (B) and solid carbide (C) construction." },
  { year: "2021", title: "US market entry · Section 301 advantage recognized", body: "As China Section 301 tariffs compounded, ZENOK's Taiwan origin became a structural pricing advantage. First US aerospace and medical customers qualified on ZENOK tooling." },
  { year: "2023", title: "ISO 9001 certification · 100+ SKU catalog", body: "Achieved ISO 9001:2015 certification across all product lines. Catalog expanded to 100+ active SKUs covering flat, ball nose, corner radius, and aluminum-spec geometries." },
  { year: "2026", title: "156 SKUs · 48-hour proposal guarantee", body: "ZENOK now operates 156 active SKUs with a formal 48-hour proposal guarantee for all new programs. Custom geometry programs available at MOQ 200." },
];

const CERTS = [
  { icon: "ISO", name: "ISO 9001:2015", desc: "Quality management system certified across all product lines and manufacturing processes." },
  { icon: "RoHS", name: "RoHS Compliant", desc: "All coatings and substrates comply with EU Restriction of Hazardous Substances directive." },
  { icon: "HTS", name: "HTS 8207.70", desc: "Classified under HTS 8207.70 — 4.8% MFN general duty from Taiwan. Full origin documentation provided with every shipment." },
  { icon: "CoC", name: "Certificate of Conformance", desc: "Full inspection certs and material traceability documentation available for all orders. Aerospace and medical qualification ready." },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ZENOK — Taiwan Precision Carbide Micro Tooling",
  description: "Founded in 2019 in Taichung, Taiwan. ZENOK manufactures precision carbide micro cutting tools and supplies SS308 bar stock — a vertically integrated moat that competitors structurally cannot undercut.",
};

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <SiteLayout>
      <SeoHead
        title="About ZENOK — Built on One Structural Advantage | Taiwan Precision Tools"
        description="ZENOK was founded in Taiwan in 2019 on a single thesis: the most durable competitive moat in precision tooling is vertical integration. We own the material, the process, and the relationship."
        canonicalPath="/about"
        schema={aboutSchema}
        keywords={["ZENOK about", "Taiwan precision tools", "carbide micro tooling", "vertical integration"]}
      />

      {/* Page hero */}
      <section className="relative border-b border-line pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              About ZENOK
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              Built on one
              <br />
              <span className="text-blue">structural advantage.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              ZENOK was founded in Taiwan in 2019 with a single thesis: the most durable competitive moat in precision tooling is vertical integration — owning the material, the process, and the relationship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro: prose + stats frame */}
      <section className="relative border-t border-line py-20 lg:py-24">
        <div className="container-wrap">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="space-y-6 text-[17px] leading-[1.85] text-graphite-soft">
                <p>
                  ZENOK manufactures precision carbide micro cutting tools at our facility in Taiwan and supplies them factory-direct to CNC shops across the United States — primarily in aerospace, medical device, and electronics manufacturing.
                </p>
                <p>
                  What separates us structurally isn't just quality or price. It's that <strong className="text-graphite">we sell the raw carbide bar stock to other tool manufacturers</strong> — the same bar stock our finished tools are made from. After their machining overhead, coating, packaging, and distributor margin, their finished tool lands at $6.50–$9.00 per unit. We manufacture at the same material cost and ship direct. The math doesn't leave room for competitors to undercut us.
                </p>
                <p>
                  Add Taiwan's <strong className="text-graphite">4.8% MFN general duty</strong> versus China's compounding Section 301 surcharges, and the cost-down case builds before we even discuss geometry, substrate, or coating.
                </p>
                <p>
                  We're not a catalog house. Every program we take on gets a dedicated engineer, a written proposal within 48 hours, and evaluation samples before any volume commitment.{" "}
                  <em className="serif-italic text-graphite">That's the standard, not an upgrade.</em>
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative border border-line bg-gradient-to-br from-panel to-panel-2 p-10 shadow-[var(--shadow)] lg:sticky lg:top-28">
                {/* Corner accents */}
                <span className="absolute -left-px -top-px size-5 border-l-2 border-t-2 border-blue" />
                <span className="absolute -right-px -top-px size-5 border-r-2 border-t-2 border-blue" />
                <span className="absolute -bottom-px -left-px size-5 border-b-2 border-l-2 border-blue" />
                <span className="absolute -bottom-px -right-px size-5 border-b-2 border-r-2 border-blue" />

                <div className="mb-6 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.2em] text-blue">
                  Company Snapshot · 2026
                </div>

                <div className="space-y-6">
                  {[
                    { num: <Counter to={2019} />, suffix: "", label: "Year Founded · Taiwan" },
                    { num: <Counter to={156} />, suffix: "SKU", label: "Active Product Lines" },
                    { num: <Counter to={4.8} decimals={1} />, suffix: "%", label: "MFN Duty (HTS 8207.70)" },
                    { num: <Counter to={48} />, suffix: "hr", label: "Proposal Turnaround Guarantee" },
                    { num: <Counter to={3} />, suffix: "", label: "Industries Served (Primary)" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="border-b border-line-soft pb-6 last:border-b-0 last:pb-0"
                    >
                      <div
                        className="font-[var(--font-display)] font-black tracking-[-0.03em] text-graphite leading-none"
                        style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
                      >
                        {stat.num}
                        {stat.suffix && (
                          <span className="ml-1 text-[0.5em] font-semibold text-blue">
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 font-[var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.12em] text-steel">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="relative overflow-hidden border-t border-line bg-bg-2 py-24 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-0 size-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-blue/10 blur-3xl" />
        <div className="container-wrap relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <Reveal>
              <div
                className="select-none font-[var(--font-display)] font-black leading-[0.85] text-blue/10 tracking-[-0.05em]"
                style={{ fontSize: "clamp(120px, 18vw, 240px)" }}
              >
                ZN
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <blockquote
                  className="font-[var(--font-serif)] italic text-graphite leading-[1.25] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
                >
                  "The best cost-down is structural — not a{" "}
                  <span className="font-[var(--font-display)] text-[0.7em] font-bold not-italic text-blue tracking-[-0.02em]">
                    discount.
                  </span>
                  "
                </blockquote>
                <p className="mt-8 max-w-xl text-[16px] leading-[1.75] text-graphite-soft">
                  We exist to give precision manufacturers a better option than accepting distributor pricing on tools that come from the same factories we sell bar stock to. Every dollar saved on tooling drops directly to margin. That's the mission — and it's why we put the arithmetic in writing on every proposal.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="relative border-t border-line py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              What We Stand For
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
              Six principles.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">No filler.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid border border-line md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.num} delay={(i % 3) * 80}>
                <div className="group h-full border-b border-line p-10 transition-colors hover:bg-blue-pale md:border-r [&:nth-child(3n)]:md:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0 [&:nth-child(2n)]:md:border-r-0 lg:[&:nth-child(2n)]:border-r [&:nth-child(3n)]:lg:border-r-0">
                  <div className="font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.2em] text-blue">
                    {v.num}
                  </div>
                  <div className="mt-5 font-[var(--font-display)] text-xl font-bold tracking-[-0.01em] text-graphite">
                    {v.title}
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.7] text-graphite-soft">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Company History
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 02 ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
            >
              From bar stock
              <br />
              to <span className="serif-italic font-normal text-graphite-soft">finished tool.</span>
            </h2>
          </Reveal>

          <div className="mt-14 relative pl-10">
            {/* Vertical track */}
            <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-blue via-blue to-transparent" />
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 80}>
                <div className="relative mb-14 pl-10 last:mb-0">
                  {/* Dot */}
                  <span className="absolute -left-[5px] top-2 size-[11px] rounded-full bg-blue ring-4 ring-bg-2" />
                  <div className="font-[var(--font-display)] text-2xl font-black text-blue tracking-[-0.02em]">
                    {item.year}
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-xl font-bold text-graphite">
                    {item.title}
                  </div>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-graphite-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative border-t border-line py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Certifications & Standards
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 03 ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
            >
              Qualified for the
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                programs that matter.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c, i) => (
              <Reveal key={c.icon} delay={i * 80}>
                <div className="h-full border border-line bg-panel p-7 transition-all hover:border-blue hover:shadow-[var(--shadow-blue)]">
                  <div className="mb-5 flex size-14 items-center justify-center border-2 border-blue bg-blue font-[var(--font-mono)] text-xs font-bold uppercase tracking-[0.08em] text-white">
                    {c.icon}
                  </div>
                  <div className="font-[var(--font-display)] text-lg font-bold text-graphite">
                    {c.name}
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.7] text-graphite-soft">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
              Test the arithmetic.
              <br />
              <span className="text-blue">Start a conversation.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.65] text-graphite-soft">
              Tell us about your program. Submit your specs and target price — our engineering team returns a written cost-down proposal within 48 hours.
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

export { AboutPage };
