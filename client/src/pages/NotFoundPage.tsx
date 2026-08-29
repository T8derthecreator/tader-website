import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { SeoHead } from "@/components/site/SeoHead";
import { SiteLayout } from "@/components/site/SiteLayout";

export function NotFoundPage() {
  const [location] = useLocation();

  return (
    <SiteLayout>
      <SeoHead title="404 | ZENOK" description="Page not found." canonicalPath="/404" noIndex />
      <section className="container space-y-8 py-24 lg:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cobalt/82">404 / Route Missing</p>
        <h1 className="font-display text-5xl text-graphite lg:text-7xl">The requested page is outside the current tooling map.</h1>
        <p className="max-w-2xl text-base leading-8 text-steel-500">The route <span className="font-mono text-graphite">{location}</span> is not available in the current ZENOK site structure.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/"><Button className="rounded-none border border-cobalt/50 bg-cobalt px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white">Return Home</Button></Link>
          <Link href="/products"><Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite">Open Products</Button></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
