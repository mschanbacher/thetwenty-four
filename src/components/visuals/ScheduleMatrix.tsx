import type { JSX } from 'react';

/* ============================================================
   ScheduleMatrix — Chapter III figure (slug: schedule-matrix).

   One team's twelve-game season, showing the 10+2 composition the
   prose describes: seven division games (a full round-robin within the
   team's own division), three cross-division games (two "mirror" games
   at the same slot in each other division, plus one that rotates
   yearly), and two rivalry games assigned by the home conference.

   The three eight-team divisions are columns; the team (Oregon, as the
   worked example) sits at its slot in Division I with the round-robin
   filling its column. A hairline rule on the team's slot row carries
   the key insight — the mirror games sit at the SAME slot across all
   three divisions, so the best play the best at every position.

   Register: monochrome + oxblood, per the family. Played games are
   solid ink dots, the rotating game an open ring. The two rivalry
   games sit APART from the division grid on a 4px oxblood line — they
   are the boundary-crossing games (a rivalry often reaches outside the
   Champions Conference), which is exactly what oxblood means across
   every asset in the set.

   Geometry authored by the author in Illustrator; re-tokenized here.
   Follows the locked figure-ground rule: transparent ground (the
   paper-deep figure frame is the ground), knockout rects paper-deep,
   accent regions as hairline rule outlines — no paper fills except the
   white "Oregon" label on its dark pill.

   Pure SVG, zero client JS. Single wide layout (1000×720); the content
   is label-dense, so a dedicated narrow variant is a future item.
   ============================================================ */

export type ScheduleMatrixProps = {
  titleId?: string;
  forceLayout?: 'wide' | 'narrow' | 'auto';
};

function WideSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 1000 720" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        A Champions Conference schedule — twelve games, built from three kinds of matchup.
      </title>
      <desc id={descId}>
        One team's twelve-game season across the three eight-team divisions. Seven games are a full round-robin within
        the team's own division. Two more are mirror games — the same slot in each of the other two divisions, so the
        best teams play the best at every position — and a third cross-division game rotates through the remaining slots
        each year. The final two are rivalry games, assigned by the home conference and often reaching outside the
        Champions Conference; they sit apart from the division grid and are marked in oxblood, the boundary-crossing games.
      </desc>
      <rect x={0} y={0} width={1000} height={720} fill="none" />
      <text x={60} y={56} fontFamily="var(--font-serif)" fontSize={24} fill="var(--color-ink)" fontWeight={700}>A twelve-game season</text>
      <text x={60} y={80} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".14em">SEVEN DIVISION &#183; THREE CROSS-DIVISION &#183; TWO RIVALRY</text>
      <text x={214.74} y={168} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)" fontWeight={600} letterSpacing=".12em">DIVISION I</text>
      <text x={481.48} y={168} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)" fontWeight={600} letterSpacing=".12em">DIVISION II</text>
      <text x={748.22} y={168} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)" fontWeight={600} letterSpacing=".12em">DIVISION III</text>
      <line x1={287.01} y1={281.14} x2={382.13} y2={281.14} stroke="var(--color-rule)" strokeWidth={1} />
      <line x1={388} y1={185} x2={388} y2={510} stroke="var(--color-rule)" strokeWidth={1} />
      <line x1={658} y1={185} x2={658} y2={510} stroke="var(--color-rule)" strokeWidth={1} />
      <text x={100.2} y={204} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>1</text>
      <text x={100.2} y={244.57} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>2</text>
      <text x={100.2} y={285.14} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>3</text>
      <text x={100.2} y={325.71} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>4</text>
      <text x={100.2} y={366.29} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>5</text>
      <text x={100.2} y={406.86} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>6</text>
      <text x={100.2} y={447} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>7</text>
      <text x={100.2} y={488} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-faint)" fontWeight={500}>8</text>
      <circle cx={150} cy={200} r={5} fill="var(--color-ink)" />
      <circle cx={150} cy={240.57} r={5} fill="var(--color-ink)" />
      <circle cx={150} cy={321.71} r={5} fill="var(--color-ink)" />
      <circle cx={150} cy={362.29} r={5} fill="var(--color-ink)" />
      <circle cx={150} cy={402.86} r={5} fill="var(--color-ink)" />
      <circle cx={150} cy={443} r={5} fill="var(--color-ink)" />
      <circle cx={150} cy={484} r={5} fill="var(--color-ink)" />
      <path d="M321.38,200h12v284h-12" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={221.92} y={338} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)" fontWeight={500} letterSpacing=".06em">Full round-robin</text>
      <text x={182.62} y={356} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)">all seven division opponents</text>
      <rect x={132} y={267.14} width={150} height={28} rx={4} fill="var(--color-ink)" />
      <text x={150} y={285.14} fontFamily="var(--font-serif)" fontSize={14} fill="var(--color-paper)" fontWeight={700}>Oregon</text>
      <circle cx={420} cy={281.14} r={5} fill="var(--color-ink)" />
      <text x={438} y={285.14} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink-muted)">Mirror &#8212; Slot 3</text>
      <circle cx={420} cy={402.86} r={5} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
      <text x={438} y={406.86} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink-muted)">Rotating &#8212; cycles yearly</text>
      <text x={438} y={470} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)" fontWeight={500} letterSpacing=".06em">Three cross-division games</text>
      <text x={438} y={488} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)">two mirror, one rotating</text>
      <circle cx={690} cy={281.14} r={5} fill="var(--color-ink)" />
      <text x={708} y={285.14} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink-muted)">Mirror &#8212; Slot 3</text>
      <line x1={60} y1={588} x2={940} y2={588} stroke="var(--color-oxblood)" strokeWidth={4} />
      <rect x={60} y={572} width={210} height={32} fill="var(--color-paper-deep)" />
      <text x={60} y={592} fontFamily="var(--font-serif)" fontSize={14} fill="var(--color-oxblood)" fontWeight={700}>The two rivalry games</text>
      <text x={60} y={628} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)">Assigned by the home conference &#8212; often reaching outside the Champions Conference.</text>
      <text x={60} y={646} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)">The Iron Bowl, the Egg Bowl: preserved regardless of which side of the boundary the rival sits on.</text>
      <circle cx={640} cy={640} r={5} fill="var(--color-ink)" />
      <text x={654} y={644} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)">fixed each year</text>
      <circle cx={760} cy={640} r={5} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
      <text x={774} y={644} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)">rotates</text>
    </svg>
  );
}

export function ScheduleMatrix({
  titleId = 'schedule-matrix-title',
  forceLayout = 'auto',
}: ScheduleMatrixProps): JSX.Element {
  const wideTitleId = `${titleId}-wide`;
  const wideDescId = `${titleId}-wide-desc`;
  if (forceLayout === 'narrow') {
    return (
      <div className="schedule-matrix-narrow">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
    );
  }
  return (
    <div className="schedule-matrix-wide">
      <WideSVG titleId={wideTitleId} descId={wideDescId} />
    </div>
  );
}
