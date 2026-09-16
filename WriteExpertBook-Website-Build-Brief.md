# WriteExpertBook.com: Complete Website Build Brief

**Purpose of this document:** feed it to Claude Code and build the entire site from it. It contains the brand system, audience intelligence, full sitemap, page templates, homepage copy, blog architecture, SEO and AI-discovery specs, conversion system, writing rules, and build order. Everything a builder needs is in this one file.

**The one-line brief:** WriteExpertBook.com turns accomplished professionals (doctors, lawyers, IT leaders, CEOs, coaches, consultants) into published authors, and turns their books into authority, clients, and stages. It is the intent-matched funnel site of Global Book Publishing (GBP): people searching "how to write an expert book" land here, get real answers, and convert into consultation bookings, lead magnet downloads, service purchases, newsletter subscribers, and direct contacts.

**Site conversion goals, in priority order:**
1. Booked consultation calls (primary; every page routes here)
2. Lead magnet downloads (email capture, segmented by profession and book type)
3. Service purchases and program applications
4. Newsletter subscriptions ("The Expert Book Letter")
5. Direct contact (form, email, chat)

---

## 1. BRAND, POSITIONING, AND NON-NEGOTIABLE RULES

### 1.1 Who we are (use consistently on every page; AI engines reward identical entity facts everywhere)

Global Book Publishing (GBP) is a partnership (hybrid) publisher founded in 2019 by Susmita "Sush" Dutta and Ash Goel. It turns experts, entrepreneurs, coaches, and consultants into published authors, then helps them turn the book into trust, authority, and income. Authors keep 100% of control, royalties, rights, and reach. Method: the EPIC Publishing Path. Positioning line: traditional publishing gives you reach but takes your rights; self-publishing gives you rights but no reach; partnership publishing is the third way.

**Canonical proof bank (use these exactly; never invent past them):**
- 700+ authors across 21 countries
- Founders are USA Today and Wall Street Journal bestselling authors
- 5X TEDx speakers jointly; Ash is also a 9X TEDx speaker
- 1M+ students taught
- Sold 1,000+ books for one client in 5 days
- Took a stalled author from 15 sales in 15 months to international bestseller in 60 days

**Compliance rules (hard):**
- No income promises anywhere. Any revenue example carries the honest line: "These are our results and our clients' results, not a promise of yours."
- The only guarantee ever referenced is the defined program guarantee within its stated scope; never write "guaranteed bestseller" as a general claim.
- No invented testimonials, names, numbers, or reviews. Testimonial slots ship with clearly marked placeholders (`[TESTIMONIAL: pending permission]`) until real permissioned quotes are supplied.
- Urgency is required on every offer page, and it must be verifiable: countdown timers wired to real cohort start dates, enrollment windows, and dated price or bonus expirations. GBP runs live cohorts and challenges, so a real deadline always exists to count down to. Value stacks are itemized from real standalone prices actually charged somewhere. What stays out: timers not tied to a real date, evergreen timers that reset per visitor, and invented spot counts. This audience checks BBB and Trustpilot by name; a screenshot of a timer that resets would cost more sales than the timer wins, and invented scarcity invites regulatory trouble in both the US and Canada.

### 1.2 Voice (every word on the site follows this)

A smart friend who teaches, proves it with numbers, and believes in you. Warm, direct, story-driven, plain-spoken. The reader is the hero; we are the guide. Validate the fear first, then reframe with facts. 8th grade reading level. Short paragraphs, mostly 1 to 3 sentences. Numbers over adjectives.

**Banned forever (words and patterns):** em dashes (use commas, colons, parentheses); unlock, unleash, elevate, delve, seamless, supercharge, streamline, revolutionize, revolutionary, groundbreaking, skyrocket, game changer, game-changing, next level, say goodbye to, secret weapon, struggling to, let's dive in, demystify, and their cousins. Also banned: "In today's fast-paced world" openers, triple-parallel sentence stacks ("It's not X. It's not Y. It's Z."), and rhetorical question chains.

**Humanizing patterns (apply to all copy and blog content):**
- Vary sentence length hard: a 4-word sentence after a 25-word one.
- Use the audience's literal phrases (they are pre-tested): "People always tell me I should write a book." "Where do I even start?" "I finished the book, now what?" "The book opens the door." "From 'I will write one day' to 'I am writing now.'"
- One concrete detail beats three abstractions: "a 76-year-old nurse with 53 years at the bedside" beats "experienced healthcare professionals".
- Write like someone who has read 1,400 author applications, because the copy source material comes from exactly that.
- Contractions are welcome. Perfection is not the voice; precision is.

---

## 2. COLOR SYSTEM, TYPOGRAPHY, AND VISUAL LANGUAGE

### 2.1 Palette (built around the brand identity colors)

