import type { JSX } from 'react';

/* ============================================================
   SystemOverview — Chapter II figure (slug: system-overview).

   The whole proposal in one establishing view: the twenty-four-team
   Champions Conference as a single standings column, divided into the
   three zones the chapter names. Positions 1-12 are the playoff zone
   (detailed later in Ch V); 13-20 are the stable middle that holds the
   league's identity year to year; 21-24 are the turnover zone (21-22
   to the Boundary Games, 23-24 relegated), detailed later in Ch IV.

   This figure is SCOPE where PromotionRelegation (Ch IV) and
   ChampionsBracket (Ch V) are DEPTH: it shows the entire league at
   once so the later figures can zoom into its top and bottom. That is
   the deliberate differentiation from Figure (PromotionRelegation),
   which could otherwise read as a smaller version of this.

   Register: the three zones are carried by an ink-weight gradient
   (playoff solid, stable middle quiet, turnover medium) — NOT by
   colour. Oxblood appears exactly once, on the membership boundary
   between positions 20 and 21, the same hinge as every other asset.
   A dashed ink-faint line marks the secondary playoff cut (12/13).

   Geometry authored by the author in Illustrator; re-tokenized here.
   Follows the locked figure-ground rule: transparent ground, the
   boundary-label knockout paper-deep, no paper fills. Pure SVG, zero
   client JS. Single wide layout (1000x880); narrow variant future.
   ============================================================ */

export type SystemOverviewProps = {
  titleId?: string;
  forceLayout?: 'wide' | 'narrow' | 'auto';
};

function WideSVG({ titleId, descId }: { titleId: string; descId: string }): JSX.Element {
  return (
    <svg viewBox="0 0 1000 880" role="img" aria-labelledby={`${titleId} ${descId}`} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>
        The Champions Conference in one view — twenty-four teams, three zones.
      </title>
      <desc id={descId}>
        The twenty-four members of the Champions Conference as a single standings column. Positions one through twelve
        form the College Football Playoff. Positions thirteen through twenty are the stable middle, safe from both the
        playoff race and relegation. Positions twenty-one through twenty-four turn over each year: twenty-one and
        twenty-two play the Boundary Games, twenty-three and twenty-four are relegated outright. An oxblood line marks
        the membership boundary below position twenty. Four teams leave and four arrive each year. The chapters that
        follow zoom into the top of this column and its bottom; this is the whole shape at once.
      </desc>
      <rect x={0} y={0} width={1000} height={880} fill="none" />
      <text x={60} y={56} fontFamily="var(--font-serif)" fontSize={24} fill="var(--color-ink)" fontWeight={700}>Twenty-four teams, three zones</text>
      <text x={60} y={80} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-faint)" fontWeight={500} letterSpacing=".14em">THE CHAMPIONS CONFERENCE AT A GLANCE</text>
      <text x={122.2} y={154} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>1</text>
      <rect x={150} y={146} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={180} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>2</text>
      <rect x={150} y={172} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={206} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>3</text>
      <rect x={150} y={198} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={232} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>4</text>
      <rect x={150} y={224} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={258} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>5</text>
      <rect x={150} y={250} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={284} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>6</text>
      <rect x={150} y={276} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={310} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>7</text>
      <rect x={150} y={302} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={336} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>8</text>
      <rect x={150} y={328} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={122.2} y={362} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>9</text>
      <rect x={150} y={354} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={114.4} y={388} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>10</text>
      <rect x={150} y={380} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={114.4} y={414} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>11</text>
      <rect x={150} y={406} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={114.4} y={440} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>12</text>
      <rect x={150} y={432} width={180} height={8} rx={2} fill="var(--color-ink)" opacity={.9} />
      <text x={114.4} y={466} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>13</text>
      <rect x={150} y={458} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={492} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>14</text>
      <rect x={150} y={484} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={518} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>15</text>
      <rect x={150} y={510} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={544} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>16</text>
      <rect x={150} y={536} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={570} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>17</text>
      <rect x={150} y={562} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={596} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>18</text>
      <rect x={150} y={588} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={622} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>19</text>
      <rect x={150} y={614} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={648} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>20</text>
      <rect x={150} y={640} width={180} height={8} rx={2} fill="var(--color-ink-faint)" opacity={.45} />
      <text x={114.4} y={688} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>21</text>
      <rect x={150} y={680} width={180} height={8} rx={2} fill="var(--color-ink-muted)" opacity={.85} />
      <text x={114.4} y={714} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>22</text>
      <rect x={150} y={706} width={180} height={8} rx={2} fill="var(--color-ink-muted)" opacity={.85} />
      <text x={114.4} y={740} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>23</text>
      <rect x={150} y={732} width={180} height={8} rx={2} fill="var(--color-ink-muted)" opacity={.85} />
      <text x={114.4} y={766} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-ink-muted)" fontWeight={500}>24</text>
      <rect x={150} y={758} width={180} height={8} rx={2} fill="var(--color-ink-muted)" opacity={.85} />
      <path d="M348,150h10v286h-10" fill="none" stroke="var(--color-ink-muted)" strokeWidth={.97} />
      <text x={372} y={290} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)" fontWeight={700}>The Playoff</text>
      <text x={372} y={310} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)">Positions 1&#8211;12 &#8212; seed the College Football Playoff</text>
      <line x1={150} y1={449} x2={330} y2={449} stroke="var(--color-ink-faint)" strokeWidth={1} strokeDasharray="4 4" />
      <text x={336} y={453} fontFamily="var(--font-sans)" fontSize={11} fill="var(--color-ink-faint)">playoff cut</text>
      <path d="M348,462h10v182h-10" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={372} y={546} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)" fontWeight={700}>The Stable Middle</text>
      <text x={372} y={566} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)">Positions 13&#8211;20 &#8212; safe from the race and from relegation</text>
      <line x1={60} y1={664} x2={940} y2={664} stroke="var(--color-oxblood)" strokeWidth={4} />
      <rect x={150} y={651.52} width={180} height={25.54} fill="var(--color-paper-deep)" />
      <text x={160.88} y={668} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-oxblood)" fontWeight={500} letterSpacing=".06em">MEMBERSHIP BOUNDARY</text>
      <path d="M348,684h10v78h-10" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <text x={372} y={712} fontFamily="var(--font-serif)" fontSize={16} fill="var(--color-ink)" fontWeight={700}>The Turnover</text>
      <text x={372} y={732} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)">21&#8211;22 to the Boundary Games &#183; 23&#8211;24 relegated outright</text>
      <path d="M150,810h700" fill="none" stroke="var(--color-ink-muted)" strokeWidth={1.08} />
      <text x={60} y={814} fontFamily="var(--font-serif)" fontSize={14} fill="var(--color-ink-muted)" fontWeight={700}>In</text>
      <text x={150} y={834} fontFamily="var(--font-sans)" fontSize={12} fill="var(--color-ink-muted)">Two promoted from the Promotion Playoff &#183; two through the Boundary Games</text>
    </svg>
  );
}

export function SystemOverview({
  titleId = 'system-overview-title',
  forceLayout = 'auto',
}: SystemOverviewProps): JSX.Element {
  const wideTitleId = `${titleId}-wide`;
  const wideDescId = `${titleId}-wide-desc`;
  if (forceLayout === 'narrow') {
    return (
      <div className="system-overview-narrow">
        <WideSVG titleId={wideTitleId} descId={wideDescId} />
      </div>
    );
  }
  return (
    <div className="system-overview-wide">
      <WideSVG titleId={wideTitleId} descId={wideDescId} />
    </div>
  );
}
