# Confirmation Punch List

Every "NEEDS CONFIRMATION" note on WriteExpertBook.com, grouped by source file/page.
Fill in the **Real value** column and send this file back — Claude will apply the
fixes directly to the source.

An interactive, auto-saving version of this same list also exists at:
https://claude.ai/artifact/YSzMUFWawNnaoG8eEwT3iR

---

## Shared facts (`src/data/entity.ts` / `src/data/cohort.ts`)

Fix these first — each one resolves the same placeholder everywhere it repeats
across the site (contact page, privacy, terms, trust, reviews, disclaimer).

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | Sush Dutta's founder profile is missing her | LinkedIn URL, TEDx talk URL, headshot asset | |
| 2 | Ash Goel's founder profile is missing his | LinkedIn URL, TEDx talk URL, headshot asset | |
| 3 | The company's registered | street address for schema/footer | |
| 4 | Organization-level | real social/profile URLs, BBB profile URL, Trustpilot profile URL | |
| 5 | The | BBB profile URL (empty — fixes /reviews and /trust too) | |
| 6 | The | Trustpilot profile URL (empty — fixes /reviews and /trust too) | |
| 7 | The public | contact email (empty — fixes /contact, /privacy, /terms, /disclaimer too) | |
| 8 | The | next cohort open date, enrollment close date | |

## Footer (every page) — `src/components/Footer.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | (site-wide footer) | real social links go in entity.ts `sameAs` — resolves once #4 above is filled | |