Core brand:
- `--navy-900: #081F33` (Primary, Deep Navy): headers, footer, hero background, primary text on light
- `--navy-700: #102B4E` (Secondary): section backgrounds, cards on dark, gradients from navy-900
- `--gold-300: #FFD98A` (Tertiary, Gold): primary CTA buttons, highlights, icons, active states

Extended system (derived, stays in family):
- `--navy-800: #0C2540` (gradient midpoint between the two navies)
- `--navy-600: #1B3A66` (hover states on dark, borders on navy)
- `--navy-100: #E8EEF5` (light section background, alternating bands)
- `--ivory-50: #FBF7EF` (warm page background; softer than pure white, book-paper feel)
- `--white: #FFFFFF` (cards on ivory)
- `--gold-500: #E6B85C` (CTA hover, borders, underlines; deeper gold for contrast)
- `--gold-100: #FFF3D9` (subtle highlight background, callout boxes)
- `--ink-900: #12212F` (body text on light backgrounds)
- `--slate-500: #5A6B7E` (secondary text, captions)
- `--success-600: #2E7D5B` (form success, checkmarks; used sparingly)
- `--error-600: #B4452F` (form errors only)

**Usage rules:**
- Dark sections (navy-900/700) alternate with light sections (ivory-50/navy-100) down every page; never two dark sections adjacent.
- Gold is scarce on purpose: CTAs, one highlight word per hero, icons, section eyebrows. If gold covers more than ~5% of a viewport, remove some.
- Text on navy-900 is `#F5F1E8` (warm off-white), never pure white (harsh) and never gold for body text.
- Accessibility: body text pairs must meet WCAG AA (4.5:1). `#FFD98A` on `#081F33` passes for large text and buttons; do not set small body text in gold on navy. `#12212F` on `#FBF7EF` passes comfortably. Verify all pairs at build time.

### 2.2 Typography

- Headings: a bookish serif with authority. First choice "Source Serif 4"; fallback "Georgia, serif". Tight leading, generous size (H1 clamp 2.4rem to 4rem).
- Body and UI: "Inter" or system stack (`-apple-system, Segoe UI, Roboto, sans-serif`), 1.125rem body, 1.7 line height.
- Numbers in proof rows: serif, oversized, gold on navy.
- Never more than two font families.

### 2.3 Visual language

- Motif: the book as a door. Use a recurring door/spine visual device (thin gold vertical rule opening into content) rather than stock photos of typewriters.
- Real photography of Sush and Ash and (with permission) real authors; no generic stock businesspeople. Until real photos exist, use navy illustrated placeholders, clearly marked.
- Cards: white on ivory, 1px `--navy-100` border, 12px radius, soft shadow only on hover.
- Icons: single-weight line icons in navy-600, gold on hover. No emoji in UI.
- Every page ends with the same navy "final door" CTA band so the site feels like one system.

---

## 3. AUDIENCE INTELLIGENCE (from GBP's real customer data)

This section compresses GBP's voice-of-customer analysis: 134 paid authors (exact records), roughly 1,400 prospects, and about 544 webinar registrants. The site is built for these people, in their own language. Do not invent personas beyond these; they are evidence, not guesses.

### 3.1 The five master personas

**P1. The Expert With a Locked Door** (primary buyer of this site)
Doctors, lawyers, executives, IT leaders, consultants, coaches. Decades of expertise, no book, or a manuscript and no idea what comes after. Pains: organizing 20 to 40 years of knowledge into a structure, marketing after the manuscript, positioning against thousands of other books, protecting their voice from editors. Aspirations: authority, speaking stages, clients, a body of work, "the book opens the door" to courses, consulting, and keynotes. Fears: wasting a serious investment, a book that sells 15 copies, sounding like everyone else. Buying language: engineered book, positioning, ecosystem, 100% rights and royalties. Price tolerance: highest.

**P2. The Wounded Healer**
Survivors of adversity who want their story to shorten someone else's suffering. About 4 in 10 GBP buyers. Pains: structure of a lived story, emotional exposure, family privacy, reliving hard chapters. Aspirations: impact on strangers, holding the finished book, dignity. Never pressure this persona; safety is part of the product.

**P3. The Legacy Keeper**
Late-career and late-life authors (GBP has buyers at 76 and 85), bereaved authors honoring someone, grandparents writing for grandchildren. Pains: technology, perspective choice, "is it too late". Aspirations: permanence. Their deadline is real (an age, an anniversary); reference their date, never a cart timer.

**P4. The Lifelong Storyteller**
Novelists and fiction writers, often agent-rejected after years of querying. Pains: the write-rewrite loop (one buyer spent a decade in it), gatekeepers, "will anyone like it". Aspirations: readers, series, creative control. This site serves them through the nonfiction-adjacent pages and a single fiction landing page; the main lanes stay expert-focused.

**P5. The Believer on Assignment**
Faith-driven authors; the book is a calling, sometimes decades overdue. No manufactured urgency, ever. Respectful mirror of their own language: steward the story, the assignment.

### 3.2 The journey stages (route every visitor by these)

