import type { JSX } from 'react';

/* ============================================================
   PromotionRelegation — Chapter IV boundary-crossing exchange.

   The annual churn across the Champions Conference membership line:
   positions 23/24 relegated, 21/22 into the Boundary Games, and the
   Promotion Playoff's two semifinal winners promoted while its two
   semifinal losers — reseeded by original standing — enter the
   Boundary Games opposite 22 and 21.

   Cousin of ChampionsField.tsx: pure SVG, zero client JS, dual-viewBox
   (wide / narrow) toggled by the site-wide `@media (max-width: 639px)`
   rule in globals.css. Unlike the Field, this asset carries no data
   input — the mechanics are fixed by the CC spec — so both variants
   are static markup rather than data-driven.

   NOT a bracket. The Promotion Playoff's internal tournament is a
   separate asset (site-spec § 10, item 3c). This figure shows only
   what the playoff EMITS onto the boundary: the calm relegation
   column against the abstracted promotion feeder. The two visual
   temperatures encode the chapter's asymmetry.

   Stroke tiers (weights per the locked Ch IV edit):
     spine     4px    oxblood      — the membership line + Boundary Games
     exchange  1.08px ink-muted    — contested paths (21, 22, both losers)
     drop      0.75px ink-muted    — settled paths (23, 24 down; winners up)

   Type roles (proposal-working-spec § 2.5): Source Serif for named
   and structural labels, IBM Plex Mono for positions and the tally,
   IBM Plex Sans for eyebrows.
   ============================================================ */

