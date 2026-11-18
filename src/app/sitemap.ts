import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const dynamic = "force-static";

const base = `https://${site.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["/", "/catalog/", "/about/", "/contacts/", "/delivery/", "/offer/", "/privacy/", "/consent/"];
  return [
    ...pages.map((path) => ({
      url: base + path,
      lastModified: now,
      priority: path === "/" ? 1 : path === "/catalog/" ? 0.9 : 0.4,
    })),
    ...products.map((p) => ({
      url: `${base}/catalog/${p.slug}/`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
