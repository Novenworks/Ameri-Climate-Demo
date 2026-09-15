# AGENTS.md

Router for future agents working on this speculative Ameri-Climate demo. Read the linked file; do not treat this page as the source of truth.

## What this repo is

A Novenworks speculative website redesign for Ameri-Climate (Yucaipa / Southern California commercial HVAC). The prospect is **not** a Novenworks client.

## Canonical docs

| Topic | File |
| --- | --- |
| Setup, stack, disclosure | [README.md](README.md) |
| Business facts, conflicts, agency check | [docs/PROJECT-BRIEF.md](docs/PROJECT-BRIEF.md) |
| Downloaded first-party files | [docs/ASSET-INVENTORY.md](docs/ASSET-INVENTORY.md) |
| Which photo goes where | [docs/ASSET-PLAN.md](docs/ASSET-PLAN.md) |
| Responsive / production QA | [docs/QA.md](docs/QA.md) |
| Operator pitch, email, what not to say | [docs/OUTREACH.md](docs/OUTREACH.md) |
| BEFORE/AFTER capture rules | [docs/CAPTURE.md](docs/CAPTURE.md) |
| Process and fact changes | [CHANGELOG.md](CHANGELOG.md) |

## Hard rules

- Fact integrity: never invent reviews, ROI, staff size, warranties, or license details. CSLB outranks aggregators. Current first-party outranks CSLB for the **customer phone number** used on the live site (see project brief).
- `/outreach` is operator-only: unlinked, `noindex`, not in nav/footer/sitemap.
- Do not replace first-party photography with stock while unused gallery files remain.
- Do not mislabel TownePlace gallery photos as Staybridge, or Victorville photos as Morongo.

## Stack

Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui primitives. No Vite.
