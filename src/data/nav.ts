/**
 * Central navigation + sitemap data (brief section 5; regrouped per
 * writeexpertbook-change-spec-round-1.md, Changes 3/5/6).
 * Header dropdowns, the footer sitemap columns, and the homepage audience
 * router all read from these lists so the site's link structure only has
 * to be declared once.
 */

export type NavLink = { label: string; href: string };
export type NavGroup = { heading: string; headingHref?: string; items: NavLink[] };

/**
 * Five markets, in this order (change-spec Change 3/B10, amended).
 * Existing pages keep their URLs and moved columns; twelve pages are new
 * this round. Order within each column: existing pages first (in the
 * order they appeared before), then new pages, per the spec's table.
 */
export const professionGroups: NavGroup[] = [
  {
    heading: "Health",
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
    items: [
      { label: "Relationship & Marriage Coaches", href: "/for/relationship-and-marriage-coaches" },
      { label: "Parenting Experts", href: "/for/parenting-experts" },
      { label: "Family Counselors", href: "/for/family-counselors" },
      { label: "Dating Coaches", href: "/for/dating-coaches" },
    ],
  },
  {
    heading: "Leadership & Career",
    items: [
      { label: "IT Leaders", href: "/for/it-leaders" },
      { label: "HR Leaders", href: "/for/hr-leaders" },
      { label: "Retired Executives", href: "/for/retired-executives" },
      { label: "Career Coaches", href: "/for/career-coaches" },
    ],
  },
  {
    heading: "Service Providers",
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
    items: [
      { label: "Memoir", href: "/books/memoir" },
      { label: "Legacy Book", href: "/books/legacy-book" },
      { label: "Faith-Based Book", href: "/books/faith-based-book" },
    ],
  },
  {
    heading: "Others",
    headingHref: "/books/other",
    items: [
      { label: "Children's Book", href: "/books/childrens-book" },
      { label: "Novel", href: "/books/novel" },
    ],
  },
];

// Full list — used by the header's "Services" dropdown. The footer uses the
// shortlist below (just the four "doors" featured on the homepage itself).
export const serviceLinks: NavLink[] = [
  { label: "Book Writing", href: "/services/book-writing" },
  { label: "Book Publishing", href: "/services/book-publishing" },
  { label: "Book Marketing", href: "/services/book-marketing" },
  { label: "Book Relaunch (Book Rescue)", href: "/services/book-relaunch" },
  { label: "Author Brand & Speaking", href: "/services/author-brand-and-speaking" },
  { label: "Audiobook", href: "/services/audiobook" },
];

export const footerServiceLinks: NavLink[] = serviceLinks.filter(
  (l) => !["Author Brand & Speaking", "Audiobook"].includes(l.label)
);

// Full list — used by the header's "Resources" dropdown, which has room for
// all of it. The footer has much less room, so it uses the shortlist below.
export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "/guides" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Partnership vs. Self-Publishing", href: "/compare/partnership-vs-self-publishing" },
  { label: "Partnership vs. Traditional Publishing", href: "/compare/partnership-vs-traditional-publishing" },
  { label: "Hybrid Publisher vs. Vanity Press", href: "/compare/hybrid-publisher-vs-vanity-press" },
  { label: "Pricing & Cost", href: "/pricing-and-cost" },
  { label: "FAQ", href: "/faq" },
  { label: "Newsletter", href: "/newsletter" },
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
