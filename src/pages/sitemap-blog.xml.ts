import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "../utils/sitemap";
import { blogPageCount, blogPagePath } from "../utils/blog";

// Blog changes fastest of any section (new posts, occasional updates), so
// it gets its own changefreq tier distinct from the mostly-static pages.
export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  // The index is paginated: /blog is page 1, /blog/page/N the rest. The
  // later pages are listed (each has its own canonical) at a lower priority
  // than the index and the posts themselves.
  const laterPages = Array.from({ length: blogPageCount(posts.length) - 1 }, (_, i) => i + 2);
  const entries: SitemapEntry[] = [
    { path: "/blog", priority: 0.6, changefreq: "weekly" },
    ...laterPages.map((n): SitemapEntry => ({ path: blogPagePath(n), priority: 0.3, changefreq: "weekly" })),
    ...posts.map((p): SitemapEntry => ({
      path: `/blog/${p.id}`,
      lastmod: p.data.updatedDate ?? p.data.publishDate,
      priority: 0.6,
      changefreq: "weekly",
    })),
  ];
  return xmlResponse(buildUrlSet(site!.toString(), entries));
};
