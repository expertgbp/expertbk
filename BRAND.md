# WriteExpertBook.com — Brand System

Quick-reference brand system for this project. The full context (audience
intelligence, page templates, conversion system) lives in
`WriteExpertBook-Website-Build-Brief.md`; this file is the fast-lookup
summary for anyone (human or agent) writing copy or UI for this site.
Canonical facts are also available as importable data at `src/data/entity.ts`
— that file, not this one, is the source of truth a build should read from
programmatically. This file is the human-readable mirror of it.

## Who we are

Global Book Publishing (GBP) is a partnership (hybrid) publisher founded in
2019 by Susmita "Sush" Dutta and Ash Goel. It turns experts, entrepreneurs,
coaches, and consultants into published authors, then helps them turn the
book into trust, authority, and income. Authors keep 100% of control,
royalties, rights, and reach.

**Positioning line:** Traditional publishing gives you reach but takes your
rights. Self-publishing gives you rights but no reach. Partnership
publishing is the third way.

## Canonical proof bank (use exactly; never invent past this)

- 700+ authors across 21 countries
- Founders are USA Today and Wall Street Journal bestselling authors
- 5X TEDx speakers jointly; Ash solo is a 9X TEDx speaker
- 1M+ students taught
- Sold 1,000+ books for one client in 5 days
- Took a stalled author from 15 sales in 15 months to international
  bestseller in 60 days

## Compliance rules (hard, non-negotiable)

- No income promises anywhere. Any revenue example carries: "These are our
  results and our clients' results, not a promise of yours."
- The only guarantee ever referenced is the defined program guarantee within
  its stated scope; never "guaranteed bestseller" as a general claim.
- No invented testimonials, names, numbers, or reviews. Placeholder slots
  ship as `[TESTIMONIAL: pending permission]` until real permissioned quotes
  exist.
- Urgency (countdown timers, cohort dates) must be real and verifiable —
  never an evergreen or invented timer.

## Voice

A smart friend who teaches, proves it with numbers, and believes in you.
Warm, direct, story-driven, plain-spoken. The reader is the hero. Validate
the fear first, then reframe with facts. 8th-grade reading level. Short
paragraphs, mostly 1–3 sentences. Numbers over adjectives. Contractions
welcome; perfection is not the voice, precision is.

**Banned forever:** em dashes (use commas, colons, parentheses); unlock,
unleash, elevate, delve, seamless, supercharge, streamline, revolutionize,
revolutionary, groundbreaking, skyrocket, game changer/game-changing, next
level, say goodbye to, secret weapon, struggling to, let's dive in,
demystify. Also banned: "In today's fast-paced world" openers,
triple-parallel "It's not X. It's not Y. It's Z." stacks, rhetorical
question chains.

## Color palette

| Token | Hex | Use |
|---|---|---|
| `--navy-900` | `#081F33` | Primary — headers, footer, hero bg, primary text on light |
| `--navy-800` | `#0C2540` | Gradient midpoint |
| `--navy-700` | `#102B4E` | Secondary — section backgrounds, cards on dark |
| `--navy-600` | `#1B3A66` | Hover states on dark, borders on navy |
| `--navy-100` | `#E8EEF5` | Light section background, alternating bands |
| `--gold-300` | `#FFD98A` | Tertiary — primary CTAs, highlights, icons, active states |
| `--gold-500` | `#E6B85C` | CTA hover, borders, underlines |
| `--gold-100` | `#FFF3D9` | Subtle highlight background, callout boxes |
| `--ivory-50` | `#FBF7EF` | Warm page background |
| `--ink-900` | `#12212F` | Body text on light backgrounds |
| `--slate-500` | `#5A6B7E` | Secondary text, captions |
| `--success-600` | `#2E7D5B` | Form success only |
| `--error-600` | `#B4452F` | Form errors only |

Rules: dark sections (navy-900/700) alternate with light sections
(ivory-50/navy-100) down every page — never two dark sections adjacent.
Gold is scarce on purpose (CTAs, one highlight word per hero, icons, section
eyebrows) — if gold covers more than ~5% of a viewport, remove some. Text on
navy-900 is `#F5F1E8` (warm off-white), never pure white and never gold for
body text. `#FFD98A` on `#081F33` passes WCAG AA for large text/buttons
only, not small body text; `#12212F` on `#FBF7EF` passes comfortably.

## Typography

- Headings: "Source Serif 4" (fallback Georgia, serif). Tight leading,
  H1 clamp 2.4rem–4rem.
- Body/UI: "Inter" or system stack. 1.125rem body, 1.7 line height.
- Numbers in proof rows: serif, oversized, gold on navy.
- Never more than two font families.

## Visual language

- Motif: the book as a door — a thin gold vertical rule opening into
  content, not stock photos of typewriters.
- Real photography of Sush and Ash and (with permission) real authors; until
  then, navy illustrated placeholders, clearly marked.
- Cards: white on ivory, 1px `--navy-100` border, 12px radius, soft shadow
  only on hover.
- Icons: single-weight line icons in navy-600, gold on hover. No emoji in UI.
- Every page ends with the same navy "final door" CTA band.

## Skills this project uses

Per this account's standing rule (every website project must declare which
mandatory skills apply — see `~/.claude/CLAUDE.md` for the full installed
roster): this project uses `impeccable` and `ui-ux-pro-max` for UI/UX and
responsiveness passes, Emil Kowalski's animation skills for motion, and
`build-website-from-brief` for the original build process. `claude-seo` and
`claude-blog` apply once SEO/blog work on this site goes deeper than the
foundational schema/llms.txt already in place.
