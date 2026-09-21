---
name: blog-article-finalize
description: Bring one WriteExpertBook.com blog post (src/content/blog/*.md) up to the finalized visual/content standard established on the "How Much Does It Cost" post — realistic AI-generated hero and chart images (not abstract illustrations, not hand-coded SVG/HTML tables), a 3,000+ word substantive rewrite, and the sticky sidebar table of contents. Use when the user asks to "finalize", "fix up", or "apply the same treatment" to a blog post, or references the cost article as the template to match.
---

# Finalize a blog article to the established standard

This is the recipe that turned `how-much-does-it-cost-to-publish-a-book-with-a-hybrid-publisher.md`
from an 840-word post with a plain illustration and hand-coded charts into the
finalized version the user approved. Apply it per post, one at a time — don't
batch all posts through step 1 then all through step 2; finish one post fully
before starting the next, so a mistake in the approach only costs one post's
rework, not nine.

## The standard, in one paragraph

Every finalized post has: a realistic (not abstract-illustration) AI-generated
hero photo relevant to the post's specific topic; a 2-column hero section
(heading/subhead/byline left, photo right); a 3,000–3,500 word body with
genuinely new substantive sections (not padding); every chart/comparison/table
rendered as an actual AI-generated infographic image, not hand-coded SVG or
HTML `<table>`; a "Key Takeaways" callout after the intro; and the sitewide
sticky table-of-contents sidebar (already built into `ArticleLayout.astro` —
nothing to do per-post for this one).

## Step 0: Read the source of truth

Read `src/content/blog/how-much-does-it-cost-to-publish-a-book-with-a-hybrid-publisher.md`
in full before starting. It's the reference implementation for every step
below — when in doubt about formatting, match it exactly.

## Step 1: Content — expand to 3,000–3,500 words

1. Read the post's current content and word count:
   ```
   node -e "const fs=require('fs');const c=fs.readFileSync('src/content/blog/<slug>.md','utf-8');const b=c.split('---').slice(2).join('---');console.log(b.replace(/<[^>]+>/g,' ').split(/\s+/).filter(Boolean).length)"
   ```
2. Add a bolded answer-first lead sentence right after the opening paragraph if one isn't already there (`**Short answer:** ...`).
3. Add/keep a `<div class="key-takeaways"><p>Key takeaways</p><ul>...</ul></div>` block after the intro (see Step 3 for why this is a `<div>`, not `<blockquote>`).
4. Expand with genuinely new sections the topic actually supports — cost/timeline drivers, a labeled hypothetical scenario (never a fake testimonial — always say explicitly "this is not a real client"), a "questions to ask" section, a decision/fit-check section. Reuse the cost post's section list as a menu of section *types*, not literal copy.
5. Hard compliance rules, non-negotiable (re-check after every edit pass):
   - Zero em dashes (`—`). Check: `grep -n "—" src/content/blog/<slug>.md`
   - Zero banned words: `grep -inE "unlock|unleash|elevate|delve|seamless|supercharge|streamline|revolution|groundbreaking|skyrocket|game.changer|next level|secret weapon|struggling to|let's dive in|demystify|in today's fast-paced" src/content/blog/<slug>.md`
   - Never invent a stat, testimonial, or fact. Only use numbers already in the post or in `src/data/entity.ts`.
   - Any income/results claim links `/disclaimer` with the exact line from `entity.incomeDisclaimerLine`.
6. The blog schema caps `faqs` at **exactly 2–3 items** (`src/content.config.ts`, blog collection: `faqs: z.array(faqItem).min(2).max(3)`). Don't add more in frontmatter — the build will fail with `InvalidContentEntryDataError`. Put extra Q&A-shaped content in the body instead.
7. Re-run the word count command until it lands in 3,000–3,500. Don't pad — if you're short, add another real section; don't stretch prose.

## Step 2: Generate the images

All images come from `node --env-file=.env scripts/generate-image.mjs --prompt "..." --out <path> --size 1536x1024 --quality high [--background opaque]`. Never hand-code an SVG chart or an HTML `<table>` for this project's blog posts — the user has explicitly rejected that approach twice. Generate real images for everything, including charts.

**Hero image** (one per post, replaces the old `heroImage` path):
- Realistic editorial photography, not the old flat navy/gold icon-in-a-doorway illustration style.
- A concrete desk/object scene relevant to the specific post's topic (e.g. a ledger and coins for a cost post, a calendar/hourglass-adjacent scene for a timeline post). No visible human face — anonymous object/scene photography avoids both the uncanny-valley risk and any "fabricated real person" concern.
- Prompt template: `"Professional editorial photograph, shallow depth of field, warm [side/clinical/studio] lighting: [concrete scene description], on a wooden desk, photorealistic, magazine editorial quality, no visible face or hands, 35mm lens look"`
- Save to `public/images/blog/<slug>.png` (note: `.png`, replacing the old `.webp`). Update `heroImage` and `heroImageAlt` in frontmatter. Delete the old `.webp` file once confirmed unused.

**Chart/comparison/table images** (one per chart the post needs — typically 2-4):
- Flat infographic style, NOT photorealistic, for these — think data visualization, not a desk photo.
- Keep every label SHORT (1-3 words) and instruct the model explicitly to keep text crisp/bold/readable. AI image models reliably render short bold labels; they garble dense paragraphs or many-row tables. If a comparison has more than ~6 short data points, either simplify to the most important ones for the image and cover the rest in surrounding prose, or split into two images.
- Prompt template: `"Clean modern infographic, flat design, white background: [layout description with each exact short label spelled out], navy blue and warm gold color palette, professional infographic style, high resolution, crisp readable text, no other text"`
- Save to `public/images/blog/inline/<slug>-<purpose>.png` (e.g. `cost-comparison.png`, `cost-stages.png`).
- **Always view every generated image before using it** (the Read tool renders images) — check labels actually match what you asked for and nothing is garbled. Regenerate (adjust prompt: shorter labels, simpler layout) if not, up to ~2 retries per image.

## Step 3: Wire images into the markdown

1. Replace the `<div class="chart-block"><svg>...</svg></div>` or `<table>` blocks with:
   ```html
   <figure>
     <img src="/images/blog/inline/<name>.png" alt="<accurate description of what the image shows>" loading="lazy" />
   </figure>
   ```
   Optionally follow with a `<figcaption>` for a source/caveat note, or just continue in prose — the accurate detail that used to live in table cells should still exist somewhere as real, accurate prose text (the image is a visual summary, not the only place the information lives).
2. Key Takeaways must be a `<div class="key-takeaways">`, never `<blockquote>` — Tailwind Typography's default blockquote styling adds decorative smart-quote marks via `::before`/`::after` that look wrong on a bulleted summary. The `.key-takeaways` CSS already exists in `src/layouts/ArticleLayout.astro`; reuse it as-is.
3. **Critical gotcha**: any blank line inside a raw HTML block (`<div>`, `<table>`, `<svg>`, etc.) in a markdown file terminates CommonMark's HTML-block passthrough early, silently stripping every tag after that blank line and leaving their text content as stray paragraph text. Keep every line inside a `<div class="chart-block">...</div>` or `<div class="key-takeaways">...</div>` contiguous, no blank lines, until the closing `</div>`. (This mostly stops mattering once you're using `<img>` + `<figure>` instead of inline `<svg>`/`<table>`, but it still applies to the `key-takeaways` div and to `<figure>` blocks with multi-line captions.)
4. Remove old, now-unreferenced Pexels/illustration files: check with
   `grep -rl "<old-filename>" src/content/blog/*.md` (expect zero matches), then delete from `public/images/blog/inline/` or `public/images/blog/`.

## Step 4: The hero layout and TOC are already sitewide — verify, don't rebuild

`src/layouts/ArticleLayout.astro` already implements, for every post automatically:
- The 2-column hero grid (heading/subhead/byline left, image right, scoped `.article-hero-title` smaller H1)
- The sticky desktop TOC sidebar (white card, hover state) + mobile collapsible dropdown, built from Astro's auto-generated heading IDs
- The `overflow-x: clip` fix in `global.css` that makes `position: sticky` actually work

Do not duplicate any of this per-post. If a post's hero or TOC looks wrong, the bug is in the shared layout, not the individual post file — fix it once in `ArticleLayout.astro`/`global.css` and every post benefits.

## Step 5: Verify

1. `npm run build` — must pass cleanly (89 pages as of this writing; catches schema errors like the `faqs` max-3 limit immediately).
2. Start the dev server (`npx astro dev --background`, wait for `curl -sf http://localhost:4322/`), then use Playwright (see any recent session transcript for the exact pattern: launch chromium, `page.addInitScript(() => localStorage.clear())` before `goto` so the cookie/accessibility popups don't obscure screenshots, screenshot the hero and each `<figure> img`) to confirm:
   - Hero renders 2-column on desktop, stacks on mobile.
   - Every chart image shows the real, correct labels (not garbled).
   - TOC sidebar is present, sticky (scroll and re-check its bounding box y-position stays constant), and legible.
3. Re-run the compliance greps from Step 1.6 one final time on the finished file.

## Step 6: Report and stop

Report word count, list of images generated (hero + each chart, with what each shows), and confirm build + visual verification passed. **Do not proceed to the next post or push to git without the user's explicit go-ahead** — this project's owner reviews each finalized post before it's committed, and has been explicit that only one post should be finalized at a time until they've approved the pattern.
