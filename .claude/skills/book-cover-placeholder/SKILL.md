---
name: book-cover-placeholder
description: Generate a realistic, photorealistic-style AI placeholder book cover for WriteExpertBook.com's homepage "Bookshelf" section (or any other book-cover slot on the site), in the exact style the user approved on the Doctor cover (cream background, one real photographed object, navy serif title, dummy author name). Use when the user asks to generate/create/add a book cover, or references "the doctor cover style" / "like Robin Hale" as the standard to match.
---

# WriteExpertBook placeholder book cover

This is the recipe that produced the approved reference cover — "The Healing
Edge" by "Robin Hale" (Doctor slot, `src/assets/images/placeholder-covers/
placeholder-doctor.webp`). Match it exactly for every new cover; don't
reinterpret the style per profession.

**Read `~/.claude/skills/writeexpertbook-brand-images/SKILL.md` first** — this
skill is a specific recipe within that one's broader rules (palette, face
ban, folders, logging). This file only adds the book-cover-specific style
and pipeline.

## The approved style, in one paragraph

A photorealistic (NOT flat-illustration, NOT line-art icon) nonfiction book
cover: soft cream/off-white background (`#FAF6EE`) with natural shadow and
paper grain, like a real bookstore hardcover photographed on a table. One
real object relevant to the profession sits photographed in the lower half
— shot in soft studio light, shallow depth of field, tactile and real, never
a drawing or icon. Bold navy (`#081F33`) serif title in the top third, a
lighter serif subtitle beneath it, a thin gold (`#E6B85C`) rule under the
subtitle, and the dummy author's name in navy sans-serif small caps at the
very bottom. A thin book-spine edge is visible on the far left, like a real
hardcover. No human face or person anywhere in the frame — hands are fine,
faces are never allowed on this site.

The first version generated for this slot used a flat navy background with
a line-art icon (a stethoscope drawn as a heartbeat monitor line) — the user
rejected that style explicitly ("why we not go with realistic life images")
in favor of the photorealistic cream-background style described above. Do
not regress to the flat-illustration style for any future cover.

## Dummy names: short, real-sounding, no titles

Use a plain two-word name like "Robin Hale" — no "Dr.", no elaborate
double-barrelled names. The user's own words: "add the some name like ASH,
Dutta, ROBIN, etc, the real names, i'll change when I need to" — these are
throwaway placeholders the user will swap for a real author's name later,
not an attempt to sound authoritative. Keep it that plain.

## Workflow

1. **Pick the one object** for this profession — something a real photo of
   that object alone would evoke the field without a person in frame. Doctor
   used a stethoscope. Examples for the remaining slots: Coach → a compass
   or a single lit desk lamp; Founder → a fountain pen on a signed term
   sheet or a simple desk plant; Therapist → a pair of reading glasses on an
   open notebook; Lawyer → a gavel or a wax-sealed document; Executive → a
   leather portfolio or a boarding pass and pen. Pick ONE object, not a
   cluttered scene.
2. **Invent a short, real-sounding book title + subtitle** for that
   profession (never invent a real person, a real testimonial, or a real
   quote — this is cover art, not a factual claim about GBP).
3. **Generate** with the bundled script (uses the exact approved prompt
   template, reads `OPENAI_API_KEY` from the project's `.env`). Run this
   from the project root (`C:\GBP-Project`), same as every other script
   invocation in this repo — paths below are relative to that root:
   ```bash
   python .claude/skills/book-cover-placeholder/scripts/generate_cover.py \
     --title "THE MOMENTUM METHOD" \
     --subtitle "How the Best Coaches Build a Practice That Lasts" \
     --author "Jordan Ellis" \
     --object "a brass compass resting on an open notebook" \
     --out "design/raw-images/placeholder-coach-cover.png"
   ```
   Model/size/quality default to `gpt-image-2` / `1024x1536` / `high` —
   the sizes this skill's own sizing table calls "Portrait card". One call
   per cover, no variants (brand skill's automatic workflow: generate once
   at high quality, only regenerate if genuinely broken).
4. **Look at the result yourself** before doing anything else with it —
   check spelling, check no face slipped in, check it matches the cream/
   photorealistic style above and not the rejected flat-icon style.
5. **Compress to WebP** (image-compress skill):
   ```bash
   python "$HOME/.claude/skills/image-compress/scripts/compress_image.py" \
     --input design/raw-images/placeholder-<topic>-cover.png \
     --format webp --quality 85 --max-dimension 1024 \
     --output src/assets/images/placeholder-covers/placeholder-<topic>.webp
   ```
6. **Wire it into `src/components/BookShelf.astro`**: add `image:` (the
   imported WebP) and `dummyAuthor:` (the exact name printed on the cover)
   to that profession's entry in the `spines` array. The component already
   handles the rest — real cover renders via `BookCover.astro`, caption
   reads clean as `"{dummyAuthor}, {profession}"` (no brackets, no "dummy"
   or "pending" wording — the user was explicit that the visible caption
   should read like real production copy, not a dev note).
7. **Log it** in `design/image-log.md`: file, page, prompt summary
   (title/author/object), model, date. Bump the running API-call count.
8. **Container aspect ratio must stay `aspect-[2/3]`** on the wrapping div
   in BookShelf.astro (matches the generated image's real 2:3 proportions)
   — a mismatched fixed height crops the cover at the edges, which the user
   already flagged once as a bug.

## Remaining slots for this exact treatment

Coach, Founder, Therapist, Lawyer, Executive — same style, same workflow,
each with its own object/title/author. Do not batch-generate all of them
without checking in, unless the user has explicitly said to (they asked to
verify the Doctor one before continuing to the rest — that per-cover
check-in is the default until told otherwise).
