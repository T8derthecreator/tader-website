import { Link, useLocation } from "wouter";
import { SeoHead } from "@/components/site/SeoHead";
import { SiteLayout } from "@/components/site/SiteLayout";

export function NotFoundPage() {
  const [location] = useLocation();

  return (
    <SiteLayout>
      <SeoHead title="404 | ZENOK" description="Page not found." canonicalPath="/404" noIndex />
      <section className="container-wrap space-y-8 py-24 lg:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-blue">404 / Route Missing</p>
        <h1 className="font-display text-5xl text-graphite lg:text-7xl">The requested page is outside the current tooling map.</h1>
        <p className="max-w-2xl text-base leading-8 text-steel">The route <span className="font-mono text-graphite">{location}</span> is not available in the current ZENOK site structure.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="btn-primary">
            <span>Return Home</span>
            <span className="ar">→</span>
          </Link>
          <Link href="/products" className="btn-secondary">
            Open Products
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
