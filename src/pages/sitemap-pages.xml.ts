import type { APIRoute } from "astro";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "../utils/sitemap";

// Static marketing/legal/utility pages. Excludes /404 and every
// /thank-you/* page: those are already marked noindex in their own
// BaseLayout props, and a noindex page listed in a sitemap is a real
// technical-SEO contradiction, not a neutral inclusion.
const entries: SitemapEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/start", priority: 0.8, changefreq: "monthly" },
  { path: "/book-a-call", priority: 0.9, changefreq: "monthly" },
  { path: "/free-blueprint", priority: 0.9, changefreq: "monthly" },
  { path: "/pricing-and-cost", priority: 0.9, changefreq: "monthly" },
  { path: "/compare/partnership-vs-self-publishing", priority: 0.8, changefreq: "monthly" },
  { path: "/compare/partnership-vs-traditional-publishing", priority: 0.8, changefreq: "monthly" },
  { path: "/compare/hybrid-publisher-vs-vanity-press", priority: 0.8, changefreq: "monthly" },
  { path: "/case-studies", priority: 0.7, changefreq: "monthly" },
  { path: "/reviews", priority: 0.6, changefreq: "monthly" },
  { path: "/trust", priority: 0.6, changefreq: "monthly" },
  { path: "/faq", priority: 0.6, changefreq: "monthly" },
  { path: "/about", priority: 0.6, changefreq: "monthly" },
  { path: "/newsletter", priority: 0.5, changefreq: "monthly" },
  { path: "/contact", priority: 0.5, changefreq: "yearly" },
  { path: "/disclaimer", priority: 0.2, changefreq: "yearly" },
  { path: "/privacy", priority: 0.2, changefreq: "yearly" },
  { path: "/terms", priority: 0.2, changefreq: "yearly" },
];

export const GET: APIRoute = ({ site }) => xmlResponse(buildUrlSet(site!.toString(), entries));
