/*
  ZENOK HomePage — simplified per user decision.
  Sections: Hero → Process
          → Products Teaser (4 geometry cards) → Industries Teaser (3 cards) → CTA big
  Dropped vs Claude Design HTML: big Cost-Down marquee, value cards, full industries cards.
  Those moved to /why-zenok and /industries respectively to give those pages purpose.
*/
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import InteractiveToolVisual from "@/components/site/InteractiveToolVisual";
import { useReveal, useCountUp } from "@/hooks/useReveal";

const INQUIRY_URL = "https://toolinginquiryform.netlify.app/";

/* ---------- Small helpers ---------- */

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
        <span className="ml-1 text-[0.42em] font-semibold tracking-wide text-blue">
          {suffix}
        </span>
      )}
    </span>
  );
}

/* ---------- HERO ---------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
      <div className="container-wrap">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-[var(--font-mono)] text-[10px] normal-case tracking-[0.15em] text-steel-faint">
            <span>— EST. 2019</span>
            <span>— ISO 9001 · RoHS</span>
            <span className="hidden md:inline">— AEROSPACE / MEDICAL / ELECTRONICS</span>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: copy block */}
          <div>
            <Reveal>
              <h1 className="font-[var(--font-display)] font-black tracking-[-0.04em] leading-[0.92] text-graphite"
                  style={{ fontSize: "clamp(44px, 6vw, 88px)" }}>
                Micro tools.
                <br />
                Macro <span className="text-blue">margins.</span>
                <br />
                <span className="serif-italic text-graphite-soft">
                  — engineered in Taiwan.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-graphite-soft">
                ZENOK manufactures precision carbide micro cutting tools in Taiwan for US aerospace, medical, and electronics CNC shops. Rod stock to finished tool, in-house — no middle margin.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Request Cost-Down Proposal</span>
                  <span className="ar">→</span>
                </a>
                <Link href="/products" className="btn-secondary">
                  See Products
                </Link>
              </div>
            </Reveal>

            {/* Hero stats row */}
            <Reveal delay={500}>
              <div className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-3 sm:gap-8">
                <div>
                  <div className="font-[var(--font-display)] text-[38px] font-extrabold leading-none tracking-[-0.02em] text-graphite">
                    <CountUp to={97} />
                  </div>
                  <div className="mt-3 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.12em] text-steel">
                    Active SKU
                  </div>
                </div>
                <div>
                  <div className="font-[var(--font-display)] text-[38px] font-extrabold leading-none tracking-[-0.02em] text-graphite">
                    <CountUp to={48} suffix="hr" />
                  </div>
                  <div className="mt-3 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.12em] text-steel">
                    Proposal Time
                  </div>
                </div>
                <div>
                  <div className="font-[var(--font-display)] text-[38px] font-extrabold leading-none tracking-[-0.02em] text-graphite">
                    <CountUp to={20} suffix="%+" />
                  </div>
                  <div className="mt-3 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.12em] text-steel">
                    Typical Savings
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: technical visual — 3D interactive tool (Three.js) */}
          <Reveal delay={150}>
            <InteractiveToolVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */

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
    d: "Our team evaluates feasibility against our carbide production and coating lines.",
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

function ProcessSection() {
  return (
    <section className="relative border-t border-line bg-bg py-20 lg:py-28">
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            Workflow
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 01 ]
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center border border-blue bg-panel font-[var(--font-mono)] text-lg font-semibold text-blue">
                    {s.n}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden h-px flex-1 bg-line lg:block" />
                  )}
                </div>
                <div className="mt-6 font-[var(--font-display)] text-2xl font-bold text-graphite">
                  {s.t}
                </div>
                <p className="mt-3 text-sm leading-[1.75] text-graphite-soft">
                  {s.d}
                </p>
                <div className="mt-4 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.15em] text-blue">
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

/* ---------- PRODUCTS TEASER ---------- */

const PRODUCT_CARDS = [
  {
    num: "01 / FLAT",
    name: "Flat End Mills",
    range: "Ø 1.0–3.0 mm · 54 SKU",
    href: "/products/flat-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="80" />
        <rect x="25" y="90" width="10" height="35" />
        <path d="M 25 125 L 35 125 M 22 90 L 38 90" />
      </g>
    ),
  },
  {
    num: "02 / BALL",
    name: "Ball Nose",
    range: "R0.5–R1.5 (Ø 1.0–3.0 mm) · 21 SKU",
    href: "/products/ball-nose-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="85" />
        <circle cx="30" cy="105" r="10" />
        <path d="M 22 95 L 38 95" />
      </g>
    ),
  },
  {
    num: "03 / CORNER",
    name: "Corner Radius",
    range: "Ø 1.0–3.0 mm · 6 SKU",
    href: "/products/corner-radius-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="85" />
        <path
          d="M 22 95 Q 22 110 30 110 Q 38 110 38 95 Z"
          fill="rgba(29,78,216,0.12)"
        />
        <path d="M 30 110 L 30 125" />
      </g>
    ),
  },
  {
    num: "04 / AL",
    name: "Aluminum Spec",
    range: "Ø 1.0–3.0 mm · 16 SKU",
    href: "/products/aluminum-end-mills",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="22" y="10" width="16" height="80" />
        <path
          d="M 22 90 L 38 90 L 42 120 L 18 120 Z"
          fill="rgba(29,78,216,0.15)"
        />
        <path
          d="M 26 95 L 30 115 M 34 95 L 30 115"
          strokeDasharray="2 2"
        />
      </g>
    ),
  },
];

