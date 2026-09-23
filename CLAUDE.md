## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This project: WriteExpertBook.com

The full spec lives in `WriteExpertBook-Website-Build-Brief.md` at the repo root — brand voice, banned
words, audience personas, full sitemap, page templates, homepage copy, and compliance rules. Read it
before writing any page copy. `BRAND.md` at the repo root is the fast-lookup mirror of the brand system
(palette, type, voice, proof bank) for quick reference without reading the full brief. `.claude/SKILLS.md`
declares which of this account's mandatory website-project skills (taste/UI-UX, animation, SEO, blog —
see `~/.claude/CLAUDE.md` for the full roster) apply to this project.

**Foundation already built (don't recreate):**
- Design tokens: `src/styles/global.css` (Tailwind v4 `@theme` block — navy/gold/ivory palette, Source
  Serif 4 + Inter, self-hosted via `@fontsource`).
- Canonical facts: `src/data/entity.ts` — the single source of truth for every number and founder fact.
  Pull from here; never hardcode a stat inline. Fields marked `[NEEDS CONFIRMATION]` are real gaps.
- Nav / sitemap data: `src/data/nav.ts`.
- Content collections + zod schemas: `src/content.config.ts` (`professions`, `books`, `services`,
  `guides`, `blog`). Content files live in `src/content/<collection>/<slug>.md`.
- Shared components: `src/components/*` (Header, Footer, HeroDoor, TrustBar, CardGrid, PathSteps,
  BeforeAfterTable, CompareTable, TestimonialCard, LeadMagnetForm, FAQAccordion, FinalDoorCTA,
  AnnouncementBar) and `src/components/schema/*` (Organization, Person, FAQPage, Article, Breadcrumb,
  Service JSON-LD).
- Page templates: `src/layouts/{Profession,Book,Service,Guide,Article}Template.astro`, wired to dynamic
  routes at `src/pages/{for,books,services,guides,blog}/[...slug].astro`. Author new profession/book/
  service/guide/blog pages as content collection `.md` files, not new `.astro` files.
- Gold-standard reference content entry: `src/content/professions/doctors.md` (matches build brief
  section 11 exactly). Match its structure, depth, and voice for every other collection entry.
- Forms: `src/scripts/lead-form.ts` is the one submit handler every `[data-lead-form]` form uses
  (provider-agnostic — reads `PUBLIC_FORM_ENDPOINT_URL`). Reuse it; don't write a new handler per form.
- Motion: `src/scripts/cta-motion.ts` is the site's one signature CTA interaction (magnetic pointer-pull
  on `[data-magnetic]`, currently the hero and FinalDoorCTA primary buttons only) and
  `src/scripts/hero-particles.ts` is the homepage-only hero particle field + beam parallax (gated behind
  `showParticles` on `HeroDoor`, `[data-particles]`). Both lazy-load GSAP via dynamic `import("gsap")` so
  it never loads on pages that don't use it, and both no-op under `prefers-reduced-motion` and on
  touch/coarse-pointer devices. Reuse `data-magnetic`/`showParticles` rather than writing new per-page
  motion; see `.claude/SKILLS.md` for the GSAP skill set backing this.

**Hard rules from the brief, enforced everywhere:**
- No em dashes. No banned marketing words (brief section 1.2 has the list). 8th-grade reading level,
  short paragraphs, contractions welcome.
- Never invent a stat, testimonial, or fact. Use `proof: { status: "placeholder" }` (renders via
  `TestimonialCard`) until a real permissioned quote exists, and write `[NEEDS CONFIRMATION: ...]` inline
  for any fact the brief doesn't supply.
- Every income/results claim links `/disclaimer` and carries: "These are our results and our clients'
  results, not a promise of yours."
- Countdown timers only count to a real date (`src/data/cohort.ts`, currently `active: false` until a
  real cohort date is supplied) — never an evergreen or invented one.
- Run `npm run build` after adding content; the content collection schemas will fail loudly on a missing
  required field.

## Skill priority for this project

Many more skills are installed globally than this project needs. For UI/motion work on this repo,
use only the ones below and ignore others whose descriptions seem to match — if two skills disagree,
the order below wins.

**Always use**
- `frontend-design`: decide the visual direction before writing any UI code.
- `astro-best-practices`, `create-component`, `content-collection`, `add-integration`, `docs-lookup`:
  Astro patterns, islands, content collections. Check live docs for the installed Astro version.
- `tailwindcss`: Tailwind v4, CSS-first `@theme` tokens (this project's tokens live in
  `src/styles/global.css`, not a `tailwind.config` file).
