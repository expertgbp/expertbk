# Developer prompt: apply the WriteExpertBook audit-v2 change set

Copy everything below the line into Claude Code (or hand it to the developer as-is). It assumes a clone of `expertgbp/expertbk` and Node 22.12 or newer. Two paths are given: Path A when the `audit-v2` branch exists on GitHub (once Ash grants the Claude GitHub app write access, item 85 in the open items file), Path B using the patch file from the shared folder `G:\WriteExpertBook\writeexpertbook-audit-v2.patch` (works today).

---

You are working in the WriteExpertBook.com repository (`expertgbp/expertbk`, Astro 7, Tailwind v4, deployed on Cloudflare Pages). Your job is to bring the `audit-v2` change set onto `main`, verify it, deploy it, and report back. Do not change any copy, facts, or design beyond what the change set contains. If anything in these steps fails, stop and report the exact error rather than improvising a fix.

## 1. Get the change set

Path A (preferred, when the branch exists on GitHub):

```bash
git fetch origin
git checkout -b audit-v2 origin/audit-v2
git log --oneline main..audit-v2
```

Path B (from the shared folder, works today):

```bash
git checkout main && git pull
git checkout -b audit-v2
git apply --check "/path/to/writeexpertbook-audit-v2.patch"   # must print nothing
git apply "/path/to/writeexpertbook-audit-v2.patch"
git add -A
git commit -m "Audit v2: trust fixes, founder decisions of Oct 31, 2026, measurement, AEO"
```

Expected: about 106 files changed, roughly 1,900 insertions and 490 deletions. Deleted files include `public/robots.txt`, `public/llms.txt`, and three unused logo SVGs. New files include `src/integrations/placeholder-guard.ts`, `src/scripts/analytics.ts`, `src/data/writtenTestimonials.ts`, `src/components/FeaturedOn.astro`, `src/components/LastReviewed.astro`, `src/pages/home-v2.astro`, `scripts/qa-check.mjs`, `public/_redirects`.

## 2. Install and build

```bash
npm ci
npm run build
```

Expected: "91 page(s) built" and one warning line from `placeholder-guard` saying it removed about 34 internal markers from about 16 pages. That warning is correct behavior (the markers are internal notes that must never reach the public; `dist/placeholder-report.txt` lists them for the team).

## 3. Run the QA report

```bash
npm run qa
```

Expected: findings under `title-length` only (about 57 pages whose `<title>` is over 60 characters; those are a separate, approved-later task). There must be zero findings under `marker`, `em-dash`, `banned-word`, `phone`, `competitor-named`, `broken-internal-link`, `faq-schema-mismatch`, `snippet-control`, or `uk-spelling`. If any appear, stop and report them.

## 4. Verify the key facts in the built output

Run these and confirm each result:

```bash
grep -c '"foundingDate":"2017"' dist/index.html                       # 1
grep -o 'Serving authors across [^.]*\.' dist/index.html | head -1      # names US, Canada, UK, Australia, New Zealand, 21 countries
grep -o 'Most authors invest between [^.]*\.' dist/pricing-and-cost/index.html | head -1
grep -c 'Attend the Bestselling Book Masterclass' dist/index.html        # 2 or more (header top bar and footer)
grep -c 'Talk to a real person' dist/index.html                          # 0
grep -rl 'tel:' dist --include=*.html | wc -l                            # 0
grep -rl '6 to 12 months' dist --include=*.html | wc -l                  # 0
grep -c 'User-agent' dist/robots.txt                                     # 20
wc -c dist/llms.txt                                                      # about 21,000 bytes
grep -c 'Public recommendation on' dist/for/doctors/index.html           # 1
grep -c 'noindex' dist/home-v2/index.html                                # 1
grep -o 'As featured on' dist/index.html | head -1
```

## 5. Preview locally and click through

```bash
npm run preview
```

Open the preview URL and check, at desktop and at a 375px-wide phone viewport:

