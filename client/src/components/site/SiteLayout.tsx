/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Navigation should feel like a precision catalog interface, not a generic startup navbar.
- Use strong hierarchy, disciplined spacing, and restrained copper accents for action emphasis.
- Preserve asymmetric structure and technical credibility across header, content frame, and footer.
*/
import { type ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { taderData } from "@/data/taderData";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useMobile";

type SiteLayoutProps = {
  children: ReactNode;
};

function NavLink({ href, label, onSelect }: { href: string; label: string; onSelect?: () => void }) {
  const [location] = useLocation();
  const active = location === href || (href !== "/" && location.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onSelect}
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
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setNavHidden(false);
      return;
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const passedThreshold = currentScrollY > 72;

      setNavHidden(scrollingDown && passedThreshold);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,121,74,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(31,41,55,0.06),transparent_18%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.03)_1px,transparent_1px)] [background-size:120px_120px]" />

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-black/8 bg-[rgba(252,251,247,0.88)] backdrop-blur-xl transition-transform duration-300",
          isMobile && navHidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="container flex items-center justify-between gap-4 py-4 md:grid md:grid-cols-[220px_minmax(0,1fr)_280px] md:items-center">
          <Link href="/" className="group flex min-w-0 items-end gap-3 text-graphite">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-copper/90">{taderData.siteMeta.company}</p>
              <p className="font-display text-xl tracking-[0.14em] md:text-2xl">MICRO TOOLING</p>
            </div>
            <span className="mb-1 hidden h-px flex-1 bg-black/12 md:block" />
          </Link>

          <nav className="hidden flex-wrap items-center gap-x-6 gap-y-1 md:flex md:justify-center">
            {taderData.navigation.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="hidden justify-end md:flex">
            <Button asChild className="rounded-none border border-copper bg-copper px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white shadow-none transition-colors duration-200 hover:bg-[#9d5a33] hover:text-white">
              <a href={taderData.siteMeta.inquiryFormUrl} target="_blank" rel="noopener noreferrer">
                {taderData.siteMeta.primaryCta.label}
              </a>
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-none border-black/12 bg-white/80 text-graphite hover:bg-[#f3efe8]">
                  <Menu className="size-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full rounded-none border-x-0 border-t-0 bg-[#fcfbf7] px-0 pt-12">
                <div className="container space-y-8 pb-8">
                  <div className="space-y-2 border-b border-black/8 pb-6">
                    <SheetTitle className="font-display text-3xl text-graphite">Navigate ZENOK</SheetTitle>
                    <SheetDescription className="max-w-md text-sm leading-7 text-steel-400">
                      Review product scope, application fit, and technical logic before opening the cost-down request workflow.
                    </SheetDescription>
                  </div>
                  <div className="border-b border-black/8 pb-6">
                    <Button asChild className="w-full rounded-none border border-copper bg-copper px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white shadow-none transition-colors duration-200 hover:bg-[#9d5a33] hover:text-white">
                      <a href={taderData.siteMeta.inquiryFormUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                        {taderData.siteMeta.primaryCta.label}
                      </a>
                    </Button>
                  </div>
                  <nav className="grid gap-4">
                    {taderData.navigation.map((item) => (
                      <NavLink key={item.href} href={item.href} label={item.label} onSelect={() => setMenuOpen(false)} />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-black/8 bg-[#f3efe8]">
        <div className="container py-14 lg:py-16">
          <div className="max-w-3xl rounded-none border border-black/8 bg-white/84 p-7 shadow-[0_24px_50px_rgba(15,23,42,0.08)] lg:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper/80">Procurement Note</p>
            <p className="mt-4 text-sm leading-7 text-steel-500">
              When your requirements go beyond the standard catalog, ZENOK offers custom tooling solutions built around your application. Provide your machining context, critical dimensions, and target pricing through the quote form for a feasibility assessment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
