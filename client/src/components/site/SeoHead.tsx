/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Metadata should reinforce engineered trust and procurement clarity.
- Keep page naming precise, technical, and commercially relevant.
- Treat SEO labels like catalog headings rather than consumer slogans.
*/
import { useEffect } from "react";

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, unknown> | null;
  keywords?: string[];
  noIndex?: boolean;
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(selector: string, rel: string, href: string) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  element.setAttribute("rel", rel);
  element.setAttribute("href", href);
}

export function SeoHead({
  title,
  description,
  canonicalPath,
  schema,
  keywords,
  noIndex = false,
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    if (keywords?.length) {
      upsertMeta('meta[name="keywords"]', {
        name: "keywords",
        content: keywords.join(", "),
      });
    }

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    if (canonicalPath) {
      const origin = window.location.origin;
      const canonicalUrl = canonicalPath.startsWith("http")
        ? canonicalPath
        : `${origin}${canonicalPath}`;
      upsertLink('link[rel="canonical"]', "canonical", canonicalUrl);
    }

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    });

    const schemaId = "tader-jsonld";
    const previous = document.getElementById(schemaId);
    if (previous) {
      previous.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = schemaId;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const activeSchema = document.getElementById(schemaId);
      if (activeSchema) {
        activeSchema.remove();
      }
    };
  }, [title, description, canonicalPath, schema, keywords, noIndex]);

  return null;
}