function ProductsTeaserSection() {
  return (
    <section
      id="products"
      className="relative border-t border-line bg-bg-2 py-20 lg:py-28"
    >
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            Catalog
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 02 ]
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            Start from the geometry.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-graphite-soft">
            Four geometry families. 97 active SKUs. Custom work beyond the catalog starts at MOQ 200.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CARDS.map((c, i) => (
            <Reveal key={c.num} delay={i * 100}>
              <Link href={c.href}>
                <div className="group relative h-full border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                  <div className="flex items-start justify-between">
                    <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-steel">
                      {c.num}
                    </div>
                    <div className="text-xl text-steel transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue">
                      ↗
                    </div>
                  </div>
                  <div className="mt-6 flex h-[140px] items-center justify-center text-blue">
                    <svg width="60" height="140" viewBox="0 0 60 140">
                      {c.svg}
                    </svg>
                  </div>
                  <div className="mt-6 font-[var(--font-display)] text-xl font-bold text-graphite">
                    {c.name}
                  </div>
                  <div className="mt-2 font-[var(--font-mono)] text-[11px] normal-case tracking-[0.12em] text-steel">
                    {c.range}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES TEASER ---------- */

const INDUSTRIES_TEASER = [
  {
    name: "Medical Machining",
    desc: "Orthopedic implants, surgical instruments, micro-dental.",
    stat: "22% avg savings",
    href: "/applications/medical",
  },
  {
    name: "Aerospace",
    desc: "Titanium and Inconel features on qualified process windows.",
    stat: "18% avg savings",
    href: "/applications/aerospace",
  },
  {
    name: "Electronics",
    desc: "High-frequency tool consumption programs at scale.",
    stat: "28% avg savings",
    href: "/applications/electronics",
  },
];

function IndustriesTeaserSection() {
  return (
    <section className="relative border-t border-line bg-bg py-20 lg:py-28">
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            Applications
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 03 ]
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            Built for programs where
            <br />
            tooling consumption{" "}
            <span className="text-blue">decides margin.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {INDUSTRIES_TEASER.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 120}>
              <Link href={ind.href}>
                <div className="group h-full border border-line bg-panel p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-blue)]">
                  <div className="font-[var(--font-display)] text-2xl font-bold text-graphite">
                    {ind.name}
                  </div>
                  <p className="mt-4 text-sm leading-[1.75] text-graphite-soft">
                    {ind.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <span className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">
                      {ind.stat}
                    </span>
                    <span className="text-steel transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 text-center">
            <Link
              href="/applications"
              className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue hover:underline"
            >
              See all applications
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CTA BIG ---------- */

function CtaBigSection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-bg-2 py-28 text-center lg:py-36">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />

      <div className="container-wrap relative z-10">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}>
            Send us the part
            <br />
            <span className="text-blue">you're over-paying</span>
            <br />
            <span className="serif-italic font-normal text-graphite-soft">
              to tool up.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-[1.65] text-graphite-soft">
            Submit specs and target price. Our engineering team comes back with a proposal inside 2 business days — or we tell you we can't help, and why.
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
            <span>Start Cost-Down Request</span>
            <span className="ar">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- ROOT ---------- */

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZENOK",
  url: typeof window !== "undefined" ? window.location.origin : "",
  slogan: "Taiwan Micro Cutting Tool Cost-Down Partner",
};

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <SiteLayout>
      <SeoHead
        title="ZENOK — Taiwan Micro Cutting Tool Cost-Down Partner"
        description="Submit your CNC micro tooling specs and target price. ZENOK evaluates feasibility and delivers a cost-down proposal within 2 business days. Taiwan-made carbide end mills, 1.0–3.0 mm."
        canonicalPath="/"
        schema={homepageSchema}
        keywords={[
          "micro end mills",
          "Taiwan carbide tools",
          "ZENOK",
        ]}
      />
      <HeroSection />
      <ProcessSection />
      <ProductsTeaserSection />
      <IndustriesTeaserSection />
      <CtaBigSection />
    </SiteLayout>
  );
}

export { HomePage };
