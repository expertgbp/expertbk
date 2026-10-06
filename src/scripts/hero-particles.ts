/**
 * Homepage hero only: a field of drifting gold dust motes behind the
 * headline that reacts to the cursor. Purely decorative, and the one place
 * on the site where the "delight" tier of motion (Emil Kowalski's animate
 * skill: rare, first-thing-you-see, marketing-only) is spent.
 *
 * With a mouse, the field answers the pointer in four ways:
 *   1. a soft gold glow follows the cursor (eased, so it trails slightly)
 *   2. motes near the cursor brighten and are gently pushed aside
 *   3. motes close to the cursor and to each other join up with fine lines
 *   4. moving the cursor leaves a short trail of sparks that fade out
 * On touch screens there is no cursor, so the motes just drift.
 *
 * Vanilla canvas + rAF rather than GSAP: cheaper for a continuous many-node
 * field than tweening 60+ targets every frame.
 *
 * Safe by construction:
 * - No-ops entirely if the page has no `[data-particles]` hero (every page
 *   except the homepage), so this never costs anything elsewhere.
 * - No-ops under prefers-reduced-motion, and stops if the visitor turns on
 *   the site's "Stop animations" toggle: the static gradient in the markup
 *   already carries the hero without it.
 * - Pauses via IntersectionObserver + visibilitychange so it costs nothing
 *   once the visitor scrolls past the hero or backgrounds the tab.
 * - The canvas has pointer-events: none; it never blocks a click.
 */
const canvas = document.querySelector<HTMLCanvasElement>("canvas[data-particles]");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const motionStopped = () => document.documentElement.classList.contains("a11y-reduce-motion");

// Desktop only (CLAUDE.md motion rules): phones get the static gradient,
// with no canvas work competing with first paint.
if (canvas && !prefersReduced && finePointer) {
  const ctx = canvas.getContext("2d");
  const host = canvas.parentElement;

  if (ctx && host) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GOLD = "255, 217, 138";
    const REACH = 170; // px: how far the cursor's influence extends
    const LINK = 96; // px: max distance between two motes that get joined
    let width = 0;
    let height = 0;
    let running = false;
    let rafId = 0;

    type Particle = { x: number; y: number; r: number; a: number; vx: number; vy: number; px: number; py: number };
    type Spark = { x: number; y: number; vx: number; vy: number; life: number; r: number };
    let particles: Particle[] = [];
    let sparks: Spark[] = [];

    // Pointer state. (mx,my) is the raw cursor; (gx,gy) eases toward it,
    // and `presence` fades the whole cursor effect in and out.
    let mx = 0;
    let my = 0;
    let gx = 0;
    let gy = 0;
    let inside = false;
    let presence = 0;
    let lastSparkX = 0;
    let lastSparkY = 0;

    function seed() {
      // Density scales with the hero's width; capped so this never becomes
      // a "particles.js wallpaper".
      const count = Math.round(Math.min(72, Math.max(18, width / 19)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.7 + Math.random() * 1.7,
        a: 0.14 + Math.random() * 0.3,
        vx: (Math.random() - 0.5) * 0.14,
        vy: -0.05 - Math.random() * 0.12,
        px: 0,
        py: 0,
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
      if (motionStopped()) {
        ctx.clearRect(0, 0, width, height);
        running = false;
        return;
      }
      ctx.clearRect(0, 0, width, height);

      presence += ((inside ? 1 : 0) - presence) * 0.07;
      gx += (mx - gx) * 0.14;
      gy += (my - gy) * 0.14;
      const active = presence > 0.01;

      // 1. Glow under the cursor.
      if (active) {
        const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, 260);
        glow.addColorStop(0, `rgba(${GOLD}, ${0.13 * presence})`);
        glow.addColorStop(1, `rgba(${GOLD}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(gx - 260, gy - 260, 520, 520);
      }

      // 2. Motes: drift, get nudged away from the cursor, brighten near it.
      const near: Particle[] = [];
      for (const p of particles) {
        let boost = 0;
        if (active) {
          const dx = p.x - gx;
          const dy = p.y - gy;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < REACH) {
            const pull = 1 - dist / REACH;
            boost = pull * presence;
            const force = pull * pull * 0.5 * presence;
            p.px += (dx / dist) * force;
            p.py += (dy / dist) * force;
            near.push(p);
          }
        }
        p.px *= 0.93;
        p.py *= 0.93;
        p.x += p.vx + p.px;
        p.y += p.vy + p.py;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + boost * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD}, ${Math.min(0.95, p.a + boost * 0.6)})`;
        ctx.fill();
      }

      // 3. Fine lines between motes that are near the cursor and each other.
      if (near.length > 1) {
        ctx.lineWidth = 0.7;
        for (let i = 0; i < near.length; i++) {
          for (let j = i + 1; j < near.length; j++) {
            const a = near[i];
            const b = near[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d > LINK) continue;
            ctx.strokeStyle = `rgba(${GOLD}, ${(1 - d / LINK) * 0.32 * presence})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 4. Spark trail.
      if (sparks.length) {
        for (const s of sparks) {
          s.x += s.vx;
          s.y += s.vy;
          s.vy -= 0.004; // sparks rise slightly, like the motes
          s.life -= 0.022;
          if (s.life <= 0) continue;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * s.life, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${GOLD}, ${s.life * 0.8})`;
          ctx.fill();
        }
        sparks = sparks.filter((s) => s.life > 0);
      }

      rafId = requestAnimationFrame(tick);
    }

    function start() {
      if (running || motionStopped()) return;
      running = true;
      rafId = requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    {
      host.addEventListener(
        "pointermove",
        (event) => {
          if (event.pointerType !== "mouse") return;
          const rect = host.getBoundingClientRect();
          mx = event.clientX - rect.left;
          my = event.clientY - rect.top;
          if (!inside) {
            // First move in: start the glow where the cursor is, not where
            // it was last time, so it doesn't sweep across the hero.
            inside = true;
            gx = mx;
            gy = my;
            lastSparkX = mx;
            lastSparkY = my;
          }
          // A new spark every ~16px of travel, capped.
          if (Math.hypot(mx - lastSparkX, my - lastSparkY) > 16 && sparks.length < 48) {
            lastSparkX = mx;
            lastSparkY = my;
            sparks.push({
              x: mx + (Math.random() - 0.5) * 10,
              y: my + (Math.random() - 0.5) * 10,
              vx: (Math.random() - 0.5) * 0.7,
              vy: (Math.random() - 0.5) * 0.7,
              life: 1,
              r: 1 + Math.random() * 1.8,
            });
          }
        },
        { passive: true }
      );
      host.addEventListener("pointerleave", () => {
        inside = false;
      });
    }

    // Begin only once the browser is idle after load, so the field never
    // competes with the page's first render.
    const begin = () => {
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
          { threshold: 0 }
        );
        io.observe(host);
      } else {
        start();
      }
    };
    if ("requestIdleCallback" in window) window.requestIdleCallback(begin, { timeout: 2000 });
    else window.setTimeout(begin, 600);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (host.getBoundingClientRect().bottom > 0) start();
    });
  }
}
