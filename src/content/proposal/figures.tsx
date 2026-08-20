import type { JSX } from 'react';
import { PromotionRelegation } from '@/components/visuals/PromotionRelegation';
import { ChampionsBracket } from '@/components/visuals/ChampionsBracket';
import { PromotionPlayoffBracket } from '@/components/visuals/PromotionPlayoffBracket';
import { TwoTrackCalendar } from '@/components/visuals/TwoTrackCalendar';
import { ScheduleMatrix } from '@/components/visuals/ScheduleMatrix';
import { SystemOverview } from '@/components/visuals/SystemOverview';

/**
 * Figure registry — maps a marker slug from the essay markdown
 * (`<!-- figure: slug -->`) to the component that renders there, plus
 * its figure number and caption.
 *
 * Figures are numbered in reading order across the essay. If the
 * author moves a marker to a different chapter, update the `number`
 * here to keep the sequence right; the caption and component travel
 * with the slug automatically.
 *
 * The Champions Field is deliberately absent — it lives on the landing
 * page and is not repeated in the proposal (author's call).
 */

export type FigureEntry = {
  /** Figure number shown in the caption, e.g. "Figure 1". */
  number: number;
  /** Caption prose, in the author's voice, sans-serif, narrow measure. */
  caption: string;
  /** The rendered visual. Each emits its own wide+narrow SVGs. */
  render: () => JSX.Element;
};

export const figures: Record<string, FigureEntry> = {
  'system-overview': {
    number: 2,
    caption:
      'The whole league in one view. Positions 1\u201312 seed the College Football Playoff; 13\u201320 are the stable middle, safe from both the race and relegation; 21\u201324 turn over each year. An oxblood line marks the membership boundary. The chapters that follow zoom into the top of this column and its bottom \u2014 this is the shape at a glance.',
    render: () => <SystemOverview titleId="fig-system-overview" />,
  },
  'schedule-matrix': {
    number: 3,
    caption:
      'One team\u2019s twelve-game season. Seven games are a round-robin inside its own division; two more are mirror games at the same slot in each of the other divisions, so the best play the best at every position, with a third that rotates yearly. The final two are rivalry games \u2014 assigned by the home conference, often reaching across the boundary, and marked in oxblood.',
    render: () => <ScheduleMatrix titleId="fig-schedule-matrix" />,
  },
  'promotion-relegation': {
    number: 4,
    caption:
      'The annual exchange. Positions 23 and 24 are relegated outright; positions 21 and 22 meet the Promotion Playoff’s survivors in the Boundary Games. Four teams leave and four arrive each year — about seventeen percent of the field.',
    render: () => <PromotionRelegation titleId="fig-promotion-relegation" />,
  },
  'promotion-playoff-bracket': {
    number: 5,
    caption:
      'The Promotion Playoff. Ten conference champions, no championship game: both semifinal winners are promoted, and the two semifinal losers are re-seeded into the Boundary Games. The bracket converges to a split, not a trophy.',
    render: () => <PromotionPlayoffBracket titleId="fig-promotion-playoff-bracket" />,
  },
  'two-track-calendar': {
    number: 6,
    caption:
      'Two postseasons, one calendar. The Champions Conference playoff and the Promotion pathway run in parallel through December, touching once — at the Boundary Games on the first Saturday in January — before the Champions Conference plays on alone to the championship.',
    render: () => <TwoTrackCalendar titleId="fig-two-track-calendar" />,
  },
  'champions-bracket': {
    number: 7,
    caption:
      'The playoff field, derived. The final standings become the twelve-team bracket seed for seed, with no committee in between: everyone above the cut-line is in, everyone below is out.',
    render: () => <ChampionsBracket titleId="fig-champions-bracket" />,
  },
};
