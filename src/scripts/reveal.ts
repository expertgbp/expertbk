/**
 * Scroll reveal for everything below the fold. Progressive enhancement only:
 * every block is fully visible without this script (no CSS applies the
 * hidden state ahead of time), so there's nothing to un-hide on a slow
 * connection or with JS disabled.
 *
 * Works on individual blocks, not whole sections: each heading, card,
 * figure, table and row gets its own entrance as it scrolls in, and blocks
 * that arrive in the same frame (a row of cards) cascade on a short stagger.
 * A section's background never fades, only its content does, so a navy
 * band never "pops" in over the ivory page.
 *
 * Which elements count as a block is worked out from the layout itself
 * (see collect() below) so every page and template gets this for free.
 * Three opt-outs/opt-ins for the cases the heuristic can't guess:
 *   data-reveal="none"      never animate this element or anything in it
 *   data-reveal="item"      treat as one block, don't look inside
 *   data-reveal="children"  animate its children one by one
 *   data-reveal-stagger="140" on a parent: ms between its children
 *
 * Deliberately skips:
 * - anything already in (or near) the viewport at load, so nothing flashes
 *   hidden-then-shown on first paint
 * - long-form article bodies (.prose) and anything taller than the screen
 * - everything, under `prefers-reduced-motion: reduce` or the site's own
 *   "Stop animations" accessibility toggle
 *
 * See Emil Kowalski's `animate` skill: opacity/translate only, strong
 * ease-out, 30-80ms stagger, once per element, never on an interaction.
 */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const motionStopped = () => document.documentElement.classList.contains("a11y-reduce-motion");

const ATOMIC =
  // .overflow-x-auto: a scrollable table wrapper must move as one piece. If
  // the table inside it slid on its own, the wrapper would flash a
  // vertical scrollbar for the length of the entrance.
  "h1,h2,h3,h4,h5,p,ul,ol,dl,a,button,figure,img,picture,video,iframe,table,details,form,blockquote,pre,.card,.overflow-x-auto,[data-reveal='item']";
const SKIP = "script,style,template,.prose,[data-reveal='none'],[hidden]";
const MEDIA = "figure,img,picture,video";
const MAX_DEPTH = 4;
const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6;
const REVEAL_MS = 700; // matches --duration-reveal in global.css

function isLayoutContainer(el: Element): boolean {
  const display = getComputedStyle(el).display;
  return display.includes("grid") || display.includes("flex");
}

/**
 * Walks down from a section and returns the blocks worth animating. The
 * rule of thumb: grids and flex rows are "layout", so look inside them;
 * a plain block of text (a stat tile, a founder bio column) is "content",
 * so it moves as one unit.
 */
function collect(root: Element, depth: number, out: HTMLElement[]): void {
  for (const child of Array.from(root.children) as HTMLElement[]) {
    if (child.matches(SKIP)) continue;
    const style = getComputedStyle(child);
    if (style.display === "none") continue;
    // Decorative layers (glows, connector lines) are absolutely positioned.
    if (style.position === "absolute" || style.position === "fixed") continue;

    const mode = child.dataset.reveal;
    const elementChildren = child.children.length;
    const lookInside =
      mode === "children" ||
      (mode !== "item" &&
        mode !== "media" && // one block, entering with the "grow into place" variant
        !child.matches(ATOMIC) &&
        elementChildren > 0 &&
        depth < MAX_DEPTH &&
        // the section's own container, a single-child wrapper, or a grid/flex row
        (depth === 0 || elementChildren === 1 || isLayoutContainer(child)));

    if (lookInside) collect(child, depth + 1, out);
    else out.push(child);
  }
}

function init() {
  const viewportH = window.innerHeight;
  const sections = document.querySelectorAll<HTMLElement>(
    "main > section, main > article, main > div > section"
  );

  const finish = (el: HTMLElement) => {
    el.classList.remove("reveal", "reveal-heading", "reveal-media", "is-visible");
    el.style.removeProperty("--reveal-delay");
    el.dispatchEvent(new CustomEvent("reveal:done", { bubbles: true }));
  };

  const io = new IntersectionObserver(
    (entries) => {
      const entering = entries
        .filter((entry) => entry.isIntersecting)
        // top-to-bottom, then left-to-right: the order the eye reads a row of cards
        .sort((a, b) => {
          const dy = a.boundingClientRect.top - b.boundingClientRect.top;
          return Math.abs(dy) > 8 ? dy : a.boundingClientRect.left - b.boundingClientRect.left;
        });

      entering.forEach((entry, i) => {
        const el = entry.target as HTMLElement;
        const step = Number(el.parentElement?.dataset.revealStagger) || STAGGER_MS;
        const delay = Math.min(i, MAX_STAGGER_STEPS) * step;
        io.unobserve(el);
        if (motionStopped()) return finish(el);
        el.style.setProperty("--reveal-delay", `${delay}ms`);
        el.classList.add("is-visible");
        el.dispatchEvent(new CustomEvent("reveal:start", { bubbles: true, detail: { delay } }));
        window.setTimeout(() => finish(el), delay + REVEAL_MS + 60);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -9% 0px" }
  );

  const items: HTMLElement[] = [];
  sections.forEach((section) => {
    if (section.matches(SKIP)) return;
    collect(section, 0, items);
  });

  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    // Only blocks that start below the fold; anything taller than the
    // screen stays put (it could never be "in view" as a whole).
    if (rect.top < viewportH * 0.92 || rect.height > viewportH * 1.25 || rect.height === 0) return;
    el.classList.add("reveal");
    if (el.matches("h1,h2,h3")) el.classList.add("reveal-heading");
    else if (el.matches(MEDIA) || el.dataset.reveal === "media") el.classList.add("reveal-media");
    io.observe(el);
  });

  // Safety net: the observer ignores the bottom 9% of the screen, so a block
  // sitting in that strip when the page can't scroll any further would never
  // be revealed. Once the visitor reaches the end of the page, show whatever
  // is left.
  const revealRest = () => {
    if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 4) return;
    document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
      io.unobserve(el);
      el.classList.add("is-visible");
      window.setTimeout(() => finish(el), REVEAL_MS + 60);
    });
  };
  window.addEventListener("scroll", revealRest, { passive: true });

  // Self-drawing connector lines (PathSteps).
  const lines = document.querySelectorAll<HTMLElement>(".draw-line");
  if (lines.length) {
    const lineIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-drawn");
          lineIo.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -18% 0px" }
    );
    lines.forEach((line) => {
      if (line.getBoundingClientRect().top < viewportH * 0.92) return;
      line.classList.add("is-armed");
      lineIo.observe(line);
    });
  }
}

// Set up once the browser is idle rather than during load: finding and
// measuring every block is the most expensive thing this script does, and
// nothing below the fold needs it in the first second.
if (!prefersReduced && !motionStopped() && "IntersectionObserver" in window) {
  if ("requestIdleCallback" in window) window.requestIdleCallback(init, { timeout: 1200 });
  else window.setTimeout(init, 200);
}
