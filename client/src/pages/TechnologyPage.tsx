/*
  /technology — Manufacturing, material, process capability page.
  Structure: Hero → Vertical integration story (left prose + right diagram)
           → 4 process pillars → SS308 substrate spec → CTA
*/
import { useEffect } from "react";
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

const PILLARS = [
  {
    num: "01",
    title: "Tungsten carbide synthesis",
    body: "SS308 grade tungsten carbide powder is synthesized from tungsten oxide and cobalt binder at controlled grain sizes ranging from sub-micron to ultra-fine. Every batch is chemistry-tested before it enters the sintering line.",
    highlight: "HRA 91.5–93.0",
    highlightLabel: "Final hardness",
  },
  {
    num: "02",
    title: "HIP sintering",
    body: "Hot Isostatic Pressing (HIP) at 1400°C densifies the carbide rod stock, eliminating microporosity that would otherwise become a stress concentration in finished tool geometry. The result: TRS above 4000 MPa with consistent density.",
    highlight: "≥ 4000 MPa",
    highlightLabel: "Transverse rupture strength",
  },
  {
    num: "03",
    title: "Precision grinding",
    body: "CNC tool grinding to h6 ground tolerance on the bar stock, with 5-axis grinding of finished tool geometry on state-of-the-art ANCA and Walter grinders. Concentricity and runout held to aerospace-qualification specs as a baseline.",
    highlight: "h6 / ±2μm",
    highlightLabel: "Ground tolerance",
  },
  {
    num: "04",
    title: "PVD coating",
    body: "TiAlN, Platinum TiAlN, and DLC coatings applied via Physical Vapor Deposition in dedicated chambers. Coating adhesion tested per lot using ISO-standard scratch test protocol. Temperature envelope: 400°C (base) to 1100°C (Platinum TiAlN).",
    highlight: "HV 3200–5000",
    highlightLabel: "Coating hardness range",
  },
];

const techSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  name: "ZENOK Technology — Vertical Integration from Powder to Tool",
  description: "ZENOK controls the full manufacturing chain from tungsten carbide synthesis to finished tool coating. SS308 substrate, HIP sintering, precision grinding, PVD coating.",
};

