import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "../utils/sitemap";

// Blog changes fastest of any section (new posts, occasional updates), so
// it gets its own changefreq tier distinct from the mostly-static pages.
export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  const entries: SitemapEntry[] = [
    { path: "/blog", priority: 0.6, changefreq: "weekly" },
    ...posts.map((p): SitemapEntry => ({
      path: `/blog/${p.id}`,
      lastmod: p.data.updatedDate ?? p.data.publishDate,
      priority: 0.6,
      changefreq: "weekly",
    })),
  ];
  return xmlResponse(buildUrlSet(site!.toString(), entries));
};
