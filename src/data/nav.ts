/**
 * Central navigation + sitemap data (brief section 5; regrouped per
 * writeexpertbook-change-spec-round-1.md, Changes 3/5/6).
 * Header dropdowns, the footer sitemap columns, and the homepage audience
 * router all read from these lists so the site's link structure only has
 * to be declared once.
 */

/**
 * `description` and `icon` are optional so existing footer/router callers
 * that only need label+href keep working untouched; the header mega menu
 * is the one place that reads them. `icon` is a single-weight 24x24 SVG
 * path/shape string (BRAND.md: "single-weight line icons in navy-600,
 * gold on hover, no emoji in UI"), not a full <svg> tag.
 */
export type NavLink = { label: string; href: string; description?: string; icon?: string };
export type NavGroup = { heading: string; headingHref?: string; description?: string; icon?: string; items: NavLink[] };

/**
 * Five markets, in this order (change-spec Change 3/B10, amended).
 * Existing pages keep their URLs and moved columns; twelve pages are new
 * this round. Order within each column: existing pages first (in the
 * order they appeared before), then new pages, per the spec's table.
 */
export const professionGroups: NavGroup[] = [
  {
    heading: "Health",
    description: "Doctors, nurses, therapists, and health coaches turning expertise into a book.",
    icon: '<path d="M12 21s-7-4.5-9-9.5C1.5 7 4.5 4 8 4c2 0 3.2 1 4 2 .8-1 2-2 4-2 3.5 0 6.5 3 5 7.5-2 5-9 9.5-9 9.5z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    items: [
      { label: "Doctors", href: "/for/doctors" },
      { label: "Nurses", href: "/for/nurses" },
      { label: "Therapists", href: "/for/therapists" },
      { label: "Dentists", href: "/for/dentists" },
      { label: "Health Coaches", href: "/for/health-coaches" },
      { label: "Fitness & Nutrition Coaches", href: "/for/fitness-and-nutrition-coaches" },
      { label: "Holistic & Wellness Practitioners", href: "/for/holistic-and-wellness-practitioners" },
    ],
  },
  {
    heading: "Wealth",
    description: "Advisors, founders, and coaches building authority through a book.",
    icon: '<path d="M3 20h18M6 16v-6M11 16V6M16 16v-4M20 16V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    items: [
      { label: "Financial Advisors", href: "/for/financial-advisors" },
      { label: "CEOs & Founders", href: "/for/ceos-and-founders" },
      { label: "Coaches", href: "/for/coaches" },
      { label: "Real Estate Professionals", href: "/for/real-estate-professionals" },
      { label: "Accountants & Tax Professionals", href: "/for/accountants-and-tax-professionals" },
      { label: "Sales Leaders", href: "/for/sales-leaders" },
      { label: "Mortgage & Insurance Professionals", href: "/for/mortgage-and-insurance-professionals" },
    ],
  },
  {
    heading: "Relationships",
    description: "Coaches and counselors who help people at home and in relationships.",
    icon: '<circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="16" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 14.3c.6-.2 1.3-.3 2-.3 3.3 0 6 2.7 6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    items: [
      { label: "Relationship & Marriage Coaches", href: "/for/relationship-and-marriage-coaches" },
      { label: "Parenting Experts", href: "/for/parenting-experts" },
      { label: "Family Counselors", href: "/for/family-counselors" },
      { label: "Dating Coaches", href: "/for/dating-coaches" },
    ],
  },
  {
    heading: "Leadership & Career",
    description: "Executives and leaders documenting what they know.",
    icon: '<rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    items: [
      { label: "IT Leaders", href: "/for/it-leaders" },
      { label: "HR Leaders", href: "/for/hr-leaders" },
      { label: "Retired Executives", href: "/for/retired-executives" },
      { label: "Career Coaches", href: "/for/career-coaches" },
    ],
  },
  {
    heading: "Service Providers",
    description: "Lawyers, consultants, and speakers who sell expertise for a living.",
    icon: '<path d="M12 3l8 4-8 4-8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    items: [
      { label: "Lawyers", href: "/for/lawyers" },
      { label: "Educators", href: "/for/educators" },
      { label: "Consultants", href: "/for/consultants" },
      { label: "Speakers", href: "/for/speakers" },
      { label: "Course Creators", href: "/for/course-creators" },
      { label: "First Responders & Military Veterans", href: "/for/first-responders-and-veterans" },
    ],
  },
];

/** Group key (matches the `professions` collection's `category` field) per heading, in nav order. */
export const professionGroupKeys = [
  "health",
  "wealth",
  "relationships",
  "leadership-and-career",
  "service-providers",
] as const;

/**
 * Three hubs, in this order (change-spec Change 6/B13, amended). The ten
 * existing book-type pages keep their URLs and sit beneath their hub;
 * each hub heading links to its own new hub page.
 */