export default function TechnologyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <SiteLayout>
      <SeoHead
        title="Technology — Vertical Manufacturing from Powder to Tool | ZENOK"
        description="ZENOK controls the full precision tooling manufacturing chain — tungsten carbide powder synthesis, HIP sintering, 5-axis grinding, and PVD coating. All in Taiwan, all under ISO 9001."
        canonicalPath="/technology"
        schema={techSchema}
        keywords={["tungsten carbide manufacturing", "HIP sintering", "PVD coating", "SS308", "Taiwan precision tools"]}
      />

      {/* Page hero */}
      <section className="relative border-b border-line pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Technology
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              Powder to tool.
              <br />
              <span className="text-blue">Under one roof.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              Vertical integration isn't just a business moat — it's a process control advantage. Every ZENOK tool is traceable from the tungsten carbide batch it was sintered from, through the grinding cell that cut its geometry, to the PVD chamber that coated it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vertical integration story */}
      <section className="relative py-20 lg:py-28">
        <div className="container-wrap">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <div className="sec-eyebrow">
                  Vertical Integration
                  <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                    [ 01 ]
                  </span>
                </div>
                <h2
                  className="mt-8 font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
                  style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
                >
                  Same material,
                  <br />
                  <span className="serif-italic font-normal text-graphite-soft">
                    same floor, same people.
                  </span>
                </h2>
                <div className="mt-8 space-y-5 text-[16px] leading-[1.8] text-graphite-soft">
                  <p>
                    Most tool manufacturers buy carbide rod stock from upstream suppliers, then machine it into finished tools. ZENOK <strong className="text-graphite">synthesizes the carbide and grinds the finished tool in the same facility</strong> — which means we control substrate quality, grain structure, and finished-geometry tolerance as one continuous process.
                  </p>
                  <p>
                    This vertical integration is how we offer structural cost-down to US customers without compromising on substrate grade or process qualification. Our competitors buy the substrate we manufacture — they cannot structurally undercut a supplier that skips the intermediary tiers.
                  </p>
                  <p>
                    It's also why we can run custom programs at MOQ 200 — the rod stock for a custom diameter is <em className="serif-italic text-graphite">already in our inventory</em> as bar stock supply for other customers.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Process stages diagram — NO pricing */}
            <Reveal delay={150}>
              <div className="space-y-2 lg:sticky lg:top-28">
                {[
                  { step: "01", label: "W powder + Co binder", stage: "Raw material" },
                  { step: "02", label: "Pressed + HIP sintered", stage: "Densification" },
                  { step: "03", label: "Bar stock (ground h6)", stage: "Substrate" },
                  { step: "04", label: "Finished tool (ground + coated)", stage: "Finished product", highlight: true },
                ].map((s) => (
                  <div
                    key={s.step}
                    className={`relative flex items-center gap-4 border p-4 ${
                      s.highlight ? "border-blue bg-blue-pale" : "border-line bg-panel"
                    }`}
                  >
                    <div
                      className={`flex size-12 flex-none items-center justify-center border-2 font-[var(--font-mono)] text-xs font-bold ${
                        s.highlight ? "border-blue bg-blue text-white" : "border-line bg-panel-2 text-steel"
                      }`}
                    >
                      {s.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-[var(--font-display)] text-base font-bold text-graphite">
                        {s.label}
                      </div>
                      <div className="mt-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-steel">
                        {s.stage} · ZENOK controls this
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-3 text-center font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-steel">
                  All four stages under ZENOK's roof
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 Process pillars */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Process Capability
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
              Four process stages.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                All under ZENOK's roof.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={(i % 2) * 100}>
                <div className="h-full border border-line bg-panel p-8 transition-all hover:border-blue hover:shadow-[var(--shadow-blue)]">
                  <div className="flex items-baseline gap-4">
                    <div
                      className="font-[var(--font-display)] font-black leading-none text-blue tracking-[-0.02em]"
                      style={{ fontSize: "clamp(36px, 3.5vw, 44px)" }}
                    >
                      {p.num}
                    </div>
                    <div className="font-[var(--font-display)] text-xl font-bold leading-tight text-graphite">
                      {p.title}
                    </div>
                  </div>
                  <p className="mt-5 text-[14px] leading-[1.75] text-graphite-soft">{p.body}</p>
                  <div className="mt-6 border-t border-line pt-4">
                    <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-steel">
                      {p.highlightLabel}
                    </div>
                    <div
                      className="mt-1 font-[var(--font-display)] font-bold text-blue tracking-[-0.01em]"
                      style={{ fontSize: "clamp(22px, 2.2vw, 28px)" }}
                    >
                      {p.highlight}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SS308 substrate spec */}
      <section className="relative border-t border-line py-20 lg:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Substrate
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 03 ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              SS308 tungsten carbide.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                The same substrate we supply competitors.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
              <div className="bg-panel p-8 lg:p-10">
                <div className="mb-6 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                  Physical Properties
                </div>
                <div className="space-y-3">
                  {[
                    ["Grade", "SS308"],
                    ["Tungsten content", "~92% by weight"],
                    ["Cobalt binder", "6–8%"],
                    ["Grain size", "Sub-micron to ultra-fine"],
                    ["Density", "14.8 g/cm³"],
                    ["Hardness", "HRA 91.5–93.0"],
                    ["TRS", "≥ 4000 MPa"],
                    ["Max operating temp", "600°C (uncoated) · 1100°C (PVD)"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-line-soft pb-3 font-[var(--font-mono)] text-[13px] last:border-b-0 last:pb-0"
                    >
                      <span className="text-steel uppercase tracking-[0.08em] text-[11px]">
                        {label}
                      </span>
                      <span className="text-right font-semibold text-graphite">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-panel-2 p-8 lg:p-10">
                <div className="mb-6 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                  Why SS308
                </div>
                <ul className="space-y-5 text-[14px] leading-[1.75] text-graphite-soft">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Balanced grain + binder.</strong> Fine enough for Ø 0.1 mm features, tough enough for aerospace Inconel programs.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Ground to h6 tolerance.</strong> Bar stock concentricity and roundness carry through to finished tool runout.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Lot-level traceability.</strong> Every shipment comes with Certificate of Conformance and material chemistry data.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Supplied to competitors.</strong> The ultimate market signal — other tool factories buy this substrate from us.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-2 py-28 text-center lg:py-32">
        <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />
        <div className="container-wrap relative z-10">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Have a process question?
              <br />
              <span className="text-blue">Ask our engineers directly.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.65] text-graphite-soft">
              Tool wear, coating selection, qualification testing — every inquiry is routed to an application engineer, not a sales rep.
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
              <span>Talk to an Engineer</span>
              <span className="ar">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export { TechnologyPage };
