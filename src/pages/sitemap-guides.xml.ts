import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "../utils/sitemap";

export const GET: APIRoute = async ({ site }) => {
  const guides = await getCollection("guides");
  const entries: SitemapEntry[] = [
    { path: "/guides", priority: 0.7, changefreq: "monthly" },
    ...guides.map((g): SitemapEntry => ({
      path: `/guides/${g.id}`,
      lastmod: g.data.updatedDate,
      priority: 0.7,
      changefreq: "monthly",
    })),
  ];
  return xmlResponse(buildUrlSet(site!.toString(), entries));
};
