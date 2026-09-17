/**
 * Shared XML builder for the categorized sitemap set (src/pages/sitemap-*.xml.ts).
 * Replaces @astrojs/sitemap's single flat, unprioritized output with one
 * file per content type, each carrying real priority/changefreq — see
 * sitemap-index.xml.ts for how the pieces fit together.
 */
export type SitemapEntry = {
  /** Path only, e.g. "/for/doctors" (site origin is added by the caller's SITE constant). */
  path: string;
  lastmod?: Date;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  /** 0.0–1.0 */
  priority?: number;
};

export function buildUrlSet(site: string, entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) => {
      const loc = new URL(e.path, site).toString();
      const lastmod = e.lastmod ? `<lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>` : "";
      const changefreq = e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : "";
      const priority = e.priority !== undefined ? `<priority>${e.priority.toFixed(1)}</priority>` : "";
      return `<url><loc>${loc}</loc>${lastmod}${changefreq}${priority}</url>`;
    })
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
