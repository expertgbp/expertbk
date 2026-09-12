/**
 * Live cohort / enrollment window config (brief section 6, Section 0 and
 * the guardrail in section 12.3: "A timer counts to a true date or it does
 * not exist.").
 *
 * There is no confirmed live cohort date yet. Leave `active: false` until
 * GBP supplies a real enrollment-close date, then flip it on. Never invent
 * a date or set an evergreen/resetting timer here — that is explicitly
 * banned by the brief and by GBP's compliance rules.
 *
 * [NEEDS CONFIRMATION: next cohort open date, enrollment close date]
 */
export const cohort = {
  active: false,
  opensLabel: "", // e.g. "March 3"
  closesAt: null as Date | null, // real ISO date the countdown targets
  bookingHref: "/book-a-call",
};