export const bookTypeGroups: NavGroup[] = [
  {
    heading: "Brand & Business Books",
    headingHref: "/books/brand-and-business",
    description: "Books that build authority: business, leadership, and self-help.",
    icon: '<rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    items: [
      { label: "Business Book", href: "/books/business-book" },
      { label: "Leadership Book", href: "/books/leadership-book" },
      { label: "Nonfiction Book", href: "/books/nonfiction-book" },
      { label: "Self-Help Book", href: "/books/self-help-book" },
      { label: "Health & Wellness Book", href: "/books/health-and-wellness-book" },
    ],
  },
  {
    heading: "Love & Legacy Books",
    headingHref: "/books/love-and-legacy",
    description: "Memoirs and legacy books written for family and history.",
    icon: '<path d="M12 20s-7-4.2-7-9.5C5 7.5 7 5.5 9.5 5.5c1.2 0 2 .5 2.5 1.3.5-.8 1.3-1.3 2.5-1.3 2.5 0 4.5 2 4.5 5C19 15.8 12 20 12 20z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>',
    items: [
      { label: "Memoir", href: "/books/memoir" },
      { label: "Legacy Book", href: "/books/legacy-book" },
      { label: "Faith-Based Book", href: "/books/faith-based-book" },
    ],
  },
  {
    heading: "Others",
    headingHref: "/books/other",
    description: "Children's books and novels, for authors outside nonfiction.",
    icon: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    items: [
      { label: "Children's Book", href: "/books/childrens-book" },
      { label: "Novel", href: "/books/novel" },
    ],
  },
];

// Full list — used by the header's "Services" dropdown. The footer uses the
// shortlist below (just the four "doors" featured on the homepage itself).
export const serviceLinks: NavLink[] = [
  {
    label: "Book Writing",
    href: "/services/book-writing",
    description: "From blank page or half-draft to a finished manuscript.",
    icon: '<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Book Publishing",
    href: "/services/book-publishing",
    description: "The partnership model: you keep 100% of the rights.",
    icon: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Book Marketing",
    href: "/services/book-marketing",
    description: "Launch and relaunch systems that sell the book.",
    icon: '<path d="M3 10v4h3l5 4V6L6 10z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  },
  {
    label: "Book Relaunch (Book Rescue)",
    href: "/services/book-relaunch",
    description: "Already published but not selling? We fix that.",
    icon: '<path d="M3.5 13.5a8.5 8.5 0 1 0 2.3-6.2M3.5 4v4h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Author Brand & Speaking",
    href: "/services/author-brand-and-speaking",
    description: "Turn the book into stages, media, and referrals.",
    icon: '<path d="M9 6a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  },
  {
    label: "Audiobook",
    href: "/services/audiobook",
    description: "Produce and distribute the audio edition.",
    icon: '<path d="M4 13v-2a8 8 0 0 1 16 0v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="2" y="13" width="5" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="17" y="13" width="5" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/>',
  },
];

export const footerServiceLinks: NavLink[] = serviceLinks.filter(
  (l) => !["Author Brand & Speaking", "Audiobook"].includes(l.label)
);

// Full list — used by the header's "Resources" dropdown, which has room for
// all of it. The footer has much less room, so it uses the shortlist below.
export const resourceLinks: NavLink[] = [
  {
    label: "Blog",
    href: "/blog",
    description: "Practical answers to the questions experts ask us.",
    icon: '<rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  },
  {
    label: "Guides",
    href: "/guides",
    description: "Longer, structured guides on writing and publishing.",
    icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M15 9l-2 6-6 2 2-6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Real authors, real results, start to finish.",
    icon: '<path d="M4 19V5M4 19h16M8 19v-6M12 19v-9M16 19v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    label: "Partnership vs. Self-Publishing",
    href: "/compare/partnership-vs-self-publishing",
    description: "The honest comparison, side by side.",
    icon: '<path d="M12 3v18M7 7L4 13a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Partnership vs. Traditional Publishing",
    href: "/compare/partnership-vs-traditional-publishing",
    description: "What changes when a publisher says yes.",
    icon: '<path d="M12 3v18M7 7L4 13a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Hybrid Publisher vs. Vanity Press",
    href: "/compare/hybrid-publisher-vs-vanity-press",
    description: "How to tell the difference before you sign.",
    icon: '<path d="M12 3v18M7 7L4 13a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Pricing & Cost",
    href: "/pricing-and-cost",
    description: "What publishing with us actually costs.",
    icon: '<path d="M9 4h6l5 8-8 8-8-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>',
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Straight answers to the questions we hear most.",
    icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M9.5 9a2.5 2.5 0 0 1 4.6 1.4c0 1.6-2.1 1.8-2.1 3.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="17" r="0.9" fill="currentColor"/>',
  },
  {
    label: "Newsletter",
    href: "/newsletter",
    description: "Publishing insight, sent occasionally, never spammy.",
    icon: '<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  },
];

// Footer-only shortlist: Partnership vs. Traditional Publishing, Hybrid
// Publisher vs. Vanity Press, FAQ, and Newsletter are dropped here to keep
// this column from running to 15 links. Those pages stay live and linked
// elsewhere (header Resources dropdown, sitemap, inline content) — this
// list just isn't their only path.
export const footerResourceLinks: NavLink[] = resourceLinks.filter(
  (l) => !["Partnership vs. Traditional Publishing", "Hybrid Publisher vs. Vanity Press", "FAQ", "Newsletter"].includes(l.label)
);

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Trust", href: "/trust" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Start Here", href: "/start" },
  { label: "FAQ", href: "/faq" },
  { label: "Newsletter", href: "/newsletter" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const primaryNav = [
  { label: "For Experts", groups: professionGroups, indexHref: "/for" },
  { label: "Your Book", groups: bookTypeGroups, indexHref: "/books" },
  { label: "Services", links: serviceLinks, indexHref: "/services" },
  { label: "Resources", links: resourceLinks },
  { label: "About", href: "/about" },
];