- **Idea only ("Where do I even start?")**: about 27% of prospects. Needs the map.
- **Stuck mid-draft (the biggest group, about 42%)**: needs structure, accountability, and a finish line.
- **Manuscript in hand (about 13%, and rising among buyers)**: needs positioning, editing, publishing, launch. Fastest to revenue; route straight to a call.
- **Published but not selling**: proven finishers with an empty theater. One published author described it exactly: "a musician playing to an empty theater." Route to Book Rescue.
- **Too many ideas ("Which book first?")**: prolific professionals frozen by the choice. Route to the First Book Decision resources.

### 3.3 The objections the site must dissolve (ranked by evidence)

1. "My book won't be good enough or won't sell" (the #1 buyer fear). Answer: engineered positioning plus launch system, with the 60-day rescue story and 1,000-books-in-5-days proof.
2. "Can I afford it / is this worth it" (the #1 stated prospect question). Answer: publish honest cost information (a real cost guide page), payment plans stated plainly, and the reframe that a book done wrong costs the same money twice.
3. "I don't have time." Answer: the system does the heavy lifting; structured extraction fits a real calendar.
4. "Is this a scam?" (1 in 6 buyers felt this and bought anyway). Answer: a public trust page: contract highlights in plain language, BBB and Trustpilot links, the vanity-press warning, founder verifiability.
5. "Will editors flatten my voice?" Answer: the named Voice Preservation promise: we edit with you, not over you; your coined language is your IP.
6. "Who am I to write a book?" Answer: proof that ordinary, self-doubting professionals produced books that worked; the founders' own first-book stumbles.

---

## 4. WHAT WE TOOK FROM THE COMPETITOR SNAPSHOTS (AND WHAT WE REFUSED)

Analyzed: dentalghlsnapshot.com, ghlcarmechanicsnapshot.com, lawyerghlsnapshot.com, mortgageghlsnapshot.com, creditrepairsnapshotforghl.com, petgroomingsnapshotforghl.com. All six share one high-converting skeleton.

**Adopted patterns:**
1. **Audience dropdown in the top nav** ("Practice Areas" / "For" / "Industries"): ours is "For Experts" with profession pages, plus a "Your Book" dropdown for book types. This is the single most important structural steal: segment-specific pages that make every visitor feel personally addressed.
2. **Before/After transformation table** on the homepage and every service page (their strongest empathy device). Ours contrasts "Your expertise today" vs "Your expertise as a book".
3. **Three-path comparison table** (DIY vs agency vs them). Ours: Self-publishing alone vs Traditional publishing vs Partnership publishing, honest columns, no strawmen.
4. **Numbered end-to-end journey visualization** (their 6-stage automation flow). Ours: the EPIC Publishing Path shown as a 4-stage visual on the homepage and expanded on service pages.
5. **Guarantee/risk-reversal block placed immediately before pricing/CTA**, stated within its real scope.
6. **FAQ accordion near the foot of every page** (doubles as AEO food with FAQPage schema).
7. **Persistent dual CTA** in header and hero: primary "Book a Free Book Strategy Call", secondary lead magnet.
8. **Footer as a second sitemap**: every profession, book type, and service linked; competitor footers repeat all conversion paths.
9. **Live-feel proof elements**: they use activity tickers; our honest version is a rotating strip of real, permissioned author milestones ("Maria's memoir hit #1 in its category", only when true and approved).
10. **Value clarity**: they itemize what's included. Our service pages list deliverables explicitly; vagueness is where trust dies for our scam-wary audience.

**Adapted patterns (we use their decisive-action machinery, wired to real events):**
- Countdown timers: yes, on every offer page and the announcement bar, always counting to a REAL date: the next challenge cohort, an enrollment close, a dated bonus expiration. GBP's cohort model means a true deadline always exists; use it hard. Never an evergreen timer that resets per visitor, never an invented spot count. Real seats-remaining numbers may be shown when the cohort truly caps.
- Value-stack anchor math: yes, itemized the way the snapshots do it, but every line item is a real standalone price GBP actually charges (audiobook production, launch campaign, editing tiers). The stack persuades because it is checkable.
- Deadline-driven pricing: dated launch pricing and bonus windows are encouraged; the date is real and passes.

**Refused patterns (two only):**
- Autoplaying chat widgets that interrupt reading. (A quiet "Questions? Talk to a real person" link instead; a human-labeled chat may come later.)
- Discount-gated email capture modals on entry. Exit-intent may offer the lead magnet once, politely.

---

## 5. FULL SITEMAP

Every URL is lowercase, hyphenated, no dates in slugs. Depth never exceeds 2 levels. Breadcrumbs on everything below the homepage.

### 5.1 Top navigation

`[Logo: WriteExpertBook]  For Experts ▾ | Your Book ▾ | Services ▾ | Resources ▾ | About  ...  [Get the Free Blueprint] [Book a Strategy Call]`

Mobile: hamburger with the same tree; the two CTAs stay visible in a sticky bottom bar.

### 5.2 The pages

**Home**
- `/`: the conversion hub (full blueprint in section 6)

**For Experts (profession pages; the "Practice Areas" equivalent). Dropdown grouped in three columns:**
- Health: `/for/doctors`, `/for/nurses`, `/for/therapists`, `/for/dentists`, `/for/health-coaches`
- Business & tech: `/for/ceos-and-founders`, `/for/consultants`, `/for/coaches`, `/for/it-leaders`, `/for/financial-advisors`, `/for/real-estate-professionals`, `/for/hr-leaders`
- Law & service: `/for/lawyers`, `/for/speakers`, `/for/educators`, `/for/retired-executives`
- Index page: `/for/` (lists all, one paragraph each, links down)

**Your Book (book-type pages; grouped in two columns):**
- Expertise books: `/books/business-book`, `/books/leadership-book`, `/books/nonfiction-book`, `/books/self-help-book`, `/books/health-and-wellness-book`
- Story books: `/books/memoir`, `/books/legacy-book`, `/books/faith-based-book`, `/books/childrens-book`, `/books/novel`
- Index page: `/books/`

**Services:**
- `/services/book-writing` (done-with-you writing and full ghostwriting)
- `/services/book-publishing` (the partnership publishing core offer)
- `/services/book-marketing` (launch system, quarterly launches)
- `/services/book-relaunch` (Book Rescue: published but not selling)
- `/services/author-brand-and-speaking` (book to stages, media, ecosystem)
- `/services/audiobook`
- Index page: `/services/`

**Start Here (journey-stage router, linked from hero and nav footer):**
- `/start`: the quiz/router page: four questions, routes to the right lane
- `/guides/where-to-start` , `/guides/finish-your-book` , `/guides/manuscript-ready-now-what` , `/guides/book-not-selling` , `/guides/which-book-first`

**Resources:**
- `/blog` (articles; architecture in section 8)
- `/guides` (long-form pillar guides, gated and ungated)
- `/case-studies` (author stories; only real, permissioned ones; placeholders until then)
- `/compare/partnership-vs-self-publishing` , `/compare/partnership-vs-traditional-publishing` , `/compare/hybrid-publisher-vs-vanity-press`
- `/pricing-and-cost` (the honest cost guide; answers the #1 question instead of hiding it)
- `/faq`
- `/newsletter` (The Expert Book Letter signup)

**Trust and contact:**
- `/about` (Sush and Ash, the founding story, the 700+ authors, credentials)
- `/trust` ("Check us before you trust us": contract highlights, BBB/Trustpilot links, vanity-press warning, rights policy)
- `/reviews` (aggregated third-party reviews, linked to their sources)
- `/book-a-call` (booking page with embedded calendar)
- `/contact`
- `/free-blueprint` (primary lead magnet landing page)
- Legal: `/privacy`, `/terms`, `/disclaimer` (income disclaimer lives here and is linked wherever results appear)

**Utility:** `/thank-you/call-booked`, `/thank-you/blueprint`, `/thank-you/newsletter` (each thank-you page immediately offers the next step up the ladder), custom 404 that routes to `/start`.

### 5.3 Page template: profession page (`/for/*`)

Every profession page follows this exact skeleton (roughly 1,200 to 1,800 words), written for one reader:

1. **H1 as their question:** "How Does a [Doctor] Write and Publish a Book (Without Quitting the Clinic)?"
2. **Direct answer block, under 100 words**, quotable by AI engines: what the path is, how long it takes, what it requires from them.
3. **Identity mirror** (2 to 3 sentences in their world's vocabulary; for doctors: charts, patients, CME, the 2 a.m. pager).
4. **The obstacle map**: their top 3 to 4 pains with validate-then-reframe answers.
5. **What your book does for a [doctor]**: authority, referrals, speaking, the door it opens; profession-specific outcomes.
6. **The path** (EPIC stages, framed for their calendar).
7. **Proof block**: permissioned story from the closest available author (placeholder until approved).
8. **Book types [doctors] write**: 3 links into `/books/*`.
9. **FAQ (4 to 6 questions)** with FAQPage schema: cost, time commitment, voice preservation, "am I too specialized".
10. **CTA band**: strategy call + the profession-matched lead magnet variant.

### 5.4 Page template: book-type page (`/books/*`)

Same skeleton, keyed to the book type: H1 question ("How Do You Write a Memoir Without Hurting the People In It?"), direct answer, who writes this type, its specific pains (from the data: structure for memoir, positioning for business books, illustration for children's), the process differences, proof, related professions, FAQ, CTA.

### 5.5 Page template: service page (`/services/*`)

1. H1 outcome promise, 2. direct answer block, 3. who it's for / not for (honest fit filter), 4. exactly what's included (itemized deliverables list; the anti-vagueness rule), 5. the process with timeline, 6. before/after table, 7. proof, 8. investment section: honest range, payment plans stated, link to `/pricing-and-cost`, worthiness reframe beside every price mention, 9. guarantee within scope, 10. FAQ, 11. CTA band.

---

## 6. HOMEPAGE BLUEPRINT (section by section, with the copy)

Alternating navy and ivory bands. Copy below is ready to ship; placeholders are marked. One idea per section. Every section is skimmable in 5 seconds and rewarding in 30.

### Section 0: Announcement bar (gold-100, slim, sitewide)

When a cohort or enrollment window is live: `Next author cohort opens [date]. Enrollment closes [date]. → Save your call slot` with a countdown to the real close date. The bar hides automatically when no dated event is live; it never shows a timer without a true date behind it.

### Section 1: Hero (navy-900, gold accents)

Eyebrow (gold, small caps): `FOR PROFESSIONALS WITH A BOOK INSIDE THEM`

H1: `People keep telling you to write a book. Here's how experts actually do it.`

Subhead: `We help doctors, lawyers, executives, and consultants write, publish, and launch the book that opens doors: clients, stages, and authority. You keep 100% of your rights and royalties. We carry the process.`

Primary CTA (gold button): `Book a Free Book Strategy Call`
Secondary CTA (outlined): `Get the Expert Book Blueprint (free)`
Micro-trust line under CTAs: `700+ authors across 21 countries · Founded by USA Today and Wall Street Journal bestselling authors`

Visual: a book opening like a door, gold light through the gap. No stock desks.

### Section 2: Trust bar (navy-700, thin band)

Four serif numbers in gold: `700+ authors` · `21 countries` · `9X TEDx` · `1M+ students taught`

### Section 3: The empathy block (ivory-50)

H2: `You're not short on expertise. You're short on a path.`

Body: `Most experts sit on a book for years. Some for decades. One of our authors first thought about hers in high school and waited 51 years. The problem was never talent or material. It was the same three walls everyone hits: how to structure decades of knowledge, how to find the time, and what happens after the manuscript. This site exists to take down all three.`

Three cards (each links to its guide):
- `"Where do I even start?" → The map` (links `/guides/where-to-start`)
- `"I keep rewriting chapter three." → The finish line` (links `/guides/finish-your-book`)
- `"I finished the book. Now what?" → The launch` (links `/guides/manuscript-ready-now-what`)

### Section 4: Audience router (navy-100)

H2: `Built for experts like you`
Intro line: `Pick your world. The advice changes when the reader is you.`

Grid of profession cards (icon + title + one line), linking to `/for/*`: Doctors · Lawyers · CEOs & Founders · IT Leaders · Consultants · Coaches · Nurses · Therapists · Financial Advisors · Speakers · Educators · Retired Executives. Final card: `Don't see your field? The path still fits. → Start here`

### Section 5: The path (ivory-50)

H2: `The EPIC Publishing Path: from expertise to a book that works`
Four numbered stages, horizontal on desktop:
1. `Engineer`: `Positioning first. The right book, the right reader, the right promise, decided before a word is written.`
2. `Produce`: `Structured extraction and professional editing that keeps your voice. We edit with you, not over you.`
3. `Ignite`: `Publishing done right: your name, your rights, your royalties, everywhere books are sold.`
4. `Compound`: `A launch system, then quarterly pushes. Because a book isn't an event. It's an asset.`

CTA under path: `See how it works on a call →`

### Section 6: Before/After (navy-900)

H2 (off-white): `The same expertise. A different weight.`
Two-column table:

| Your expertise today | Your expertise as a book |
|---|---|
| Explained one client at a time | Working while you sleep, everywhere at once |
| "Trust me, I've done this for 20 years" | A book on the table that proves it before you speak |
| Competing on credentials like everyone else | The only one in the room who wrote the book on it |
| Ideas scattered across talks, notes, and decks | One organized body of work with your name on the spine |
| Waiting to be invited on stages | The speaker one-sheet that gets you invited |

### Section 7: Honest comparison (ivory-50)

H2: `Three ways to publish. One honest table.`
Columns: Self-publishing alone · Traditional publishing · Partnership publishing (highlighted, gold border). Rows: Who owns your rights · Who keeps royalties · Who does the work · Speed · Marketing support · Upfront cost (honest: partnership requires real investment; say so). Link: `Read the full comparison →` (`/compare/partnership-vs-self-publishing`)

### Section 8: Services overview (navy-100)

H2: `Three doors, one team`
Three cards: `Book Writing` (from blank page or half-draft to manuscript, in your voice) · `Book Publishing` (the partnership model, 100% yours) · `Book Marketing` (launch and relaunch systems). Fourth slim card: `Already published but not selling? → Book Rescue`

### Section 9: Proof (ivory-50)

H2: `Authors who walked this path`
Three testimonial cards `[TESTIMONIAL: pending permission]` + one canonical results strip: `From 15 sales in 15 months to international bestseller in 60 days · 1,000+ books sold for one client in 5 days` with the honest results line in small text beneath, linked to `/disclaimer`.

### Section 10: Founders (navy-700)

H2: `The people behind 700+ books`
Photo left, copy right: `Sush Dutta and Ash Goel built Global Book Publishing in 2019 after learning the industry's lessons the hard way with their own first books. Between them: USA Today and Wall Street Journal bestsellers, 14 TEDx talks, and over a million students taught. They read every application personally, because the next author on this page might be you.` CTA: `Meet the founders →` (`/about`)

### Section 11: Lead magnet (gold-100 band; the only warm section)

H2: `Not ready to talk? Take the Blueprint.`
Body: `The Expert Book Blueprint is a free, plain-English guide: how professionals structure a book around a full calendar, what publishing actually costs, and the three decisions to make before you write a word.`
Form: first name + email + one dropdown ("What best describes you?" with the profession list; this segments every future email). Button: `Send me the Blueprint`. Privacy line: `No spam. Unsubscribe anytime.`

### Section 12: FAQ (ivory-50, accordion, FAQPage schema)

Six questions: How much does it cost to publish with a partner publisher? · How long does it take? · Do I keep my rights and royalties? · I'm not a writer. Can this still work? · Will editing change my voice? · How do I know you're not a vanity press?
Each answer is 3 to 5 sentences, direct, honest, with a link deeper. The vanity-press answer links to `/trust` and includes the line: `If anyone offers to publish your book without involving you, run.`

### Section 13: Final door (navy-900)

H1-sized closer: `Your book has waited long enough.`
Body: `One call. A real read on your idea, your positioning, and your path, whether or not we work together.`
Gold CTA: `Book a Free Book Strategy Call`
Quiet secondary: `Or start with the free Blueprint`

Footer (navy-900, five columns: brand + For Experts (all professions) · Your Book (all types) · Services & Resources · Company (About, Trust, Reviews, Contact, Newsletter, Legal). Bottom line: entity block (GBP, founded 2019, Austin, Texas) + social links.

---

## 7. CONVERSION SYSTEM

**CTA hierarchy (never compete on one screen):**
1. `Book a Free Book Strategy Call` (gold, everywhere; routes to `/book-a-call` with embedded calendar; call framed as a verdict, not a pitch: "a real read on your idea")
2. Lead magnet (`/free-blueprint`, plus per-lane variants: the Doctor's Book Blueprint, the Memoir Safety Guide, the Book Rescue Checklist; same base asset, swapped cover and intro, same form)
3. Newsletter (footer + blog sidebar: `The Expert Book Letter: one useful idea about authorship, weekly.`)
4. Contact (`Talk to a real person` link in nav footer and service pages)

**Forms:** never more than 4 fields. Every form has one segmentation question (profession or journey stage) that tags the CRM. Inline validation, human error messages ("We'll need a real email to send it to").

**The `/start` router quiz (high-leverage):** four questions: Where is your book today? (idea / half-written / manuscript done / published) · What kind of book? · What's your field? · When does this need to exist by, and why? (free text; real deadlines surface here). Result page routes to the matching guide + lane CTA, and the answers prefill the strategy call booking. This mirrors the intake data GBP already uses to segment buyers.

**Booking flow:** `/book-a-call` explains what happens on the call (three bullets), shows Sush and Ash by name and photo, embeds the calendar, and asks the router questions if not already answered. `/thank-you/call-booked` confirms, sets expectations, and offers the Blueprint while they wait.

**Measurement:** every CTA carries a data attribute (`data-cta="hero-call"`, etc.). Track: call bookings by source page, blueprint downloads by segment, quiz completion rate, scroll depth on money pages. Add "How did you hear about us?" with an "an AI recommended you" option on the booking form: it is how AEO wins become visible.

---

## 8. BLOG AND ARTICLE ARCHITECTURE (the SEO/AEO engine)

**Structure:** `/blog` index with filters by profession, book type, and stage. Every article belongs to exactly one cluster and links up to its pillar.

**The cluster model:**
- Pillar guides (2,500+ words, ungated, at `/guides/*`): one per journey stage and one per major lane. Pillars are the pages AI engines should cite.
- Cluster articles (900 to 1,500 words, at `/blog/*`): each answers ONE question a real prospect asked. Source the questions from actual intake language before any keyword tool.

**Article template (identical every time):**
1. H1 = the question, phrased how a person asks it.
2. The direct answer in the first 100 words, self-contained, no throat-clearing. This is the AEO payload.
3. The nuance: 3 to 5 H2s, each an askable sub-question.
4. One honest example or data point from our own analysis ("in our intake data, nearly half of authors waited years or decades before starting"): original statistics earn citations.
5. A short FAQ (2 to 3 items, FAQPage schema).
6. One contextual CTA matched to the reader's stage. Never three CTAs.
7. Author byline: Ash Goel or Sush Dutta with credentials and Person schema; AI engines weigh who wrote it.

**30 starter articles (write in this order; each maps to a cluster):**
1. How much does it cost to publish a book with a hybrid publisher? (cost cluster; the #1 asked question)
2. Hybrid publisher vs vanity press: 7 differences that protect you
3. How to write a book as a doctor without quitting medicine
4. Can a lawyer write a book without a bar complaint? Ethics and compliance basics
5. How long does it take to write and publish a nonfiction book?
6. I finished my manuscript. Now what? The 9 steps between draft and launch
7. How to structure a memoir when your life doesn't feel like a story arc
8. How to write a memoir without hurting your family
9. The write-rewrite loop: why smart people rewrite chapter 3 for a decade
10. Do authors keep royalties with hybrid publishers? The honest math
11. What is partnership publishing? (definition pillar feeder)
12. How CEOs use a book to open doors a pitch deck can't
13. Which book should I write first? A scoring method for people with too many ideas
14. Is 70 too old to publish a book? (late-life debut; real search behavior)
15. How to turn 25 years of expertise into a table of contents in one afternoon
16. Why most books sell fewer than 100 copies (and the launch math that changes it)
17. My book isn't selling: a relaunch checklist that doesn't require ads
18. Ghostwriter vs writing coach vs publisher: who does what
19. How consultants price consulting differently after a book
20. What does a book strategy call actually cover? (pre-call objection killer)
21. How to protect your voice when an editor touches your manuscript
22. Self-publishing on Amazon vs partnership publishing: an honest comparison
23. How therapists write about clients without breaking confidentiality
24. From book to keynote: how authors get their first paid talks
25. What is an "engineered bestseller"? The system behind the label
26. How IT leaders write technical books non-technical buyers actually read
27. Writing a faith-based book: stewardship, timing, and the assignment
28. The real deadline: publishing a book for an anniversary, a birthday, or a promise
29. How financial advisors stay compliant while writing a book
30. What people ask us before buying: the 9 questions, answered in public

**Cadence:** 2 articles weekly for the first 90 days (front-load the cost, comparison, and "now what" clusters), then 1 weekly. Refresh pillars quarterly and stamp the updated date.

**Internal linking rules:** every article links to exactly one pillar, one profession or book-type page, and one service or CTA page. Profession pages link down to their 3 best articles. No orphan pages, ever.

---

## 9. SEO AND AI-DISCOVERY (AEO) TECHNICAL SPEC

**Metadata patterns:**
- Title: `{Question or promise} | WriteExpertBook` (55 to 60 chars)
- Meta description: the direct answer compressed to 150 chars, first person plural, ends with the outcome.
- One H1 per page. H2s phrased as questions wherever natural.

**Schema (JSON-LD on every page):**
- `Organization` (GBP + WriteExpertBook as brand, founded 2019, address, sameAs links to socials, BBB, Trustpilot)
- `Person` for Ash Goel and Susmita Dutta (jobTitle, sameAs to TEDx and LinkedIn; bylines reference these)
- `FAQPage` on every page with an FAQ block
- `Article` + `BreadcrumbList` on blog/guides
- `Service` on service pages; `AggregateRating` ONLY if backed by real, sourced reviews

**Entity consistency:** one `entity.md` in the repo holds the canonical facts (founded 2019, 700+ authors, 21 countries, founder credentials). Every page pulls from it; inconsistent numbers across pages is the fastest way to lose AI-engine trust.

**AEO specifics:**
- Every commercial page opens with a quotable, self-contained answer under 100 words.
- Publish original data honestly ("across 1,400 author applications we analyzed...") because answer engines prefer citable primary sources.
- `llms.txt` at root: site purpose, key pages, entity facts.
- Clean semantic HTML (real `<table>`, `<ul>`, `<h2>`): AI parsers reward structure. No text baked into images.
- Monthly citation check: ask ChatGPT, Claude, Perplexity, and Google AI the 10 target questions; log which pages get cited; strengthen the losers.

**Performance and hygiene:** static generation, images in AVIF/WebP with width hints, fonts self-hosted and preloaded, Lighthouse 95+ on mobile, XML sitemap split by section, canonicals everywhere, 301 map maintained in repo.

---

## 10. BUILD INSTRUCTIONS FOR CLAUDE CODE

**Stack:** Astro (preferred for a content site: static, fast, MD-native) with Tailwind CSS; tokens above defined in the Tailwind theme. Alternative: Next.js static export. Content lives in Markdown/MDX collections: `professions/`, `books/`, `services/`, `guides/`, `blog/`, with one shared frontmatter schema (title, slug, persona, stage, faqs[], answerBlock).

**Component library to build first:** Header (nav + dropdowns + sticky CTAs) · Footer (sitemap columns + entity block) · HeroDoor · TrustBar · CardGrid (professions/books/services) · PathSteps (EPIC) · BeforeAfterTable · CompareTable · TestimonialCard (with pending-permission placeholder state) · LeadMagnetForm · FAQAccordion (emits FAQPage schema) · FinalDoorCTA · ArticleLayout · QuizRouter.

**Build order (phased, verify each phase before the next):**
1. Tokens, layout shell, Header/Footer, homepage complete with real copy above.
2. `/book-a-call`, `/free-blueprint`, thank-you pages, forms wired (provider-agnostic endpoint; env-configured).
3. Templates + 4 flagship profession pages (doctors, lawyers, ceos-and-founders, consultants) and 3 book types (business-book, memoir, nonfiction-book), full copy per the templates in section 5.
4. Service pages (writing, publishing, marketing, relaunch) + `/pricing-and-cost` + `/trust` + `/compare/*` + `/about` + `/faq`.
5. Remaining professions and book types (template-driven), `/start` quiz, blog engine + first 6 articles from the list.
6. Schema, llms.txt, sitemap, redirects, analytics events, accessibility pass (WCAG AA), Lighthouse pass.

**QA checklist before any deploy:** zero em dashes anywhere in rendered copy; zero banned words (grep the list in section 1.2); every number matches `entity.md`; every testimonial slot is either real-and-permissioned or visibly a placeholder; every page has exactly one primary CTA; income disclaimer linked wherever results appear; all color pairs pass contrast; mobile sticky CTA bar works; forms tested end to end.

**Copy generation rule for Claude Code:** when generating any page copy not fully written in this brief, follow section 1.2 voice rules, pull pains and phrasing from section 3, run the banned-word check, and prefer the audience's literal questions as headings. When a fact is needed that this brief does not contain, insert `[NEEDS CONFIRMATION: ...]` rather than inventing it.

---

## 11. EXAMPLE PAGE, FULLY WRITTEN: /for/doctors

Use this as the gold-standard reference for every profession page.

**H1:** How Does a Doctor Write and Publish a Book (Without Quitting Medicine)?

**Answer block:** A practicing physician can go from idea to published book in 6 to 12 months by working the process in this order: position the book first (one reader, one promise), extract the manuscript through structured sessions that fit clinic hours, then hand editing, publishing, and launch to a partnership team while keeping 100% of rights and royalties. The writing is not the hard part. The sequence is.

**Identity mirror:** You've explained the same thing at the bedside a thousand times, better than any pamphlet in the waiting room. Somewhere between rounds, charts, and the inbox that never sleeps, there's a book you've been meaning to write since residency. Your patients keep telling you to write it. So do we.

**Obstacle map (validate, then reframe):**
- *"I don't have time to write."* Correct, you don't, and the doctors on our roster didn't either. That's why the manuscript is extracted, not squeezed out: structured sessions, your talking, our system. One author, a nurse of 53 years, arrived with 25 years of knowledge and no way in; the structure was the cure.
- *"I know too much. I'll overwhelm the reader."* The most common physician pain we see. Your reader may be exhausted, scared, and looking for one answer at 2 a.m. The positioning stage decides what goes in the book, what becomes the course, and what stays in the clinic.
- *"Will this get me in trouble?"* Patient privacy, claims discipline, and scope-of-practice language are handled in editing by design. You review every word. Nothing ships that you wouldn't defend in front of a colleague.
- *"Editors will make me sound like everyone else."* Your voice survives editing here. We edit with you, not over you, and your teaching vocabulary stays yours.

**What the book does for a doctor:** referrals that arrive pre-sold, speaking invitations, media quotes, a practice brand beyond the insurance directory, and the door to courses and programs your license alone can't open. The book is rarely the income. It's the instrument.

**Proof block:** `[TESTIMONIAL: pending permission: physician/nurse author]` + canonical strip with disclaimer link.

**Books doctors write:** Health and wellness guides for patients (`/books/health-and-wellness-book`) · Practice-of-medicine memoirs (`/books/memoir`) · Leadership and systems books for healthcare (`/books/leadership-book`).

**FAQ:** How much does it cost? (honest range + link) · How many hours a month does it take? · Can I write about patients? · Do I keep the rights? · What if my specialty feels too narrow?

**CTA band:** Book a Free Book Strategy Call · Get the Doctor's Book Blueprint (free)

---

## 12. FINAL GUARDRAILS

1. Truth beats conversion, every time they conflict. This audience checks BBB and Trustpilot by name; the site's job is to survive that check proudly.
2. Nothing on this site pressures a person in hardship toward a high-ticket purchase. The Blueprint and the newsletter are always a dignified yes.
3. Urgency runs hot, and it is always real: cohort dates, enrollment windows, dated bonuses, plus the visitor's own deadlines (their age, their anniversary, their promise). A timer counts to a true date or it does not exist.
4. Every claim traces to the proof bank or ships as a marked placeholder.
5. The site speaks to one person at a time. When in doubt, reread the persona and write to Cheryl, to the lawyer with the half-manuscript, to the CEO whose deck can't say what a book can.

\