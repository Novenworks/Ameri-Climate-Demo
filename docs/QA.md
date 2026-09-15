# QA notes

Tested 2026-09-15 against local production build (`next start`).

## Desktop ~1440×900

- Header: logo (first-party wordmark), nav, phone, Request Information — all visible.
- Hero: rooftop photography readable; headline wraps on two lines; primary + secondary + call CTAs visible.
- Trust strip: five verified items, no invented metrics.
- Capabilities, work, about, process, service area, contact all render with first-party images.
- Named projects without matching photos sit in a compact navy list (not empty white cards).
- Footer includes license, contact, speculative-demo disclosure.
- Phone `tel:+19097308523` present.

## Mobile ~390×844

- Hamburger opens Work / Capabilities / About / Contact, phone, and CTA.
- Hero CTAs stack; tap targets ≥44px.
- No horizontal overflow observed on homepage at 390.
- Form stacks in the contact panel.

## Form

Demo submit shows an explicit notice that nothing is sent to Ameri-Climate and points to live phone/email.

## Console

No page errors during capture of the rebuilt build. One Next.js image request was flagged as incomplete during an earlier mid-scroll check (contact background not yet in view); full-page captures show images loaded.

## `/outreach`

Unlinked, `noindex` via page metadata and `robots.ts`. Not in footer/nav.

## Production

Re-verified after Vercel deploy (see CHANGELOG / completion report).
