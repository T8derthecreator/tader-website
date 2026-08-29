/*
  /carbide-rods — SS308 tungsten carbide rod stock, product specification page.
*/
import { useEffect } from "react";
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
  { label: "Grade", value: "SS308 submicron tungsten carbide" },
  { label: "Diameter", value: "Ø 3–20 mm" },
  { label: "Tolerance", value: "h6 ground" },
  { label: "Hardness", value: "HRA 91.5–93.0" },
  { label: "Transverse rupture strength", value: "TRS ≥ 4000 MPa" },
  { label: "Length", value: "Cut to your requirement" },
  { label: "MOQ", value: "100 kg" },
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
      "SS308 submicron tungsten carbide rod stock, Ø 3–20 mm, h6 ground tolerance, HRA 91.5–93.0, TRS ≥ 4000 MPa, factory-direct pricing.",
    brand: { "@type": "Brand", name: "ZENOK" },
  };

  return (
    <SiteLayout>
      <SeoHead
        title="SS308 Tungsten Carbide Rod Stock | Ø 3–20 mm | ZENOK"
        description="SS308 submicron tungsten carbide rod stock, Ø 3–20 mm, h6 ground tolerance, HRA 91.5–93.0, TRS ≥ 4000 MPa. MOQ 100 kg, factory-direct pricing from ZENOK."
        canonicalPath="/carbide-rods"
        schema={schema}
        keywords={["carbide bar stock", "tungsten carbide rods", "SS308", "Taiwan carbide", "ZENOK"]}
      />

      <ProductCategoryNav currentSlug="carbide-rods" categoryLabel="Carbide Rods" />

      {/* Hero */}
      <section className="relative border-b border-line pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="container-wrap">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-8 bg-blue" />
              Carbide Rod Stock
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="max-w-4xl font-[var(--font-display)] font-black tracking-[-0.04em] text-graphite leading-[0.92]"
              style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}
            >
              SS308 tungsten carbide
              <br />
              <span className="text-blue">rod stock.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-graphite-soft">
              Ground carbide rod in stock, Ø 3–20 mm. Same material we use in our own finished tools. MOQ 100 kg, factory-direct.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Specifications */}
      <section className="relative py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Specifications
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
              What you get.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-12 max-w-2xl border border-line bg-panel p-8 lg:p-10">
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
        </div>
      </section>

      {/* Ordering */}
      <section className="relative border-t border-line bg-bg-2 py-20 lg:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="sec-eyebrow">
              Ordering
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
              How to order.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-graphite-soft">
              Send us your diameter, tolerance, and quantity. We confirm availability and pricing within 2 business days. Material certificates provided with every shipment.
            </p>
          </Reveal>
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
