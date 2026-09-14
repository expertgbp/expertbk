/**
 * The site's one signature CTA interaction: a small magnetic pull toward
 * the pointer on the two primary calls to action (hero + FinalDoorCTA,
 * marked [data-magnetic] in their own templates). Reused everywhere the
 * primary action appears rather than invented per-section — see the
 * animate/find-animation-opportunities skills: one authored moment, not
 * scattered effects.
 *
 * These buttons repeat on every page, so the pull stays inside the
 * "tens of times a day" budget: capped at 8px, ~0.35s, power3.out.
 *
 * No-ops (no GSAP fetched) with no [data-magnetic] element, under
 * prefers-reduced-motion, or on touch/coarse-pointer devices.
 */
const targets = document.querySelectorAll<HTMLElement>("[data-magnetic]");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (targets.length && !prefersReduced && canHover) {
  import("gsap").then(({ gsap }) => {
    const CAP = 8; // px, subtle enough for a tens-of-times-a-day element
    const STRENGTH = 0.28;

    targets.forEach((el) => {
      const moveX = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
      const moveY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        moveX(Math.max(-CAP, Math.min(CAP, relX * STRENGTH)));
        moveY(Math.max(-CAP, Math.min(CAP, relY * STRENGTH)));
      });

      el.addEventListener("mouseleave", () => {
        moveX(0);
        moveY(0);
      });
    });
  });
}