export type PromotionRelegationProps = {
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
   Wide variant — 1600×900 landscape.
   ============================================================ */

function WideSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg
      viewBox="0 0 1600 900"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>
        Promotion and relegation — the annual exchange across the Champions Conference membership line.
      </title>
      <desc id={descId}>
        A horizontal membership line divides the field. Above it, the foot of the Champions Conference
        final standings: positions 21 through 24. Positions 23 and 24 drop across the line and are
        relegated to their home conferences. Positions 21 and 22 converge onto the line, where the two
        Boundary Games sit. Below the line, the Promotion Playoff sends its two semifinal winners up
        across the line into the Champions Conference, while its two semifinal losers — reseeded by
        original standing, higher and lower remaining seed — converge onto the line to meet positions
        22 and 21 in the Boundary Games. Four teams leave and four arrive each year, about seventeen
        percent of the field.
      </desc>

      {/* Title / tally */}
      <text x={84} y={817} fontFamily="var(--font-mono)" fontSize={20} fontWeight={500} fill="var(--color-ink)" style={{ fontVariantNumeric: 'tabular-nums lining-nums' }}>
        4 / 24 &#8776; 17%
      </text>
      <text x={252} y={817} fontFamily="var(--font-sans)" fontSize={16} fill="var(--color-ink-muted)">
        of the field turns over every year
      </text>

      {/* Standings header */}
      <text x={84} y={98} fontFamily="var(--font-serif)" fontSize={24} fontWeight={600} fill="var(--color-ink)" style={{ fontVariationSettings: "'opsz' 24" }}>
        Champions Conference
      </text>
      <text x={84} y={122} fontFamily="var(--font-sans)" fontSize={12} fontWeight={500} letterSpacing="0.14em" fill="var(--color-ink-faint)">
        FINAL STANDINGS
      </text>

      {/* Positions 21–24 */}
      {[
        { n: '21', y: 196 },
        { n: '22', y: 246 },
        { n: '23', y: 296 },
        { n: '24', y: 346 },
      ].map(({ n, y }) => (
        <text key={n} x={196} y={y} textAnchor="end" fontFamily="var(--font-mono)" fontSize={22} fontWeight={500} fill="var(--color-ink)" style={{ fontVariantNumeric: 'tabular-nums lining-nums' }}>
          {n}
        </text>
      ))}

      {/* Relegation drops (23, 24) — settled tier */}
      <polyline points="210 289.15 348.33 289.15 348.33 543.08" stroke="var(--color-ink-muted)" strokeWidth={0.75} fill="none" />
      <circle cx={348.33} cy={543.08} r={2.82} fill="var(--color-ink-muted)" />
      <polyline points="210 339.01 275.53 339.01 275.53 543.08" stroke="var(--color-ink-muted)" strokeWidth={0.75} fill="none" />
      <circle cx={275.53} cy={543.08} r={2.82} fill="var(--color-ink-muted)" />
      <text x={168} y={580} fontFamily="var(--font-serif)" fontSize={20} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 20" }}>
        Relegated to Home conferences
      </text>

      {/* 21, 22 converge to Boundary Games — contested tier */}
      <polyline points="210 187.75 920 187.75 920 386.99" stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />
      <polyline points="210 236.15 640 236.15 640 386.99" stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />

      {/* Promotion winners rise to CC — settled tier */}
      <polyline points="1326.06 497.71 1326.06 320.24" stroke="var(--color-ink-muted)" strokeWidth={0.75} fill="none" />
      <circle cx={1326.06} cy={320.38} r={2.82} fill="var(--color-ink-muted)" />
      <text x={1098} y={269} fontFamily="var(--font-serif)" fontSize={20} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 20" }}>
        Promotion Playoff Semi-Final Winners promoted to
      </text>
      <text x={1222} y={294} fontFamily="var(--font-serif)" fontSize={20} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 20" }}>
        Champions Conference
      </text>
      <text x={1238} y={523} fontFamily="var(--font-serif)" fontSize={20} fontWeight={600} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 20" }}>
        Semi-Final Winners
      </text>

      {/* Semi-Final Losers box — faint hairline */}
      <rect x={1206.06} y={578.98} width={244.73} height={179.64} stroke="var(--color-ink-faint)" strokeWidth={0.75} fill="none" />
      <text x={1242} y={609} fontFamily="var(--font-serif)" fontSize={20} fontWeight={600} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 20" }}>
        Semi-Final Losers
      </text>
      <text x={1227} y={664} fontFamily="var(--font-sans)" fontSize={20} fill="var(--color-ink-muted)">
        Lower remaining seed
      </text>
      <text x={1225} y={732} fontFamily="var(--font-sans)" fontSize={20} fill="var(--color-ink-muted)">
        Higher remaining seed
      </text>

      {/* Losers converge to Boundary Games — contested tier.
          Higher seed → PP #3 → CC #22 (left game); lower → PP #4 → CC #21 (right game). */}
      <polyline points="1206.06 657.78 920 657.78 920 432.38" stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />
      <polyline points="1206.06 726.61 640 726.61 640 432.38" stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />

      {/* Membership line — spine, broken at each node */}
      <line x1={80} y1={407.56} x2={555} y2={407.56} stroke="var(--color-oxblood)" strokeWidth={4} />
      <line x1={725} y1={407.56} x2={835} y2={407.56} stroke="var(--color-oxblood)" strokeWidth={4} />
      <line x1={1005} y1={407.56} x2={1520} y2={407.56} stroke="var(--color-oxblood)" strokeWidth={4} />

      <rect x={84} y={394.56} width={132} height={26} fill="var(--color-paper)" />
      <text x={99} y={413} fontFamily="var(--font-sans)" fontSize={13} fontWeight={500} letterSpacing="0.14em" fill="var(--color-oxblood)">
        MEMBERSHIP
      </text>

      <rect x={555} y={390.56} width={170} height={34} fill="var(--color-paper)" />
      <text x={640} y={413} textAnchor="middle" fontFamily="var(--font-serif)" fontSize={18} fontWeight={600} fill="var(--color-oxblood)" style={{ fontVariationSettings: "'opsz' 18" }}>
        Boundary Game
      </text>
      <rect x={835} y={390.56} width={170} height={34} fill="var(--color-paper)" />
      <text x={920} y={413} textAnchor="middle" fontFamily="var(--font-serif)" fontSize={18} fontWeight={600} fill="var(--color-oxblood)" style={{ fontVariationSettings: "'opsz' 18" }}>
        Boundary Game
      </text>

      {/* Promotion Playoff footer */}
      <text x={1224} y={817} fontFamily="var(--font-serif)" fontSize={24} fontWeight={600} fill="var(--color-ink)" style={{ fontVariationSettings: "'opsz' 24" }}>
        Promotion Playoff
      </text>
      <text x={1219} y={847} fontFamily="var(--font-sans)" fontSize={12} fontWeight={500} letterSpacing="0.14em" fill="var(--color-ink-faint)">
        TEN CONFERENCE CHAMPIONS
      </text>
    </svg>
  );
}

