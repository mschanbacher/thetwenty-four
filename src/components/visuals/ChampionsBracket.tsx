import type { JSX } from 'react';

/* ============================================================
   ChampionsBracket — Chapter V: the CFP field, derived.

   The Champions Conference final standings become the twelve-team
   College Football Playoff, seed for seed, with no committee in
   between. Left: the top-twelve standings (rank, team). Right: the
   bracket carrying seed numbers only — the shared mono seed-echo is
   the derivation device (no connective threads: bracket seed-order
   differs from standings order, so threads would cross and tangle).
   Oxblood on the #12/#13 cut-line only — the CFP qualification
   boundary, rhyming with the Champions Field cut-line and the Ch IV
   membership spine.

   Data: the actual final 2025 CFP top 12, ranking order, seed = rank,
   NO records column (records are the essay's balance evidence, not
   the bracket's; real records contain undefeateds that would cross-
   reference awkwardly). "Illustrative" label prevents reading as a
   live CFP result (the real CFP applies conference-champion access
   rules our system does not).

   Geometry authored by Michael in Illustrator (even column pitch);
   re-tokenized here. Cousin of ChampionsField / PromotionRelegation:
   pure SVG, zero client JS. Wide 1600×900; narrow variant TBD (the
   hard reflow — a 12-team bracket does not stack into a phone column).

   Type roles: Source Serif for named labels, IBM Plex Mono for seeds,
   IBM Plex Sans for eyebrows and the illustrative note.
   ============================================================ */

export type ChampionsBracketProps = {
  titleId?: string;
  forceLayout?: 'wide' | 'narrow' | 'auto';
};

function WideSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 1600 900" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        The CFP field, derived — the Champions Conference standings become the twelve-team playoff, seed for seed.
      </title>
      <desc id={descId}>
        On the left, the top twelve of the Champions Conference final standings, ranks one through twelve. An oxblood
        cut-line sits below rank twelve: everyone above is in the College Football Playoff, everyone below is out. At
        right, a twelve-team bracket carries only seed numbers, each matching a standing on the left; the seed equals
        the standing with no committee in between. Seeds one through four take first-round byes into the quarterfinals;
        seeds five through twelve meet in the first round on the higher seed's campus. The bracket advances through
        quarterfinals and semifinals to a single championship. The mapping from standing to seed is the argument; the
        bracket is only its consequence.
      </desc>
      <line x1={66} y1={708} x2={300} y2={708} stroke="var(--color-oxblood)" strokeWidth={4} />
      <line x1={486} y1={241} x2={574.09} y2={241} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={486} y1={269} x2={574.09} y2={269} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={241} x2={574.09} y2={269} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={255} x2={730} y2={255} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={486} y1={401} x2={574.09} y2={401} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={486} y1={429} x2={574.09} y2={429} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={401} x2={574.09} y2={429} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={415} x2={730} y2={415} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={486} y1={561} x2={574.09} y2={561} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={486} y1={589} x2={574.09} y2={589} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={561} x2={574.09} y2={589} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={486} y1={721} x2={574.09} y2={721} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={486} y1={749} x2={574.09} y2={749} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={721} x2={574.09} y2={749} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={689.17} y1={175} x2={782.14} y2={175} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={689.17} y1={335} x2={782.14} y2={335} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={689.17} y1={495} x2={782.14} y2={495} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={689.17} y1={655} x2={782.14} y2={655} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={730} y1={255} x2={782.14} y2={255} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={730} y1={415} x2={782.14} y2={415} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={575} x2={782.14} y2={575} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={574.09} y1={735} x2={782.14} y2={735} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={175} x2={782.14} y2={255} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={215} x2={990.14} y2={215} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={335} x2={782.14} y2={415} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={375} x2={990.14} y2={375} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={495} x2={782.14} y2={575} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={655} x2={782.14} y2={735} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={990.14} y1={215} x2={990.14} y2={375} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={990.14} y1={295} x2={1198.13} y2={295} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={990.14} y1={535} x2={990.14} y2={695} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={535} x2={990.14} y2={535} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={782.14} y1={695} x2={990.14} y2={695} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={990.14} y1={615} x2={1198.13} y2={615.01} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={1198.13} y1={295} x2={1198.13} y2={615} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <line x1={1198.13} y1={455} x2={1302.02} y2={455} stroke="var(--color-ink-muted)" strokeWidth={1} />
      <rect x={0} y={0} width={1600} height={900} fill="var(--color-paper)" />
      <rect x={1302.02} y={437} width={120} height={36} fill="var(--color-paper-deep)" />
      <text x={70} y={80} fontFamily="'Arial-BoldMT, Arial'" fontSize={24} fill="var(--color-ink)" fontWeight={700}>Champions Conference</text>
      <text x={70} y={104} fontFamily="'IBMPlexSans-Medium, 'IBM Plex Sans'" fontSize={12} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".14em">FINAL STANDINGS &#8212; TOP TWELVE</text>
      <text x={85.2} y={156} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>1</text>
      <text x={122} y={156} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Indiana</text>
      <text x={85.2} y={204} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>2</text>
      <text x={122} y={204} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Ohio State</text>
      <text x={85.2} y={252} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>3</text>
      <text x={122} y={252} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Georgia</text>
      <text x={85.2} y={300} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>4</text>
      <text x={122} y={300} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Texas Tech</text>
      <text x={85.2} y={348} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>5</text>
      <text x={122} y={348} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Oregon</text>
      <text x={85.2} y={396} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>6</text>
      <text x={122} y={396} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Ole Miss</text>
      <text x={85.2} y={444} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>7</text>
      <text x={122} y={444} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Texas A&amp;amp;M</text>
      <text x={85.2} y={492} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>8</text>
      <text x={122} y={492} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Oklahoma</text>
      <text x={85.2} y={540} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>9</text>
      <text x={122} y={540} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Alabama</text>
      <text x={74.4} y={588} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>10</text>
      <text x={122} y={588} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Miami</text>
      <text x={74.4} y={636} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>11</text>
      <text x={122} y={636} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">Notre Dame</text>
      <text x={74.4} y={684} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={18} fill="var(--color-ink)" fontWeight={500}>12</text>
      <text x={122} y={684} fontFamily="'ArialMT, Arial'" fontSize={19} fill="var(--color-ink)">BYU</text>
      <text x={66} y={732} fontFamily="'IBMPlexSans-Medium, 'IBM Plex Sans'" fontSize={12} fill="var(--color-oxblood)" fontWeight={500} letterSpacing=".14em">CFP CUT-LINE &#8212; TOP 12 IN</text>
      <text x={427.64} y={118} fontFamily="'IBMPlexSans-Medium, 'IBM Plex Sans'" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">FIRST ROUND</text>
      <text x={626.19} y={118} fontFamily="'IBMPlexSans-Medium, 'IBM Plex Sans'" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">QUARTERFINALS</text>
      <text x={847.74} y={118} fontFamily="'IBMPlexSans-Medium, 'IBM Plex Sans'" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">SEMIFINALS</text>
      <text x={1044.7232} y={118} fontFamily="'IBMPlexSans-Medium, 'IBM Plex Sans'" fontSize={11} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".12em">CHAMPIONSHIP</text>
      <text x={464.9} y={247} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>8</text>
      <text x={464.9} y={275} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>9</text>
      <text x={464.9} y={407} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>5</text>
      <text x={459.8} y={435} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>12</text>
      <text x={464.9} y={567} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>6</text>
      <text x={459.8} y={595} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>11</text>
      <text x={464.9} y={727} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>7</text>
      <text x={459.8} y={755} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>10</text>
      <text x={673.44} y={181} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>1</text>
      <text x={673.44} y={341} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>4</text>
      <text x={673.44} y={501} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>3</text>
      <text x={673.44} y={661} fontFamily="'IBMPlexMono-Medium, 'IBM Plex Mono'" fontSize={17} fill="var(--color-ink-muted)" fontWeight={500}>2</text>
      <text x={1325.3592} y={460} fontFamily="'Arial-BoldMT, Arial'" fontSize={15} fill="var(--color-ink-muted)" fontWeight={700}>Champion</text>
      <text x={70} y={828} fontFamily="'IBMPlexSans-Italic, 'IBM Plex Sans'" fontSize={11} fill="var(--color-ink-faint)" fontStyle="italic" letterSpacing=".04em">Illustrative Champions Conference standings &#8212; 2025 CFP top 12 shown for structure, not a live result.</text>
    </svg>
  );
}

function NarrowSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 720 700" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        The CFP field, derived — the standings become the bracket, seed for seed.
      </title>
      <desc id={descId}>
        The top twelve Champions Conference standings on the left, a twelve-team bracket on the right carrying matching
        seed numbers. The seed equals the standing, with no committee in between. Seeds one through four bye into the
        quarterfinals; five through twelve meet in the first round. An oxblood cut-line marks the boundary below rank twelve.
      </desc>
      <rect x={0} y={0} width={720} height={700} fill="var(--color-paper)" />
      <text x={30} y={42} fontFamily="var(--font-serif)" fontSize={20} fill="var(--color-ink)" fontWeight={700}>Champions Conference</text>
      <text x={30} y={62} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".14em">STANDINGS → PLAYOFF, SEED FOR SEED</text>
      <text x={49} y={114} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>1</text>
      <text x={74} y={114} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Indiana</text>
      <text x={49} y={154} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>2</text>
      <text x={74} y={154} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Ohio State</text>
      <text x={49} y={194} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>3</text>
      <text x={74} y={194} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Georgia</text>
      <text x={49} y={234} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>4</text>
      <text x={74} y={234} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Texas Tech</text>
      <text x={49} y={274} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>5</text>
      <text x={74} y={274} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Oregon</text>
      <text x={49} y={314} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>6</text>
      <text x={74} y={314} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Ole Miss</text>
      <text x={49} y={354} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>7</text>
      <text x={74} y={354} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Texas A&amp;amp;M</text>
      <text x={49} y={394} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>8</text>
      <text x={74} y={394} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Oklahoma</text>
      <text x={49} y={434} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>9</text>
      <text x={74} y={434} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Alabama</text>
      <text x={40} y={474} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>10</text>
      <text x={74} y={474} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Miami</text>
      <text x={40} y={514} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>11</text>
      <text x={74} y={514} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">Notre Dame</text>
      <text x={40} y={554} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink)" fontWeight={500}>12</text>
      <text x={74} y={554} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)">BYU</text>
      <line x1={24} y1={578} x2={269.64} y2={578} stroke="var(--color-oxblood)" strokeWidth={4} />
      <text x={24} y={600} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-oxblood)" fontWeight={500} letterSpacing=".12em">CFP CUT-LINE &#8212; TOP 12 IN</text>
      <text x={343.32} y={62.12} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".1em">FIRST RD</text>
      <text x={414.85} y={62.12} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".1em">QUARTER</text>
      <text x={498.73} y={62.12} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".1em">SEMI</text>
      <text x={567.74} y={62.12} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".1em">FINAL</text>
      <text x={346.27} y={145.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>8</text>
      <text x={346.27} y={175.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>9</text>
      <path d="M368.77,140.13h35.89v30h-35.89" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M404.66,155.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={346.27} y={285.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>5</text>
      <text x={341.77} y={315.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>12</text>
      <path d="M368.77,280.13h35.89v30h-35.89" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M404.66,295.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={346.27} y={425.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>6</text>
      <text x={341.77} y={455.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>11</text>
      <path d="M368.77,420.13h35.89v30h-35.89" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M404.66,435.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={346.27} y={565.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>7</text>
      <text x={341.77} y={595.42} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>10</text>
      <path d="M368.77,560.13h35.89v30h-35.89" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M404.66,575.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={417.94} y={89.13} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>1</text>
      <path d="M436.44,85.13h40" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={417.94} y={229.13} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>4</text>
      <path d="M436.44,225.13h40" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={417.94} y={369.13} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>3</text>
      <path d="M436.44,365.13h40" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={417.94} y={509.13} fontFamily="var(--font-mono)" fontSize={15} fill="var(--color-ink-muted)" fontWeight={500}>2</text>
      <path d="M436.44,505.13h40" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M476.44,85.13v70" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M476.44,120.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M476.44,225.13v70" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M476.44,260.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M476.44,365.13v70" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M475.75,400.13h72.47" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M476.44,505.13v70" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M476.44,540.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M548.22,120.13v140" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M548.22,190.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M548.22,400.13v140" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M548.22,470.13h71.78" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M620,190.13v280" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <path d="M620,330.13h28" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <rect x={648} y={313.13} width={64} height={34} fill="var(--color-paper-deep)" />
      <text x={656.18} y={334.13} fontFamily="var(--font-serif)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={700}>Champ</text>
      <text x={30} y={640} fontFamily="var(--font-sans)" fontSize={10} fill="var(--color-ink-faint)" fontStyle="italic" letterSpacing=".04em">Illustrative &#8212; 2025 CFP top 12, shown for structure, not a live result.</text>
    </svg>
  );
}

export function ChampionsBracket({
  titleId = 'champions-bracket-title',
  forceLayout = 'auto',
}: ChampionsBracketProps): JSX.Element {
  const wideTitleId = `${titleId}-wide`;
  const wideDescId = `${titleId}-wide-desc`;
  const narrowTitleId = `${titleId}-narrow`;
  const narrowDescId = `${titleId}-narrow-desc`;
  if (forceLayout === 'wide') {
    return (
      <div className="champions-bracket-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
    );
  }
  if (forceLayout === 'narrow') {
    return (
      <div className="champions-bracket-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    );
  }
  return (
    <>
      <div className="champions-bracket-wide">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
      <div className="champions-bracket-narrow">
        <NarrowSVG titleId={narrowTitleId} descId={narrowDescId} />
      </div>
    </>
  );
}
