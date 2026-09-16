# WriteExpertBook.com Change Spec, Round 1

Approved items from the September 15, 2026 site review: A4, A8, B10 (as amended), B11, B12, B13 (as amended), F35, plus two founder-requested copy changes (Changes 8 and 9). This file is written for an AI coding agent working in the WriteExpertBook.com repository (Astro, Tailwind, Markdown content collections). Do the changes in the order listed. Run the QA checklist at the end before finishing.

## Notes for Ash before you hand this over

Two interpretations to confirm. First, you asked for Consultants and Speakers to sit under the renamed "Service Providers" column. Both pages already exist (/for/consultants and /for/speakers), so this spec moves them there rather than creating duplicates; Consultants leaves the Wealth column and Speakers leaves the Leadership & Career column. Second, "Course Creators" is a brand-new page and is added to Service Providers as you asked. If either reading is wrong, edit the table in Change 3 before feeding this file to the agent.

---

## Context the agent needs

WriteExpertBook.com is the expert-author funnel site of Global Book Publishing (GBP), a partnership (hybrid) publisher founded in 2019 by Susmita "Sush" Dutta and Ash Goel. The company's public location on this site is Austin, Texas (see Change 9). Authors keep 100% of rights and royalties. Proof bank (use exactly, never extend): 700+ authors across 21 countries; founders are USA Today and Wall Street Journal bestselling authors; Ash is a 9X TEDx speaker; 1M+ students taught; 1,000+ books sold for one client in 5 days; a stalled author taken from 15 sales in 15 months to international bestseller in 60 days.

Rules that apply to every line of copy you write or edit:

1. No em dashes anywhere. Use commas, colons, parentheses, or a new sentence.
2. Never use these words or their variants: unlock, unleash, elevate, delve, seamless, supercharge, streamline, revolutionize, revolutionary, groundbreaking, skyrocket, game changer, next level, say goodbye to, secret weapon, struggling to, let's dive in, demystify.
3. Facts, numbers, and client results come only from the proof bank above. If you need a fact you do not have, write `[NEEDS CONFIRMATION: what is needed]`. Never invent a testimonial, statistic, name, or price.
4. Results examples always carry this line, linked to /disclaimer: "These are our results and our clients' results, not a promise of yours."
5. Voice: a smart friend who teaches, proves it with numbers, and believes in you. Validate the fear first, then reframe with facts. 8th grade reading level. Short paragraphs, mostly one to three sentences. The reader is the hero.
6. URLs are lowercase and hyphenated. Existing URLs never change (no broken links, no redirects needed for this round).
7. One H1 per page, phrased as the reader's question on profession and book-type pages.
8. Every page below the homepage carries BreadcrumbList schema (already in the layout) and FAQPage schema where an FAQ exists.

