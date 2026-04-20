# Champions Field Graphic — Build Spec

**Component:** `ChampionsField`
**Location:** `src/components/visuals/ChampionsField.tsx`
**Data:** `src/content/champions-field/2025.ts`
**Session goal:** build and ship the inaugural 2025 Champions Field as the landing-page key visual, replacing the current `KeyVisualPlaceholder`.

---

## 1. What the image is

The **Champions Field** shows the 24 teams that would make up the inaugural (2025) Champions Conference under the restructuring proposal, organized into three snake-draft-balanced divisions (I · II · III), with the top-12 CFP cut-line visible.

This is the first of three editorial infographics for the site. It is not a bracket — it is the *field itself*, the league's membership for a given year. The bracket (12-team CFP, drawn from the top 12 of the Field) and the flow diagram (promotion/relegation mechanism) are separate future visuals.

The visual answers, in one glance:

- There are twenty-four teams.
- They are drawn from across the existing college football landscape.
- They are organized into three balanced divisions, reconstituted annually.
- The top twelve qualify for the CFP.

---

## 2. The data (2025 field)

Per the Champions Conference spec § 10 ("Initial Champions Conference Selection, Option A"), the 2025 field is the top 24 of the final CFP committee rankings released December 7, 2025 (pre-bowls, post-conference-championship-weekend).

### Rankings and records

| Seed | Team | Record | Short name |
|---|---|---|---|
| 1 | Indiana | 13-0 | Indiana |
| 2 | Ohio State | 12-1 | Ohio St |
| 3 | Georgia | 12-1 | Georgia |
| 4 | Texas Tech | 12-1 | Texas Tech |
| 5 | Oregon | 11-1 | Oregon |
| 6 | Ole Miss | 11-1 | Ole Miss |
| 7 | Texas A&M | 11-1 | Texas A&M |
| 8 | Oklahoma | 10-2 | Oklahoma |
| 9 | Alabama | 10-3 | Alabama |
| 10 | Miami (FL) | 10-2 | Miami |
| 11 | Notre Dame | 10-2 | Notre Dame |
| 12 | BYU | 11-2 | BYU |
| 13 | Texas | 9-3 | Texas |
| 14 | Vanderbilt | 10-2 | Vandy |
| 15 | Utah | 10-2 | Utah |
| 16 | USC | 9-3 | USC |
| 17 | Arizona | 9-3 | Arizona |
| 18 | Michigan | 9-3 | Michigan |
| 19 | Virginia | 10-3 | Virginia |
| 20 | Tulane | 10-3 | Tulane |
| 21 | Houston | 9-3 | Houston |
| 22 | Georgia Tech | 9-3 | Ga Tech |
| 23 | Iowa | 8-4 | Iowa |
| 24 | James Madison | 12-1 | JMU |

---

## 3. Snake-draft division assignment

Per the Champions Conference spec § 3 ("Division Structure"). Pattern:

```
 1→A   2→B   3→C   4→C   5→B   6→A
 7→A   8→B   9→C  10→C  11→B  12→A
13→A  14→B  15→C  16→C  17→B  18→A
19→A  20→B  21→C  22→C  23→B  24→A
```

Divisions relabeled I (A), II (B), III (C) for display.

### Resulting composition, read as rows top-to-bottom

| Row | I | II | III |
|---|---|---|---|
| 1 | 1 Indiana | 2 Ohio State | 3 Georgia |
| 2 | 6 Ole Miss | 5 Oregon | 4 Texas Tech |
| 3 | 7 Texas A&M | 8 Oklahoma | 9 Alabama |
| 4 | 12 BYU | 11 Notre Dame | 10 Miami |
| — | **⎯⎯ CFP cut (above: CFP-qualifying; below: bowl-bound) ⎯⎯** | | |
| 5 | 13 Texas | 14 Vanderbilt | 15 Utah |
| 6 | 18 Michigan | 17 Arizona | 16 USC |
| 7 | 19 Virginia | 20 Tulane | 21 Houston |
| 8 | 24 James Madison | 23 Iowa | 22 Georgia Tech |

Seed sums per column: **100 / 100 / 100** (verifies snake-draft balance).

The cut-line falls cleanly between rows 4 and 5 across all three columns — no zig-zag.

---

## 4. Visual design

### Frame

- Container: `.landing-figure` (unchanged from current placeholder)
- SVG fills the 16:9 aspect-ratio box at desktop
- Hairline warm-gray border around the SVG frame, paper-deep background inside (`--color-paper-deep`) — inherits the current placeholder's frame treatment
- No inner shadow, no fill, no ornament beyond the border

