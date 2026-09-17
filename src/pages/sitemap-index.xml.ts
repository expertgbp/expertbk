import type { APIRoute } from "astro";

// The master index referencing each categorized sitemap. Kept as a plain
// list of filenames rather than importing every sitemap-*.xml.ts module,
// so this file never needs to know each one's content-collection
// internals — see sitemap-pages/professions/books/services/guides/blog
// for the per-category entries and priorities.
const SITEMAPS = [
  "sitemap-pages.xml",
  "sitemap-professions.xml",
  "sitemap-books.xml",
  "sitemap-services.xml",
  "sitemap-guides.xml",
  "sitemap-blog.xml",
];

export const GET: APIRoute = ({ site }) => {
  const entries = SITEMAPS.map(
    (name) => `<sitemap><loc>${new URL(name, site).toString()}</loc></sitemap>`
  ).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</sitemapindex>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