Where things live (adjust to the actual repo if names differ): profession pages are a content collection rendered at /for/*; book-type pages at /books/*; the nav lives in the Header component; the footer sitemap in the Footer component; the homepage profession grid in a CardGrid or similar component; the quiz in a QuizRouter component at /start; the lead form in LeadMagnetForm; the homepage comparison in CompareTable; the transformation table in BeforeAfterTable. If a single data file (for example a professions list or nav config) feeds several of these, change it there once and let the components inherit.

---

## Change 1 (A4): Fix the homepage publishing comparison table

**Why.** The Partnership publishing column currently says royalties are "You, split with the publisher," which contradicts the 100% promise on every other page, and the "Who does the work" cell is empty.

**Where.** Homepage section "Three ways to publish. One honest table." Search the repo for the string `split with the publisher` to find it.

**Change.** The full table must read exactly as follows.

| | Self-publishing alone | Traditional publishing | Partnership publishing |
|---|---|---|---|
| Who owns your rights | You | The publisher, usually | You, 100% |
| Who keeps royalties | You | You, split with the publisher | You, 100% |
| Who does the work | You, all of it | You write; the publisher produces | A team carries production and launch; you review every word |
| Speed | Fast to publish, slow to learn the craft alone | Often 12 to 24 months, if accepted at all | 6 to 12 months, guided |
| Marketing support | None built in | Minimal past launch week | Built into the process |
| Upfront cost | Low cash, high time cost | Low cash, low control | A real investment, itemized and honest |

Keep the existing "Read the full comparison" link to /compare/partnership-vs-self-publishing. Keep the gold border on the Partnership column.

**Also check.** Search the whole repo for `split with the publisher` and any other phrasing that implies GBP takes a royalty share. The three /compare/* pages and /pricing-and-cost are the likely places. Correct any instance so it matches "You keep 100% of your rights and royalties."

**Done when.** No cell in the table is blank; the Partnership column says "You, 100%" for both rights and royalties; a site-wide search finds no copy suggesting a royalty split with GBP.

---

## Change 2 (A8): Remove competitor links and fix time framing in the four September 14 articles

**Why.** The article "Is Hybrid Publishing Actually the Smart Move in 2026?" links out to Atmosphere Press and Clever Fox Publishing, two competing hybrid publishers. The funnel should never send readers to competitors. The same article opens "Heading into 2026" while dated September 14, 2026.

**Where.** These four blog entries:

- /blog/is-hybrid-publishing-the-smart-move-in-2026
- /blog/niche-podcasts-are-beating-big-media-for-book-launches
- /blog/should-you-use-ai-to-write-your-nonfiction-book
- /blog/why-linkedin-is-the-highest-leverage-platform-for-your-book

**Change.**

1. In all four articles, list every outbound link (any href not on writeexpertbook.com). Remove any link to a publishing company, ghostwriting firm, or author-services business. Where the sentence needs a source, replace with one of: the Independent Book Publishers Association (ibpa-online.org), Publishers Weekly (publishersweekly.com), or the Alliance of Independent Authors (allianceindependentauthors.org). If the claim cannot be supported by one of those, rewrite the sentence so it no longer needs a citation, or mark it `[NEEDS CONFIRMATION: source]`. Never invent a source or a statistic.
2. Where the removed link pointed to a comparison of publishing models, link instead to the site's own pages: /compare/hybrid-publisher-vs-vanity-press, /compare/partnership-vs-traditional-publishing, or /compare/partnership-vs-self-publishing.
3. In the hybrid publishing article, change the opening so the time framing matches a September 2026 publish date. Replace "Heading into 2026" with "In 2026" and check the rest of the article for any "next year," "coming year," or "heading into" phrasing that assumes the reader is in 2025. Fix each one.
4. Confirm each article still has exactly one pillar-guide link, one profession or book-type page link, and one service or CTA link. Add any that are missing.

**Done when.** A crawl of the four articles shows zero outbound links to publishing or author-services companies; the hybrid article reads correctly for a September 2026 date; each article satisfies the internal-link rule.

---

## Change 3 (B10, amended): Regroup the "For Experts" menu into Health, Wealth, Relationships, Leadership & Career, Service Providers

**Why.** The menu moves from a list of job titles to a list of markets, with Health, Wealth, and Relationships first. This is a founder decision; implement it as specified.

**The new grouping.** Five columns, in this order. Existing pages keep their URLs and move to the column shown. New pages are created in this round (see Change 3b for their briefs).

| Column (in order) | Existing pages that move here | New pages to build in this round |
|---|---|---|
| **Health** | Doctors, Nurses, Therapists, Dentists, Health Coaches | Fitness & Nutrition Coaches; Holistic & Wellness Practitioners |
| **Wealth** | Financial Advisors, CEOs & Founders, Coaches, Real Estate Professionals | Accountants & Tax Professionals; Sales Leaders; Mortgage & Insurance Professionals |
| **Relationships** | (none) | Relationship & Marriage Coaches; Parenting Experts; Family Counselors; Dating Coaches |
| **Leadership & Career** | IT Leaders, HR Leaders, Retired Executives | Career Coaches |
| **Service Providers** | Lawyers, Educators, Consultants, Speakers | Course Creators; First Responders & Military Veterans |

**Slugs for the new pages** (create exactly these):

- /for/fitness-and-nutrition-coaches
- /for/holistic-and-wellness-practitioners
- /for/accountants-and-tax-professionals
- /for/sales-leaders
- /for/mortgage-and-insurance-professionals
- /for/relationship-and-marriage-coaches
- /for/parenting-experts
- /for/family-counselors
- /for/dating-coaches
- /for/career-coaches
- /for/course-creators
- /for/first-responders-and-veterans

**Order inside each column.** Existing pages first in the order listed above, then new pages in the order listed above.

**Done when.** The nav dropdown shows five columns in the stated order with the stated headings and members; all 28 profession pages (16 existing plus 12 new) resolve with a 200; the old headings "Business & Tech" and "Law & Service" appear nowhere on the site.

### Change 3b: Build the twelve new profession pages

Every new page follows the same skeleton as /for/doctors (the gold-standard page). Copy the structure of that page's content file and write new copy for each section. Target 1,200 to 1,800 words of body copy per page. Do not copy sentences from other profession pages; each page is written for one reader.

**Skeleton (in order):**

1. H1 as the reader's question (given per page below).
2. Direct answer block, under 100 words, self-contained: what the path is, how long (6 to 12 months), what it requires from them, that they keep 100% of rights and royalties.
3. Identity mirror: two or three sentences in their world's vocabulary.
4. Obstacle map: their top three or four pains, each as a quoted objection in their words, followed by a validate-then-reframe answer.
5. "What your book does for a [profession]": profession-specific outcomes (referrals, clients, stages, media, courses). End with a variation of "The book is rarely the income. It's the instrument." only if it fits; do not force it.
6. The EPIC Publishing Path (Engineer, Produce, Ignite, Compound), framed for their calendar. Reuse the four stage descriptions from the homepage word for word.
7. Proof block: `[TESTIMONIAL: pending permission: <profession> author]` plus the two canonical results with the disclaimer line linked to /disclaimer.
8. "Book types [profession] write": three links into /books/* (given per page below).
9. FAQ, four to six questions, with FAQPage schema. Always include: cost (give the true range or say it depends on scope, and link /pricing-and-cost), time commitment, voice preservation, and one profession-specific question (given per page below).
10. CTA band: "Book a Free Book Strategy Call" (primary) and "Get the [Profession] Book Blueprint (free)" linking to /free-blueprint.

Frontmatter must match the existing profession collection schema (title, slug, persona, stage, faqs, answerBlock, and whatever else the schema requires). Set persona to P1 unless noted. Add a `group` field (or whatever field the nav uses) set to the column name.

**Per-page briefs.** Each brief gives the H1, the identity-mirror cue, three pains in the reader's words, three book-type links, the profession-specific FAQ, and the Blueprint label. Everything else follows the skeleton.

**Fitness & Nutrition Coaches** (Health)
- H1: How Does a Fitness or Nutrition Coach Write a Book Clients Actually Follow?
- Mirror cue: 5 a.m. sessions, meal plans rewritten for the hundredth client, the same three questions every intake.
- Pains: "Everything I know is already on YouTube for free." / "I'm not a scientist; who am I to write a book?" / "My clients need me in the room, not on a page."
- Book types: /books/health-and-wellness-book, /books/self-help-book, /books/nonfiction-book
- Specific FAQ: Can I make health claims in my book?
- Blueprint label: Get the Coach's Book Blueprint (free)

**Holistic & Wellness Practitioners** (Health)
- H1: How Does a Holistic Practitioner Write a Book That Earns Trust Outside the Treatment Room?
- Mirror cue: clients who found you by word of mouth, a practice that fills through referrals, skepticism you answer one person at a time.
- Pains: "People will dismiss it as unscientific." / "My approach is hard to explain without being there." / "I don't want to sound like every wellness influencer."
- Book types: /books/health-and-wellness-book, /books/self-help-book, /books/memoir
- Specific FAQ: How do I write about my approach without overclaiming?
- Blueprint label: Get the Practitioner's Book Blueprint (free)

**Accountants & Tax Professionals** (Wealth)
- H1: How Does an Accountant Write a Book Without Giving Advice That Gets Them in Trouble?
- Mirror cue: the March-to-April blur, clients who call in a panic in December, the questions you answer so often you could recite them asleep.
- Pains: "Tax law changes every year; my book will be out of date in twelve months." / "Compliance rules limit what I can say." / "Nobody wants to read about accounting."
- Book types: /books/business-book, /books/nonfiction-book, /books/self-help-book
- Specific FAQ: How do I keep a book about money accurate and compliant?
- Blueprint label: Get the Accountant's Book Blueprint (free)

**Sales Leaders** (Wealth)
- H1: How Does a Sales Leader Write a Book That Sells Them Before the First Call?
- Mirror cue: quota calendars, pipeline reviews, the playbook that lives in your head and nowhere else.
- Pains: "There are a thousand sales books already." / "My method only works live." / "I don't have time between quarters."
- Book types: /books/business-book, /books/leadership-book, /books/nonfiction-book
- Specific FAQ: Should the book give away my whole method?
- Blueprint label: Get the Sales Leader's Book Blueprint (free)

**Mortgage & Insurance Professionals** (Wealth)
- H1: How Does a Mortgage or Insurance Professional Write a Book That Brings Clients to Them?
- Mirror cue: rate anxiety, first-time buyers, families who need a plain-English guide and get a brochure instead.
- Pains: "My industry is heavily regulated; what can I even say?" / "Clients see me as a salesperson, not an expert." / "Rates and products change; the book will age fast."
- Book types: /books/business-book, /books/self-help-book, /books/nonfiction-book
- Specific FAQ: How do I write about regulated products safely?
- Blueprint label: Get the Advisor's Book Blueprint (free)

**Relationship & Marriage Coaches** (Relationships)
- H1: How Does a Relationship Coach Write a Book Couples Will Actually Read Together?
- Mirror cue: the couple who arrives already half-decided, the same pattern in a hundred different marriages, the tools you teach that work when people use them.
- Pains: "Relationship advice is everywhere; why would mine matter?" / "I can't share client stories." / "I'm afraid of sounding preachy."
- Book types: /books/self-help-book, /books/nonfiction-book, /books/memoir
- Specific FAQ: How do I use real relationship patterns without exposing real clients?
- Blueprint label: Get the Relationship Coach's Book Blueprint (free)

**Parenting Experts** (Relationships)
- H1: How Does a Parenting Expert Write a Book Exhausted Parents Will Finish?
- Mirror cue: parents reading at 11 p.m. after bedtime, one chapter at a time, looking for one thing that works tomorrow.
- Pains: "Parents don't have time to read." / "Every family is different; how can one book help?" / "I worry about being judged for my own parenting."
- Book types: /books/self-help-book, /books/nonfiction-book, /books/childrens-book
- Specific FAQ: Should I include my own family in the book?
- Blueprint label: Get the Parenting Expert's Book Blueprint (free)

**Family Counselors** (Relationships; persona P1 with P2 sensitivity: no pressure language on this page)
- H1: How Does a Family Counselor Write a Book Without Breaking Confidentiality?
- Mirror cue: the family that sits in your office in silence, the breakthrough in session twelve, notes you can never share.
- Pains: "Confidentiality makes storytelling almost impossible." / "The topics are heavy; who wants to read that?" / "My licensing body has rules about public writing."
- Book types: /books/self-help-book, /books/nonfiction-book, /books/memoir
- Specific FAQ: How do composite examples protect clients?
- Cross-link: one sentence in the identity mirror linking to /for/therapists: "If your work is individual therapy rather than family systems, the therapist's page may fit you better."
- Blueprint label: Get the Counselor's Book Blueprint (free)

**Dating Coaches** (Relationships)
- H1: How Does a Dating Coach Write a Book That Builds Trust Before the First Session?
- Mirror cue: clients who found you through a podcast at 2 a.m., the same fear in a hundred different voices, advice that works better once they trust you.
- Pains: "Dating advice is a crowded, noisy space." / "I don't want to be lumped in with pickup-artist books." / "My clients are private about needing help."
- Book types: /books/self-help-book, /books/nonfiction-book, /books/memoir
- Specific FAQ: How do I position the book so it attracts serious clients?
- Blueprint label: Get the Dating Coach's Book Blueprint (free)

**Career Coaches** (Leadership & Career)
- H1: How Does a Career Coach Write a Book That Becomes Their Best Referral?
- Mirror cue: résumé rewrites, the interview debrief, the client who lands the job and never tells anyone how.
- Pains: "Career advice changes with the job market." / "My value is the one-on-one conversation." / "Corporate clients want credentials, not a book."
- Book types: /books/self-help-book, /books/business-book, /books/leadership-book
- Specific FAQ: Can one book serve both individual clients and corporate buyers?
- Blueprint label: Get the Career Coach's Book Blueprint (free)

**Course Creators** (Service Providers)
- H1: How Does a Course Creator Turn a Course Into a Book (and Why Would You)?
- Mirror cue: modules, worksheets, the launch calendar, students who finish lesson three and disappear.
- Pains: "My course already covers this; a book would cannibalize it." / "Courses are interactive; a book is flat." / "I'd have to rewrite everything."
- Book types: /books/nonfiction-book, /books/business-book, /books/self-help-book
- Specific FAQ: Does a book compete with my course or feed it?
- Blueprint label: Get the Course Creator's Book Blueprint (free)

**First Responders & Military Veterans** (Service Providers; persona P1 with P2 sensitivity: no urgency or pressure language on this page, dignity rules apply)
- H1: How Does a First Responder or Veteran Write a Book That Serves the Next Person in Uniform?
- Mirror cue: the shift that never fully ends, stories you tell only to people who were there, lessons that could shorten someone else's hard road.
- Pains: "Some of what I know, I'm not sure I should write down." / "I'm not a writer; I'm the person who shows up." / "Civilians won't understand, and my own people will judge."
- Book types: /books/memoir, /books/leadership-book, /books/legacy-book
- Specific FAQ: How do I write about hard experiences without reliving them alone?
- Blueprint label: Get the Responder's Book Blueprint (free)

**Done when.** Twelve new pages exist at the exact slugs above, each 1,200 to 1,800 words, each with one H1, a sub-100-word answer block, an obstacle map, an EPIC section, a placeholder proof block with the disclaimer link, three book-type links, an FAQ with schema, and the CTA band; none contains an em dash, a banned word, or an invented fact.

---

## Change 4 (B11): One canonical home per profession, with cross-links

**Why.** Some professions fit two markets. Duplicate pages would split search authority and confuse AI engines about which page to cite.

**Rules.**

1. Every profession has exactly one URL and appears in exactly one nav column, one footer column, one quiz option, and one Blueprint dropdown option. Never list the same page under two headings.
2. Where a profession plausibly belongs to a second market, add one cross-link sentence inside the page body (in the identity mirror or just after the obstacle map), pointing to the closest page in the other lane. Required cross-links in this round:
   - /for/therapists → /for/family-counselors ("Working mostly with couples and families? See the family counselor's page.")
   - /for/family-counselors → /for/therapists (already specified in Change 3b)
   - /for/coaches → /for/relationship-and-marriage-coaches and /for/career-coaches ("Coaching relationships or careers specifically? Those pages go deeper.")
   - /for/consultants → /for/ceos-and-founders ("Writing as a founder rather than an advisor? Start with the CEO's page.")
   - /for/speakers → /for/course-creators ("Turning talks into a course as well as a book? See the course creator's page.")
3. Cross-links are plain in-body links, one sentence each. No "related pages" grids that repeat the nav.

**Done when.** No profession appears twice in nav, footer, quiz, or form; the five cross-link pairs above are live and resolve.

---

## Change 5 (B12): Update every place the profession list appears

**Why.** The grouping lives in seven places. They must change together or the site feels stitched.

**Update all of the following to the five-column grouping and 28-profession list from Change 3:**

1. **Nav dropdown ("For Experts").** Five columns in order: Health, Wealth, Relationships, Leadership & Career, Service Providers. Keep the "See all" link to /for. On mobile, the hamburger tree shows the same five groups as collapsible sections.
2. **/for index page.** Regroup into five sections with the same headings, in the same order. Each profession gets one paragraph and a link down, as it does now. Add one paragraph for each of the 12 new pages. Update the page's meta description to name the five groups: "Pick your world: health, wealth, relationships, leadership and career, or service. Each path is built around your real calendar and voice."
3. **Homepage "Built for experts like you" grid.** Show the grid grouped or ordered so the first cards are Health, then Wealth, then Relationships. Cards to show (16 total to keep the grid tidy): Doctors, Nurses, Therapists, Health Coaches, Financial Advisors, CEOs & Founders, Coaches, Real Estate Professionals, Relationship & Marriage Coaches, Parenting Experts, Family Counselors, IT Leaders, HR Leaders, Lawyers, Consultants, Speakers. Keep the final card: "Don't see your field? The path still fits. Start here" → /start.
4. **Footer "For Experts" columns.** Five sub-headings matching the nav, every one of the 28 pages listed, in nav order.
5. **Quiz question 3 on /start ("What's your field?").** Group the options under the five headings in order, list all 28 professions, keep "Something else" last. The result routing continues to send the visitor to the matching guide; no routing logic changes are required for this round.
6. **Blueprint form dropdown ("What best describes you?")** on the homepage and /free-blueprint. Use optgroups with the five headings in order; list all 28 professions; keep "Something else" last. Keep the field name `profession`.
7. **CRM segment tags.** Wherever the form payload builds `segmentTag` or `profession`, ensure each new profession has a stable tag value (use the slug, for example `relationship-and-marriage-coaches`). Add a `group` value (health, wealth, relationships, leadership-and-career, service-providers) to the payload so leads can be segmented by market as well as profession.

