import type { JSX } from 'react';

/* ============================================================
   PromotionPlayoffBracket — site-spec item 3c: the internal
   ten-team Promotion Playoff that Chapter IV deliberately abstracts.

   The complement to PromotionRelegation (Ch IV): where Ch IV shows the
   whole exchange abstracted, 3c explodes the promotion side into its
   full internal tournament. Reads TOP-TO-BOTTOM and converges to a
   SPLIT, not a champion — the Promotion Playoff has no championship
   game (both semifinal winners are promoted; the semifinals ARE the
   final round). Deliberately NOT shaped like the Ch V CFP bracket,
   which expands left-to-right to a single apex; this one opens at the
   end into promotion (out) and the re-seed (down to the boundary).

   The re-seed is drawn honestly: the two semifinal losers enter a gate
   ("re-seed by original standing / higher / lower"), and two
   undifferentiated lines drop to a SINGLE Boundary Games node on the
   oxblood membership line. Nothing downstream commits to which loser
   is higher — the conditional is resolved inside the gate. This is the
   thing Ch IV could not draw in its cramped hinge.

   Geometry authored by Michael in Illustrator; re-tokenized here.
   Cousin of ChampionsField / PromotionRelegation / ChampionsBracket:
   pure SVG, zero client JS. Wide 1000×1040; narrow variant TBD.

   Family motifs inherited: 4px oxblood boundary (shared with Ch IV
   spine and the Champions Field cut-line), mono seeds (shared with
   Ch V), "higher/lower remaining seed" descriptive labels (shared
   with Ch IV — avoids the "PP #3" collision with entry seed #3).
   ============================================================ */

export type PromotionPlayoffBracketProps = {
  titleId?: string;
  forceLayout?: 'wide' | 'narrow' | 'auto';
};

function WideSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 1000 1040" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        The Promotion Playoff — ten conference champions, converging not to a trophy but to a split.
      </title>
      <desc id={descId}>
        Ten conference champions enter a bracket that flows downward. A play-in round (nine versus ten, seven versus
        eight) feeds the quarterfinals, where seeds one through six await; the quarterfinals converge to two semifinals.
        The tournament has no championship game: both semifinal winners are promoted directly to the Champions
        Conference, and the two semifinal losers are re-seeded by original standing into a single set of Boundary Games
        on the membership line. The bracket does not narrow to one champion; it opens at the end into promotion and the
        boundary. This is the internal detail of the promotion side of Chapter Four's exchange.
      </desc>
      <rect x={0} y={0} width={1000} height={1040} fill="var(--color-paper)" />
      <text x={60} y={56} fontFamily="var(--font-serif)" fontSize={24} fill="var(--color-ink)" fontWeight={700}>Promotion Playoff</text>
      <text x={60} y={80} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".14em">TEN CONFERENCE CHAMPIONS &#8212; NO CHAMPIONSHIP GAME</text>
      <text x={60} y={180} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">PLAY-IN</text>
      <text x={60} y={330} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">QUARTERS</text>
      <text x={60} y={500} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">SEMIFINALS</text>
      <text x={252.64} y={129.98} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>9</text>
      <text x={288.14} y={129.98} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>10</text>
      <path d="M257.14,140v32h40v-32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={855.5} y={129.98} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>7</text>
      <text x={895.5} y={129.98} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>8</text>
      <path d="M860,140v32h40v-32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M880,172v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={171.87} y={292} fontFamily="var(--font-mono)" fontSize={16} fill="var(--color-ink)" fontWeight={500}>1</text>
      <text x={372.82} y={292} fontFamily="var(--font-mono)" fontSize={16} fill="var(--color-ink)" fontWeight={500}>4</text>
      <text x={473.3} y={292} fontFamily="var(--font-mono)" fontSize={16} fill="var(--color-ink)" fontWeight={500}>5</text>
      <text x={573.77} y={292} fontFamily="var(--font-mono)" fontSize={16} fill="var(--color-ink)" fontWeight={500}>3</text>
      <text x={674.25} y={292} fontFamily="var(--font-mono)" fontSize={16} fill="var(--color-ink)" fontWeight={500}>6</text>
      <text x={774.72} y={292} fontFamily="var(--font-mono)" fontSize={16} fill="var(--color-ink)" fontWeight={500}>2</text>
      <path d="M176.67,308v32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M277.14,172v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M377.62,308v32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M478.1,308v32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M578.57,308v32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M679.05,308v32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M779.52,308v32" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M176.67,340h100.48" fill="none" stroke="var(--color-ink-muted)" strokeWidth={.96} />
      <path d="M377.62,340h100.48" fill="none" stroke="var(--color-ink-muted)" strokeWidth={.96} />
      <path d="M427.86,340v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M578.57,340h100.48" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M628.81,340v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M780,340h100" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M829.76,340v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M226.91,340v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M226.91,508h200.95" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M327.38,508v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.45} />
      <path d="M628.81,508h200.95" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M729.29,508v168" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M326.42,676h-149.75v73.62" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.08} />
      <path d="M729.29,676h100.48v73.62" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.08} />
      <text x={137} y={771.62} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-ink-muted)" fontWeight={700}>Promoted</text>
      <text x={101.55} y={793.62} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-ink-muted)">to Champions Conf.</text>
      <text x={790.09} y={771.62} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-ink-muted)" fontWeight={700}>Promoted</text>
      <text x={754.64} y={793.62} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-ink-muted)">to Champions Conf.</text>
      <path d="M327.38,676h150.71v64" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.08} />
      <path d="M729.29,676h-200.95v63.23" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.08} />
      <rect x={377.62} y={740} width={251.19} height={70} fill="none" stroke="var(--color-ink-faint)" strokeWidth={.75} />
      <text x={415.98} y={766} fontFamily="var(--font-sans)" fontSize={14} fill="var(--color-ink-muted)">re-seed by original standing</text>
      <text x={417.22} y={794} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>higher</text>
      <text x={545.29} y={794} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>lower</text>
      <path d="M478.1,810v110" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.08} />
      <path d="M528.33,810v110" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.08} />
      <line x1={60} y1={940} x2={410} y2={940} stroke="var(--color-oxblood)" strokeWidth={4} />
      <line x1={590} y1={940} x2={940} y2={940} stroke="var(--color-oxblood)" strokeWidth={4} />
      <rect x={410} y={924} width={180} height={32} fill="var(--color-paper)" />
      <text x={436.97} y={945} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-oxblood)" fontWeight={700}>Boundary Games</text>
      <text x={60} y={978} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-oxblood)" fontWeight={500} letterSpacing=".14em">MEMBERSHIP LINE &#8212; SEE CHAPTER IV</text>
    </svg>
  );
}

function NarrowSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 720 1200" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        The Promotion Playoff — ten conference champions, converging not to a trophy but to a split.
      </title>
      <desc id={descId}>
        Ten conference champions enter a bracket that flows downward. A play-in round feeds the quarterfinals; the
        quarterfinals converge to two semifinals. There is no championship game: both semifinal winners are promoted,
        and the two semifinal losers are re-seeded by original standing into a single set of Boundary Games on the
        membership line. The bracket opens at the end into promotion and the boundary.
      </desc>
      <rect x={0} y={0} width={720} height={1200} fill="var(--color-paper)" />
      <text x={40} y={50} fontFamily="var(--font-serif)" fontSize={22} fill="var(--color-ink)" fontWeight={700}>Promotion Playoff</text>
      <text x={40} y={72} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".14em">TEN CHAMPIONS &#8212; NO CHAMPIONSHIP GAME</text>
      <text x={40} y={150} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">PLAY-IN</text>
      <text x={40} y={320} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">QUARTERS</text>
      <text x={40} y={520} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">SEMIFINALS</text>
      <text x={174.59} y={112.99} fontFamily="var(--font-mono)" fontSize={14} fill="var(--color-ink-muted)" fontWeight={500}>9</text>
      <text x={206.39} y={112.99} fontFamily="var(--font-mono)" fontSize={14} fill="var(--color-ink-muted)" fontWeight={500}>10</text>
      <path d="M178.79,121v29h36v-29" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M196.79,150v180" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={566.3} y={112.99} fontFamily="var(--font-mono)" fontSize={14} fill="var(--color-ink-muted)" fontWeight={500}>7</text>
      <text x={602.3} y={112.99} fontFamily="var(--font-mono)" fontSize={14} fill="var(--color-ink-muted)" fontWeight={500}>8</text>
      <path d="M570.5,121v29h36v-29" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M588.5,150v180" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={127} y={290} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>1</text>
      <text x={257.57} y={290} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>4</text>
      <text x={322.86} y={290} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>5</text>
      <text x={388.14} y={290} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>3</text>
      <text x={453.43} y={290} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>6</text>
      <text x={518.71} y={290} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>2</text>
      <path d="M131.5,300v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M262.07,300v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M327.36,300v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M392.64,300v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M457.93,300v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M523.21,300v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M131.5,330h65.29" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M164.14,330v210" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M262.07,330h65.29" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M294.71,330v210" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M392.64,330h65.29" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M425.29,330v210" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M523.21,330h63.39" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M555.86,330v210" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M164.14,540h130.57" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M229.43,540v150" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M425.29,540h130.57" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M490.57,540v150" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M229.43,690h-97.93v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M490.57,690h97.93v30" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={92.95} y={742} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={700}>Promoted</text>
      <text x={112.81} y={762} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-ink-muted)">to CC</text>
      <text x={549.95} y={742} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={700}>Promoted</text>
      <text x={569.81} y={762} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-ink-muted)">to CC</text>
      <path d="M229.43,690h97.93v130" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M490.57,690h-97.93v130" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <rect x={294.71} y={820} width={131.33} height={66} fill="none" stroke="var(--color-ink-faint)" strokeWidth={.68} />
      <text x={331.23} y={839} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)">re-seed by</text>
      <text x={315.41} y={855} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)">original standing</text>
      <text x={302.16} y={875} fontFamily="var(--font-mono)" fontSize={14} fill="var(--color-ink-muted)" fontWeight={500}>higher</text>
      <text x={371.64} y={875} fontFamily="var(--font-mono)" fontSize={14} fill="var(--color-ink-muted)" fontWeight={500}>lower</text>
      <path d="M327.36,886v114" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M392.64,886v114" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={40} y1={1020} x2={270} y2={1020} stroke="var(--color-oxblood)" strokeWidth={4} />
      <line x1={450} y1={1020} x2={680} y2={1020} stroke="var(--color-oxblood)" strokeWidth={4} />
      <rect x={270} y={1004} width={180} height={32} fill="var(--color-paper)" />
      <text x={293.5693} y={1020} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-oxblood)" fontWeight={700}>Boundary Games</text>
      <text x={40} y={1058} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-oxblood)" fontWeight={500} letterSpacing=".14em">MEMBERSHIP LINE &#8212; SEE CH. IV</text>
    </svg>
  );
}

export function PromotionPlayoffBracket({
  titleId = 'promotion-playoff-bracket-title',
  forceLayout = 'auto',
}: PromotionPlayoffBracketProps): JSX.Element {
  const wideTitleId = `${titleId}-wide`;
  const wideDescId = `${titleId}-wide-desc`;
  const narrowTitleId = `${titleId}-narrow`;
  const narrowDescId = `${titleId}-narrow-desc`;
  if (forceLayout === 'wide') {
    return (
      <div className="promotion-playoff-bracket-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
    );
  }
  if (forceLayout === 'narrow') {
    return (
      <div className="promotion-playoff-bracket-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    );
  }
  return (
    <>
      <div className="promotion-playoff-bracket-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
      <div className="promotion-playoff-bracket-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    </>
  );
}
