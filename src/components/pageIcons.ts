/**
 * Line icons for the index, hub, compare and pricing pages: the icons those
 * pages need that src/data/nav.ts doesn't already carry (a topic such as
 * "speed" or "upfront cost" isn't a nav item, so it has no icon there).
 *
 * Same convention as nav.ts: each value is the inner markup of a 24x24
 * single-weight line icon (BRAND.md: "single-weight line icons, no emoji in
 * UI"), not a full <svg> tag. Render with
 *   <svg viewBox="0 0 24 24" fill="none" set:html={pageIcons.clock} />
 */
const line = 'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const pageIcons = {
  /** rights, ownership, legitimacy */
  shield: `<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" ${line}/><path d="M9 12l2 2 4-4" ${line}/>`,
  /** who does the work */
  team: `<circle cx="9" cy="8" r="3" ${line}/><circle cx="17" cy="9" r="2.4" ${line}/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 14.6c2.8-.4 5 1.4 5 4.4" ${line}/>`,
  /** speed, timelines */
  clock: `<circle cx="12" cy="12" r="9" ${line}/><path d="M12 7v5l3.5 2" ${line}/>`,
  /** marketing and launch */
  megaphone: `<path d="M3 10v4h3l5 4V6L6 10z" ${line}/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12" ${line}/>`,
  /** cost, price */
  coin: `<circle cx="12" cy="12" r="9" ${line}/><path d="M14.6 9.3c-.4-.9-1.3-1.5-2.6-1.5-1.5 0-2.6.8-2.6 2 0 2.8 5.4 1.4 5.4 4.3 0 1.2-1.1 2.1-2.8 2.1-1.3 0-2.3-.6-2.7-1.6M12 6.2v1.6M12 16.2v1.6" ${line}/>`,
  /** acceptance, the way in */
  door: `<path d="M6.5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M4 21h16" ${line}/><circle cx="14.2" cy="12.5" r="1" fill="currentColor"/>`,
  /** a warning sign */
  flag: `<path d="M5 21V4M5 4.5h13l-2.6 4 2.6 4H5" ${line}/>`,
  /** review, approval */
  eye: `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" ${line}/><circle cx="12" cy="12" r="2.8" ${line}/>`,
  /** a bill that keeps growing */
  receipt: `<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" ${line}/><path d="M9 8h6M9 12h6" ${line}/>`,
  /** contracts, manuscripts */
  document: `<path d="M7 3h7l4 4v14H7z" ${line}/><path d="M14 3v4h4M10 12h5M10 16h5" ${line}/>`,
  /** pressure, urgency */
  bolt: `<path d="M13 3L5 14h6l-1 7 8-11h-6z" ${line}/>`,
  /** guarantees, bestseller claims */
  star: `<path d="M12 3l2.4 5.5 6 .6-4.5 4 1.3 5.9L12 16l-5.2 3 1.3-5.9-4.5-4 6-.6z" ${line}/>`,
  /** checking someone out */
  search: `<circle cx="11" cy="11" r="6.5" ${line}/><path d="M16 16l4.5 4.5" ${line}/>`,
  /** schedules, payment plans */
  calendar: `<rect x="3.5" y="5" width="17" height="15" rx="2" ${line}/><path d="M3.5 10h17M8 3v4M16 3v4" ${line}/>`,
  /** finding your way */
  compass: `<circle cx="12" cy="12" r="9" ${line}/><path d="M15 9l-2 6-6 2 2-6z" ${line}/>`,
  /** writing, editing */
  pen: `<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" ${line}/>`,
  /** going round in circles, starting again */
  loop: `<path d="M3.5 13.5a8.5 8.5 0 1 0 2.3-6.2M3.5 4v4h4" ${line}/>`,
  /** sales */
  chart: `<path d="M4 19V5M4 19h16M8 19v-6M12 19v-9M16 19v-4" ${line}/>`,
  /** several ideas stacked up */
  layers: `<path d="M12 3l8 4-8 4-8-4z" ${line}/><path d="M4 12l8 4 8-4M4 17l8 4 8-4" ${line}/>`,
  /** an idea */
  bulb: `<path d="M9 18h6M10 21h4" ${line}/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1 .9 1.7v.4h5.2v-.4c0-.7.3-1.2.9-1.7A6 6 0 0 0 12 3z" ${line}/>`,
  /** a conversation, writing help */
  chat: `<path d="M4 5h16v11H9l-5 4z" ${line}/><path d="M8.5 9.5h7M8.5 12.5h4" ${line}/>`,
  /** an open book: the fallback wherever an item has no icon of its own */
  book: `<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1z" ${line}/><path d="M12 6v13" ${line}/>`,
} as const;

export type PageIconName = keyof typeof pageIcons;