**Also:** add the 12 new URLs and the five group names to llms.txt under the site structure section. The sitemap regenerates automatically on build; confirm the 12 new URLs appear in it.

**Done when.** All seven surfaces show the identical grouping and identical 28 names; the form payload includes profession slug and group; llms.txt and the sitemap include the new pages.

---

## Change 6 (B13, amended): Reorganize "Your Book" into three hubs

**Why.** Founder decision: book types are presented as three types. The ten existing book-type pages keep their URLs and sit beneath the hubs; they carry the search rankings and must not be renamed, merged, or removed.

**The three hubs.** Create three new pages at exactly these slugs.

| Hub page | Hub H1 | Existing pages beneath it (unchanged URLs) |
|---|---|---|
| /books/brand-and-business | Which Business Book Should You Write to Position Yourself? | /books/business-book, /books/leadership-book, /books/nonfiction-book, /books/self-help-book, /books/health-and-wellness-book |
| /books/love-and-legacy | Which Book Should You Write to Preserve a Story That Matters? | /books/memoir, /books/legacy-book, /books/faith-based-book |
| /books/other | Writing a Novel or a Children's Book? Here Is How the Path Changes. | /books/childrens-book, /books/novel |

Do not add any other book types to any hub. No "coming soon" entries, no extra cards.

