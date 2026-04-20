import type { JSX } from 'react';

/* ============================================================
   Types — exported so the data file can import FieldData.
   ============================================================ */

export type FieldTeam = {
  /** Full team name; used at desktop/tablet widths. */
  name: string;
  /** Abbreviated name; swapped in at <640px where the column narrows. */
  shortName: string;
  /** 1–24. Source of truth for division assignment and row order. */
  seed: number;
  /** Display record, e.g. "11-1". Rendered with tabular numerals. */
  record: string;
  /** Conference of record for the season — captured in data, not rendered. */
  conference?: string;
};

export type FieldData = {
  /** Season label, e.g. "2025". */
  season: string;
  /** Length 24, ordered by seed ascending (teams[0].seed === 1). */
  teams: FieldTeam[];
  /** Seed at/below which teams fall below the CFP cut-line. Proposal-wide: 12. */
  cfpCutSeed: number;
};

export type ChampionsFieldProps = {
  data: FieldData;
  /** Id for the SVG `<title>` — wire to `aria-labelledby` on the figure container if needed. */
  titleId?: string;
  /**
   * Force a layout variant. Defaults to `'auto'`, which renders both
   * variants and toggles them with CSS media queries — no client JS,
   * no hydration cost.
   */
  forceLayout?: 'wide' | 'narrow' | 'auto';
};

/* ============================================================
   Snake-draft division assignment.

   Per the Champions Conference spec § 3, the 24 seeds snake across
   three divisions in a pattern that balances seed sums to 100/100/100:

     1→A  2→B  3→C  4→C  5→B  6→A
     7→A  8→B  9→C 10→C 11→B 12→A
    13→A 14→B 15→C 16→C 17→B 18→A
    19→A 20→B 21→C 22→C 23→B 24→A

   The pattern repeats every 6 seeds with period [A,B,C,C,B,A]. This
   is a 24-element pure lookup; inlining it here keeps the component
   self-contained. If the calendar or flow-diagram visuals ever need
   the same helper we'll extract it.
   ============================================================ */

const SNAKE_PATTERN = ['I', 'II', 'III', 'III', 'II', 'I'] as const;
type Division = (typeof SNAKE_PATTERN)[number];

function seedToDivision(seed: number): Division {
  return SNAKE_PATTERN[(seed - 1) % 6];
}

/** Given all 24 teams, return them grouped and ordered by division column. */
function partitionByDivision(teams: FieldTeam[]): Record<Division, FieldTeam[]> {
  const out: Record<Division, FieldTeam[]> = { I: [], II: [], III: [] };
  // Iterate in seed order so each division ends up in ascending-seed order.
  [...teams]
    .sort((a, b) => a.seed - b.seed)
    .forEach((t) => {
      out[seedToDivision(t.seed)].push(t);
    });
  return out;
}

/* ============================================================
   Layout geometry — two variants.

   Wide (desktop/tablet): 16:9, 1600×900 viewBox. Spec § 4.
   Narrow (mobile): ~4:5, 1000×1250 viewBox. Spec § 5.

   Both variants share the same structural logic; only the numbers
   differ. Typing the layout object forces both variants to stay in
   sync with the rendering code.
   ============================================================ */

type Layout = {
  viewBox: string;
  /** Column x-origin (left edge) for each division. */
  columnX: Record<Division, number>;
  columnWidth: number;
  /** Baseline y for the Roman-numeral column header. */
  headerBaselineY: number;
  headerFontSize: number;
  /** Top of the first cell; subsequent cells stack by `rowHeight`. */
  cellTopY: number;
  rowHeight: number;
  /** Y of the CFP cut-line — falls between row 4 and row 5. */
  cutLineY: number;
  /** Left/right x-extent of the cut-line across all three columns. */
  cutLineX1: number;
  cutLineX2: number;
  /** Font sizes for cell content. */
  teamNameSize: number;
  seedSize: number;
  recordSize: number;
  /** Eyebrow (CFP) font size. */
  eyebrowSize: number;
  /** Left inset inside a column for the seed number. */
  seedInset: number;
  /** Left inset inside a column for the team-name start. */
  nameInset: number;
};

