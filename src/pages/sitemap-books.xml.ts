import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "../utils/sitemap";

export const GET: APIRoute = async ({ site }) => {
  const books = await getCollection("books");
  const entries: SitemapEntry[] = [
    { path: "/books", priority: 0.8, changefreq: "monthly" },
    // The three hubs (change-spec round 1, B13): standalone .astro pages,
    // not a content collection, so listed explicitly here.
    { path: "/books/brand-and-business", priority: 0.8, changefreq: "monthly" },
    { path: "/books/love-and-legacy", priority: 0.8, changefreq: "monthly" },
    { path: "/books/other", priority: 0.7, changefreq: "monthly" },
    ...books.map((b): SitemapEntry => ({
      path: `/books/${b.id}`,
      priority: 0.7,
      changefreq: "monthly",
    })),
  ];
  return xmlResponse(buildUrlSet(site!.toString(), entries));
};
