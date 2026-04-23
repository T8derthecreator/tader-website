/*
  ZENOK HomePage — simplified per user decision.
  Sections: Hero → Tariff+Moat (Why teaser) → Calculator → Process
          → Products Teaser (4 geometry cards) → Industries Teaser (3 cards) → CTA big
  Dropped vs Claude Design HTML: big Cost-Down marquee, value cards, full industries cards.
  Those moved to /why-zenok and /industries respectively to give those pages purpose.
*/
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
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
          <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-steel-faint">
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-flex size-[6px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-[6px] rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              </span>
              LIVE · TAIWAN MFG
            </span>
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
                ZENOK manufactures precision carbide micro cutting tools in Taiwan and supplies them to US aerospace, medical, and electronics CNC shops at{" "}
                <strong className="font-semibold text-graphite">4.8% MFN duty</strong>
                {" "}— while also supplying bar stock to our competitors. That's not a coincidence. That's the moat.
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
              <div className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-4 sm:gap-8">
                <div>
                  <div className="font-[var(--font-display)] text-[38px] font-extrabold leading-none tracking-[-0.02em] text-graphite">
                    <CountUp to={156} />
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
                    <CountUp to={4.8} decimals={1} suffix="%" />
                  </div>
                  <div className="mt-3 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.12em] text-steel">
                    MFN Duty
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

          {/* Right: technical visual */}
          <Reveal delay={150}>
            <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden border border-line bg-gradient-to-br from-panel to-panel-2 shadow-[var(--shadow-lg)]">
              {/* Corner brackets */}
              <div className="absolute left-0 top-0 size-6 border-l-[1.5px] border-t-[1.5px] border-blue" />
              <div className="absolute right-0 top-0 size-6 border-r-[1.5px] border-t-[1.5px] border-blue" />
              <div className="absolute bottom-0 left-0 size-6 border-b-[1.5px] border-l-[1.5px] border-blue" />
              <div className="absolute bottom-0 right-0 size-6 border-b-[1.5px] border-r-[1.5px] border-blue" />

              {/* Tick labels */}
              <div className="absolute left-5 top-5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-steel">
                [ TOOL · 0042 ]
              </div>
              <div className="absolute right-5 top-5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-steel">
                Ø 3.000 MM
              </div>
              <div className="absolute bottom-5 left-5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-steel">
                MAT · SS308
              </div>
              <div className="absolute bottom-5 right-5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-steel">
                COAT · TIALN
              </div>

              {/* Main concentric tool */}
              <svg
                className="absolute inset-0 m-auto"
                width="280"
                height="280"
                viewBox="0 0 260 260"
              >
                <defs>
                  <radialGradient id="heroGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="130" cy="130" r="100" fill="url(#heroGrad)" />
                <g fill="none" stroke="#2563eb" strokeWidth="1.2">
                  <circle
                    cx="130"
                    cy="130"
                    r="100"
                    strokeDasharray="2 4"
                    opacity="0.4"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 130 130"
                      to="360 130 130"
                      dur="60s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="130" cy="130" r="75" opacity="0.6" />
                  <circle cx="130" cy="130" r="50" />
                  <path
                    d="M 130 80 L 155 130 L 130 180 L 105 130 Z"
                    fill="rgba(37,99,235,0.15)"
                  />
                  <path
                    d="M 80 130 L 130 105 L 180 130 L 130 155 Z"
                    fill="rgba(8,145,178,0.12)"
                  />
                  <circle cx="130" cy="130" r="8" fill="#2563eb" />
                  <g strokeWidth="0.8">
                    <line x1="130" y1="20" x2="130" y2="30" />
                    <line x1="130" y1="230" x2="130" y2="240" />
                    <line x1="20" y1="130" x2="30" y2="130" />
                    <line x1="230" y1="130" x2="240" y2="130" />
                  </g>
                </g>
              </svg>

              {/* Spec tags */}
              <div className="absolute right-4 top-16 border border-blue/40 bg-white/95 px-2 py-1 font-[var(--font-mono)] text-[9px] text-blue">
                Ø 0.3 · R0.15 BN
              </div>
              <div className="absolute bottom-20 left-4 border border-blue/40 bg-white/95 px-2 py-1 font-[var(--font-mono)] text-[9px] text-blue">
                2F · 50 OAL
              </div>
              <div className="absolute bottom-14 right-10 border border-blue/40 bg-white/95 px-2 py-1 font-[var(--font-mono)] text-[9px] text-blue">
                HRC 62 · TiAlN
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- TARIFF + MOAT (Why ZENOK teaser) ---------- */

function TariffMoatSection() {
  return (
    <section
      id="why"
      className="relative border-t border-line bg-bg py-20 lg:py-28"
    >
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            Why ZENOK
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 01 ]
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            Taiwan-made, Section 301–exempt,
            <br />
            priced to dismantle your China spend{" "}
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

        {/* Tariff bars */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Taiwan — highlight */}
          <Reveal>
            <div className="h-full border-2 border-blue bg-panel-2 p-8 transition-shadow hover:shadow-[var(--shadow-blue)] lg:p-10">
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
                <span className="ml-2 text-[0.35em] font-bold text-steel-faint">
                  %+
                </span>
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

        {/* Moat callout */}
        <Reveal delay={250}>
          <div className="mt-10 flex flex-col gap-6 border border-blue/30 bg-panel p-8 md:flex-row md:items-start md:p-10">
            <div className="flex-shrink-0 font-[var(--font-display)] text-5xl leading-none text-blue">
              ◈
            </div>
            <div>
              <h4 className="font-[var(--font-display)] text-xl font-bold leading-snug text-graphite lg:text-2xl">
                The structural moat: we supply bar stock{" "}
                <span className="serif-italic font-normal text-blue">
                  to our own competitors.
                </span>
              </h4>
              <p className="mt-4 text-[14px] leading-[1.75] text-graphite-soft">
                ZENOK sells carbide bar stock to other tool manufacturers while simultaneously selling finished tools under our own brand. After their machining, depreciation, labor, and overhead, their finished tool cost lands at $6.50–$9.00. They can't structurally undercut us. That's not marketing — that's arithmetic.
              </p>
              <Link
                href="/why-zenok"
                className="mt-5 inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue hover:underline"
              >
                See the full moat breakdown
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CALCULATOR ---------- */

const CALC_CATEGORIES = [
  { v: 3.5, label: "3mm Flat End Mill · (B)" },
  { v: 6.0, label: "R-series Ball Nose · (B) uncoated" },
  { v: 9.0, label: "R-series Ball Nose · (C) TiAlN" },
  { v: 8.5, label: '1/8" Custom · (B/C)' },
  { v: 7.0, label: "Corner Radius · (C)" },
];

function CalculatorSection() {
  const [factoryCost, setFactoryCost] = useState(9.0);
  const [curPrice, setCurPrice] = useState(14.5);
  const [volume, setVolume] = useState(500);

  const math = useMemo(() => {
    const landedZenok = factoryCost * 1.16;
    const perUnitSave = Math.max(0, curPrice - landedZenok);
    const annual = perUnitSave * volume * 12;
    const pct = curPrice > 0 ? (perUnitSave / curPrice) * 100 : 0;
    return { landedZenok, perUnitSave, annual, pct };
  }, [factoryCost, curPrice, volume]);

  return (
    <section
      id="calc"
      className="relative border-t border-line bg-bg-2 py-20 lg:py-28"
    >
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            Interactive Tool
            <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
              [ 02 ]
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            Calculate your annual cost-down.
            <br />
            <span className="text-blue">Live.</span> No form.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-graphite-soft">
            Drop in your current tooling spend and we'll show you the math. Real numbers from our engineering team inside 48 hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-2">
          {/* LEFT — inputs */}
          <Reveal>
            <div className="space-y-8 bg-panel p-8 lg:p-10">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-graphite">
                    Tool Category
                  </label>
                  <span className="font-[var(--font-mono)] text-[10px] text-steel">
                    — 01/04
                  </span>
                </div>
                <select
                  value={factoryCost}
                  onChange={(e) => setFactoryCost(parseFloat(e.target.value))}
                  className="w-full border border-line bg-white p-3 font-[var(--font-mono)] text-sm text-graphite outline-none transition-colors focus:border-blue"
                >
                  {CALC_CATEGORIES.map((c) => (
                    <option key={c.label} value={c.v}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-graphite">
                    Current Unit Price (USD)
                  </label>
                  <span className="font-[var(--font-mono)] text-[10px] text-steel">
                    — 02/04
                  </span>
                </div>
                <div className="flex items-center border border-line bg-white">
                  <span className="border-r border-line px-3 py-3 font-[var(--font-mono)] text-sm text-steel">
                    $
                  </span>
                  <input
                    type="number"
                    value={curPrice}
                    step="0.5"
                    min="1"
                    onChange={(e) =>
                      setCurPrice(parseFloat(e.target.value) || 0)
                    }
                    className="flex-1 p-3 font-[var(--font-mono)] text-sm text-graphite outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-graphite">
                    Monthly Volume (units)
                  </label>
                  <span className="font-[var(--font-mono)] text-[10px] text-steel">
                    — 03/04
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={50}
                    max={5000}
                    step={50}
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value, 10))}
                    className="flex-1 accent-blue"
                  />
                  <div className="min-w-[80px] text-right font-[var(--font-display)] text-2xl font-bold text-blue">
                    {volume.toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-graphite">
                    Current Origin
                  </label>
                  <span className="font-[var(--font-mono)] text-[10px] text-steel">
                    — 04/04
                  </span>
                </div>
                <select className="w-full border border-line bg-white p-3 font-[var(--font-mono)] text-sm text-graphite outline-none transition-colors focus:border-blue">
                  <option>China (Section 301)</option>
                  <option>Other Asia / EU</option>
                  <option>US domestic</option>
                </select>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — result */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col bg-panel-2 p-8 lg:p-10">
              <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                Estimated Annual Savings
              </div>
              <div className="mt-4 font-[var(--font-display)] font-black leading-none tabular-nums text-graphite tracking-[-0.02em]"
                   style={{ fontSize: "clamp(42px, 6vw, 80px)" }}>
                ${Math.round(math.annual).toLocaleString()}
              </div>
              <div className="mt-2 text-sm text-graphite-soft">
                {math.perUnitSave > 0
                  ? `≈ ${math.pct.toFixed(0)}% per unit · based on your inputs`
                  : "Your pricing is already near ZENOK's landed level — still worth submitting for review."}
              </div>

              <div className="my-8 space-y-3 border-y border-line py-6">
                <div className="flex justify-between text-sm">
                  <span className="text-steel">Your current / unit</span>
                  <span className="font-[var(--font-mono)] text-graphite">
                    ${curPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-steel">Typical cost-down</span>
                  <span className="font-[var(--font-mono)] font-semibold text-blue">
                    {math.perUnitSave > 0 ? `≈ ${math.pct.toFixed(0)}% per unit` : "—"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-line pt-3 text-base">
                  <span className="font-semibold text-graphite">
                    Annual savings (12 mo × volume)
                  </span>
                  <span className="font-[var(--font-mono)] font-semibold text-graphite">
                    ${Math.round(math.annual).toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-6 text-steel">
                <strong className="text-graphite-soft">Rough estimate only.</strong>{" "}
                Actual savings depend on tooling specification, volume tier, coating requirements, and shipping terms. Does not include applicable duties beyond MFN rate, freight surcharges, or state/local taxes. Submit specs for formal quote.
              </p>

              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto w-full justify-center pt-4"
                style={{ marginTop: "24px" }}
              >
                <span>Get Exact Numbers</span>
                <span className="ar">→</span>
              </a>
            </div>
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

function ProcessSection() {
  return (
    <section className="relative border-t border-line bg-bg py-20 lg:py-28">
      <div className="container-wrap">
        <Reveal>
          <div className="sec-eyebrow">
            Workflow
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
    range: "Ø 0.1–3 mm · 97 SKU",
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
    range: "Ø 0.2–3 mm · 37 SKU",
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
    range: "Ø 1–3 mm · 6 SKU",
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
    range: "Ø 1–3 mm · 16 SKU",
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
              [ 04 ]
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
            Four geometry families. 156 active SKUs. Custom work beyond the catalog starts at MOQ 200.
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
                  <div className="mt-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-steel">
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
              [ 05 ]
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
        title="ZENOK — Taiwan Micro Cutting Tool Cost-Down Partner | 4.8% MFN Duty"
        description="Submit your CNC micro tooling specs and target price. ZENOK evaluates feasibility and delivers a cost-down proposal within 2 business days. Taiwan-made carbide end mills, 0.1–3.0 mm, 4.8% MFN duty advantage."
        canonicalPath="/"
        schema={homepageSchema}
        keywords={[
          "micro end mills",
          "Taiwan carbide tools",
          "4.8% MFN duty",
          "ZENOK",
        ]}
      />
      <HeroSection />
      <TariffMoatSection />
      <CalculatorSection />
      <ProcessSection />
      <ProductsTeaserSection />
      <IndustriesTeaserSection />
      <CtaBigSection />
    </SiteLayout>
  );
}

export { HomePage };