### ViewBox and grid

- ViewBox: `0 0 1600 900`
- Outer padding: 80 top, 64 bottom, 80 left, 80 right
- Content area: 1440 × 756
- Column headers (I · II · III): y = 80 to 180 (height 100)
- Space below headers: y = 180 to 230
- Team cells: y = 230 to 742, arranged as 8 cells × 64px each
- CFP cut-line: y = 230 + (4 × 64) = 486
- Column widths: 432 each, gutters of 72 between

### Typography (SVG units)

All values in viewBox units; rendered size is viewBox × scale.

| Element | Family | Size (SVG) | Weight | Color | Other |
|---|---|---|---|---|---|
| Roman numeral (I·II·III) | serif | 64 | semibold | `--color-oxblood` | italic, opsz 48 |
| Team name | sans | 26 | medium (500) | `--color-ink` | — |
| Seed number | sans | 16 | medium (500) | `--color-oxblood` | tabular nums |
| Record | sans | 20 | regular (400) | `--color-ink-muted` | tabular nums, right-aligned |
| CFP eyebrow | sans | 14 | medium (500) | `--color-oxblood` | uppercase, tracked 0.14em |

Use `dominant-baseline` and `text-anchor` consistently. Seed number is baseline-aligned with the team name it precedes.

### Cell layout (per team)

```
[seed]  [team name] . . . . . . . . . . . . [record]
```

- Seed: left-aligned, 16 SVG units from left edge of column
- Team name: begins 36 SVG units from left of column (leaves space for seed + gap)
- Record: right-aligned to the right edge of the column
- All three elements sit on a shared baseline at the cell's vertical center

No row rules between cells. The 64px cell spacing is the visual separation. Negative space does the work.

### Column headers

- Roman numeral centered horizontally over its column
- Baseline at y = 150 (so the numeral occupies ~y=90 to 150)
- Serif italic, oxblood, via `.section-numeral` treatment but scaled to 64 SVG units

### The CFP cut-line

- Horizontal line at y = 486, from x = 80 to x = 1520 (spans all three columns + gutters)
- Stroke: `--color-oxblood`, 1.5px equivalent (at viewBox scale, ~2 SVG units)
- `CFP` eyebrow positioned just above the line, centered horizontally on the full span, y ≈ 476
- Eyebrow has a small paper-deep "breathing" background so the rule doesn't pass through the letterforms

Above the rule: top-12 (CFP-qualifying). Below the rule: seeds 13-24 (bowl-bound). **Same visual weight — no muting.** The rule alone signals the cut.

---

## 5. Responsive behavior

Three viewport tiers:

### Desktop (≥1024px)

- 16:9 aspect ratio preserved
- Full team names (`name` field)
- All measurements as specified above

### Tablet (640–1023px)

- 16:9 preserved
- Full team names
- SVG scales proportionally; no layout changes

### Mobile (<640px)

- Aspect ratio becomes ~4:5 (taller than wide) — **break the 16:9 constraint**
- Use `shortName` field for team names
- Columns narrow; consider reducing gutter from 72 to 48 SVG units in mobile-specific viewBox
- Roman numerals reduce to ~48 SVG units
- Consider swapping to a mobile-optimized viewBox (e.g., `0 0 1000 1250`) via CSS media query

**Implementation approach:** Two full SVG renderings inside the component, wrapped in `<div>`s, shown/hidden via CSS media query (`display: none` / `display: block`). No client JS, no layout thrash. Accepts the cost of duplicated SVG markup for the benefit of a script-free, hydration-free responsive image.

**Alternative implementation if simpler:** Single SVG with CSS-driven text swapping (`.name-full` hidden on mobile, `.name-short` hidden on desktop), and a single viewBox sized for mobile with desktop adding whitespace or letting CSS width do the work. Decide during build which approach produces cleaner markup.

---

## 6. Component API

```ts
// src/components/visuals/ChampionsField.tsx

export type FieldTeam = {
  name: string;
  shortName: string;
  seed: number;         // 1..24
  record: string;
  conference?: string;  // optional, not rendered on landing but captured
};

export type FieldData = {
  season: string;       // "2025"
  teams: FieldTeam[];   // length 24, ordered by seed (teams[0].seed === 1)
  cfpCutSeed: number;   // where the rule falls; for this proposal always 12
};

export type ChampionsFieldProps = {
  data: FieldData;
  /** id for aria-labelledby */
  titleId?: string;
  /** force a layout variant (default 'auto' uses CSS media queries) */
  forceLayout?: 'wide' | 'narrow' | 'auto';
};

export function ChampionsField(props: ChampionsFieldProps): JSX.Element;
```

