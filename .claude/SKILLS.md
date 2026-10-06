# Skills this project uses

Per this account's standing rule, every website project declares which
mandatory skills apply to it. As of 2026-10-01 the skills are installed in
this repo itself, under `.claude/skills/` (126 skill folders plus the two
project-local ones below), copied from a shallow clone of each source repo:

| Source repo | Skills it provides here |
|---|---|
| `nextlevelbuilder/ui-ux-pro-max-skill` | `ui-ux-pro-max`, `design`, `design-system`, `ui-styling`, `brand`, `banner-design`, `slides` |
| `emilkowalski/skills` | `emil-design-eng`, `animate`, `find-animation-opportunities`, `improve-animations`, `review-animations`, `animation-vocabulary`, `apple-design`, and others |
| `Leonxlnx/taste-skill` | `taste-skill`, `taste-skill-v1`, `redesign-skill`, `soft-skill`, `minimalist-skill`, `brandkit`, `imagegen-frontend-web`, and others |
| `pbakaus/impeccable` | `impeccable` |
| `AgriciDaniel/claude-seo` | `seo`, `seo-audit`, `seo-technical`, `seo-schema`, `seo-geo`, `seo-page`, and the rest of the `seo-*` set |
| `coreyhaines31/marketingskills` | `copywriting`, `cro`, `content-strategy`, `lead-magnets`, `schema`, and the rest of the marketing set |
| `higgsfield-ai/skills` | the `higgsfield-*` set |
| `wuyoscar/GPT-Image2-Skill` | `gpt-image`, `get-prompt-from-image` |

Three duplicates were skipped because a skill of the same name was already
copied from an earlier repo in that list: `seo-audit` (marketingskills'
copy; claude-seo's is the one installed) and the `seo-image-gen` /
`seo-dataforseo` extension copies. To update a skill, re-clone its repo and
replace its folder. Nothing in these folders runs at build time and none of
it ships to the site.

For UI and motion work, `CLAUDE.md`'s "Skill priority" section still decides
which of these to actually reach for.

- **UI/UX and taste:** `impeccable`, `ui-ux-pro-max` (+ `design`,
  `design-system`, `ui-styling`), `taste-skill`. Use for any visual-quality,
  spacing/padding, CTA-design, or responsiveness pass on this site.
- **Brand:** `brand` / `brandkit` — for keeping `BRAND.md` (project root) in
  sync as the brand system evolves.
- **Animation:** Emil Kowalski's set (`emil-design-eng`, `animate`,
  `find-animation-opportunities`, `improve-animations`,
  `review-animations`, `apple-design`) — for restraint and taste calls on
  motion (should this animate at all, what purpose, what budget). The
  official GreenSock skill set (`gsap-core`, `gsap-timeline`,
  `gsap-scrolltrigger`, `gsap-plugins`, `gsap-performance`, `gsap-utils`,
  `gsap-frameworks`, `gsap-react`; github.com/greensock/gsap-skills) for the
  actual implementation once Emil's skills say motion earns its place —
  used for the homepage hero particle field/parallax and the magnetic CTA
  pull (`src/scripts/hero-particles.ts`, `src/scripts/cta-motion.ts`).


- **SEO:** `claude-seo` skill set. A full SEO/AEO/GEO pass now covers: unique
  titles/descriptions and canonical URLs on all 88 pages (verified, zero
  duplicates), Open Graph + Twitter Card meta with a real og:image on every
  page (branded default, or each blog post's own hero illustration),
  `WebSite` + per-page `Speakable` schema (AEO), a categorized + prioritized
  sitemap set (`sitemap-{pages,professions,books,services,guides,blog}.xml`,
  see `src/pages/sitemap-*.xml.ts` and `src/utils/sitemap.ts`) replacing the
  old flat `@astrojs/sitemap` output, and `robots.txt` explicitly allowing
  the major AI/answer-engine crawlers (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, etc.) alongside `/llms.txt`.
- **Blog:** `claude-blog` skill set — for scaling past the first 6 articles
  already written (see `src/content/blog/`).
- **Site-build process:** `build-website-from-brief` — the process this
  site was originally built with; reusable for future large builds.
- **Blog post finalization (project-local):** `blog-article-finalize`
  (`.claude/skills/blog-article-finalize/`, this repo only — not part of the
  user-level roster). Captures the exact recipe used to bring
  `how-much-does-it-cost-to-publish-a-book-with-a-hybrid-publisher.md` to its
  approved final state: realistic AI-generated hero + chart images (never
  hand-coded SVG/HTML tables), a 3,000+ word substantive expansion, and the
  sitewide sticky-TOC article layout. Use this when finalizing any other
  post in `src/content/blog/` to the same standard, one post at a time.
- **Book cover placeholders (project-local):** `book-cover-placeholder`
  (`.claude/skills/book-cover-placeholder/`, this repo only). Captures the
  exact approved style for the homepage Bookshelf's AI-generated covers —
  photorealistic, cream background, one real photographed object, navy
  serif title, plain dummy author name (the Doctor/"Robin Hale" cover is
  the reference) — plus a bundled `scripts/generate_cover.py` that calls
  the OpenAI Images API directly (the `gpt-image` skill's own CLI backend
  is an unreachably large clone on this network). Use for every remaining
  Bookshelf cover (Coach, Founder, Therapist, Lawyer, Executive) and any
  future book-cover slot on the site.

See `BRAND.md` (project root) for the brand system itself, and `CLAUDE.md`
(project root) for the technical foundation this site is built on.