const WIDE: Layout = {
  viewBox: '0 0 1600 900',
  // Col I: 80..512. Col II: 584..1016. Col III: 1088..1520.
  // Gutter between columns is 72 (584-512 = 72, 1088-1016 = 72).
  columnX: { I: 80, II: 584, III: 1088 },
  columnWidth: 432,
  headerBaselineY: 150,
  headerFontSize: 64,
  cellTopY: 230,
  rowHeight: 64,
  // 230 + 4*64 = 486. Clean cut between row 4 (seeds 10/11/12) and row 5.
  cutLineY: 486,
  cutLineX1: 80,
  cutLineX2: 1520,
  teamNameSize: 26,
  seedSize: 16,
  recordSize: 20,
  eyebrowSize: 14,
  seedInset: 16,
  nameInset: 44, // seed takes ~20 + small gap; places name clear of wider seeds like "23"
};

const NARROW: Layout = {
  viewBox: '0 0 1000 1250',
  // 3 columns of 280 + 2 gutters of 48 = 936. 32 padding L/R fills 1000.
  columnX: { I: 32, II: 360, III: 688 },
  columnWidth: 280,
  headerBaselineY: 140,
  headerFontSize: 48,
  cellTopY: 220,
  rowHeight: 110,
  // 220 + 4*110 = 660.
  cutLineY: 660,
  cutLineX1: 32,
  cutLineX2: 968,
  teamNameSize: 30,
  seedSize: 18,
  recordSize: 22,
  eyebrowSize: 16,
  seedInset: 8,
  nameInset: 40,
};

/* ============================================================
   Subrender: a single SVG at a given layout.
   ============================================================ */

type FieldSVGProps = {
  data: FieldData;
  layout: Layout;
  variant: 'wide' | 'narrow';
  titleId: string;
  descId: string;
};