### Derived internal logic

- Snake-draft division assignment computed from `seed` via the hardcoded pattern (1-24). A helper function `seedToDivision(seed: number): 'I' | 'II' | 'III'` encapsulates this.
- Row position within division computed from seed: for each division, sort its teams by seed ascending; row index is that order.

### Constraints

- **No client JS.** Pure SVG, pure React props-to-markup.
- **No inline SVG styles where CSS vars can do it.** Colors, font families, and weights reference tokens.css variables by name (`fill="var(--color-ink)"`, `font-family="var(--font-sans)"`). Makes the component survive any future design-system token adjustment without editing SVG.
- **Accessibility.** SVG has `role="img"` and `aria-labelledby` pointing to an SVG `<title>` element that reads "The 2025 Champions Field — 24 teams organized into three divisions, with the top twelve CFP-qualifying." A `<desc>` element gives a longer description for screen readers that enumerates the teams by division.

---

## 7. Landing-page integration

1. Rename `KeyVisualPlaceholder.tsx` → **delete it**; replace with a new `KeyVisual.tsx` wrapper (cleaner name, since the placeholder semantics no longer apply) that renders `<Container as="figure">` + `<ChampionsField />` + `<figcaption>`. Alternative: keep the `KeyVisualPlaceholder` filename and just update its contents — whichever is cleaner at build time.
2. Import `fieldData` from `src/content/champions-field/2025.ts` and pass to `ChampionsField`.
3. Update the figcaption copy in `src/content/landing.ts`:
   - **Current:** "The Champions Conference bracket, as it would have resolved for the 2024 season. The finished graphic will appear here; the illustration is scheduled for the next build session."
   - **New (long version):** "The 2025 Champions Field. Twenty-four teams, drawn from eight conferences, organized into three snake-draft divisions. The top twelve qualify for the College Football Playoff; the bottom twelve play for bowl positioning or face relegation. Under the proposal, Notre Dame and BYU — both above the CFP cut-line — would have qualified this year; the 2025 CFP's conference-champion auto-bid rule excluded them in favor of Tulane and James Madison."
   - **New (terse version):** "The 2025 Champions Field. Twenty-four teams organized into three snake-draft divisions. The top twelve qualify for the College Football Playoff."
   - Tune length during build. Default to the terse version if the long one reads heavy in context; the longer framing can live in the essay or a pullquote.
4. Update `keyVisual.figureLabel` if needed (currently "Fig. 1" — probably unchanged).

---

## 8. Acceptance criteria

- [ ] SVG renders correctly at desktop (≥1024px), tablet (640–1023px), and mobile (<640px)
- [ ] All 24 teams present, correctly placed per snake-draft pattern
- [ ] CFP cut-line renders between rows 4 and 5, spanning all three columns
- [ ] Roman numerals I · II · III render centered over each column in oxblood serif italic
- [ ] Records render right-aligned with tabular numerals
- [ ] No client JS (verify with Lighthouse / browser devtools: no hydration, no scripts injected by the component)
- [ ] Accessibility: `<title>`, `<desc>`, `role="img"`, `aria-labelledby` all present and meaningful
- [ ] Works in dark mode if site ever has one (no hardcoded colors outside CSS vars — future-proofing)
- [ ] Build passes: `npm run build` completes without TypeScript or lint errors
- [ ] Lighthouse scores preserved at 95+

---

## 9. Explicit non-goals (this session)

- Calendar graphic (two-track postseason) — separate session
- Promotion/relegation flow diagram — separate session
- CFP bracket (12-team) — lives on `/proposal`, separate session
- Retrospective years (2023, 2024) — data is there but not this session's job
- Interactive/animated versions — not on the landing page, possibly `/simulator` stage 2
- Real logos or team colors — editorial register, typography-only

---

## 10. Open questions flagged during build

If any of these come up during implementation, pause and surface them rather than deciding unilaterally:

- If SVG text rendering of team names looks tight at any viewport, either reduce font size or switch to short names earlier — don't truncate or letter-space-compress.
- If the CFP cut-line eyebrow (`CFP`) reads too quiet for its role, consider swapping the label position (above → below the line) or making the rule slightly heavier.
- If the shortName list needs adjustment (e.g., "Ole Miss" is already short; "Ga Tech" might be unsatisfying), flag rather than edit — the 24 short names should feel coherent as a set.
