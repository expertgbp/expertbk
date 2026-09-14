/**
 * Homepage hero only: a soft field of drifting gold dust motes behind the
 * headline, plus a slow pointer-parallax on the light-beam glow. Purely
 * decorative — this is the one place on the site where the "delight" tier
 * of motion (Emil Kowalski's animate skill: rare, first-thing-you-see,
 * marketing-only) is spent, not sprinkled elsewhere.
 *
 * Vanilla canvas + rAF rather than GSAP: cheaper for a continuous many-node
 * drift than tweening 30+ DOM/GSAP targets every frame.
 *
 * Safe by construction:
 * - No-ops entirely if the page has no `[data-particles]` hero (every page
 *   except the homepage), so this never costs anything elsewhere.
 * - No-ops under prefers-reduced-motion: the static gradient in the markup
 *   already carries the hero without it.
 * - Pauses via IntersectionObserver + visibilitychange so it costs nothing
 *   once the visitor scrolls past the hero or backgrounds the tab.
 */
const canvas = document.querySelector<HTMLCanvasElement>("canvas[data-particles]");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && !prefersReduced) {
  const ctx = canvas.getContext("2d");
  const host = canvas.parentElement;

  if (ctx && host) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let running = false;
    let rafId = 0;

    type Particle = { x: number; y: number; r: number; a: number; vx: number; vy: number };
    let particles: Particle[] = [];

    function seed() {
      // Density scales down on narrow viewports; capped either way so this
      // never becomes a "particles.js wallpaper" effect.
      const count = Math.round(Math.min(38, Math.max(16, width / 26)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.6,
        a: 0.12 + Math.random() * 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.05 - Math.random() * 0.1,
      }));
    }

    function resize() {
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) p.y = height + 4;
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 217, 138, ${p.a})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    }

    function start() {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
        { threshold: 0 }
      );
      io.observe(host);
    } else {
      start();
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (host.getBoundingClientRect().bottom > 0) start();
    });
  }

  // Subtle pointer-parallax on the gold light-beam glow. Hover-capable,
  // fine-pointer devices only; the glow simply stays put on touch.
  const beam = host?.querySelector<HTMLElement>("[data-hero-beam]");
  if (beam && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    import("gsap").then(({ gsap }) => {
      const moveX = gsap.quickTo(beam, "x", { duration: 0.8, ease: "power3.out" });
      const moveY = gsap.quickTo(beam, "y", { duration: 0.8, ease: "power3.out" });
      host!.addEventListener("mousemove", (e) => {
        const rect = host!.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        moveX(relX * -18);
        moveY(relY * -12);
      });
      host!.addEventListener("mouseleave", () => {
        moveX(0);
        moveY(0);
      });
    });
  }
}