- `/` : the hero has a third quiet link "Not sure where you are? Four questions, no email"; the navy "As featured on" band shows six white logos (TED Talks, Forbes, USA Today, CBS, The Wall Street Journal, Udemy); the bookshelf section is titled "The kinds of books experts write" with "Sample cover" plates; the cookie card appears only after you scroll or after about 2.5 seconds; the founders section says "9X TEDx talks" and "700+ published authors".
- `/home-v2/` : the reordered homepage for Ash's review; proof (videos) appears within the first two screens; a "What it costs" card shows the investment line.
- `/trust/` and `/reviews/` : two source cards (author videos, Facebook recommendations) with working links; no bracketed placeholder text anywhere.
- `/case-studies/` : 20 author videos in the slider and 22 written recommendations with names and dates.
- `/for/doctors/` : a real quote card in the proof section attributed to a named author with a "Public recommendation on Facebook" link; "Last reviewed October 2026" under the hero; `<title>` is "How Doctors Write and Publish a Book | WriteExpertBook".
- `/pricing-and-cost/` : opens with the investment line; no bracketed text; no tier prices.
- `/contact/` : shows support@globalbookpublishing.com; no phone.
- Any Blueprint form with no `PUBLIC_FORM_ENDPOINT_URL` set: submitting shows an on-page message that the form did not send (it must not redirect to a thank-you page).

## 6. Set the environment variables in Cloudflare Pages (Ash supplies the values)

In the Pages project → Settings → Environment variables (Production and Preview):

- `PUBLIC_FORM_ENDPOINT_URL` = the LeadConnector form or inbound-webhook URL that should receive Blueprint, newsletter, and contact submissions (JSON POST; payload fields: `formId`, `segmentTag`, `firstName`, `email`, `profession`, `group`, `message`, `consent`, `consentAt`, `source`, `referrer`).
- `PUBLIC_GA4_ID` = the GA4 measurement id (`G-XXXXXXXXXX`). Analytics loads only after the visitor accepts analytics cookies.

Without these two values the site still builds and runs; forms show an honest "didn't send" message and no analytics loads.

Also confirm in Cloudflare that the bare domain `writeexpertbook.com` is attached to the Pages project, so `public/_redirects` can 301 it to `www`. If it is not attached, add a Bulk Redirect with the same rule: `https://writeexpertbook.com/*` → `https://www.writeexpertbook.com/$1`, 301.

## 7. Optional cleanup in the same pull request (approved, item 93)

The repository carries 43 unused PNG originals (about 87 MB) next to their WebP versions. Nothing references them.

```bash
git rm -q public/images/blog/*.png public/images/blog/inline/*.png
echo "public/images/blog/**/*.png" >> .gitignore
npm run build && npm run qa
git commit -am "Remove unused blog PNG originals; WebP versions are the ones served"
```

## 8. Open the pull request and deploy

```bash
git push -u origin audit-v2
```

Open a pull request `audit-v2` → `main` titled "Audit v2: trust fixes, founder decisions of Oct 31 2026, measurement, AEO". Let the Cloudflare Pages preview build finish, repeat the step 5 checks on the preview URL, then merge. After the production deploy, run the step 4 checks against the live site (replace `dist/...` with `curl -s https://www.writeexpertbook.com/...`), and confirm:

```bash
curl -sI https://writeexpertbook.com/ | head -3            # 301 to https://www.writeexpertbook.com/
curl -s https://www.writeexpertbook.com/robots.txt | grep -c User-agent   # 20
curl -s https://www.writeexpertbook.com/llms.txt | wc -c                  # about 21,000
```

## 9. Report back

Reply with: the commit hashes on `main`, the production deploy URL and time, the output of the step 4 and step 8 checks, the first 10 lines of `dist/placeholder-report.txt`, the `npm run qa` summary line, and anything that did not match the expected values above.

Rules while you work: do not edit copy, numbers, prices, names, or links (every fact comes from `src/data/entity.ts` or from Ash); do not add a phone number anywhere; do not add BBB, Trustpilot, or Google Business Profile links; do not cite or link other publishing companies; no em dashes in anything you write, including commit messages.
