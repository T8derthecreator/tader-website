/*
  /carbide-rods — Carbide bar stock supply page.
  This is a STRATEGIC page — it's where ZENOK openly says "we sell the raw material
  to our own competitors." That IS the moat. This page should feel confident, transparent,
  slightly contrarian.
*/
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SeoHead } from "@/components/site/SeoHead";
import { ProductCategoryNav } from "@/components/site/ProductComponents";
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

const SPEC_ROWS = [
  { label: "Substrate", value: "SS308 tungsten carbide" },
  { label: "Diameter range", value: "3–20 mm" },
  { label: "Grain size", value: "Sub-micron to ultra-fine" },
  { label: "Hardness", value: "HRA 91.5–93.0" },
  { label: "TRS", value: "≥ 4000 MPa" },
  { label: "Length", value: "Standard 310 mm (custom available)" },
  { label: "Tolerance", value: "h6 ground as standard" },
  { label: "MOQ", value: "100 kg per specification" },
];

export default function CarbideRodsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ZENOK Tungsten Carbide Bar Stock",
    description:
      "ZENOK supplies SS308 tungsten carbide bar stock to tool manufacturers globally — including our own competitors. Ø 3–20 mm, HRA 91.5–93.0, TRS ≥ 4000 MPa.",
    brand: { "@type": "Brand", name: "ZENOK" },
  };

  return (
    <SiteLayout>
      <SeoHead
        title="Carbide Rods — SS308 Tungsten Carbide Bar Stock | ZENOK Taiwan"
        description="ZENOK supplies SS308 tungsten carbide bar stock at factory-direct pricing. Ø 3–20 mm, h6 ground tolerance, HRA 91.5–93.0 hardness. MOQ 100 kg."
        canonicalPath="/carbide-rods"
        schema={schema}
        keywords={["carbide bar stock", "tungsten carbide rods", "SS308", "Taiwan carbide", "ZENOK"]}
      />

      <ProductCategoryNav currentSlug="carbide-rods" categoryLabel="Carbide Rods" />

      {/* Hero — moat-forward messaging */}
      <section className="relative border-b border-line pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Bar Stock Supply
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}
            >
              We also sell the
              <br />
              <span className="text-blue">raw carbide.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              ZENOK supplies SS308 tungsten carbide bar stock to tool manufacturers worldwide — many of whom compete with us in finished tools.{" "}
              <em className="serif-italic text-graphite">That's not a leak. That's the moat.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* The moat explanation */}
      <section className="relative py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Why We Sell To Competitors
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 01 ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="max-w-4xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4.2vw, 56px)" }}
            >
              The arithmetic is simple.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                You can't undercut your supplier.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal delay={150}>
              <div className="space-y-6 text-[16px] leading-[1.75] text-graphite-soft">
                <p>
                  When a US tool distributor buys finished micro end mills from another Asian manufacturer, they pay roughly <strong className="text-graphite">$6.50–$9.00 per piece</strong>. That manufacturer built the tool from carbide rod stock they purchased — often from ZENOK — at around{" "}
                  <strong className="text-graphite">$3.50 per piece equivalent.</strong>
                </p>
                <p>
                  Their $3.00–$5.50 gross is consumed by machining, depreciation, labor, overhead, sales. After all that, they ship a finished tool at $6.50+.
                </p>
                <p>
                  ZENOK skips the distributor tier entirely. We sell finished tools at Taiwan factory pricing, direct to US CNC shops. The competitor can't structurally match that — <strong className="text-graphite">not because they're worse at machining, but because their cost floor sits above our price ceiling.</strong>
                </p>
                <p>
                  <em className="serif-italic text-graphite">
                    Selling them the rod openly is the demonstration.
                  </em>{" "}
                  We're not afraid of the math — we built the business around it.
                </p>
              </div>
            </Reveal>

            {/* Visual: cost stack comparison */}
            <Reveal delay={250}>
              <div className="border border-line bg-panel p-8 lg:p-10">
                <div className="mb-6 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                  Cost Stack · Per Finished Tool
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-semibold text-graphite">Competitor route</span>
                      <span className="font-[var(--font-mono)] font-bold text-graphite">
                        $6.50 – $9.00
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden border border-line bg-bg-2">
                      <div className="h-full w-full bg-graphite" />
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-steel">
                      <span>$3.50 rod</span>
                      <span>+ machining</span>
                      <span>+ depreciation</span>
                      <span>+ overhead</span>
                      <span>+ margin</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-semibold text-graphite">ZENOK direct</span>
                      <span className="font-[var(--font-mono)] font-bold text-blue">
                        $4.05 – $5.50
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden border border-blue/50 bg-bg-2">
                      <div className="h-full w-[55%] bg-blue" />
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-steel">
                      <span>Factory → port</span>
                      <span>+ MFN 4.8%</span>
                      <span>+ logistics</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-line pt-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-steel">
                  Typical ZENOK landed discount{" "}
                  <strong className="text-blue">20–38%</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spec table */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Bar Stock Specifications
              <span className="ml-auto font-[var(--font-mono)] text-[11px] font-medium tracking-[0.15em] text-steel-faint">
                [ 02 ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="max-w-3xl font-[var(--font-display)] font-bold tracking-[-0.03em] text-graphite leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              SS308 grade.
              <br />
              <span className="serif-italic font-normal text-graphite-soft">
                Ground to h6 as standard.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            <Reveal>
              <div className="h-full bg-panel p-8 lg:p-10">
                <div className="mb-6 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                  Technical Properties
                </div>
                <div className="space-y-3">
                  {SPEC_ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between border-b border-line-soft pb-3 font-[var(--font-mono)] text-[13px] last:border-b-0"
                    >
                      <span className="text-steel uppercase tracking-[0.1em] text-[11px]">
                        {row.label}
                      </span>
                      <span className="text-graphite font-semibold text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full bg-panel-2 p-8 lg:p-10">
                <div className="mb-6 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.15em] text-blue">
                  Best Suited For
                </div>
                <ul className="space-y-4 text-[15px] leading-[1.7] text-graphite-soft">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Precision tool manufacturers</strong>{" "}
                      producing end mills, drills, reamers below Ø 20 mm
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Dental and medical OEMs</strong>{" "}
                      requiring bio-inert carbide substrates with full traceability
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Research and prototyping labs</strong>{" "}
                      needing small batches with qualified material certs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue">—</span>
                    <span>
                      <strong className="text-graphite">Distributors</strong>{" "}
                      who want Taiwan-origin stock at MFN duty rates to serve US customers
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-2 py-24 text-center lg:py-32">
        <div className="pointer-events-none absolute -left-28 -top-28 size-[400px] rounded-full bg-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -right-36 size-[500px] rounded-full bg-blue/10 blur-3xl" />
        <div className="container-wrap relative z-10">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.95]"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Diameter, grade, volume.
              <br />
              <span className="text-blue">We'll quote your bar stock.</span>
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
              <span>Request Bar Stock Quote</span>
              <span className="ar">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export { CarbideRodsPage };
