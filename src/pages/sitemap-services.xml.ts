import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "../utils/sitemap";

// Highest priority tier: these are the direct commercial-intent pages.
export const GET: APIRoute = async ({ site }) => {
  const services = await getCollection("services");
  const entries: SitemapEntry[] = [
    { path: "/services", priority: 0.9, changefreq: "monthly" },
    ...services.map((s): SitemapEntry => ({
      path: `/services/${s.id}`,
      priority: 0.9,
      changefreq: "monthly",
    })),
  ];
  return xmlResponse(buildUrlSet(site!.toString(), entries));
};