**Nav labels.** The dropdown stays titled "Your Book." Its three columns are headed exactly: "Brand & Business Books," "Love & Legacy Books," "Others." Each heading links to its hub page. Beneath each heading, list the pages in the table above, in that order. Keep "See all" → /books.

**Hub page skeleton (all three):**

1. Eyebrow: the hub name in small caps.
2. H1 from the table.
3. Direct answer block, under 100 words, given below.
4. One short section per book type beneath the hub (H2 is the book type name as a link), two or three sentences each. Reuse the existing one-line description already shown on /books for each type as the first sentence, then add one or two sentences on who writes it and what it does for them. Link to the page.
5. Proof block: `[TESTIMONIAL: pending permission]` plus the two canonical results with the disclaimer link.
6. A short "Not sure which is yours?" block linking to /guides/which-book-first and /start.
7. FAQ (three questions) with FAQPage schema, given below.
8. CTA band: "Book a Free Book Strategy Call" and "Get the Expert Book Blueprint (free)."

**Direct answer blocks (use as written):**

Brand & Business Books: "A brand or business book earns its keep when it positions you before it informs anyone. Whether it is a business book, a leadership book, a self-help book, a health and wellness guide, or general nonfiction, the process is the same: one reader, one promise, decided before a chapter exists. Most experts move from positioning to a published book in 6 to 12 months while running a full practice, and keep 100% of their rights and royalties. The type you choose changes the structure. It does not change the sequence."

