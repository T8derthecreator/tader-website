/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Navigation should feel like a precision catalog interface, not a generic startup navbar.
- Use strong hierarchy, disciplined spacing, and restrained copper accents for action emphasis.
- Preserve asymmetric structure and technical credibility across header, content frame, and footer.
*/
import { Link, useLocation } from "wouter";
import { ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { taderData } from "@/data/taderData";
import { Button } from "@/components/ui/button";

type SiteLayoutProps = {
  children: ReactNode;
};

function NavLink({ href, label }: { href: string; label: string }) {
  const [location] = useLocation();
  const active = location === href || (href !== "/" && location.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 border-b border-transparent px-0 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-steel-400 transition-colors duration-200 hover:text-graphite",
        active && "border-copper/70 text-graphite",
      )}
    >
      <span className="h-px w-4 bg-current opacity-50 transition-all duration-200 group-hover:w-6" />
      {label}
    </Link>
  );
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,121,74,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(31,41,55,0.06),transparent_18%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.03)_1px,transparent_1px)] [background-size:120px_120px]" />

      <header className="sticky top-0 z-50 border-b border-black/8 bg-[rgba(252,251,247,0.88)] backdrop-blur-xl">
        <div className="container grid gap-6 py-4 lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:items-center">
          <Link href="/" className="group flex items-end gap-3 text-graphite">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-copper/90">
                {taderData.siteMeta.company}
              </p>
              <p className="font-display text-2xl tracking-[0.14em]">MICRO TOOLING</p>
            </div>
            <span className="mb-1 hidden h-px flex-1 bg-black/12 lg:block" />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 lg:justify-center">
            <NavLink href="/products" label="Products" />
            <NavLink href="/applications" label="Applications" />
            <NavLink href="/technology" label="Technology" />
            <NavLink href="/about" label="About" />
          </nav>

          <div className="flex items-center justify-start lg:justify-end">
            <Link href="/quote-request">
              <Button className="rounded-none border border-copper/50 bg-copper px-5 py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-white shadow-[0_18px_40px_rgba(194,121,74,0.16)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-copper-soft">
                Request Quote
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-black/8 bg-[#f3efe8]">
        <div className="container grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper/80">
              Precision Micro Tooling from Taiwan
            </p>
            <h2 className="max-w-xl font-display text-3xl leading-tight text-graphite lg:text-4xl">
              Built for buyers who compare diameter, reach, construction, and landed cost with equal rigor.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-steel-500">
              ZENOK supports U.S. machining programs in medical, aerospace, and electronics with
              micro end mills organized around clear geometry families, sourcing discipline, and quote-ready dimensional detail.
            </p>
          </div>

          <div className="grid gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-steel-400">
              Sitemap
            </p>
            {taderData.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center justify-between border-b border-black/8 py-3 text-sm text-steel-500 transition-colors duration-200 hover:text-graphite">
                <span>{item.label}</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="space-y-5">
            <div className="rounded-none border border-black/8 bg-white/80 p-6 shadow-[0_24px_50px_rgba(15,23,42,0.08)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper/80">
                Procurement Note
              </p>
              <p className="mt-4 text-sm leading-7 text-steel-500">
                The current product data set covers micro end mills up to 3.0 mm. Carbide rod supply
                capability is presented as an integration advantage and quote-based program discussion.
              </p>
            </div>
            <a
              href="https://www.formspree.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-steel-400 transition-colors duration-200 hover:text-graphite"
            >
              Form workflow powered by Formspree
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