- `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-utils`, `gsap-performance`,
  `gsap-frameworks`: all motion on this site is GSAP in vanilla JS inside Astro `<script>` tags (see
  `src/scripts/cta-motion.ts`, `hero-particles.ts`, `card-tilt.ts`). Do not introduce Framer Motion,
  Motion, or React Spring — this project has no React islands to use them from. Don't use `gsap-react`.
- `emil-design-eng`: timing, easing, and "should this animate at all" decisions.

**Use only when the task needs it**
- `threejs-fundamentals`, `threejs-materials`, `threejs-lighting`, `threejs-animation`: only if a 3D
  element is explicitly requested (e.g. a 3D book mockup). Nothing on the site uses Three.js today.
- `particle-system`: only for hero-style particle/dust effects. The homepage hero
  (`src/scripts/hero-particles.ts`) already has one; don't duplicate it elsewhere without a reason.

**Before shipping any page**
- `web-quality-audit`, `core-web-vitals`, `performance`, `accessibility`, `seo`, `best-practices`.

(Full account-wide skill roster and rationale: `.claude/SKILLS.md` and `~/.claude/CLAUDE.md`. Two
sections from an earlier draft brief for this skill set are deliberately not reproduced here because
they conflict with this project's actual, already-shipped state: a brand-token list naming Fraunces/
Figtree fonts and banning Inter — this project's real body font is Inter, see `BRAND.md` — and a note
that "HQ location is not confirmed yet" — it is: Austin, TX, already live in the footer via
`src/data/entity.ts`. Treat `BRAND.md` and `entity.ts` as the authoritative source for both.)

## Images

Every image/graphic for this site is AI-generated through a fixed skill pipeline, fully
automatic (no plan approval, no variant picking). In order: `writeexpertbook-brand-images`
(always loaded first — decides palette/mood/sizes/folders) → `gpt-image` (default engine;
`gpt-image-2` for normal images, `gpt-image-1.5` only for transparent PNGs) →
`gpt-image-2-pro-max` + its `media-designer` agent for important images (homepage hero,
big banners, OG/social images, book covers) → `image-compress` (always last: every final
image ships as WebP). `image-processing`, `favicon-gen`, and `background-remove` are used
as needed; `imagegen` is a backup engine only if `gpt-image` fails. Do not use `img`,
`codex-imagegen`, or `image-generation` in this project; `imagegen-frontend-web` and
`brandkit` are concept-board tools only, never a source of shipped site assets.

- **Text in images is allowed** (book cover titles, badges, OG images, infographics) —
  spell-check every generated word. Page H1/H2 and body copy still live in HTML, never
  baked into an image, for SEO.
- **Book covers are AI-generated placeholders** with real-looking title/author text,
  saved as `src/assets/images/placeholder-covers/placeholder-<topic>.webp` (the
  `placeholder-` prefix is required) and rendered through `src/components/BookCover.astro`
  so swapping in a real cover later only means replacing the file.
- **Badges/logos/seals are allowed** (bestseller-author badges, "100% Rights & Royalties"
  seals, "700+ Authors" badges, retailer marks) as long as every claim on them is actually
  true for GBP — never a fake award or credential.
- **Never generate identifiable human faces.** Founder and author photos are always real
  photos supplied later; every face slot stays an illustrated/labeled placeholder.
- Every final image: compressed to WebP, placed via Astro `<Image />` from `astro:assets`,
  alt text under 125 characters, logged in `design/image-log.md` (file, page, prompt,
  model, date, running API-call count). `design/raw-images/` (gitignored) holds
  uncompressed originals; the first 2-3 approved images per style go in
  `design/brand-references/` as references for later generations.
- **Before launch:** replace every `placeholder-*` cover in
  `src/assets/images/placeholder-covers/` with a real cover, or change the "Real books by
  real experts" heading until real covers are in.

## Motion rules (project-specific, on top of the animate skill's general judgment)

- Fade-up on scroll for sections (already: `src/scripts/reveal.ts`), a gentle tilt on `.card` hover
  (already: `src/scripts/card-tilt.ts`), count-up animations for stat numbers, and the EPIC Publishing
  Path timeline drawing in as it scrolls into view are the site's motion vocabulary — extend these
  rather than inventing new patterns per page.
- UI animations stay under 300ms; scroll reveals can run longer but must never block reading.
- Always respect `prefers-reduced-motion` (`gsap.matchMedia()` for anything GSAP-driven), and never
  break the site's "Stop animations" accessibility toggle (`src/scripts/accessibility-widget.ts`,
  the `.a11y-reduce-motion` class in `global.css`) — new motion must still turn off when that's active.
- Any 3D or particle work is lazy-loaded, desktop-only (skip on touch/coarse-pointer), and must not
  hurt LCP — dynamic `import()` it the same way `hero-particles.ts` and `cta-motion.ts` already do.
