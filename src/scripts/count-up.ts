/**
 * Count-up for proof numbers ([data-count-up]): "700+" runs 0 to 700 and
 * keeps its "+", "1,000+" keeps its comma, "9X" keeps its suffix. The
 * number shown at the end is always exactly the text that was in the HTML
 * (which comes from src/data/entity.ts), so this never displays a value
 * the page didn't already state.
 *
 * Every number starts at zero and runs once, at the moment it actually
 * scrolls into view (or straight away if it is already on screen when the
 * page loads). Reduced-motion visitors and the site's "Stop animations"
 * toggle just get the final text, untouched. Without JS the HTML already
 * holds the final number.
 */
const targets = document.querySelectorAll<HTMLElement>("[data-count-up]");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const motionStopped = () => document.documentElement.classList.contains("a11y-reduce-motion");
const DURATION = 1800;
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function init() {
  type Parsed = { finalText: string; prefix: string; suffix: string; end: number; useCommas: boolean };
  const parsed = new WeakMap<HTMLElement, Parsed>();
  const format = (p: Parsed, value: number) =>
    p.prefix + (p.useCommas ? value.toLocaleString("en-US") : String(value)) + p.suffix;

  const run = (el: HTMLElement) => {
    const p = parsed.get(el);
    if (!p) return;
    const start = performance.now();
    const tick = (now: number) => {
      if (motionStopped()) {
        el.textContent = p.finalText;
        return;
      }
      const progress = Math.min((now - start) / DURATION, 1);
      el.textContent = format(p, Math.round(p.end * easeOutExpo(progress)));
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = p.finalText;
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        run(entry.target as HTMLElement);
      }
    },
    // The number has to be properly on screen (clear of the bottom edge)
    // before it starts, so the count is actually seen, not half missed.
    { threshold: 1, rootMargin: "0px 0px -12% 0px" }
  );

  targets.forEach((el) => {
    const finalText = el.textContent ?? "";
    const match = finalText.match(/\d[\d,]*/);
    if (!match || match.index === undefined) return;
    const end = Number(match[0].replace(/,/g, ""));
    if (!Number.isFinite(end) || end === 0) return;
    const p: Parsed = {
      finalText,
      end,
      prefix: finalText.slice(0, match.index),
      suffix: finalText.slice(match.index + match[0].length),
      useCommas: match[0].includes(","),
    };
    parsed.set(el, p);

    // Lock the width to the final text so neighbors don't shift mid-count,
    // and give assistive tech the real value instead of the ticking one.
    el.style.display = "inline-block";
    el.style.minWidth = `${el.getBoundingClientRect().width}px`;
    el.setAttribute("aria-label", finalText.trim());
    // Park at zero until it scrolls in.
    el.textContent = format(p, 0);
    io.observe(el);
  });
}

// Measuring each number's width forces a full layout of the page, so this
// waits for an idle moment instead of running while the page is loading.
if (targets.length && !prefersReduced && !motionStopped() && "IntersectionObserver" in window) {
  if ("requestIdleCallback" in window) window.requestIdleCallback(init, { timeout: 1500 });
  else window.setTimeout(init, 300);
}
