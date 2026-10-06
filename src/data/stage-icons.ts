/**
 * One icon per stage of the EPIC Publishing Path (entity.method.stages),
 * keyed by stage key rather than index so they stay correct if the stages
 * are ever reordered. Shared by PathSteps and the hero's method card so the
 * two never show different icons for the same stage.
 *
 * Each is the inner markup of a 20x20 single-weight line icon (BRAND.md:
 * "single-weight line icons, no emoji in UI"), not a full <svg> tag:
 *   engineer  a target        positioning the book before a word is written
 *   produce   a pen           extraction, writing and editing
 *   ignite    a flame         publishing and launch
 *   compound  a rising line   the book keeps working after launch
 */
export const stageIcons: Record<string, string> = {
  engineer:
    '<circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="10" r="3.2" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="10" r="0.9" fill="currentColor"/>',
  produce:
    '<path d="M4 16l.7-3L13.5 4.2a1.4 1.4 0 0 1 2 0l.3.3a1.4 1.4 0 0 1 0 2L7 15.3 4 16z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 5.8l2.2 2.2" stroke="currentColor" stroke-width="1.4"/>',
  ignite:
    '<path d="M10 3c1.2 2.3 3.6 3.8 3.6 7a3.6 3.6 0 1 1-7.2 0c0-1 .3-1.8.8-2.6.3.7 1 1.2 1 1.2-.3-2 .4-3.8 1.8-5.6z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>',
  compound:
    '<path d="M3.5 13.5l4-4 2.5 2.5 6-6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 4.5h3.5V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
};