Love & Legacy Books: "A love or legacy book is written to keep something that matters: a life, a lesson, a faith, a family's story. Memoirs, legacy books, and faith-based books share one rule: separate what happened from how it is told, so the book stays true and the people in it stay safe. Your deadline is real (an age, an anniversary, a promise), and the path is built around it, not around ours. You keep 100% of your rights and royalties, and every word is yours before it ships."

Others: "Novels and children's books follow a different path from expert nonfiction, and the differences matter. A novel gets finished by breaking the write-rewrite loop with real developmental deadlines. A children's book gets written short, then built with an illustrator, not drawn by you. Both are published under your name with 100% of your rights and royalties. These are the two lanes we serve outside expert nonfiction; the rest of this site is built for experts, and these pages show where the path bends."

**Hub FAQs (three each):**

Brand & Business Books: How is a business book different from a leadership book? / Do I need an original framework? / How long does an expertise book take from idea to published?

Love & Legacy Books: How do I write about real people without hurting them? / Is it too late to write my story? (answer for late-life authors; GBP has published authors at 76 and 85, which is an approved fact) / Can a memoir also build my professional authority?

Others: Do you publish fiction? / How does a children's book get illustrated? / Can I publish under a pen name? (`[NEEDS CONFIRMATION: pen name policy]` in the answer if not known)

