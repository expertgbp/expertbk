#!/usr/bin/env python3
"""Generate one WriteExpertBook.com placeholder book cover via the OpenAI
Images API directly (bypasses the `gpt-image` skill's own CLI wrapper,
whose upstream repo is a ~470MB clone — too slow on a bandwidth-capped
network). Same model/size/quality the gpt-image skill documents.

Reads OPENAI_API_KEY from the process environment, falling back to the
project's own .env file. Never prints the key value.

Usage:
  python generate_cover.py --title "THE HEALING EDGE" \\
    --subtitle "What Twenty Years at the Bedside Taught Me" \\
    --author "ROBIN HALE" --object "a stethoscope resting naturally" \\
    --out ../../../design/raw-images/placeholder-doctor-cover.png
"""
import argparse
import base64
import os
import re
import sys

PROJECT_ENV = r"C:\GBP-Project\.env"

# Four brand-safe background variants (never colors outside the palette —
# just which member of it dominates). Pick a different one per cover so
# the bookshelf reads as varied real books, not six copies of one recipe.
# "cream" is the original approved reference (Doctor / Robin Hale).
VARIANTS = {
    "cream": dict(
        bg_desc="a soft, light cream background (warm off-white, #FAF6EE), photographed with gentle "
                "natural shadow and subtle paper grain texture, like real bookstore nonfiction covers use",
        palette="cream and warm white background, deep navy #081F33 for the title text, warm gold #E6B85C "
                "for a thin accent rule under the subtitle",
        title_color="deep navy", subtitle_color="navy", author_color="deep navy",
    ),
    "navy": dict(
        bg_desc="a deep navy background (#081F33), photographed with soft directional studio light and a "
                "subtle vignette, moody and premium like a real bestseller's darker cover treatment",
        palette="deep navy background, warm gold #FFD98A for the title text, warm gold #E6B85C for a thin "
                "accent rule, cream #FAF6EE for the subtitle and author name",
        title_color="warm gold", subtitle_color="cream", author_color="cream",
    ),
    "charcoal": dict(
        bg_desc="a near-black charcoal background (#12212F), photographed with a single soft top light "
                "and deep shadow falloff, serious and formal like a real legal or executive nonfiction cover",
        palette="charcoal background, warm gold #FFD98A for the title text, warm gold #E6B85C for a thin "
                "accent rule, cream #FAF6EE for the subtitle and author name",
        title_color="warm gold", subtitle_color="cream", author_color="cream",
    ),
    "gold": dict(
        bg_desc="a warm soft gold-cream background (#FFF3D9), photographed with bright even studio light "
                "and gentle natural shadow, optimistic and premium",
        palette="warm gold-cream background, deep navy #081F33 for the title text, deep navy #102B4E for a "
                "thin accent rule under the subtitle",
        title_color="deep navy", subtitle_color="navy", author_color="deep navy",
    ),
}

PROMPT_TEMPLATE = """Subject: a professional nonfiction book cover design, front cover only, flat rectangular jacket exactly like a real bestselling hardcover you would see in a bookstore -- photorealistic photography style, not illustration or line art.
Title text at the top in bold modern serif typography, in {title_color}: '{title}'.
Small subtitle beneath it, in {subtitle_color}: '{subtitle}'.
Author name near the bottom in clean sans-serif small caps, in {author_color}: '{author}'.
Setting: this IS the cover art.
Background: {bg_desc}.
A single realistic photographed object sits in the lower-middle of the cover: {object_desc}, shot in soft studio light with shallow depth of field, photorealistic, not a drawing or icon.
Palette: {palette}.
Lighting: soft realistic studio photography lighting with gentle shadow beneath the object, giving real depth.
Composition: title top third, photographed object centered lower half, author name at the very bottom, generous clean margins like a real book jacket, a thin book-spine edge visible on the far left like a real hardcover.
Mood: calm, premium, trustworthy, contemporary nonfiction bestseller, photographic and tactile, not flat graphic design.
Avoid: any human face or person, any real brand logo, cartoon or line-art icons, blurry or warped text, extra random text."""


def load_key() -> str:
    key = os.environ.get("OPENAI_API_KEY")
    if key:
        return key
    if os.path.isfile(PROJECT_ENV):
        with open(PROJECT_ENV, "r", encoding="utf-8") as f:
            for line in f:
                m = re.match(r'^\s*OPENAI_API_KEY\s*=\s*"?([^"\n]+)"?\s*$', line)
                if m:
                    return m.group(1).strip()
    return ""


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--title", required=True, help="Book title, e.g. 'THE HEALING EDGE'")
    p.add_argument("--subtitle", required=True)
    p.add_argument("--author", required=True, help="Dummy author name, e.g. 'ROBIN HALE'")
    p.add_argument("--object", dest="object_desc", required=True,
                   help="The one real object to photograph, e.g. 'a stethoscope resting naturally'")
    p.add_argument("--variant", choices=sorted(VARIANTS), default="cream",
                   help="Background/color treatment — vary this per cover so the bookshelf doesn't "
                        "look like six copies of one recipe. Default 'cream' is the approved reference.")
    p.add_argument("--out", required=True, help="Output PNG path")
    p.add_argument("--model", default="gpt-image-2")
    p.add_argument("--size", default="1024x1536")
    p.add_argument("--quality", default="high")
    args = p.parse_args()

    key = load_key()
    if not key:
        print("ERROR: OPENAI_API_KEY not found in process env or project .env", file=sys.stderr)
        return 2

    from openai import OpenAI
    client = OpenAI(api_key=key)

    prompt = PROMPT_TEMPLATE.format(
        title=args.title, subtitle=args.subtitle, author=args.author, object_desc=args.object_desc,
        **VARIANTS[args.variant],
    )

    try:
        result = client.images.generate(
            model=args.model, prompt=prompt, size=args.size, quality=args.quality, n=1
        )
    except Exception as e:
        print(f"API_ERROR: {type(e).__name__}: {e}", file=sys.stderr)
        return 1

    item = result.data[0]
    b64 = getattr(item, "b64_json", None)
    if b64:
        raw = base64.b64decode(b64)
    elif getattr(item, "url", None):
        import urllib.request
        with urllib.request.urlopen(item.url) as resp:
            raw = resp.read()
    else:
        print("ERROR: response had neither b64_json nor url", file=sys.stderr)
        return 1

    os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)
    with open(args.out, "wb") as f:
        f.write(raw)
    print(f"OK: saved {len(raw)} bytes to {args.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
