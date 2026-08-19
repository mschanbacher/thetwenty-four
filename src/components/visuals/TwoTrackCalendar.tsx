import type { JSX } from 'react';

/* ============================================================
   TwoTrackCalendar — site-spec item 3b: the two-postseason calendar.

   The chapter's argument is simultaneity: the Champions Conference
   playoff and the Promotion pathway run as two full postseasons at
   once, touching at a single point — the Boundary Games on January 4.
   A timeline shows what prose cannot: the two tracks interleaving down
   a shared time axis, the Promotion track finishing at the boundary
   while the Champions Conference plays on alone to the championship.

   Vertical time axis (top = late Nov, bottom = mid-Jan), CC events
   branching left, Promotion events right, dates down the center spine.
   The vertical axis reflows to mobile essentially for free — the same
   lesson 3c taught — and gives the two "process" graphics a family
   resemblance distinct from the two horizontal brackets.

   Data authored from CC-spec Part 4a (the canonical dual-track
   calendar); every date and event is canonical and cross-checks
   against Ch IV, Ch V, and 3c (Boundary Games Jan 4, CFP first round
   Dec 19-20, play-in Dec 13, semifinals Dec 28). Wide geometry tuned
   by the author in Illustrator (bowl band centered on the Cotton Bowl
   row); re-tokenized here.

   Family motif: oxblood appears exactly once, at the Jan 4 Boundary
   Games crossing — the same hinge as Ch IV, 3c, and the Champions
   Field cut-line. A faint full-width band marks bowl season as the
   backdrop the whole postseason plays against.

   Cousin of the other visuals: pure SVG, zero client JS, dual-variant
   toggled at the site-wide 639px breakpoint.
   ============================================================ */

export type TwoTrackCalendarProps = {
  titleId?: string;
  forceLayout?: 'wide' | 'narrow' | 'auto';
};

function WideSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 1000 820" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        Two postseasons, one calendar — the Champions Conference playoff and the Promotion pathway run in parallel.
      </title>
      <desc id={descId}>
        A vertical timeline from late November to mid-January, dates down the center. On the left, the Champions
        Conference track; on the right, the Promotion pathway. The two run simultaneously and touch at a single point —
        the Boundary Games on January 4, in oxblood, where Champions Conference positions 21 and 22 meet Promotion
        Playoff seeds 3 and 4. A faint band marks bowl season. The Promotion track finishes at the boundary; the
        Champions Conference plays on alone to the championship.
      </desc>
      <rect x={0} y={0} width={1000} height={820} fill="var(--color-paper)" />
      <text x={60} y={60} fontFamily="var(--font-serif)" fontSize={24} fill="var(--color-ink)" fontWeight={700}>Two postseasons, one calendar</text>
      <text x={60} y={84} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".14em">THE PLAYOFF AND THE PROMOTION PATHWAY RUN IN PARALLEL</text>
      <text x={199.37} y={128} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)" fontWeight={600} letterSpacing=".12em">CHAMPIONS CONFERENCE</text>
      <text x={620} y={128} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)" fontWeight={600} letterSpacing=".12em">PROMOTION PATHWAY</text>
      <rect x={60} y={379.99} width={880} height={182} fill="var(--color-paper-deep)" />
      <text x={80} y={400.99} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">BOWL SEASON</text>
      <line x1={500} y1={150} x2={500} y2={748} stroke="var(--color-rule)" strokeWidth={1.5} />
      <circle cx={500} cy={170} r={3} fill="var(--color-ink-muted)" />
      <text x={468.8} y={152} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>LATE NOV</text>
      <line x1={380} y1={170} x2={490} y2={170} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={243.09} y={175} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-ink-muted)">Regular season ends</text>
      <line x1={510} y1={170} x2={620} y2={170} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={628} y={175} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-ink-muted)">Regular season ends</text>
      <circle cx={500} cy={232} r={3} fill="var(--color-ink-muted)" />
      <text x={472.7} y={214} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>DEC 5&#8211;6</text>
      <line x1={380} y1={232} x2={490} y2={232} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={248.31} y={237} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Standings finalized</text>
      <line x1={510} y1={232} x2={620} y2={232} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={628} y={237} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Conference championships</text>
      <circle cx={500} cy={294} r={3} fill="var(--color-ink-muted)" />
      <text x={476.6} y={276} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>DEC 13</text>
      <line x1={510} y1={294} x2={620} y2={294} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={628} y={299} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Play-in games</text>
      <circle cx={500} cy={356} r={3} fill="var(--color-ink-muted)" />
      <text x={464.9} y={338} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>DEC 19&#8211;20</text>
      <line x1={380} y1={356} x2={490} y2={356} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={260.12} y={361} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">CFP First Round</text>
      <line x1={510} y1={356} x2={620} y2={356} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={628} y={361} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Quarterfinals</text>
      <circle cx={500} cy={418} r={3} fill="var(--color-ink-muted)" />
      <text x={476.6} y={400} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>DEC 28</text>
      <line x1={510} y1={418} x2={620} y2={418} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={628} y={423} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Semifinals</text>
      <circle cx={500} cy={480} r={3} fill="var(--color-ink-muted)" />
      <text x={476.6} y={462} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>DEC 31</text>
      <line x1={380} y1={480} x2={490} y2={480} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={199.75} y={485} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">CFP Quarterfinal &#183; Cotton</text>
      <circle cx={500} cy={542} r={3} fill="var(--color-ink-muted)" />
      <text x={480.5} y={524} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>JAN 1</text>
      <line x1={380} y1={542} x2={490} y2={542} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={102.69} y={547} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">CFP Quarterfinals &#183; Orange, Rose, Sugar</text>
      <line x1={360} y1={604} x2={640} y2={604} stroke="var(--color-oxblood)" strokeWidth={4} />
      <circle cx={500} cy={604} r={5} fill="var(--color-oxblood)" />
      <text x={480.5} y={586} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>JAN 4</text>
      <text x={201.42} y={609} fontFamily="var(--font-serif)" fontSize={17} fill="var(--color-oxblood)" fontWeight={700}>Boundary Games</text>
      <text x={648} y={609} fontFamily="var(--font-serif)" fontSize={15} fill="var(--color-ink-muted)">CC #21&#183;22 v Promotion #3&#183;4</text>
      <circle cx={500} cy={666} r={3} fill="var(--color-ink-muted)" />
      <text x={472.7} y={648} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>JAN 8&#8211;9</text>
      <line x1={380} y1={666} x2={490} y2={666} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={167} y={671} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">CFP Semifinals &#183; Fiesta, Peach</text>
      <circle cx={500} cy={728} r={3} fill="var(--color-ink-muted)" />
      <text x={476.6} y={710} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>JAN 19</text>
      <line x1={380} y1={728} x2={490} y2={728} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={186.81} y={733} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">CFP National Championship</text>
    </svg>
  );
}

function NarrowSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 720 730" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        Two postseasons, one calendar — the Champions Conference playoff and the Promotion pathway run in parallel.
      </title>
      <desc id={descId}>
        A vertical timeline from late November to mid-January. The Champions Conference track on the left, the Promotion
        pathway on the right, dates down the center. The two run simultaneously and touch once — the Boundary Games on
        January 4, in oxblood. A faint band marks bowl season. The Promotion track ends at the boundary; the Champions
        Conference plays on to the championship.
      </desc>
      <rect x={0} y={0} width={720} height={730} fill="none" />
      <text x={36} y={44} fontFamily="var(--font-serif)" fontSize={20} fill="var(--color-ink)" fontWeight={600}>Two postseasons, one calendar</text>
      <text x={36} y={64} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing="0.14em">PLAYOFF AND PROMOTION, IN PARALLEL</text>
      <text x={330} y={104} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-muted)" fontWeight={600} letterSpacing="0.1em">CHAMPIONS CONF.</text>
      <text x={390} y={104} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-muted)" fontWeight={600} letterSpacing="0.1em">PROMOTION</text>
      <rect x={36} y={350} width={648} height={176} fill="var(--color-paper-deep)" />
      <text x={48} y={368} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing="0.1em">BOWL SEASON</text>
      <line x1={360} y1={128} x2={360} y2={700} stroke="var(--color-rule)" strokeWidth={1.5} />
      <circle cx={360} cy={148} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={134} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>LATE NOV</text>
      <line x1={330} y1={148} x2={352} y2={148} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={322} y={152} fontFamily="var(--font-serif)" fontSize={12} fill="var(--color-ink-muted)">Regular season ends</text>
      <line x1={368} y1={148} x2={390} y2={148} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={398} y={152} fontFamily="var(--font-serif)" fontSize={12} fill="var(--color-ink-muted)">Regular season ends</text>
      <circle cx={360} cy={206} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={192} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>DEC 5&#8211;6</text>
      <line x1={330} y1={206} x2={352} y2={206} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={322} y={210} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">Standings finalized</text>
      <line x1={368} y1={206} x2={390} y2={206} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={398} y={210} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">Conf. championships</text>
      <circle cx={360} cy={264} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={250} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>DEC 13</text>
      <line x1={368} y1={264} x2={390} y2={264} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={398} y={268} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">Play-in games</text>
      <circle cx={360} cy={322} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={308} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>DEC 19&#8211;20</text>
      <line x1={330} y1={322} x2={352} y2={322} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={322} y={326} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">CFP First Round</text>
      <line x1={368} y1={322} x2={390} y2={322} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={398} y={326} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">Quarterfinals</text>
      <circle cx={360} cy={380} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={366} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>DEC 28</text>
      <line x1={368} y1={380} x2={390} y2={380} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={398} y={384} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">Semifinals</text>
      <circle cx={360} cy={438} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={424} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>DEC 31</text>
      <line x1={330} y1={438} x2={352} y2={438} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={322} y={442} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">CFP QF &#183; Cotton</text>
      <circle cx={360} cy={496} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={482} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>JAN 1</text>
      <line x1={330} y1={496} x2={352} y2={496} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={322} y={500} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">CFP QF &#183; Orange, Rose, Sugar</text>
      <line x1={250} y1={554} x2={470} y2={554} stroke="var(--color-oxblood)" strokeWidth={4} />
      <circle cx={360} cy={554} r={4.5} fill="none" />
      <text x={360} y={538} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>JAN 4</text>
      <text x={242} y={558} fontFamily="var(--font-serif)" fontSize={14} fill="var(--color-oxblood)" fontWeight={600}>Boundary Games</text>
      <text x={478} y={558} fontFamily="var(--font-serif)" fontSize={12} fill="var(--color-ink-muted)">CC #21&#183;22 v PP #3&#183;4</text>
      <circle cx={360} cy={612} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={598} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>JAN 8&#8211;9</text>
      <line x1={330} y1={612} x2={352} y2={612} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={322} y={616} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">CFP Semifinals &#183; Fiesta, Peach</text>
      <circle cx={360} cy={670} r={2.6} fill="var(--color-ink-muted)" />
      <text x={360} y={656} fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-muted)" fontWeight={500}>JAN 19</text>
      <line x1={330} y1={670} x2={352} y2={670} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={322} y={674} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink)">CFP National Championship</text>
    </svg>
  );
}

export function TwoTrackCalendar({
  titleId = 'two-track-calendar-title',
  forceLayout = 'auto',
}: TwoTrackCalendarProps): JSX.Element {
  const wideTitleId = `${titleId}-wide`;
  const wideDescId = `${titleId}-wide-desc`;
  const narrowTitleId = `${titleId}-narrow`;
  const narrowDescId = `${titleId}-narrow-desc`;
  if (forceLayout === 'wide') {
    return (
      <div className="two-track-calendar-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
    );
  }
  if (forceLayout === 'narrow') {
    return (
      <div className="two-track-calendar-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    );
  }
  return (
    <>
      <div className="two-track-calendar-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
      <div className="two-track-calendar-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    </>
  );
}
