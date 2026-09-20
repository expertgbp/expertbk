#!/usr/bin/env node
// Node-only CLI. Never import this from src/ — anything in src/scripts is
// bundled for the browser, which would ship OPENAI_API_KEY to visitors.
//
// Usage:
//   node --env-file=.env scripts/generate-image.mjs \
//     --prompt "Editorial illustration of a golden scale of justice..." \
//     --out public/images/blog/my-post-hero.png \
//     [--size 1536x1024] [--quality medium] [--background transparent]
//
// Sizes: 1024x1024, 1024x1536, 1536x1024, auto (default: auto)
// Quality: low, medium, high, auto (default: medium)
// Background: transparent, opaque, auto (default: auto)

import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, "");
    args[key] = argv[i + 1];
  }
  return args;
}

const { prompt, out, size = "auto", quality = "medium", background = "auto" } = parseArgs(process.argv.slice(2));

if (!prompt || !out) {
  console.error('Usage: node --env-file=.env scripts/generate-image.mjs --prompt "..." --out public/images/blog/name.png');
  process.exit(1);
}

if (!out.endsWith(".png")) {
  console.error("Output path must end in .png (that's the format the API returns).");
  process.exit(1);
}

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("OPENAI_API_KEY is not set. Run with: node --env-file=.env scripts/generate-image.mjs ...");
  process.exit(1);
}

const response = await fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gpt-image-1",
    prompt,
    size,
    quality,
    background,
    n: 1,
  }),
});

if (!response.ok) {
  const body = await response.text();
  console.error(`OpenAI API error ${response.status}: ${body}`);
  process.exit(1);
}

const data = await response.json();
const b64 = data.data?.[0]?.b64_json;
if (!b64) {
  console.error("No image data in response:", JSON.stringify(data));
  process.exit(1);
}

await mkdir(dirname(out), { recursive: true });
await writeFile(out, Buffer.from(b64, "base64"));

console.log(`Saved ${out}`);
