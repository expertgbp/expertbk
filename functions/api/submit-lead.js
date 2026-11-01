// Cloudflare Pages Function (server-side only — not bundled by Vite/Astro,
// not shipped to the browser). Receives the JSON payload every
// [data-lead-form] on the site posts (see src/scripts/lead-form.ts) and
// upserts the lead into GoHighLevel as a contact, tagged by which form it
// came from.
//
// GHL_API_KEY and GHL_LOCATION_ID are read from this Pages project's
// environment variables (set in the Cloudflare dashboard for production;
// see .dev.vars for local `wrangler pages dev` testing). They are never
// referenced from any client-side script.
//
// Deliberately NOT used for /book-a-call: that page embeds GHL's own
// booking widget directly (PUBLIC_BOOKING_EMBED_URL), so there is no form
// submission here to intercept.

// One tag per known form, keyed by the formId every LeadMagnetForm /
// data-lead-form sets (see src/components/LeadMagnetForm.astro and
// src/pages/contact.astro). Add a new line here whenever a new form ships
// so its leads get their own tag instead of falling through to the
// generic one below.
const FORM_TAGS = {
  "home-blueprint": "Lead Source: Homepage Blueprint",
  "free-blueprint-page": "Lead Source: Blueprint Page",
  "newsletter-page": "Lead Source: Newsletter",
  contact: "Lead Source: Contact Form",
};

function tagForForm(formId, segmentTag) {
  if (formId && FORM_TAGS[formId]) return FORM_TAGS[formId];
  const label = segmentTag || formId;
  if (!label) return "Lead Source: Website (unspecified form)";
  const humanized = label.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return `Lead Source: ${humanized}`;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !email.includes("@")) {
    return Response.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  if (!env.GHL_API_KEY || !env.GHL_LOCATION_ID) {
    console.error("[submit-lead] GHL_API_KEY or GHL_LOCATION_ID is not set in this environment");
    return Response.json({ ok: false, error: "Lead intake is not configured" }, { status: 500 });
  }

  const tag = tagForForm(body.formId, body.segmentTag);
  const ghlHeaders = {
    Authorization: `Bearer ${env.GHL_API_KEY}`,
    Version: "2021-07-28",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    // Step 1: create the contact if it doesn't exist yet, or fetch it if it
    // does. Deliberately sent WITHOUT a `tags` field — GHL's upsert
    // endpoint replaces a contact's entire tags array rather than merging
    // into it, which would silently erase tags from a different form the
    // same person submitted earlier.
    const upsertRes = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({
        locationId: env.GHL_LOCATION_ID,
        email,
        firstName: typeof body.firstName === "string" && body.firstName.trim() ? body.firstName.trim() : undefined,
        source: typeof body.source === "string" && body.source ? body.source : undefined,
      }),
    });

    if (!upsertRes.ok) {
      const errText = await upsertRes.text().catch(() => "");
      console.error("[submit-lead] GHL upsert failed", upsertRes.status, errText);
      return Response.json({ ok: false, error: "Could not reach the CRM" }, { status: 502 });
    }

    const { contact } = await upsertRes.json();

    // Step 2: add this form's tag through the dedicated tags endpoint,
    // which is additive — it keeps whatever tags the contact already had.
    const tagRes = await fetch(`https://services.leadconnectorhq.com/contacts/${contact.id}/tags`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({ tags: [tag] }),
    });

    if (!tagRes.ok) {
      const errText = await tagRes.text().catch(() => "");
      console.error("[submit-lead] GHL add-tags failed", tagRes.status, errText);
      return Response.json({ ok: false, error: "Could not reach the CRM" }, { status: 502 });
    }

    return Response.json({ ok: true, tag });
  } catch (err) {
    console.error("[submit-lead] GHL request error", err);
    return Response.json({ ok: false, error: "Could not reach the CRM" }, { status: 502 });
  }
}
