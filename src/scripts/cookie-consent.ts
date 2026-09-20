/**
 * Sitewide cookie notice: shows the bar until a choice is stored, lets the
 * visitor open a preferences modal, and pushes a Google Consent Mode v2
 * signal on every choice (a harmless no-op until GA/GTM is installed, so
 * this doesn't require analytics to exist yet).
 */
type Consent = { necessary: true; analytics: boolean; marketing: boolean };

const STORAGE_KEY = "cookie-consent";

const bar = document.getElementById("cookie-consent-bar");
const modal = document.getElementById("cookie-preferences-modal");

function getStored(): Consent | null {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
  } catch {
    return null;
  }
}

function pushConsentUpdate(c: Consent) {
  const w = window as typeof window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({
    event: "consent_update",
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
    analytics_storage: c.analytics ? "granted" : "denied",
  });
}

function showBar() {
  bar?.removeAttribute("hidden");
}
function hideBar() {
  bar?.setAttribute("hidden", "");
}
function showModal() {
  const stored = getStored() ?? { necessary: true, analytics: false, marketing: false };
  modal?.querySelectorAll<HTMLInputElement>("[data-cat]").forEach((input) => {
    const cat = input.dataset.cat as "analytics" | "marketing";
    input.checked = Boolean(stored[cat]);
  });
  hideBar();
  modal?.removeAttribute("hidden");
}
function hideModal() {
  modal?.setAttribute("hidden", "");
  if (!getStored()) showBar();
}

function saveConsent(c: Omit<Consent, "necessary">) {
  const full: Consent = { necessary: true, ...c };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
  pushConsentUpdate(full);
  hideBar();
  hideModal();
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target === modal) {
    hideModal();
    return;
  }

  if (target.closest("[data-open-cookie-preferences]")) {
    showModal();
    return;
  }

  const trigger = target.closest<HTMLElement>("[data-cc]");
  if (!trigger) return;
  const action = trigger.dataset.cc;

  if (action === "accept") saveConsent({ analytics: true, marketing: true });
  else if (action === "reject") saveConsent({ analytics: false, marketing: false });
  else if (action === "manage") showModal();
  else if (action === "close") hideModal();
  else if (action === "save") {
    const analytics = modal?.querySelector<HTMLInputElement>('[data-cat="analytics"]')?.checked ?? false;
    const marketing = modal?.querySelector<HTMLInputElement>('[data-cat="marketing"]')?.checked ?? false;
    saveConsent({ analytics, marketing });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && !modal.hasAttribute("hidden")) hideModal();
});

if (!getStored()) showBar();
