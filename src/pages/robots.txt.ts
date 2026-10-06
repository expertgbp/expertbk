import type { APIRoute } from "astro";

/**
 * /robots.txt, generated so the Sitemap lines always carry the real site
 * origin from astro.config (`site`) instead of a hard-coded domain.
 *
 * Policy:
 * - Everything is crawlable except the three /thank-you/ confirmation
 *   pages (they are also marked noindex in their own <head>).
 * - AI and answer-engine crawlers are named and allowed explicitly: this
 *   site wants to be read, cited and quoted by them, and /llms.txt is the
 *   structured summary written for that purpose.
 */
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (AI training / grounding controls) and Apple
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  // Others
  "Amazonbot",
  "Meta-ExternalAgent",
  "DuckAssistBot",
  "MistralAI-User",
  "CCBot",
  "Bytespider",
  "cohere-ai",
];

export const GET: APIRoute = ({ site }) => {
  const origin = site!.toString().replace(/\/$/, "");
  const body = [
    "# WriteExpertBook.com",
    "",
    "# All crawlers",
    "User-agent: *",
    "Allow: /",
    "Disallow: /thank-you/",
    "",
    "# AI and answer-engine crawlers: explicitly allowed (see /llms.txt)",
    ...AI_CRAWLERS.map((bot) => `User-agent: ${bot}`),
    "Allow: /",
    "Disallow: /thank-you/",
    "",
    `Sitemap: ${origin}/sitemap-index.xml`,
    `Sitemap: ${origin}/sitemap.xml`,
    "",
    `# LLM summary: ${origin}/llms.txt`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
