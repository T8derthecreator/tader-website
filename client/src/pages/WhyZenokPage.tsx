/*
  Why ZENOK page — the moat argument in depth.
  Sections: Page hero → Tariff detail → Moat card → Big stats band
          → Value cards (48hr/Factory Direct/ISO 9001) → Process 4-step → CTA
*/
import { useEffect } from "react";
import { Clock, Layers, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
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
    <div
      ref={ref}
      className={`reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CountUp({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const { ref, display } = useCountUp(to, decimals);
  return (
    <span ref={ref}>
      {display}
      {suffix && (
        <span className="ml-1 text-[0.4em] font-semibold tracking-wide text-steel">
          {suffix}
        </span>
      )}
    </span>
  );
}

/* ---------- Page Hero ---------- */

function PageHero() {
  return (
    <section className="relative border-b border-line pt-20 pb-20 lg:pt-28 lg:pb-24">
      <div className="container-wrap">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
            <span className="h-px w-8 bg-blue" />
            Why ZENOK
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(48px, 6vw, 96px)" }}>
            The structural case
            <br />
            for <span className="text-blue">switching.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-graphite-soft">
            Taiwan origin. Factory-direct pricing. Bar stock supply to our own competitors. Before you evaluate a single dimension, the cost-down case is already built.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Tariff detail ---------- */

function TariffDetail() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            The Tariff Advantage
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 01 ]
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            Section 301–exempt.
            <br />
            Priced to dismantle your China spend{" "}
            <span className="text-blue">by 20%+</span>.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.8] text-graphite-soft">
            HTS 8207.70 cutting tools from Taiwan face only the 4.8% MFN general duty. The same tools from China stack the MFN duty plus Section 301 — often 25% or higher. Before quality, before coating,{" "}
            <em className="serif-italic text-graphite">
              that's where the cost-down starts.
            </em>
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Taiwan */}
          <Reveal>
            <div className="h-full border-2 border-blue bg-panel-2 p-8 lg:p-10">
              <div className="mb-4 flex items-center justify-between font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em]">
                <span className="text-graphite">
                  🇹🇼 <strong>TAIWAN</strong> — MFN General
                </span>
                <span className="text-steel">HTS 8207.70</span>
              </div>
              <div className="font-[var(--font-display)] text-[80px] font-black leading-none tracking-[-0.03em] text-blue lg:text-[100px]">
                <CountUp to={4.8} decimals={1} />
                <span className="ml-2 text-[0.35em] font-bold text-blue/70">%</span>
              </div>
              <p className="mt-6 text-[14px] leading-[1.75] text-graphite-soft">
                No Section 301 surcharge. No retaliatory bracket. Just the baseline MFN duty that any WTO member incurs — the same rate the US applies to Germany, Japan, Korea.
              </p>
              <div className="mt-6 h-2 overflow-hidden bg-line">
                <div className="h-full w-[10%] bg-blue" />
              </div>
            </div>
          </Reveal>

          {/* China */}
          <Reveal delay={150}>
            <div className="h-full border border-line bg-panel p-8 lg:p-10">
              <div className="mb-4 flex items-center justify-between font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em]">
                <span className="text-graphite">
                  🇨🇳 <strong>CHINA</strong> — MFN + 301
                </span>
                <span className="text-steel">+ Section 301</span>
              </div>
              <div className="font-[var(--font-display)] text-[80px] font-black leading-none tracking-[-0.03em] text-graphite lg:text-[100px]">
                <CountUp to={25} />
                <span className="ml-2 text-[0.35em] font-bold text-steel-faint">%+</span>
              </div>
              <p className="mt-6 text-[14px] leading-[1.75] text-graphite-soft">
                4.8% MFN plus 25% Section 301 surcharge compounds. Additional bracket categories may push total duty higher still — before any USD freight volatility.
              </p>
              <div className="mt-6 h-2 overflow-hidden bg-line">
                <div className="h-full w-[60%] bg-graphite" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Moat card — with blue gradient accent stripe */}
        <Reveal delay={250}>
          <div className="relative mt-10 overflow-hidden border border-line bg-panel p-8 shadow-[var(--shadow)] md:p-10">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-1"
              style={{ background: "linear-gradient(180deg, var(--blue), var(--cyan))" }}
            />
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
              <div className="relative grid size-[100px] place-items-center border-[1.5px] border-blue bg-blue-pale font-[var(--font-display)] text-[44px] font-black text-blue">
                ◈
              </div>
              <div>
                <h4 className="font-[var(--font-display)] text-xl font-bold leading-snug text-graphite lg:text-2xl">
                  The structural moat: we supply bar stock{" "}
                  <span className="serif-italic font-normal text-blue">
                    to our own competitors.
                  </span>
                </h4>
                <p className="mt-4 max-w-[720px] text-[15px] leading-[1.8] text-graphite-soft">
                  ZENOK sells carbide bar stock to other tool manufacturers while simultaneously selling finished tools under our own brand. After their machining, depreciation, labor, and overhead, their finished tool cost lands at $6.50–$9.00. They can't structurally undercut us. That's not marketing — that's arithmetic.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Big Stats Band ---------- */

function BigStatsBand() {
  const stats = [
    { v: 4.8, dec: 1, u: "%", l: "MFN Duty (Taiwan)" },
    { v: 25, dec: 0, u: "%+", l: "China Section 301" },
    { v: 20, dec: 0, u: "%+", l: "Typical Savings" },
    { v: 48, dec: 0, u: "hr", l: "Proposal Guarantee" },
  ];

  return (
    <section className="relative overflow-hidden border-t border-line bg-bg-2 py-20 lg:py-28">
      {/* Grid decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(29,78,216,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,78,216,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,var(--glow),transparent_70%)]" />

      <div className="container-wrap relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div
                className={`border-line p-10 text-center ${
                  i === 0 ? "" : "md:border-l"
                } ${i >= 2 ? "border-t md:border-t-0" : ""}`}
              >
                <div
                  className="font-[var(--font-display)] font-black leading-[0.92] tracking-[-0.05em]"
                  style={{
                    fontSize: "clamp(48px, 7vw, 80px)",
                    background:
                      "linear-gradient(180deg, var(--blue), var(--cyan))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <CountUp to={s.v} decimals={s.dec} />
                  <span
                    className="ml-1 text-[0.4em] font-semibold"
                    style={{ color: "var(--text-dim)", WebkitTextFillColor: "var(--text-dim)" }}
                  >
                    {s.u}
                  </span>
                </div>
                <div className="mt-3 font-[var(--font-mono)] text-[12px] font-semibold uppercase tracking-[0.15em] text-steel">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Value Cards ---------- */

const VALUES = [
  {
    Icon: Clock,
    title: "48-Hour Proposal",
    desc: "Submit specs, receive a written cost-down proposal with landed pricing, lead time, and sample plan — guaranteed within 48 hours of inquiry.",
  },
  {
    Icon: Layers,
    title: "Factory Direct",
    desc: "No distributor markup. We manufacture in Taiwan and ship direct to your dock. Every dollar of margin stays in your operation, not a middleman's P&L.",
  },
  {
    Icon: CheckCircle2,
    title: "ISO 9001 Qualified",
    desc: "Full documentation, traceability, and inspection certs for every order. Aerospace and medical qualification ready — no upgrade required.",
  },
];

function ValueCards() {
  return (
    <section className="relative border-t border-line bg-bg py-20 lg:py-28">
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            What You Get
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 02 ]
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            Three reasons
            <br />
            <span className="serif-italic font-normal text-graphite-soft">
              beyond the duty rate.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden border border-line bg-panel p-9 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                <div
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--blue), var(--cyan))",
                  }}
                />
                <div className="mb-5 grid size-12 place-items-center border-[1.5px] border-blue bg-blue-pale text-blue">
                  <v.Icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-bold tracking-[-0.01em] text-graphite">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-graphite-soft">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process Steps ---------- */

const STEPS = [
  {
    n: "01",
    t: "Share specs",
    d: "Tool type, critical dimensions, current unit price, monthly volume. No NDA wall.",
    m: "~ 3 min form",
  },
  {
    n: "02",
    t: "Engineering review",
    d: "Our team evaluates feasibility against Taiwan carbide production and coating lines.",
    m: "~ 24 hr",
  },
  {
    n: "03",
    t: "Proposal issued",
    d: "Written cost-down proposal with landed pricing, lead time, and sample plan.",
    m: "~ 48 hr total",
  },
  {
    n: "04",
    t: "Sample → volume",
    d: "Free evaluation samples for qualified programs, then ramp to contracted volume.",
    m: "~ 2 weeks",
  },
];

function ProcessSteps() {
  return (
    <section className="relative border-t border-line bg-bg py-20 lg:py-28">
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            The Process
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 03 ]
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            From spec to proposal.
            <br />
            <span className="text-blue">Under 48 hours,</span> every time.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="group relative px-0 lg:px-5">
                <div className="flex items-center gap-4">
                  <div className="relative grid size-[72px] place-items-center border-[1.5px] border-blue bg-white font-[var(--font-display)] text-lg font-bold text-blue shadow-[var(--shadow-sm)] transition-all duration-500 group-hover:bg-blue group-hover:text-white group-hover:shadow-[var(--shadow-blue)]">
                    {s.n}
                    <div
                      className="absolute -inset-[10px] border border-line transition-all duration-500 group-hover:-inset-4 group-hover:border-blue"
                      aria-hidden="true"
                    />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden h-px flex-1 bg-line lg:block" />
                  )}
                </div>
                <div className="mt-8 font-[var(--font-display)] text-[22px] font-bold tracking-[-0.01em] text-graphite">
                  {s.t}
                </div>
                <p className="mt-3 text-[15px] leading-[1.7] text-graphite-soft">
                  {s.d}
                </p>
                <div className="mt-4 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                  {s.m}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CtaBig() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-bg-2 py-28 text-center lg:py-36">
      <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />

      <div className="container-wrap relative z-10">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}>
            See the arithmetic
            <br />
            <span className="text-blue">for your program.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.65] text-graphite-soft">
            Submit your specs and current pricing. We'll return a written cost-down proposal — or tell you we can't help, and why.
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
  );
}

/* ---------- Root ---------- */

const whyZenokSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Why ZENOK — Taiwan Carbide Micro Tool Cost-Down Moat",
  description:
    "The structural case for switching to ZENOK. Taiwan 4.8% MFN duty vs China 25%+ Section 301, bar stock supply moat, 48-hour proposal guarantee.",
};

export default function WhyZenokPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <SiteLayout>
      <SeoHead
        title="Why ZENOK — The Structural Case for Switching | 4.8% MFN Duty vs China's 25%+"
        description="Taiwan HTS 8207.70 exemption from Section 301. ZENOK supplies bar stock to its own competitors — structurally unbeatable finished tool pricing. 48-hour proposal guarantee."
        canonicalPath="/why-zenok"
        schema={whyZenokSchema}
        keywords={[
          "Taiwan tariff advantage",
          "HTS 8207.70",
          "Section 301 exemption",
          "carbide tool moat",
          "ZENOK",
        ]}
      />
      <PageHero />
      <TariffDetail />
      <BigStatsBand />
      <ValueCards />
      <ProcessSteps />
      <CtaBig />
    </SiteLayout>
  );
}

export { WhyZenokPage };