function FieldSVG({ data, layout, variant, titleId, descId }: FieldSVGProps) {
  const byDivision = partitionByDivision(data.teams);
  const divisions: Division[] = ['I', 'II', 'III'];

  // Eyebrow geometry — a breathing rect behind the CFP label so the
  // rule doesn't pass through the letterforms. Width is a generous
  // estimate for a 3-character uppercase word at `eyebrowSize`.
  const eyebrowText = 'CFP';
  const eyebrowCenterX = (layout.cutLineX1 + layout.cutLineX2) / 2;
  const eyebrowPadX = layout.eyebrowSize * 0.9;
  const eyebrowPadY = layout.eyebrowSize * 0.35;
  // Rough text-width estimate: 3 letters * 0.68em, plus tracked 0.14em
  // giving roughly 0.82em per letter. Slightly conservative is fine here.
  const eyebrowTextWidth = layout.eyebrowSize * 0.82 * eyebrowText.length;
  const eyebrowBgWidth = eyebrowTextWidth + eyebrowPadX * 2;
  const eyebrowBgHeight = layout.eyebrowSize + eyebrowPadY * 2;
  const eyebrowBgX = eyebrowCenterX - eyebrowBgWidth / 2;
  const eyebrowBgY = layout.cutLineY - eyebrowBgHeight / 2;
  const eyebrowTextY = layout.cutLineY + layout.eyebrowSize / 2 - eyebrowPadY * 0.15;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={layout.viewBox}
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      className={`champions-field-svg champions-field-svg--${variant}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={titleId}>
        {`The ${data.season} Champions Field — ${data.teams.length} teams organized into three divisions, with the top twelve CFP-qualifying.`}
      </title>
      <desc id={descId}>
        {divisions
          .map((d) => {
            const list = byDivision[d]
              .map((t) => `#${t.seed} ${t.name} (${t.record})`)
              .join(', ');
            return `Division ${d}: ${list}.`;
          })
          .join(' ') +
          ` The CFP cut-line falls after seed ${data.cfpCutSeed}: seeds 1 through ${data.cfpCutSeed} qualify for the College Football Playoff; seeds ${data.cfpCutSeed + 1} through ${data.teams.length} play for bowl positioning or face relegation.`}
      </desc>

      {/* Column headers — I · II · III */}
      {divisions.map((d) => {
        const cx = layout.columnX[d] + layout.columnWidth / 2;
        return (
          <text
            key={`hdr-${d}`}
            x={cx}
            y={layout.headerBaselineY}
            textAnchor="middle"
            fontFamily="var(--font-serif)"
            fontSize={layout.headerFontSize}
            fontStyle="italic"
            fontWeight="600"
            fill="var(--color-oxblood)"
            style={{ fontVariationSettings: `'opsz' 48` }}
          >
            {d}
          </text>
        );
      })}

      {/* Team cells, per column */}
      {divisions.map((d) => {
        const colX = layout.columnX[d];
        const colRight = colX + layout.columnWidth;
        return (
          <g key={`col-${d}`}>
            {byDivision[d].map((team, row) => {
              // Baseline sits at the vertical center of the cell. Because
              // `dominant-baseline="middle"` aligns the text's em-box center
              // rather than its baseline, and SVG text defaults to baseline
              // alignment, we compute cell center and use middle-baseline
              // for consistent vertical positioning.
              const cellCenterY = layout.cellTopY + row * layout.rowHeight + layout.rowHeight / 2;
              const seedLabel = String(team.seed);
              const displayName = variant === 'narrow' ? team.shortName : team.name;
              return (
                <g key={`team-${team.seed}`}>
                  {/* Seed — oxblood, sans, tabular */}
                  <text
                    x={colX + layout.seedInset}
                    y={cellCenterY}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontFamily="var(--font-sans)"
                    fontSize={layout.seedSize}
                    fontWeight="500"
                    fill="var(--color-oxblood)"
                    style={{ fontVariantNumeric: 'tabular-nums lining-nums' }}
                  >
                    {seedLabel}
                  </text>
                  {/* Team name — ink, sans */}
                  <text
                    x={colX + layout.nameInset}
                    y={cellCenterY}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontFamily="var(--font-sans)"
                    fontSize={layout.teamNameSize}
                    fontWeight="500"
                    fill="var(--color-ink)"
                  >
                    {displayName}
                  </text>
                  {/* Record — ink-muted, sans, tabular, right-aligned */}
                  <text
                    x={colRight}
                    y={cellCenterY}
                    textAnchor="end"
                    dominantBaseline="middle"
                    fontFamily="var(--font-sans)"
                    fontSize={layout.recordSize}
                    fontWeight="400"
                    fill="var(--color-ink-muted)"
                    style={{ fontVariantNumeric: 'tabular-nums lining-nums' }}
                  >
                    {team.record}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* CFP cut-line — single horizontal rule across all three columns */}
      <line
        x1={layout.cutLineX1}
        x2={layout.cutLineX2}
        y1={layout.cutLineY}
        y2={layout.cutLineY}
        stroke="var(--color-oxblood)"
        strokeWidth={2}
      />
      {/* Breathing background under the eyebrow label so the rule
          doesn't pass through the letterforms. */}
      <rect
        x={eyebrowBgX}
        y={eyebrowBgY}
        width={eyebrowBgWidth}
        height={eyebrowBgHeight}
        fill="var(--color-paper-deep)"
      />
      <text
        x={eyebrowCenterX}
        y={eyebrowTextY}
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize={layout.eyebrowSize}
        fontWeight="500"
        letterSpacing="0.14em"
        fill="var(--color-oxblood)"
      >
        {eyebrowText}
      </text>
    </svg>
  );
}

/* ============================================================
   ChampionsField — the exported component.

   Default (`forceLayout: 'auto'`) renders BOTH variants, wrapped in
   `.champions-field-wide` / `.champions-field-narrow` divs that are
   toggled by a `@media (max-width: 639px)` rule in globals.css. The
   duplicated SVG markup is small; the payoff is a script-free, zero-
   hydration responsive image that survives any JS failure.

   `forceLayout: 'wide' | 'narrow'` renders only one variant. Useful
   for storybook-style isolation or for contexts where the viewport
   is known.
   ============================================================ */

export function ChampionsField({
  data,
  titleId = 'champions-field-title',
  forceLayout = 'auto',
}: ChampionsFieldProps): JSX.Element {
  const wideTitleId = `${titleId}-wide`;
  const narrowTitleId = `${titleId}-narrow`;
  const wideDescId = `${titleId}-wide-desc`;
  const narrowDescId = `${titleId}-narrow-desc`;

  if (forceLayout === 'wide') {
    return (
      <div className="champions-field-wide">
        <FieldSVG data={data} layout={WIDE} variant="wide" titleId={wideTitleId} descId={wideDescId} />
      </div>
    );
  }
  if (forceLayout === 'narrow') {
    return (
      <div className="champions-field-narrow">
        <FieldSVG data={data} layout={NARROW} variant="narrow" titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    );
  }
  return (
    <>
      <div className="champions-field-wide">
        <FieldSVG data={data} layout={WIDE} variant="wide" titleId={wideTitleId} descId={wideDescId} />
      </div>
      <div className="champions-field-narrow">
        <FieldSVG data={data} layout={NARROW} variant="narrow" titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    </>
  );
}
