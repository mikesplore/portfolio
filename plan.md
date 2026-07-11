# mikesplore.me — timeline portfolio build plan

Redesigning from a standard portfolio layout to a unified, chronological
timeline (inspired by davidamunga.com/timeline), built on the existing
React + Vite + Tailwind stack.

## Core idea

One content type, several tags. Every entry — a Vela milestone, a dev.to
post, a hobby script — is the same object shape, just categorized
differently. Low friction to add an entry is the whole point: adding one
should take two minutes, not a redesign.

## Data model

```ts
// src/data/types.ts
export type EntryType = "project" | "hobby" | "writing" | "client" | "talk" | "now";

export interface TimelineEntry {
  date: string;      // ISO, "2026-07-11"
  type: EntryType;
  title: string;
  blurb: string;      // one line, no more
  link?: string;       // external (GitHub, live site, dev.to post)
  slug?: string;        // internal deep-dive page, e.g. "vela"
  tags?: string[];       // stack: Kotlin, FastAPI, Compose, etc.
}
```

## File structure

```
src/
  data/
    types.ts
    entries.manual.ts     # hand-written: projects, client work, talks
    entries.devto.json    # generated at build time
    entries.github.json   # generated at build time
    entries.ts            # merges + sorts all three by date
  components/
    Header.tsx             # name, role/location, status bullets, social pills
    Nav.tsx                 # Timeline (home) · About · Contact
    Timeline/
      TimelineFeed.tsx    # maps entries -> TimelineRow, owns filter state
      TimelineRow.tsx     # accordion row: icon + title + date, expands to blurb/link/tags
      TypeFilter.tsx       # pill toggles: all / project / hobby / writing...
      EntryIcon.tsx         # favicon fetch, falls back to colored initials tile
  pages/
    Home.tsx              # renders TimelineFeed
    About.tsx
    Contact.tsx
    projects/
      Vela.tsx             # deep-dive page
      FarmPulse.tsx
  scripts/
    fetch-devto.ts        # run pre-build, writes entries.devto.json
    fetch-github.ts       # same, for repo entries
```

## Site structure

- **Home = the timeline itself.** No hero-then-grid-then-footer. The
  timeline is the landing experience, filterable by type.
- **Deep-dive pages** for the 1-2 things that deserve real estate —
  Vela almost certainly, maybe FarmPulse.
- **About** — short, mostly static: who you are, stack, hackathon wins.
- **Contact** — unchanged from current site.
- No separate Gallery or per-project nav items — the timeline replaces
  most of that navigation.

## Content sourcing

- **dev.to** — public API at `https://dev.to/api/articles?username=<handle>`,
  fetched at build time, mapped into `writing` entries. No manual copying.
- **GitHub** — `https://api.github.com/users/<user>/repos?sort=created`,
  filtered/curated manually at first (exclude forks and noise), mapped
  into `hobby` or `project` entries.
- **Twitter/X** — link individual notable tweets manually as one-off
  entries, or skip syndication and just link the profile from About.
  API access makes automated pulling more trouble than it's worth.

## UI design plan

Borrowing the *pattern*, not the skin. David's layout has four ideas
worth keeping, each adapted to fit the warm-minimal Material3 dark
aesthetic already established in the Vela work, rather than his
green-on-dark styling:

1. **Header block** — name, role/location line, 1-2 status bullets
   (a small dot + text, e.g. "Freelance full-stack · Mombasa, Kenya"),
   pill-shaped social links, one highlighted "say hello" pill. Avatar
   top-right. Difference from the reference: square/rounded-square
   avatar with a subtle border instead of a circular ring, and an
   accent color pulled from your own palette instead of green — amber
   or warm coral reads closer to what Vela already uses.

2. **Tab-style nav, but fewer tabs.** David splits into Home / Projects
   / Work / Blog / Lists / Reading / Timeline / CV because his timeline
   is one view among several. Since the plan here makes the timeline
   *the* home page, the nav collapses to something like:
   `Timeline (home) · About · Contact`, maybe `CV` if you keep one.
   Fewer tabs than the reference is itself a point of difference, not
   a gap.

3. **Row-based list with a leading icon, not a card.** Each entry is a
   thin horizontal row: small icon/logo on the left, title + one-line
   subtitle in the middle, date on the right. This is worth adopting
   directly — it's what makes the list scannable at 20+ entries instead
   of feeling like a project grid.

4. **Accordion rows (collapsed by default).** This is the one
   structural upgrade worth taking from the reference over the plain
   `TimelineRow` sketched earlier: each row shows only title + date by
   default, with a chevron that expands to reveal the blurb, tags, and
   link. It keeps the page dense and lets someone scan 20+ entries at a
   glance before opening the ones they care about — better than the
   fully-expanded row for a timeline this size.

**Icon per entry**: use a favicon fetch (e.g.
`https://www.google.com/s2/favicons?domain=<url>&sz=64`) for entries
with an external link, falling back to a generated initials tile
(first letter or two of the title, colored by entry `type`) for
internal/no-link entries — same idea as the reference's "CU" tile for
cucopy.

## Phased build plan

### Phase 1 — Static feed, real data
- Define `types.ts`.
- Write `entries.manual.ts` with ~10 real entries: Vela milestones,
  FarmPulse, the Weather-AI/verika.org scam investigation writeup,
  hackathon wins, the M-Pesa SMS analyzer pivot.
- No fetch scripts yet — prove the visual pattern with real content
  before automating anything.

### Phase 2 — Header + nav
- Build `Header.tsx` — name, role/location, 1-2 status bullets, pill
  social links, highlighted "say hello" pill, avatar.
- Build `Nav.tsx` — collapsed to Timeline (home) · About · Contact.
- No feed logic yet, just the shell.

### Phase 3 — Feed components
- Build `EntryIcon.tsx` — favicon fetch for linked entries, colored
  initials tile fallback for internal/no-link entries.
- Build `TimelineRow.tsx` as an accordion: collapsed shows icon +
  title + date, chevron expands to reveal blurb, tags, and link.
- Build `TimelineFeed.tsx` — renders sorted entries, owns filter and
  expanded-row state.
- Wire into `Home.tsx`, replacing the current landing section.

### Phase 4 — Type filter
- Build `TypeFilter.tsx` — pill toggles (all / project / hobby /
  writing / client / talk / now).
- Confirm filtering + empty states look right with the Phase 1 dataset.

### Phase 5 — dev.to sync
- Write `scripts/fetch-devto.ts`, output to `entries.devto.json`.
- Add as a `prebuild` step in `package.json`.
- Merge into `entries.ts`, confirm sort order and dedup against any
  manually-added writing entries.

### Phase 6 — GitHub sync
- Write `scripts/fetch-github.ts`, output to `entries.github.json`.
- Curate an include/exclude list before merging (avoid dumping every
  repo — noise kills the feed).

### Phase 7 — Deep-dive pages
- Build `pages/projects/Vela.tsx` (and `FarmPulse.tsx` if warranted).
- Link from matching timeline entries via `slug`.
- Only build these once the feed pattern has proven out — the timeline
  should carry most of the weight on its own.

### Phase 8 — Polish
- About/Contact pages restyled to match the new minimal aesthetic.
- Remove old portfolio sections/nav no longer needed (Gallery, Skills
  grid, etc. — check what the timeline has absorbed).
- Meta tags / OG image for the new home page.

## Notes
- Keep entry writing low-friction — if adding an entry ever feels like
  "a task," the timeline will stop getting updated, same as any changelog.
- Resist over-designing `TimelineRow` — David's version is just headers,
  dates, one-line blurbs, and a link. That restraint is the aesthetic.