**Update these surfaces to the three-hub structure:**

1. Nav "Your Book" dropdown (as above).
2. /books index page: three sections with the three headings, each heading linking to its hub, each card beneath as it is now. Update the meta description: "Brand and business books, love and legacy books, and everything else: the path differs by book type. Find yours."
3. Footer "Your Book" column: three sub-headings with the same members.
4. Quiz question 2 on /start ("What kind of book is it?"): group the ten options under the three headings in order; keep "Not sure yet" last. Add a `bookGroup` value (brand-and-business, love-and-legacy, other) to the quiz result and to any payload the quiz passes to the booking page.
5. Breadcrumbs on the ten existing book-type pages: insert the hub as the middle crumb (Home › Brand & Business Books › Business Book), in both the visible trail and the BreadcrumbList schema.
6. llms.txt: add the three hub URLs and note the grouping.

**Done when.** Three hub pages resolve; the nav, /books, footer, and quiz all show the same three groups with the same members and nothing extra; the ten existing book-type URLs are unchanged and return 200; breadcrumbs on those ten pages include the hub.

---

## Change 7 (F35): Restack the Before/After table on mobile

**Why.** On phones (375px wide) the two-column transformation table scrolls sideways and hides the right column, which carries the payoff. This is the homepage's strongest empathy device and it is used on service pages too.

