import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

// На черновике (Vercel) индексация запрещена, на grisha.shop — разрешена
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${site.domain}/sitemap.xml`,
    host: `https://${site.domain}`,
  };
}