/* ============================================================
   Narrow variant — 720×1040 portrait. Same topology, stacked.
   ============================================================ */

function NarrowSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg
      viewBox="0 0 720 1040"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>
        Promotion and relegation — the annual exchange across the Champions Conference membership line.
      </title>
      <desc id={descId}>
        The foot of the Champions Conference standings, positions 21 to 24, sits above a horizontal
        membership line. Positions 23 and 24 are relegated to their home conferences; positions 21 and
        22 meet the two Boundary Games on the line. Below, the Promotion Playoff sends its two semifinal
        winners up into the Champions Conference and its two semifinal losers, reseeded by original
        standing, into the Boundary Games. Four teams leave and four arrive each year.
      </desc>

      {/* Header */}
      <text x={40} y={52} fontFamily="var(--font-serif)" fontSize={22} fontWeight={600} fill="var(--color-ink)" style={{ fontVariationSettings: "'opsz' 22" }}>
        Champions Conference
      </text>
      <text x={40} y={74} fontFamily="var(--font-sans)" fontSize={11} fontWeight={500} letterSpacing="0.14em" fill="var(--color-ink-faint)">
        FINAL STANDINGS
      </text>

      {/* Positions 21–24 */}
      {[
        { n: '21', y: 132 },
        { n: '22', y: 176 },
        { n: '23', y: 220 },
        { n: '24', y: 264 },
      ].map(({ n, y }) => (
        <text key={n} x={96} y={y} textAnchor="end" fontFamily="var(--font-mono)" fontSize={20} fontWeight={500} fill="var(--color-ink)" style={{ fontVariantNumeric: 'tabular-nums lining-nums' }}>
          {n}
        </text>
      ))}

      {/* Relegation drops — settled tier */}
      <polyline points="110 214 190 214 190 560 150 560 150 700" stroke="var(--color-ink-muted)" strokeWidth={0.75} fill="none" />
      <circle cx={150} cy={700} r={2.6} fill="var(--color-ink-muted)" />
      <polyline points="110 258 230 258 230 700" stroke="var(--color-ink-muted)" strokeWidth={0.75} fill="none" />
      <circle cx={230} cy={700} r={2.6} fill="var(--color-ink-muted)" />
      <text x={80} y={735} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 17" }}>
        Relegated to Home conferences
      </text>

      {/* 21, 22 to Boundary Games — contested tier */}
      <polyline points="110 126 330 126 330 470" stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />
      <polyline points="110 170 520 170 520 470" stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />

      {/* Membership line — spine, broken at nodes */}
      <line x1={40} y1={490} x2={255} y2={490} stroke="var(--color-oxblood)" strokeWidth={4} />
      <line x1={405} y1={490} x2={445} y2={490} stroke="var(--color-oxblood)" strokeWidth={4} />
      <line x1={595} y1={490} x2={680} y2={490} stroke="var(--color-oxblood)" strokeWidth={4} />

      <rect x={40} y={478} width={118} height={24} fill="var(--color-paper)" />
      <text x={52} y={494} fontFamily="var(--font-sans)" fontSize={12} fontWeight={500} letterSpacing="0.14em" fill="var(--color-oxblood)">
        MEMBERSHIP
      </text>

      <rect x={255} y={474} width={150} height={32} fill="var(--color-paper)" />
      <text x={268} y={495} fontFamily="var(--font-serif)" fontSize={16} fontWeight={600} fill="var(--color-oxblood)" style={{ fontVariationSettings: "'opsz' 16" }}>
        Boundary Game
      </text>
      <rect x={445} y={474} width={150} height={32} fill="var(--color-paper)" />
      <text x={458} y={495} fontFamily="var(--font-serif)" fontSize={16} fontWeight={600} fill="var(--color-oxblood)" style={{ fontVariationSettings: "'opsz' 16" }}>
        Boundary Game
      </text>

      {/* Promotion winners rise into CC — far-right riser */}
      <line x1={634.9} y1={558} x2={634.9} y2={420} stroke="var(--color-ink-muted)" strokeWidth={0.75} />
      <circle cx={634.9} cy={420} r={2.6} fill="var(--color-ink-muted)" />
      <text x={605} y={375} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 17" }}>
        Winners
      </text>
      <text x={576} y={396} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 17" }}>
        promoted to CC
      </text>
      <text x={601} y={576} fontFamily="var(--font-serif)" fontSize={17} fontWeight={600} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 17" }}>
        Winners
      </text>

      {/* Semi-Final Losers box */}
      <rect x={445} y={702.6} width={210} height={150} stroke="var(--color-ink-faint)" strokeWidth={0.75} fill="none" />
      <text x={477} y={735} fontFamily="var(--font-serif)" fontSize={17} fontWeight={600} fill="var(--color-ink-muted)" style={{ fontVariationSettings: "'opsz' 17" }}>
        Semi-Final Losers
      </text>
      <text x={475} y={785} fontFamily="var(--font-sans)" fontSize={16} fill="var(--color-ink-muted)">
        Lower remaining seed
      </text>
      <text x={475} y={829} fontFamily="var(--font-sans)" fontSize={16} fill="var(--color-ink-muted)">
        Higher remaining seed
      </text>

      {/* Losers converge up to Boundary Games — exit box top edge.
          Higher seed → CC #22 (left game, x330); lower → CC #21 (right game, x520). */}
      <line x1={519.84} y1={700} x2={520} y2={510} stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />
      <polyline points="585 700.64 585 650 330 650 330 510" stroke="var(--color-ink-muted)" strokeWidth={1.08} fill="none" />

      {/* Footer tally + PP label */}
      <text x={40} y={960} fontFamily="var(--font-mono)" fontSize={18} fontWeight={500} fill="var(--color-ink)" style={{ fontVariantNumeric: 'tabular-nums lining-nums' }}>
        4 / 24 &#8776; 17%
      </text>
      <text x={188} y={960} fontFamily="var(--font-sans)" fontSize={14} fill="var(--color-ink-muted)">
        of the field turns over every year
      </text>
      <text x={453} y={939} fontFamily="var(--font-serif)" fontSize={22} fontWeight={600} fill="var(--color-ink)" style={{ fontVariationSettings: "'opsz' 22" }}>
        Promotion Playoff
      </text>
      <text x={451} y={961} fontFamily="var(--font-sans)" fontSize={11} fontWeight={500} letterSpacing="0.14em" fill="var(--color-ink-faint)">
        TEN CONFERENCE CHAMPIONS
      </text>
    </svg>
  );
}

/* ============================================================
   PromotionRelegation — the exported component.

   Default (`forceLayout: 'auto'`) renders BOTH variants, wrapped in
   `.promotion-relegation-wide` / `.promotion-relegation-narrow` divs
   toggled by the `@media (max-width: 639px)` rule in globals.css —
   the same breakpoint as ChampionsField.
   ============================================================ */

export function PromotionRelegation({
  titleId = 'promotion-relegation-title',
  forceLayout = 'auto',
}: PromotionRelegationProps): JSX.Element {
  const wideTitleId = `${titleId}-wide`;
  const narrowTitleId = `${titleId}-narrow`;
  const wideDescId = `${titleId}-wide-desc`;
  const narrowDescId = `${titleId}-narrow-desc`;

  if (forceLayout === 'wide') {
    return (
      <div className="promotion-relegation-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
    );
  }
  if (forceLayout === 'narrow') {
    return (
      <div className="promotion-relegation-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    );
  }
  return (
    <>
      <div className="promotion-relegation-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
      <div className="promotion-relegation-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    </>
  );
}
