import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "../utils/sitemap";

export const GET: APIRoute = async ({ site }) => {
  const professions = await getCollection("professions");
  const entries: SitemapEntry[] = [
    { path: "/for", priority: 0.8, changefreq: "monthly" },
    ...professions.map((p): SitemapEntry => ({
      path: `/for/${p.id}`,
      priority: 0.8,
      changefreq: "monthly",
    })),
  ];
  return xmlResponse(buildUrlSet(site!.toString(), entries));
};
