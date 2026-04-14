import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const last = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: last, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/experience`, lastModified: last, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/education`, lastModified: last, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/expertise`, lastModified: last, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/projects`, lastModified: last, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: last, changeFrequency: "weekly", priority: 0.85 },
  ];

  const posts: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: last,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...posts];
}
