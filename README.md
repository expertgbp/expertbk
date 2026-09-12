# WriteExpertBook.com

The intent-matched funnel site for Global Book Publishing (GBP): turns
accomplished professionals into published authors, and routes visitors to a
booked strategy call, the free Blueprint lead magnet, a service purchase, or
the newsletter. Built with Astro 7 + Tailwind CSS v4.

The full content/brand/conversion spec this site was built from lives in
[`WriteExpertBook-Website-Build-Brief.md`](./WriteExpertBook-Website-Build-Brief.md).
Read that before writing new page copy. [`BRAND.md`](./BRAND.md) is the
fast-lookup mirror of the brand system (palette, type, voice, canonical
facts) for quick reference without reading the full brief.

## Setup

```sh
npm install
cp .env.example .env   # fill in when real providers exist; see below
npm run dev
```

Requires Node 22.12+ (see `engines` in `package.json`).

### Environment variables (`.env`)

Nothing here is required to build or run the site locally — every feature
that depends on these degrades to a clear, visible placeholder state
without them:

| Variable | Used for | Where |
|---|---|---|
| `PUBLIC_FORM_ENDPOINT_URL` | Where lead-magnet, quiz, and contact form submissions POST to (Zapier webhook, HubSpot form endpoint, a custom API route, etc). | `src/scripts/lead-form.ts` |
| `PUBLIC_BOOKING_EMBED_URL` | Embed URL for the `/book-a-call` calendar (e.g. a Calendly single-event embed link). | `src/pages/book-a-call.astro` |

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start the local dev server (`localhost:4321`) |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands (`astro add`, `astro check`, etc) |

Run `npm run build` after adding or editing content — the content
collection schemas (`src/content.config.ts`) fail loudly on a missing
required field, which catches most mistakes before they ship.

## Project structure

```
src/
  content.config.ts     Zod schemas for every content collection
  content/
    professions/        /for/*      one .md file per profession
    books/               /books/*    one .md file per book type
    services/            /services/* one .md file per service
    guides/              /guides/*   pillar guides (long-form, ungated)
    blog/                 /blog/*    cluster articles
  data/
    entity.ts            Canonical facts — single source of truth for every
                          stat/name/credential. Import from here; never
                          hardcode a number inline.
    nav.ts                Nav + footer sitemap data
    cohort.ts             Live cohort/countdown config (off until a real
                          enrollment date exists — see the file's own notes)
  components/            Shared UI: Header, Footer, HeroDoor, TrustBar,
                          CardGrid, PathSteps, BeforeAfterTable,
                          CompareTable, TestimonialCard, LeadMagnetForm,
                          FAQAccordion (+ FAQPage schema), FinalDoorCTA,
                          AnnouncementBar
    components/schema/    JSON-LD: Organization, Person, FAQPage, Article,
                          Breadcrumb, Service
  layouts/
    BaseLayout.astro      <head>, Organization schema, Header/Footer shell
    ProfessionTemplate.astro / BookTemplate.astro / ServiceTemplate.astro
    GuideLayout.astro / ArticleLayout.astro
  pages/
    for/[...slug].astro, books/[...slug].astro, services/[...slug].astro,
    guides/[...slug].astro, blog/[...slug].astro   — dynamic routes over
                          the content collections above
    (everything else)     Hand-written pages: homepage, booking, lead
                          magnet, thank-you pages, compare pages, /start
                          quiz, trust/about/pricing/faq, legal, 404
  scripts/
    lead-form.ts          Shared submit handler for every [data-lead-form]
    reveal.ts             Scroll-reveal animation (see Motion below)
public/
  llms.txt, robots.txt    AEO / crawler entrypoints (sitemap is generated
                          by @astrojs/sitemap at build time)
```

New profession/book-type/service/guide/blog pages are authored as content
collection `.md` files, not new `.astro` files — the dynamic routes above
pick them up automatically.

## Design system

Tokens (colors, fonts, motion/easing, spacing) live in
`src/styles/global.css` as a Tailwind v4 `@theme` block — see `BRAND.md` for
the palette/type reference in plain language.

### Motion

Following Emil Kowalski's animation philosophy (see `~/.claude/skills/` —
`animate`, `apple-design`, `review-animations`): `transform`/`opacity` only,
`ease-out` on entrances, UI motion stays under ~300ms, everything is gated
behind `@media (hover: hover) and (pointer: fine)` so touch devices don't
get false hover states, and `prefers-reduced-motion: reduce` is honored
globally in `global.css`. Below-the-fold sections fade/slide in on scroll
via `src/scripts/reveal.ts` (an `IntersectionObserver`, skipping anything
already in the initial viewport so nothing flashes hidden-then-shown).

## This account's standing rule for every website project

Every website project (this one included) keeps:

1. A `.claude/` folder — see [`.claude/SKILLS.md`](./.claude/SKILLS.md) for
   which of this account's mandatory skills (taste/UI-UX, animation, SEO,
   blog — full roster in `~/.claude/CLAUDE.md`) apply here.
2. `BRAND.md` — the brand system quick-reference.
3. `CLAUDE.md` — project-specific conventions and foundation notes for
   whoever (human or agent) works in this repo next.

## Compliance rules baked into this build (do not relax these)

- No income promises anywhere; any results example links `/disclaimer` and
  carries the honest-results line.
- No invented testimonials, names, numbers, or reviews — placeholders ship
  visibly marked (`[TESTIMONIAL: pending permission]`) until real
  permissioned quotes exist.
- Countdown timers only count to a real date (`src/data/cohort.ts`, off by
  default) — never an evergreen or invented one.
- Zero em dashes, zero banned marketing words (full list in `BRAND.md` /
  the build brief's section 1.2) in any shipped copy.

## Still open (all marked `[NEEDS CONFIRMATION: ...]` inline in the code)

Real founder photos · BBB/Trustpilot profile URLs · a public contact email ·
a booking calendar provider · a form/CRM endpoint · live cohort dates for
the countdown bar · exact price tiers · a lawyer's review of `/privacy` and
`/terms`.

## Deployment

Static output (`output: "static"` in `astro.config.mjs`); build with
`npm run build` and deploy the `dist/` folder to any static host. Update
`site` in `astro.config.mjs` before launch if the production domain
changes from `https://www.writeexpertbook.com`.
