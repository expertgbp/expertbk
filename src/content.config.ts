import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Shared building blocks used across templates. Keeping these as named
 * schemas (rather than repeating z.object literals) is what lets every
 * agent authoring content files agree on one shape.
 */
const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const obstacleItem = z.object({
  objection: z.string(), // the fear, in the reader's own words, quoted
  reframe: z.string(), // validate-then-reframe answer
});

const ctaBand = z.object({
  primaryLabel: z.string().default("Book a Free Book Strategy Call"),
  leadMagnetLabel: z.string(), // profession/lane-matched variant copy
  leadMagnetSlug: z.string().default("/free-blueprint"),
});

const proofBlock = z.object({
  // Real permissioned quote when available; otherwise a placeholder that
  // renders visibly as pending (brief 1.1 compliance rule).
  status: z.enum(["placeholder", "confirmed"]).default("placeholder"),
  quote: z.string().optional(),
  attribution: z.string().optional(),
  placeholderNote: z
    .string()
    .default("[TESTIMONIAL: pending permission]"),
});

/** /for/* — profession pages (brief 5.3) */
const professions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/professions" }),
  schema: z.object({
    title: z.string(), // the H1 question
    professionLabel: z.string(), // e.g. "Doctor", used in interpolated copy
    category: z.enum(["health", "business-tech", "law-service"]),
    personas: z.array(z.string()).default(["P1"]),
    answerBlock: z.string(), // <100 words, quotable direct answer
    identityMirror: z.string(),
    obstacles: z.array(obstacleItem).min(3).max(4),
    whatItDoes: z.string(),
    pathNote: z.string().optional(), // optional profession-specific framing of EPIC stages
    proof: proofBlock.default({ status: "placeholder", placeholderNote: "[TESTIMONIAL: pending permission]" }),
    relatedBooks: z.array(z.string()).length(3), // slugs into `books` collection
    faqs: z.array(faqItem).min(4).max(6),
    cta: ctaBand,
    order: z.number().default(99),
  }),
});

/** /books/* — book-type pages (brief 5.4) */
const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    bookTypeLabel: z.string(),
    category: z.enum(["expertise", "story"]),
    answerBlock: z.string(),
    whoWritesThis: z.string(),
    painPoints: z.array(obstacleItem).min(3).max(4),
    processDifferences: z.string(),
    proof: proofBlock.default({ status: "placeholder", placeholderNote: "[TESTIMONIAL: pending permission]" }),
    relatedProfessions: z.array(z.string()).min(2).max(4), // slugs into `professions`
    faqs: z.array(faqItem).min(4).max(6),
    cta: ctaBand,
    order: z.number().default(99),
  }),
});

/** /services/* — service pages (brief 5.5) */
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(), // outcome-promise H1
    answerBlock: z.string(),
    whoForNotFor: z.object({
      for: z.array(z.string()),
      notFor: z.array(z.string()),
    }),
    deliverables: z.array(z.string()).min(3),
    process: z.array(z.object({ step: z.string(), timeline: z.string() })).min(3),
    beforeAfter: z.array(z.object({ before: z.string(), after: z.string() })).min(3),
    proof: proofBlock.default({ status: "placeholder", placeholderNote: "[TESTIMONIAL: pending permission]" }),
    investmentRange: z.string(), // honest range, plain language
    paymentPlansNote: z.string().default("Payment plans available. Ask on your call."),
    guarantee: z.string(),
    faqs: z.array(faqItem).min(3).max(6),
    cta: ctaBand,
    order: z.number().default(99),
  }),
});

/** /guides/* — ungated pillar guides (brief 8) */
const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stage: z.string(), // journey stage this pillar serves (brief 3.2)
    faqs: z.array(faqItem).default([]),
    updatedDate: z.date(),
  }),
});

/** /blog/* — cluster articles (brief 8) */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(), // the question, phrased how a person asks it
    description: z.string(),
    cluster: z.string(),
    pillar: z.string(), // slug into `guides` collection, exactly one
    profession: z.string().optional(), // slug into `professions`, at most one
    bookType: z.string().optional(), // slug into `books`, at most one
    author: z.enum(["Ash Goel", "Susmita Dutta"]),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    faqs: z.array(faqItem).min(2).max(3),
    ctaVariant: ctaBand,
  }),
});

export const collections = { professions, books, services, guides, blog };
