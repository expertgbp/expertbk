/**
 * Turns the blog's source PNGs into what the site actually ships.
 *
 *   public/images/blog/<post>.png          a post's hero image
 *     -> <post>.webp        1600px wide, the article hero and large cards
 *     -> <post>-800.webp     800px wide, for phones and small cards (srcset)
 *     -> <post>-og.jpg      1200x630, the social-share (Open Graph) image
 *   public/images/blog/inline/<name>.png   charts and diagrams inside posts
 *     -> <name>.webp        up to 1400px wide
 *
 * The PNG originals are then moved to design/raw-images/blog/ (gitignored,
 * see CLAUDE.md "Images": raw originals live there, every shipped image is
 * WebP), and the .png references in src/content/blog/*.md are rewritten to
 * .webp, with each in-post image given its real width and height. Safe to
 * re-run: it only touches PNGs still sitting in public/ and Markdown images
 * that have not been converted yet.
 *
 * Run:  node scripts/optimize-blog-images.mjs
 */
import { readdir, mkdir, rename, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const blogDir = path.join(root, "public/images/blog");
const inlineDir = path.join(blogDir, "inline");
const rawDir = path.join(root, "design/raw-images/blog");
const contentDir = path.join(root, "src/content/blog");

const kb = async (file) => Math.round((await stat(file)).size / 1024);
const pngs = async (dir) => (await readdir(dir)).filter((f) => f.endsWith(".png"));

let before = 0;
let after = 0;

await mkdir(path.join(rawDir, "inline"), { recursive: true });

for (const file of await pngs(blogDir)) {
  const src = path.join(blogDir, file);
  const base = src.slice(0, -4);
  before += await kb(src);
  await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${base}.webp`);
  await sharp(src).resize({ width: 800 }).webp({ quality: 76 }).toFile(`${base}-800.webp`);
  await sharp(src).resize({ width: 1200, height: 630, fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(`${base}-og.jpg`);
  after += (await kb(`${base}.webp`)) + (await kb(`${base}-800.webp`)) + (await kb(`${base}-og.jpg`));
  await rename(src, path.join(rawDir, file));
  console.log("hero  ", file);
}

for (const file of await pngs(inlineDir)) {
  const src = path.join(inlineDir, file);
  const base = src.slice(0, -4);
  before += await kb(src);
  await sharp(src).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`${base}.webp`);
  after += await kb(`${base}.webp`);
  await rename(src, path.join(rawDir, "inline", file));
  console.log("inline", file);
}

// Point the posts at the new files, and give every in-post <img> its real
// width and height. Without them the browser can't reserve the space, so
// the text under a chart jumps down when the chart loads. decoding="async"
// keeps a large chart from holding up the text around it.
let rewritten = 0;
for (const file of (await readdir(contentDir)).filter((f) => f.endsWith(".md"))) {
  const full = path.join(contentDir, file);
  const text = await readFile(full, "utf8");
  let next = text.replace(/(\/images\/blog\/[^\s)"']+)\.png/g, "$1.webp");

  const tags = [...next.matchAll(/<img\b[^>]*\bsrc="(\/images\/[^"]+)"[^>]*>/g)];
  for (const [tag, src] of tags) {
    if (/\bwidth=/.test(tag)) continue;
    try {
      const { width, height } = await sharp(path.join(root, "public", src)).metadata();
      const sized = tag.replace(/\s*\/?>$/, ` width="${width}" height="${height}"${/\bdecoding=/.test(tag) ? "" : ' decoding="async"'} />`);
      next = next.replace(tag, sized);
    } catch {
      console.warn("missing image, left as written:", src);
    }
  }

  if (next !== text) {
    await writeFile(full, next);
    rewritten++;
  }
}

console.log(`\n${before} KB of PNG -> ${after} KB shipped. ${rewritten} post(s) updated.`);

