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
    headingHref: "/for#health",
    description: "Doctors, nurses, therapists, and health coaches turning expertise into a book.",
    icon: '<path d="M12 21s-7-4.5-9-9.5C1.5 7 4.5 4 8 4c2 0 3.2 1 4 2 .8-1 2-2 4-2 3.5 0 6.5 3 5 7.5-2 5-9 9.5-9 9.5z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    items: [
      { label: "Doctors", href: "/for/doctors", icon: '<path d="M7 3v4a3 3 0 0 0 6 0V3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M10 7v2a6 6 0 0 0 12 0V7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/><circle cx="21.5" cy="7.5" r="1.8" stroke="currentColor" stroke-width="1.6"/>' },
      { label: "Nurses", href: "/for/nurses", icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' },
      { label: "Therapists", href: "/for/therapists", icon: '<path d="M4 5h16v10H9l-4 4v-4H4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M12 8.5c1-1.5 3.5-1 3.5 1 0 1.7-3.5 3-3.5 3s-3.5-1.3-3.5-3c0-2 2.5-2.5 3.5-1z" fill="currentColor"/>' },
      { label: "Dentists", href: "/for/dentists", icon: '<path d="M8 4c1 0 1.5 1 2 1s1-1 2-1 1.5 1 2 1c2 0 3.5 2 3 4.5-.3 1.5-1 2-1.3 3.7-.3 1.8-.5 4.8-1.7 4.8-1 0-1.2-2.7-2-4-.5-.8-1.3-.8-1.8 0-.8 1.3-1 4-2 4-1.2 0-1.4-3-1.7-4.8C6.2 12 5.5 11.5 5.2 10 4.7 7.5 6 5 8 4z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>' },
      { label: "Health Coaches", href: "/for/health-coaches", icon: '<path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M6 18c3-5 7-9 12-12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' },
      { label: "Fitness & Nutrition Coaches", href: "/for/fitness-and-nutrition-coaches", icon: '<path d="M4 10v4M2 9v6M20 10v4M22 9v6M7 12h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="5" y="8" width="3" height="8" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="16" y="8" width="3" height="8" rx="1" stroke="currentColor" stroke-width="1.6"/>' },
      { label: "Holistic & Wellness Practitioners", href: "/for/holistic-and-wellness-practitioners", icon: '<circle cx="12" cy="14" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v3M12 8c-3 1-5 3-5 6M12 8c3 1 5 3 5 6M5 14H2M22 14h-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' },
    ],
  },
  {
    heading: "Wealth",
    headingHref: "/for#wealth",
    description: "Advisors, founders, and coaches building authority through a book.",
    icon: '<path d="M3 20h18M6 16v-6M11 16V6M16 16v-4M20 16V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    items: [
      { label: "Financial Advisors", href: "/for/financial-advisors", icon: '<path d="M3 20l6-7 4 4 8-9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M17 8h4v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' },
      { label: "CEOs & Founders", href: "/for/ceos-and-founders", icon: '<rect x="3" y="8" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.6"/>' },
      { label: "Coaches", href: "/for/coaches", icon: '<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="1" fill="currentColor"/>' },
      { label: "Real Estate Professionals", href: "/for/real-estate-professionals", icon: '<path d="M4 11l8-7 8 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M6 10v9h12v-9" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>' },
      { label: "Accountants & Tax Professionals", href: "/for/accountants-and-tax-professionals", icon: '<rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 7h8M8 11h2M12 11h2M16 11h2M8 15h2M12 15h2M16 15h2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' },
      { label: "Sales Leaders", href: "/for/sales-leaders", icon: '<path d="M3 10v4h3l6 4V6l-6 4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M15 9a3 3 0 0 1 0 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' },
      { label: "Mortgage & Insurance Professionals", href: "/for/mortgage-and-insurance-professionals", icon: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' },
    ],
  },
  {
    heading: "Relationships",
    headingHref: "/for#relationships",
    description: "Coaches and counselors who help people at home and in relationships.",
    icon: '<circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="16" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 14.3c.6-.2 1.3-.3 2-.3 3.3 0 6 2.7 6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    items: [
      { label: "Relationship & Marriage Coaches", href: "/for/relationship-and-marriage-coaches", icon: '<circle cx="9" cy="12" r="5" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="15" cy="12" r="5" stroke="currentColor" stroke-width="1.6" fill="none"/>' },
      { label: "Parenting Experts", href: "/for/parenting-experts", icon: '<circle cx="8" cy="6" r="2.2" stroke="currentColor" stroke-width="1.6"/><path d="M4 19c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/><circle cx="17" cy="10" r="1.6" stroke="currentColor" stroke-width="1.4"/><path d="M14 19c0-2.2 1.4-3.8 3-3.8s3 1.6 3 3.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/>' },
      { label: "Family Counselors", href: "/for/family-counselors", icon: '<path d="M4 11l8-7 8 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M6 10v9h12v-9" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M12 13.5c.8-1 2.5-.7 2.5.7 0 1.2-2.5 2.1-2.5 2.1s-2.5-.9-2.5-2.1c0-1.4 1.7-1.7 2.5-.7z" fill="currentColor"/>' },
      { label: "Dating Coaches", href: "/for/dating-coaches", icon: '<path d="M12 20s-6.5-4-8.5-8C1.8 9 3.5 5.5 7 5.5c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.5 0 5.2 3.5 3.5 6.5C18.5 16 12 20 12 20z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/>' },
    ],
  },
  {
    heading: "Leadership & Career",
    headingHref: "/for#leadership-and-career",
    description: "Executives and leaders documenting what they know.",
    icon: '<rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    items: [
      { label: "IT Leaders", href: "/for/it-leaders", icon: '<rect x="4" y="5" width="16" height="11" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M2 19h20M9 9l-2 2 2 2M15 9l2 2-2 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' },
      { label: "HR Leaders", href: "/for/hr-leaders", icon: '<circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="9" r="2.4" stroke="currentColor" stroke-width="1.4"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15 19c0-2.5 1.6-4.3 4-4.3s4 1.8 4 4.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/>' },
      { label: "Retired Executives", href: "/for/retired-executives", icon: '<circle cx="12" cy="9" r="5" stroke="currentColor" stroke-width="1.6"/><path d="M9 13.5L7 21l5-2.5L17 21l-2-7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
      { label: "Career Coaches", href: "/for/career-coaches", icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M15.5 8.5l-2 5-5 2 2-5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>' },
    ],
  },
  {
    heading: "Service Providers",
    headingHref: "/for#service-providers",
    description: "Lawyers, consultants, and speakers who sell expertise for a living.",
    icon: '<path d="M12 3l8 4-8 4-8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    items: [
      { label: "Lawyers", href: "/for/lawyers", icon: '<path d="M12 3v18M7 7L4 13a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
      { label: "Educators", href: "/for/educators", icon: '<path d="M12 5L2 9l10 4 10-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M6 11v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/>' },
      { label: "Consultants", href: "/for/consultants", icon: '<path d="M2 12l4-4 4 3 4-3 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M6 11l3 3M18 11l-3 3M10 14l2 2 2-2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/>' },
      { label: "Speakers", href: "/for/speakers", icon: '<rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/>' },
      { label: "Course Creators", href: "/for/course-creators", icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor"/>' },
      { label: "First Responders & Military Veterans", href: "/for/first-responders-and-veterans", icon: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M12 8.5l1 2 2.2.3-1.6 1.5.4 2.2-2-1.1-2 1.1.4-2.2-1.6-1.5 2.2-.3z" fill="currentColor"/>' },
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
      { label: "Business Book", href: "/books/business-book", icon: '<rect x="3" y="8" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' },
      { label: "Leadership Book", href: "/books/leadership-book", icon: '<path d="M3 20l6-10 4 5 3-4 5 9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/><path d="M13 4v6M13 4l4 2-4 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>' },
      { label: "Nonfiction Book", href: "/books/nonfiction-book", icon: '<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/><path d="M12 6v13" stroke="currentColor" stroke-width="1.3"/>' },
      { label: "Self-Help Book", href: "/books/self-help-book", icon: '<path d="M9 18h6M10 21h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1 .9 1.7v.4h5.2v-.4c0-.7.3-1.2.9-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/>' },
      { label: "Health & Wellness Book", href: "/books/health-and-wellness-book", icon: '<path d="M3 12h4l2-6 4 12 2-6h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    ],
  },
  {
    heading: "Love & Legacy Books",
    headingHref: "/books/love-and-legacy",
    description: "Memoirs and legacy books written for family and history.",
    icon: '<path d="M12 20s-7-4.2-7-9.5C5 7.5 7 5.5 9.5 5.5c1.2 0 2 .5 2.5 1.3.5-.8 1.3-1.3 2.5-1.3 2.5 0 4.5 2 4.5 5C19 15.8 12 20 12 20z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>',
    items: [
      { label: "Memoir", href: "/books/memoir", icon: '<rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="10" r="2" stroke="currentColor" stroke-width="1.4"/><path d="M4 17l5-5 4 4 3-3 4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
      { label: "Legacy Book", href: "/books/legacy-book", icon: '<circle cx="12" cy="4" r="2" stroke="currentColor" stroke-width="1.4"/><circle cx="6" cy="12" r="2" stroke="currentColor" stroke-width="1.4"/><circle cx="18" cy="12" r="2" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="20" r="2" stroke="currentColor" stroke-width="1.4"/><path d="M12 6v3M12 9L6 10M12 9l6 1M6 14l6 4M18 14l-6 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' },
      { label: "Faith-Based Book", href: "/books/faith-based-book", icon: '<path d="M12 3v13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 8c0-2.5 4-2.5 4-5 0 2.5 4 2.5 4 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M7 21c0-3 2.2-5 5-5s5 2 5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/>' },
    ],
  },
  {
    heading: "Others",
    headingHref: "/books/other",
    description: "Children's books and novels, for authors outside nonfiction.",
    icon: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    items: [
      { label: "Children's Book", href: "/books/childrens-book", icon: '<path d="M12 3l2.4 5.5 6 .6-4.5 4 1.3 5.9L12 16l-5.2 3 1.3-5.9-4.5-4 6-.6z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/>' },
      { label: "Novel", href: "/books/novel", icon: '<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
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
    label: "Book Relaunch",
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
    icon: '<rect x="3" y="4" width="8" height="16" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="13" y="4" width="8" height="16" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6 9h2M6 12h2M16 9h2M16 12h2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>',
  },
  {
    label: "Hybrid Publisher vs. Vanity Press",
    href: "/compare/hybrid-publisher-vs-vanity-press",
    description: "How to tell the difference before you sign.",
    icon: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
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
  { label: "For Experts", groups: professionGroups, indexHref: "/for", seeAllLabel: "See all professions" },
  { label: "Your Book", groups: bookTypeGroups, indexHref: "/books", seeAllLabel: "See all book types" },
  { label: "Services", links: serviceLinks, indexHref: "/services", seeAllLabel: "See all services" },
  { label: "Resources", links: resourceLinks },
  { label: "About", href: "/about" },
];