**Where.** The BeforeAfterTable component (homepage section "The same expertise. A different weight." and every service page that uses it).

**Change.** Keep the semantic `<table>` markup so AI parsers still read it as a table. Below 768px, restyle so each row becomes a stacked card: the "Your expertise today" cell on top in muted text, a thin gold rule, then the "Your expertise as a book" cell below in the highlighted style. Column labels appear inside each card via a `data-label` attribute on each cell rendered with a `::before` pseudo-element, so the reader always knows which line is which. Remove the horizontal overflow wrapper at mobile widths.

Reference CSS (adapt to Tailwind or the component's existing styling; tokens are from the brand system):

```css
@media (max-width: 767px) {
  .before-after thead { display: none; }
  .before-after tr {
    display: block;
    border: 1px solid var(--navy-600);
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .before-after td {
    display: block;
    padding: 0.5rem 0;
  }
  .before-after td::before {
    content: attr(data-label);
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--slate-500);
    margin-bottom: 0.25rem;
  }
  .before-after td:first-child {
    border-bottom: 1px solid var(--gold-300);
    margin-bottom: 0.5rem;
    color: #F5F1E8;
    opacity: 0.85;
  }
  .before-after td:last-child {
    color: var(--gold-300);
    font-weight: 600;
  }
}
```

Set `data-label="Your expertise today"` on every first cell and `data-label="Your expertise as a book"` on every second cell. On the navy background the muted text must still meet WCAG AA contrast; check the pair and adjust opacity if it fails.

**Done when.** At 375px and 414px widths the section has no horizontal scrolling, every row shows both lines fully, and the labels read correctly; at 1024px and above the table is unchanged from today.

---

## Change 8: Shorten the TEDx proof label to "9X TEDx"

**Why.** Founder decision. The proof strip currently reads "9X TEDx (Ash, solo)" and the qualifier is dropped.

**Where.** Search the repo for `Ash, solo` and `Ash solo` and `(Ash` to find every instance. Known locations: the homepage trust bar, the /about statistics block, and the /trust founder verifiability section. Check llms.txt and any shared proof or entity data file too.

**Change.** Replace every "9X TEDx (Ash, solo)" and any variant such as "9X TEDx speaker (solo)" or "Ash solo is a 9X TEDx speaker" with "9X TEDx" in proof strips and stat tiles, and with "9X TEDx speaker" in running prose and schema descriptions. Do not change the count (9X). Do not touch the separate founders-section line about their combined TEDx talks unless it also contains the word "solo."

**Done when.** A site-wide search for "solo" returns no results tied to TEDx; the trust bar reads "700+ authors · 21 countries · 9X TEDx · 1M+ students taught."

---

## Change 9: Replace "Milton, Ontario" with "Austin, Texas" everywhere

**Why.** Founder decision. The company's public location on this site changes to Austin, Texas.

**Where.** Search the repo, case-insensitive, for `Milton`, `Ontario`, and `addressLocality`. Known locations: the footer entity line on every page ("Global Book Publishing (GBP), founded 2019. Milton, Ontario."), the /about page, the /contact page location line, the /trust page, the Organization JSON-LD in the base layout, llms.txt, and any entity or site-config data file that feeds those.

**Change.**

1. Every visible "Milton, Ontario" becomes "Austin, Texas." Every "Milton, Ontario, Canada" becomes "Austin, Texas, USA."
2. Organization JSON-LD address becomes: `"addressLocality": "Austin", "addressRegion": "TX", "addressCountry": "US"`. If a street address field exists, leave it as `[NEEDS CONFIRMATION: street address]` rather than inventing one.
3. Footer entity line on every page reads: "Global Book Publishing (GBP), founded 2019. Austin, Texas."
4. llms.txt entity facts updated to match.
5. Any copy that refers to the company as Canadian, or to Ontario or Canada as its home, is rewritten to Austin, Texas. Leave untouched any reference to the 21 countries served.

**Note for the agent and for Ash:** the project's brand-context knowledge file (01-GBP-Brand-Context.md) still lists Milton, Ontario, Canada in the entity block. Update that file to Austin, Texas in the same pass so future copy pulls the right location. Consistent entity facts across every page and every source file is what AI engines reward.

**Done when.** A site-wide search for "Milton" and "Ontario" returns zero results; the JSON-LD address, footer, About, Contact, Trust, and llms.txt all say Austin, Texas.

---

## QA checklist (run before finishing)

1. Search all rendered output for the em dash character (U+2014). Expected count: 0.
2. Search all rendered output, case-insensitive, for: unlock, unleash, elevat, delve, seamless, supercharge, streamlin, revolution, groundbreaking, skyrocket, game chang, next level, say goodbye, secret weapon, struggling to, dive in, demystif. Expected count: 0.
3. Search for `split with the publisher`. Expected: only in the Traditional publishing column of the comparison table, nowhere else.
4. Confirm the old group names "Business & Tech" and "Law & Service" appear nowhere.
5. Confirm all 28 profession URLs and all 13 book URLs (10 types plus 3 hubs) return 200 and appear in the sitemap.
6. Confirm every new page has exactly one H1, an answer block under 100 words, FAQPage schema, BreadcrumbList schema, and the disclaimer link beside any results.
7. Confirm no page contains a testimonial, statistic, price, or client name that is not in the proof bank; anything uncertain is marked `[NEEDS CONFIRMATION: ...]`.
8. Load the homepage at 375px: no horizontal scroll anywhere on the page; the Before/After section shows stacked cards.
9. Submit the Blueprint form in a test environment and confirm the payload includes `profession` (slug) and `group`.
10. Run a Lighthouse pass on the homepage, one new profession page, and one hub page; fix any accessibility errors introduced.
11. Search all rendered output for "Milton," "Ontario," and "solo." Expected count: 0 for each. Confirm the Organization JSON-LD says Austin, TX, US.

Report back with: the list of files changed, the count of new pages created, any `[NEEDS CONFIRMATION]` markers you added and where, and the results of checks 1 through 10.
