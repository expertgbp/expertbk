/**
 * Makes one social-share (Open Graph) image per page, so a link to any
 * page of the site unfurls with that page's own title on a branded card
 * instead of the one generic default.
 *
 *   input   the built site in dist/ (run `npm run build` first): each
 *           page's <title> is read from its index.html
 *   output  public/images/og/<slug>.jpg, 1200x630
 *           "/" -> home.jpg, "/for/doctors/" -> for-doctors.jpg
 *
 * BaseLayout uses public/images/og/<slug>.jpg automatically when it
 * exists, and falls back to default.jpg when it doesn't. Blog posts are
 * skipped: they already share their own hero image
 * (scripts/optimize-blog-images.mjs writes <post>-og.jpg). Pages marked
 * noindex (404, thank-you) are skipped too.
 *
 * The card is drawn as SVG and rasterized with sharp. Text is set in
 * Georgia, the serif fallback in the brand's own font stack, because the
 * rasterizer can only use fonts installed on the machine. Every number on
 * the card comes from src/data/entity.ts.
 *
 * Run:  npm run build && node scripts/generate-og-images.mjs
 *       (then build again so the new images are picked up)
 */
import { readdir, readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const outDir = path.join(root, "public/images/og");

// Facts for the footer line, read from the one source of truth.
const entitySource = await readFile(path.join(root, "src/data/entity.ts"), "utf8");
const fact = (key) => entitySource.match(new RegExp(`${key}:\\s*"([^"]+)"`))?.[1] ?? "";
const authors = fact("authorsCount");
const countries = fact("countriesCount");

const SECTION_LABELS = {
  for: "For Experts",
  books: "Your Book",
  services: "Services",
  guides: "Guides",
  compare: "Compare",
  blog: "Blog",
};

const esc = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const decode = (text) =>
  text.replace(/&amp;/g, "&").replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

/** Greedy word wrap to at most `max` characters per line. */
function wrap(text, max) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function card({ label, title }) {
  // Pick the largest type size at which the title fits in four lines.
  let size = 78;
  let lines = wrap(title, 22);
  for (const [s, chars] of [[78, 22], [68, 26], [58, 31], [50, 36]]) {
    size = s;
    lines = wrap(title, chars);
    if (lines.length <= (s >= 68 ? 3 : 4)) break;
  }
  lines = lines.slice(0, 4);
  const lineHeight = Math.round(size * 1.14);
  const blockHeight = lines.length * lineHeight;
  const top = 250 + Math.max(0, (270 - blockHeight) / 2);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="100%" cy="0%" r="75%">
      <stop offset="0" stop-color="#FFD98A" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#FFD98A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="pool" cx="0%" cy="100%" r="70%">
      <stop offset="0" stop-color="#1B3A66" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#1B3A66" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.3" fill="#FFD98A" fill-opacity="0.16"/>
    </pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0.45" stop-color="#081F33" stop-opacity="1"/>
      <stop offset="1" stop-color="#081F33" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#081F33"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#fade)"/>
  <rect width="1200" height="630" fill="url(#pool)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0.75" y="0.75" width="1198.5" height="628.5" fill="none" stroke="#FFD98A" stroke-opacity="0.25" stroke-width="1.5"/>

  <!-- logo: gold tile with the open-door glyph, then the wordmark -->
  <rect x="80" y="72" width="56" height="56" rx="14" fill="#FFD98A"/>
  <g transform="translate(92 84) scale(1.33)" fill="#081F33" stroke="#081F33">
    <path d="M6 21V4.500a1 1 0 0 1 .8-1L15 2v20l-8.200-1.100a1 1 0 0 1-.8-1z" stroke="none"/>
    <path d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-3" fill="none" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="12" cy="12.500" r="1.100" fill="#FFD98A" stroke="none"/>
  </g>
  <text x="156" y="111" font-family="Georgia, 'Times New Roman', serif" font-size="32" font-weight="700" fill="#F5F1E8">WriteExpert<tspan fill="#FFD98A">Book</tspan></text>

  <!-- section label -->
  <text x="104" y="${top - 34}" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="4" fill="#FFD98A">${esc(label.toUpperCase())}</text>

  <!-- the door rule, then the title -->
  <rect x="80" y="${top - 6}" width="5" height="${blockHeight - 6}" rx="2.500" fill="#FFD98A"/>
  ${lines
    .map(
      (line, i) =>
        `<text x="104" y="${top + size * 0.82 + i * lineHeight}" font-family="Georgia, 'Times New Roman', serif" font-size="${size}" font-weight="700" fill="#F5F1E8">${esc(line)}</text>`
    )
    .join("\n  ")}

  <!-- footer line -->
  <rect x="80" y="548" width="1040" height="1" fill="#F5F1E8" fill-opacity="0.16"/>
  <text x="80" y="590" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#F5F1E8" fill-opacity="0.85">Keep 100% of your rights and royalties</text>
  <text x="1120" y="590" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#FFD98A">${esc(authors)} authors in ${esc(countries)} countries</text>
</svg>`;
}

async function pages(dir, base = "") {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_") || entry.name === "images") continue;
      out.push(...(await pages(path.join(dir, entry.name), `${base}/${entry.name}`)));
    } else if (entry.name === "index.html") {
      out.push({ file: path.join(dir, entry.name), route: `${base}/` });
    }
  }
  return out;
}

await mkdir(outDir, { recursive: true });
let made = 0;
for (const { file, route } of await pages(dist)) {
  const html = await readFile(file, "utf8");
  if (/<meta name="robots" content="noindex/.test(html)) continue; // 404, thank-you
  if (/^\/blog\/(?!page\/)[^/]+\/$/.test(route)) continue; // posts share their own hero image

  const rawTitle = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const title = decode(rawTitle).replace(/\s*\|\s*WriteExpertBook\s*$/, "").trim();
  if (!title) continue;

  const section = route.split("/")[1];
  const label = SECTION_LABELS[section] ?? "Global Book Publishing";
  const slug = route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "-");

  await sharp(Buffer.from(card({ label, title })))
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(outDir, `${slug}.jpg`));
  made++;
}
console.log(`${made} share images written to public/images/og/`);
