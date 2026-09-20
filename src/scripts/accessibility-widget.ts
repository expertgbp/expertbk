/**
 * Sitewide accessibility drawer. Applies each adjustment as a class (or CSS
 * var, for the filter-based ones) on <html> so global.css owns the actual
 * effects — this file only reads/writes state and toggles those hooks.
 */
type ToggleKey =
  | "contrast"
  | "grayscale"
  | "invert"
  | "underline"
  | "simpleType"
  | "spacing"
  | "bigCursor"
  | "guide"
  | "strongFocus"
  | "reduceMotion";

type State = Partial<Record<ToggleKey, boolean>> & { font?: number };

const STORAGE_KEY = "a11y-settings";
const MIN_FONT = 90;
const MAX_FONT = 160;
const FONT_STEP = 10;

const TOGGLE_CLASS: Record<ToggleKey, string> = {
  contrast: "",
  grayscale: "",
  invert: "",
  underline: "a11y-underline",
  simpleType: "a11y-simple-type",
  spacing: "a11y-spacing",
  bigCursor: "a11y-big-cursor",
  guide: "",
  strongFocus: "a11y-strong-focus",
  reduceMotion: "a11y-reduce-motion",
};

const html = document.documentElement;
const toggleButton = document.getElementById("a11y-toggle-button");
const closeButton = document.getElementById("a11y-close-button");
const resetButton = document.getElementById("a11y-reset-button");
const drawer = document.getElementById("a11y-drawer");
const badge = document.getElementById("a11y-count-badge");
const fontValue = document.getElementById("a11y-font-value");
const cookieCard = document.getElementById("cookie-consent-bar");
const guideEl = document.getElementById("a11y-reading-guide");

let state: State = {};
try {
  state = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
} catch {
  state = {};
}

function moveGuide(e: MouseEvent | TouchEvent) {
  const y = "touches" in e ? e.touches[0]?.clientY : (e as MouseEvent).clientY;
  if (typeof y === "number" && guideEl) guideEl.style.top = `${y - 20}px`;
}

function apply() {
  html.style.setProperty("font-size", `${state.font ?? 100}%`, "important");
  if (fontValue) fontValue.textContent = `${state.font ?? 100}%`;

  (Object.keys(TOGGLE_CLASS) as ToggleKey[]).forEach((key) => {
    const cls = TOGGLE_CLASS[key];
    if (cls) html.classList.toggle(cls, Boolean(state[key]));
  });

  const filters: string[] = [];
  if (state.contrast) filters.push("contrast(1.2) saturate(1.25)");
  if (state.grayscale) filters.push("grayscale(1)");
  if (state.invert) filters.push("invert(1) hue-rotate(180deg)");
  if (filters.length) {
    html.style.setProperty("--a11y-fx", filters.join(" "));
    html.classList.add("a11y-fx");
  } else {
    html.style.removeProperty("--a11y-fx");
    html.classList.remove("a11y-fx");
  }

  if (state.guide) {
    guideEl?.removeAttribute("hidden");
    document.addEventListener("mousemove", moveGuide);
    document.addEventListener("touchmove", moveGuide, { passive: true });
  } else {
    guideEl?.setAttribute("hidden", "");
    document.removeEventListener("mousemove", moveGuide);
    document.removeEventListener("touchmove", moveGuide);
  }

  drawer?.querySelectorAll<HTMLInputElement>("[data-a11y-toggle]").forEach((input) => {
    const key = input.dataset.a11yToggle as ToggleKey;
    input.checked = Boolean(state[key]);
  });

  const activeCount =
    (Object.keys(TOGGLE_CLASS) as ToggleKey[]).filter((k) => state[k]).length +
    (state.font && state.font !== 100 ? 1 : 0);
  if (badge) {
    badge.textContent = String(activeCount);
    badge.hidden = activeCount === 0;
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  apply();
}

function openDrawer() {
  drawer?.removeAttribute("hidden");
  toggleButton?.setAttribute("aria-expanded", "true");
  drawer?.querySelector<HTMLElement>("button, input")?.focus();
}
function closeDrawer() {
  drawer?.setAttribute("hidden", "");
  toggleButton?.setAttribute("aria-expanded", "false");
  toggleButton?.focus();
}

toggleButton?.addEventListener("click", () => {
  if (drawer?.hasAttribute("hidden")) openDrawer();
  else closeDrawer();
});
closeButton?.addEventListener("click", closeDrawer);

drawer?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const stepper = target.closest<HTMLElement>("[data-a11y-font]");
  if (stepper) {
    const dir = stepper.dataset.a11yFont;
    const current = state.font ?? 100;
    state.font = dir === "inc" ? Math.min(MAX_FONT, current + FONT_STEP) : Math.max(MIN_FONT, current - FONT_STEP);
    persist();
  }
});

drawer?.addEventListener("change", (e) => {
  const input = e.target as HTMLInputElement;
  const key = input.dataset.a11yToggle as ToggleKey | undefined;
  if (!key) return;
  state[key] = input.checked;
  persist();
});

resetButton?.addEventListener("click", () => {
  state = {};
  persist();
});

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.closest("[data-open-a11y-panel]")) {
    openDrawer();
    return;
  }
  if (drawer?.hasAttribute("hidden")) return;
  if (drawer.contains(target) || toggleButton?.contains(target)) return;
  closeDrawer();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !drawer?.hasAttribute("hidden")) closeDrawer();
});

// On narrow viewports the cookie popup goes full-width at the bottom, which
// would otherwise sit under the accessibility pill (also bottom-anchored) —
// lift the pill (and its popover, positioned relative to it) clear of it.
function syncLift() {
  const visible = cookieCard && !cookieCard.hasAttribute("hidden");
  // offsetHeight/offsetLeft (layout box) rather than getBoundingClientRect
  // (visual box) — the card's own entrance animation briefly transforms its
  // rendered bounds, which would otherwise get baked into the lift amount.
  const overlapsHorizontally = !visible || !toggleButton || cookieCard!.offsetLeft < toggleButton.offsetLeft + toggleButton.offsetWidth;
  const lift = visible && overlapsHorizontally ? cookieCard!.offsetHeight + 28 : 0;
  html.style.setProperty("--a11y-lift", `${Math.round(lift)}px`);
}
syncLift();
window.addEventListener("resize", syncLift);
if (cookieCard && "MutationObserver" in window) {
  new MutationObserver(syncLift).observe(cookieCard, { attributes: true, attributeFilter: ["hidden"] });
}
// The MutationObserver above only catches show/hide; a webfont swap or text
// rewrap can change the card's height afterward without touching that
// attribute, so also watch its rendered size directly.
if (cookieCard && "ResizeObserver" in window) {
  new ResizeObserver(syncLift).observe(cookieCard);
}

apply();