## `/about` — `src/pages/about.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "...sells quietly and then stops." | specific first-book details to publish here | |
| 2 | "Sush co-built the EPIC Publishing Path and reads applications from prospective authors personally, because she remembers being one." | extended bio, LinkedIn URL, TEDx talk URL | |
| 3 | "...toward the students the two have reached combined." (Ash's) | extended bio, LinkedIn URL, TEDx talk URL | |

## `/book-a-call` — `src/pages/book-a-call.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "Calls are with Sush Dutta or Ash Goel, or a senior member of their team." | who specifically takes calls today, and current headshots | |

## `/contact` — `src/pages/contact.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "Prefer email?" line | public contact email address | |
| 2 | Fallback text shown when contactEmail is empty | contact email | |

## `/disclaimer` — `src/pages/disclaimer.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "This is a draft starting point. Have a lawyer review this page before it governs real transactions." | legal review | |
| 2 | "Last updated:" | publish date | |
| 3 | "Contact us at ___ with any privacy question or request." | legal contact email | |

## `/terms` — `src/pages/terms.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "This is a draft starting point. Have a lawyer review this page before it governs real transactions." | legal review | |
| 2 | "Last updated:" | publish date | |
| 3 | "...general terms don't replace that agreement; where the two conflict, your signed service agreement controls." | link/reference to the standard service agreement template once finalized | |
| 4 | Limitation of liability section | standard limitation-of-liability language, to be drafted/reviewed by counsel | |
| 5 | "These terms are governed by the laws of {region}, {country}." | confirm final governing law and venue with counsel | |
| 6 | "Questions about these terms can go to" | legal contact email | |

## `/trust` — `src/pages/trust.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | Cancellation policy data array | exact clause list and cancellation/refund terms to publish verbatim | |
| 2 | FAQ: "Yes. Links to our BBB and Trustpilot profiles belong here..." | BBB profile URL | |
| 3 | Same FAQ answer, second half | Trustpilot profile URL | |
| 4 | Cancellation section body copy | exact cancellation window, refund terms, full clause list | |
| 5 | BBB badge fallback | BBB profile URL | |
| 6 | Trustpilot badge fallback | Trustpilot profile URL | |

## `/privacy` — `src/pages/privacy.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "This is a draft starting point. Have a lawyer review this page before it governs real transactions." | legal review | |
| 2 | "Last updated:" | publish date | |
| 3 | "This site may use basic analytics tools to understand traffic and page performance..." | exact analytics provider(s) in use and their data retention policies | |
| 4 | "Form submissions are sent to our CRM and email systems..." | specific CRM/email provider name(s) | |
| 5 | "Contact us at ___ with any privacy question or request." | legal contact email | |

## `/reviews` — `src/pages/reviews.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | Shown when no BBB rating is present | BBB profile URL | |
| 2 | Shown when no Trustpilot rating is present | Trustpilot profile URL | |

## `/pricing-and-cost` — `src/pages/pricing-and-cost.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "...than self-publishing alone and less than the years a traditional deal can take. Payment plans exist." | exact price tiers | |
| 2 | "What we can tell you honestly: partnership publishing is a real investment..." | exact price tiers | |
| 3 | Comparison table, "Upfront cost" row, partnership column | exact price tiers | |

## `/compare/partnership-vs-traditional-publishing`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | Table: "The publisher pays you a minority royalty on net receipts, with the exact rate set by contract" | current typical industry royalty range | |
| 2 | Body copy: "...minority royalty on sales, with the exact rate set by contract and varying by format" | current typical industry royalty range | |

## `/books/other` — `src/pages/books/other.astro`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | FAQ — "Can I publish under a pen name?" answer | pen name policy | |

## `/for/financial-advisors`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "The book is built around principles and process, not personalized advice, and every claim is written to be defensible." | confirm your specific compliance review requirements with your firm | |

## `/for/lawyers`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "The book is written to teach, not to solicit, and disclaimers are built in." | confirm your specific bar's advertising and solicitation rules | |

## `/for/therapists`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "...language and liability-aware phrasing are part of the editing pass, reviewed with you line by line." | specific licensing board advertising/disclosure rules vary by state/country | |
| 2 | "The book teaches general principles, not individualized clinical advice..." | your specific board's advertising and disclosure rules | |

## `/services/audiobook`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "Audiobook production is priced by scope: narration choice and the book's length." | exact price tiers | |
| 2 | "We stand behind the process: if the script, recording, editing, and distribution deliverables above aren't delivered as scoped, we make it right." | exact guarantee terms and scope | |

## `/services/book-writing`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "Book writing is priced by scope: how much material already exists, how many extraction sessions it takes, and how deep the developmental edit goes." | exact price tiers | |
| 2 | "We stand behind the process: if you show up for the structured sessions and complete your reviews, and the deliverables above aren't met, we make it right." | exact guarantee terms and scope | |

## `/services/book-relaunch`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "Book Rescue is priced by scope: how deep the audit needs to go and how large the relaunch push is." | exact price tiers | |
| 2 | "...make it right. We never guarantee a specific sales number; the 60-day result above is one real author's outcome, not a promise of yours." | exact guarantee terms and scope | |

## `/services/book-publishing`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "Publishing is priced by scope: editing depth, design rounds, and distribution reach." | exact price tiers | |
| 2 | "We stand behind the process: if the deliverables above (editing, design, formatting, ISBN, distribution) aren't delivered as described, we make it right." | exact guarantee terms and scope | |

## `/services/book-marketing`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "Launch campaigns are priced by scope: audience size, reviewer outreach depth, and how many quarterly pushes you run." | exact price tiers | |
| 2 | "...make it right. We never guarantee bestseller status or sales figures; no one honestly can." | exact guarantee terms and scope | |

## `/services/author-brand-and-speaking`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "...delivered as scoped, we make it right. We never guarantee a specific number of bookings; fit and timing decide that, not us." | exact guarantee terms and scope | |

## `/blog/how-much-does-it-cost-to-publish-a-book-with-a-hybrid-publisher`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "The real number depends on scope... [X] will hold the exact figures once they're finalized on this page." | published price tiers | |
| 2 | "A [X] breakdown belongs on the pricing page, in writing, before you ever get on a call." | published price tiers | |

## `/blog/hybrid-publisher-vs-vanity-press-7-differences`

| # | Context | Needs confirmation | Real value |
|---|---|---|---|
| 1 | "A legitimate publisher has a public, checkable reputation on third-party review sites." | BBB profile URL | |
| 2 | "...and [X] will be linked from the reviews page once confirmed." | Trustpilot profile URL | |
