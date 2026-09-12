/**
 * Central navigation + sitemap data (brief section 5).
 * Header dropdowns, the footer sitemap columns, and the homepage audience
 * router all read from these lists so the site's link structure only has
 * to be declared once.
 */

export type NavLink = { label: string; href: string };

export const professionGroups: { heading: string; items: NavLink[] }[] = [
  {
    heading: "Health",
    items: [
      { label: "Doctors", href: "/for/doctors" },
      { label: "Nurses", href: "/for/nurses" },
      { label: "Therapists", href: "/for/therapists" },
      { label: "Dentists", href: "/for/dentists" },
      { label: "Health Coaches", href: "/for/health-coaches" },
    ],
  },
  {
    heading: "Business & Tech",
    items: [
      { label: "CEOs & Founders", href: "/for/ceos-and-founders" },
      { label: "Consultants", href: "/for/consultants" },
      { label: "Coaches", href: "/for/coaches" },
      { label: "IT Leaders", href: "/for/it-leaders" },
      { label: "Financial Advisors", href: "/for/financial-advisors" },
      { label: "Real Estate Professionals", href: "/for/real-estate-professionals" },
      { label: "HR Leaders", href: "/for/hr-leaders" },
    ],
  },
  {
    heading: "Law & Service",
    items: [
      { label: "Lawyers", href: "/for/lawyers" },
      { label: "Speakers", href: "/for/speakers" },
      { label: "Educators", href: "/for/educators" },
      { label: "Retired Executives", href: "/for/retired-executives" },
    ],
  },
];

export const bookTypeGroups: { heading: string; items: NavLink[] }[] = [
  {
    heading: "Expertise Books",
    items: [
      { label: "Business Book", href: "/books/business-book" },
      { label: "Leadership Book", href: "/books/leadership-book" },
      { label: "Nonfiction Book", href: "/books/nonfiction-book" },
      { label: "Self-Help Book", href: "/books/self-help-book" },
      { label: "Health & Wellness Book", href: "/books/health-and-wellness-book" },
    ],
  },
  {
    heading: "Story Books",
    items: [
      { label: "Memoir", href: "/books/memoir" },
      { label: "Legacy Book", href: "/books/legacy-book" },
      { label: "Faith-Based Book", href: "/books/faith-based-book" },
      { label: "Children's Book", href: "/books/childrens-book" },
      { label: "Novel", href: "/books/novel" },
    ],
  },
];

export const serviceLinks: NavLink[] = [
  { label: "Book Writing", href: "/services/book-writing" },
  { label: "Book Publishing", href: "/services/book-publishing" },
  { label: "Book Marketing", href: "/services/book-marketing" },
  { label: "Book Relaunch (Book Rescue)", href: "/services/book-relaunch" },
  { label: "Author Brand & Speaking", href: "/services/author-brand-and-speaking" },
  { label: "Audiobook", href: "/services/audiobook" },
];

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

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Trust", href: "/trust" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Start Here", href: "/start" },
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
