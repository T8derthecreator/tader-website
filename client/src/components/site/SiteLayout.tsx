/*
  ZENOK SiteLayout — based on Claude Design spec.
  Contains: top ticker marquee, blueprint bg, scroll progress, nav (with mobile hamburger), footer.
*/
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const INQUIRY_URL = "https://toolinginquiryform.netlify.app/";

const MARQUEE_ITEMS = [
  "LIVE TAIWAN MFG",
  "4.8% MFN DUTY",
  "156 ACTIVE SKU",
  "Ø 0.1–3.0 MM",
  "2-DAY PROPOSAL",
  "AEROSPACE · MEDICAL · ELECTRONICS",
  "ISO 9001 · RoHS",
  "INFO@ZENOKTOOL.COM",
];

const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Full SKU Catalog", href: "/products/catalog", isFeatured: true },
      { label: "Flat End Mills", href: "/products/flat-end-mills" },
      { label: "Ball Nose", href: "/products/ball-nose-end-mills" },
      { label: "Corner Radius", href: "/products/corner-radius-end-mills" },
      { label: "Aluminum Spec", href: "/products/aluminum-end-mills" },
      { label: "Carbide Rods", href: "/carbide-rods" },
    ],
  },
  { label: "Why ZENOK", href: "/why-zenok" },
  { label: "Industries", href: "/industries" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
];

function TopMarquee() {
  return (
    <div className="zk-marquee" aria-hidden="true">
      <div className="zk-marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(h > 0 ? (s / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress-bar" style={{ width: `${width}%` }} />;
}

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3 font-[var(--font-display)] font-bold text-[15px] tracking-[0.03em]" style={{ color: "#ffffff" }}>
      <span
        className="grid size-[30px] place-items-center font-black text-[14px]"
        style={{
          background: "#2563eb",
          color: "#ffffff",
          clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
          boxShadow: "0 4px 14px rgba(37,99,235,0.6), 0 0 0 1px rgba(255,255,255,0.15) inset",
        }}
      >
        Z
      </span>
      ZENOK
    </Link>
  );
}

function DesktopNav({ currentPath }: { currentPath: string }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/75">
      {NAV_LINKS.map((link) => {
        const isActive = currentPath === link.href || (link.children && link.children.some((c) => currentPath === c.href));
        if (link.children) {
          return (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`relative inline-flex items-center gap-1 py-1 transition-colors hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {link.label}
                <ChevronDown className="size-3" />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-[width] duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
              {openDropdown === link.label && (
                <div className="absolute left-0 top-full min-w-[220px] z-50 pt-3">
                  <div
                    className="border border-line shadow-[var(--shadow)] flex flex-col"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    {link.children.map((child) => {
                      const featured = "isFeatured" in child && child.isFeatured;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={
                            featured
                              ? { backgroundColor: "#eff6ff", color: "#1d4ed8" }
                              : { backgroundColor: "#ffffff", color: "#0a1628" }
                          }
                          className={`border-b px-4 py-3 font-[var(--font-mono)] text-[12px] tracking-[0.06em] transition-colors last:border-b-0 ${
                            featured
                              ? "border-line border-b-2 font-semibold hover:bg-blue hover:text-white"
                              : "border-line-soft hover:bg-blue-pale hover:text-blue"
                          }`}
                        >
                          {featured ? `→ ${child.label}` : child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        }
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative py-1 transition-colors hover:text-white ${
              currentPath === link.href ? "text-white" : ""
            }`}
          >
            {link.label}
            {currentPath === link.href && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400" />
            )}
          </Link>
        );
      })}
    </div>
  );
}

function MobileNav({
  isOpen,
  onClose,
  currentPath,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-white md:hidden flex flex-col">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <Brand />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="size-10 grid place-items-center text-graphite hover:text-blue transition-colors"
        >
          <X className="size-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-5 py-8">
        {NAV_LINKS.map((link) => (
          <div key={link.label} className="border-b border-line py-4">
            <Link
              href={link.href}
              onClick={onClose}
              className={`block font-[var(--font-display)] text-2xl font-bold tracking-tight ${
                currentPath === link.href ? "text-blue" : "text-graphite"
              }`}
            >
              {link.label}
            </Link>
            {link.children && (
              <div className="mt-3 flex flex-col gap-2 pl-2">
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="font-[var(--font-mono)] text-xs uppercase tracking-[0.1em] text-steel transition-colors hover:text-blue"
                  >
                    — {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-line p-5">
        <a
          href={INQUIRY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center"
          onClick={onClose}
        >
          <span>Request Quote</span>
          <span className="ar">→</span>
        </a>
      </div>
    </div>
  );
}

function SiteNav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 backdrop-blur-md md:top-[30px]"
        style={{ background: "rgba(10, 22, 40, 0.95)" }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center gap-10 px-5 py-3 md:px-10 md:py-4">
          <Brand />
          <DesktopNav currentPath={location} />
          <div className="ml-auto flex items-center gap-3">
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-cta hidden sm:inline-block"
            >
              <span>Request Quote →</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="size-10 grid place-items-center text-white md:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </nav>
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPath={location}
      />
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-[2] border-t border-line bg-bg py-14 font-[var(--font-mono)] text-[11px] tracking-[0.1em] text-steel">
      <div className="container-wrap">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>ZENOK TOOL · TAIWAN · EST. 2019</div>
          <div className="flex flex-wrap gap-6">
            <Link href="/products" className="transition-colors hover:text-blue">
              Products
            </Link>
            <Link href="/why-zenok" className="transition-colors hover:text-blue">
              Why ZENOK
            </Link>
            <Link href="/about" className="transition-colors hover:text-blue">
              About
            </Link>
            <a
              href="mailto:info@zenoktool.com"
              className="transition-colors hover:text-blue"
            >
              info@zenoktool.com
            </a>
          </div>
          <div>© 2026 · HTS 8207.70</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#d8dee6" }}>
      <div className="bp-bg" aria-hidden="true" />
      <ProgressBar />
      <TopMarquee />
      <SiteNav />
      <main className="relative z-[2] pt-[60px] md:pt-[90px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
