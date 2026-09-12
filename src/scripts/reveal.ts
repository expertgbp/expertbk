/**
 * Scroll reveal for below-the-fold sections. Progressive enhancement only:
 * every section is fully visible without this script (no CSS applies the
 * hidden state ahead of time), so there's nothing to un-hide on a slow
 * connection or with JS disabled.
 *
 * Deliberately skips:
 * - anything already within (or near) the initial viewport at load, so
 *   nothing flashes hidden-then-shown on first paint
 * - everything, if the visitor has `prefers-reduced-motion: reduce` set
 *
 * See Emil Kowalski's `animate` skill: transform/opacity only, ease-out,
 * gated by reduced-motion — this is the "occasional, once per page load"
 * tier, not a frequently-repeated animation.
 */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced && "IntersectionObserver" in window) {
  const sections = document.querySelectorAll<HTMLElement>(
    "main > section, main > article, main > div > section"
  );

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  sections.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const alreadyNearViewport = rect.top < window.innerHeight * 0.9;
    if (alreadyNearViewport) return;
    el.classList.add("reveal");
    io.observe(el);
  });
}
