/**
 * Restrained pointer-tracked 3D tilt on every shared .card surface
 * (CardGrid, TestimonialCard, profession/service/compare cards, etc.) —
 * the single most-reused component on the site, so one authored moment
 * here lifts the whole site's feel instead of a new effect per component.
 * See find-animation-opportunities.
 *
 * Takes over the `transform` that global.css's .card:hover sets (a flat
 * translateY(-2px) lift), replacing it with the same lift plus a capped
 * ±4deg rotation that follows the cursor within the card. box-shadow and
 * border-color stay owned by CSS; this script only ever touches transform.
 *
 * Cards repeat many times per page, so the tilt stays inside the
 * "tens of times a day" budget: capped small, fast, power-out easing.
 *
 * No-ops (no GSAP fetched) with zero .card elements on the page, under
 * prefers-reduced-motion, or on touch/coarse-pointer devices — the plain
 * CSS :hover lift in global.css already covers those cases on its own.
 */
const cards = document.querySelectorAll<HTMLElement>(".card");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (cards.length && !prefersReduced && canHover) {
  import("gsap").then(({ gsap }) => {
    const MAX_TILT = 4; // degrees, subtle enough for a tens-of-times-a-day surface
    const LIFT = -2; // px, matches global.css's .card:hover translateY(-2px)

    cards.forEach((card) => {
      gsap.set(card, { transformPerspective: 600 });
      const setRotationX = gsap.quickTo(card, "rotationX", { duration: 0.3, ease: "power2.out" });
      const setRotationY = gsap.quickTo(card, "rotationY", { duration: 0.3, ease: "power2.out" });
      const setY = gsap.quickTo(card, "y", { duration: 0.3, ease: "power2.out" });

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        setRotationX(-relY * MAX_TILT * 2);
        setRotationY(relX * MAX_TILT * 2);
        setY(LIFT);
      });

      card.addEventListener("mouseleave", () => {
        setRotationX(0);
        setRotationY(0);
        setY(0);
      });
    });
  });
}
