# Skills this project uses

Per this account's standing rule, every website project declares which
mandatory skills apply to it. All of these are installed once at the user
level (`~/.claude/skills/` — see `~/.claude/CLAUDE.md` for the full 91-skill
roster and source repos) rather than duplicated into this repo; this file is
the project's explicit declaration, not a separate install.

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

See `BRAND.md` (project root) for the brand system itself, and `CLAUDE.md`
(project root) for the technical foundation this site is built on.
