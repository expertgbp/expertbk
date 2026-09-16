/**
 * entity.ts — the single canonical source of facts for WriteExpertBook.com.
 *
 * Brief section 9 ("Entity consistency"): "one entity.md in the repo holds
 * the canonical facts... Every page pulls from it; inconsistent numbers
 * across pages is the fastest way to lose AI-engine trust."
 *
 * This file is that source of truth, in importable form. Every page,
 * component, and JSON-LD schema block MUST read numbers and facts from
 * here rather than hardcoding them. See section 1.1 of the build brief
 * for the plain-language version this data mirrors.
 */

export const entity = {
  brandName: "WriteExpertBook",
  legalName: "Global Book Publishing",
  legalNameShort: "GBP",
  founded: 2019,
  founders: [
    {
      name: "Susmita Dutta",
      shortName: "Sush Dutta",
      jobTitle: "Co-Founder, Global Book Publishing",
      credentials: [
        "USA Today bestselling author",
        "Wall Street Journal bestselling author",
        "TEDx speaker",
      ],
      // [NEEDS CONFIRMATION: LinkedIn URL, TEDx talk URL, headshot asset]
      sameAs: [] as string[],
    },
    {
      name: "Ash Goel",
      shortName: "Ash Goel",
      jobTitle: "Co-Founder, Global Book Publishing",
      credentials: [
        "USA Today bestselling author",
        "Wall Street Journal bestselling author",
        "9X TEDx speaker",
      ],
      // [NEEDS CONFIRMATION: LinkedIn URL, TEDx talk URL, headshot asset]
      sameAs: [] as string[],
    },
  ],
  proofBank: {
    authorsCount: "700+",
    countriesCount: "21",
    tedxJoint: "5X",
    tedxAshSolo: "9X",
    studentsTaught: "1M+",
    fastSaleStat: "Sold 1,000+ books for one client in 5 days",
    rescueStat:
      "Took a stalled author from 15 sales in 15 months to international bestseller in 60 days",
  },
  method: {
    name: "The EPIC Publishing Path",
    stages: [
      {
        key: "engineer",
        title: "Engineer",
        description:
          "Positioning first. The right book, the right reader, the right promise, decided before a word is written.",
      },
      {
        key: "produce",
        title: "Produce",
        description:
          "Structured extraction and professional editing that keeps your voice. We edit with you, not over you.",
      },
      {
        key: "ignite",
        title: "Ignite",
        description:
          "Publishing done right: your name, your rights, your royalties, everywhere books are sold.",
      },
      {
        key: "compound",
        title: "Compound",
        description:
          "A launch system, then quarterly pushes. Because a book isn't an event. It's an asset.",
      },
    ],
  },
  positioningLine:
    "Traditional publishing gives you reach but takes your rights. Self-publishing gives you rights but no reach. Partnership publishing is the third way.",
  // [NEEDS CONFIRMATION: street address for schema/footer]
  address: {
    locality: "Austin",
    region: "Texas", // display form; see OrganizationSchema.astro for the "TX" region code used in JSON-LD
    country: "US",
  },
  // [NEEDS CONFIRMATION: real social/profile URLs, BBB profile URL, Trustpilot profile URL]
  sameAs: [] as string[],
  bbbUrl: "", // [NEEDS CONFIRMATION]
  trustpilotUrl: "", // [NEEDS CONFIRMATION]
  contactEmail: "", // [NEEDS CONFIRMATION]
  incomeDisclaimerLine:
    "These are our results and our clients' results, not a promise of yours.",
  vanityPressWarning:
    "If anyone offers to publish your book without involving you, run.",
} as const;

export type Entity = typeof entity;
