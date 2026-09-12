/**
 * Shared submit handler for every `[data-lead-form]` on a page (the
 * LeadMagnetForm component and any hand-built form using the same
 * data-attributes, e.g. /contact). Provider-agnostic: point
 * PUBLIC_FORM_ENDPOINT_URL at whatever CRM/automation endpoint GBP wires
 * up; no markup changes needed here when that changes.
 */
document.querySelectorAll<HTMLFormElement>("[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const errorEl = form.querySelector<HTMLElement>("[data-form-error]");
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) return; // silently drop likely bot submissions

    const email = (form.elements.namedItem("email") as HTMLInputElement | null)?.value ?? "";
    if (!email.includes("@")) {
      if (errorEl) {
        errorEl.textContent = "We'll need a real email to send it to.";
        errorEl.classList.remove("hidden");
      }
      return;
    }

    const endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT_URL as string | undefined;
    const field = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value;

    const payload = {
      formId: form.dataset.formId,
      segmentTag: form.dataset.segmentTag,
      firstName: field("firstName"),
      email,
      profession: field("profession"),
      message: field("message"),
      source: window.location.pathname,
    };

    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // No endpoint configured yet — do not lose the submission silently.
        console.warn("[lead-form] PUBLIC_FORM_ENDPOINT_URL is not set; submission not sent.", payload);
      }
      const redirect = form.dataset.redirect;
      if (redirect) window.location.href = redirect;
    } catch (err) {
      if (errorEl) {
        errorEl.textContent = "Something went wrong sending that. Please try again.";
        errorEl.classList.remove("hidden");
      }
    }
  });
});
