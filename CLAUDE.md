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
