/**
 * Landing page copy.
 *
 * The strings below are the final landing-page text, written in the
 * author's voice per site-spec § 2. Four argument sections, each
 * ~200–300 words; a ~150-word thesis; a figure caption for the
 * Champions Field; and the small chrome (hero tagline, newsletter,
 * byline).
 *
 * If the copy needs to change: edit here, not the JSX in
 * /components/landing. The components split the thesis body on
 * blank lines and render pullquotes after the first body paragraph.
 */

export type ArgumentSection = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string[];            // one entry per paragraph
  pullquote?: string;        // optional; not every section needs one
};

export const hero = {
  wordmark: 'The Twenty-Four',
  tagline: 'A proposal to restructure college football.',
  byline: 'by Michael Schanbacher',
};

export const thesis = {
  eyebrow: 'The thesis',
  body: `College football's biggest problem is that football's money is breaking every other sport. Conferences built for regional competition have stretched coast to coast chasing television revenue, and volleyball teams now fly from Stanford to Chapel Hill for conference matches their sport had no reason to schedule at that scale. Football itself hasn't escaped the distortion. Its regular season has become an audition for an audition — a hundred-plus programs playing so that a committee might consider them.

There is a better arrangement. Twenty-four programs form a Champions Conference, chosen on merit and refreshed annually through promotion and relegation, playing a schedule that ends in the College Football Playoff. Everyone else plays in their existing conferences, at a sensible regional scale, with a real path up: win your conference, enter a promotion playoff, and earn your way in.

The top tier plays for the national title. Everyone else plays to join them.`,
};

export const keyVisual = {
  figureLabel: 'Fig. 1',
  caption:
    'The 2025 Champions Field. Twenty-four teams, drawn from eight conferences, organized into three snake-draft divisions. The top twelve qualify for the College Football Playoff; the bottom twelve play for bowl positioning or face relegation. Under the proposal, Notre Dame and BYU — both above the CFP cut-line — would have qualified this year. The 2025 CFP\u2019s conference-champion auto-bid rule excluded them in favor of Tulane and James Madison.',
};

export const argumentSections: ArgumentSection[] = [
  {
    id: 'the-problem',
    eyebrow: 'The problem',
    heading: 'Football revenue is warping the structure of college athletics.',
    body: [
      `Every conference is trying to run two businesses at once. Football wants national television matchups, consolidated brands, and the biggest possible footprint — that is what the money rewards. Every other sport wants the opposite: regional opponents, manageable travel, conference play that doesn't require a charter flight. The two demands are incompatible, and football's revenue settles the argument every time. The Big Ten now stretches from Piscataway to Los Angeles. The SEC spans a time zone and a half. Stanford, a school most of whose sports never leave the Pacific, plays in the ACC.`,
      `The Pac-12, a conference that had existed in one form or another since 1915, was effectively dissolved in 2024 when its football-bearing members defected to leagues with larger media contracts. The athletic departments that stayed behind lost a century of rivalries, a regional identity, and in most cases a schedule that made any sense. Their basketball teams, their volleyball teams, their swimmers and soccer players — none of whom had anything to do with the football decisions that destroyed their conference — now play in whatever conferences would take them.`,
      `The College Football Playoff's expansion to twelve teams was sold as a fix and is in fact a continuation. One Group of Five bid in a field of twelve is decoration. The underlying structure — a handful of conferences controlling the postseason, every other program playing for scraps — is unchanged. The expansion added seats. It did not open the door.`,
    ],
    pullquote: "Football's revenue settles the argument every time.",
  },
  {
    id: 'the-proposal',
    eyebrow: 'The proposal',
    heading: 'A twenty-four-team Champions Conference, with promotion and relegation.',
    body: [
      `The twenty-four best football programs in the country, selected on merit, form the Champions Conference. That is the unit: a single league that plays for the national title, drawn from across the FBS rather than within any existing conference. The field refreshes annually. The regional conferences that programs belong to for every other sport — and for football in the years they aren't in the Champions Conference — stay exactly where they are.`,
      `Membership is earned and lost on the field. At the end of each Champions Conference season, the bottom four programs face relegation. At the same time, ten conference champions from the rest of FBS — every conference, no exceptions, no committee — enter a promotion playoff. The two winners earn automatic Champions Conference spots for the following season; the next two meet the bottom two Champions Conference teams in relegation matches. Four programs change places each year. The door is always open, on both sides.`,
      `The postseason is the top twelve, by record. That is the entire selection process. No committee vote, no eye test, no debate over which two-loss team deserves the last bid. A balanced league with a balanced schedule produces a ranking that means what it says.`,
    ],
  },
  {
    id: 'why-it-works',
    eyebrow: 'Why it works',
    heading: 'Merit-based, inclusive, and better football.',
    body: [
      `Every Champions Conference team plays ten conference games and two rivalry games. That is the schedule. There is no thirteenth slot for an FCS program whose athletic department was paid to spend a Saturday losing by fifty. Every week on the calendar is a week against a peer, and the league's worst team is the league's worst team — not a program padding its record against the opponents it could find.`,
      `Relegation gives the bottom of the standings stakes the current system cannot offer. A 4-6 Champions Conference program is playing for its place in the league. The program that finishes twenty-fourth goes down. The program that finishes twelfth makes the playoff. Every position in the standings is attached to a consequence, and every game moves a team between positions. A regular season organized this way doesn't need to be marketed as meaningful. It is structurally meaningful, on every weekend, for every team.`,
      `The rivalries survive. Each program's home conference selects its two rivalry-game opponents, and those games count. The Game. The Iron Bowl. The Egg Bowl. Whichever rivalry the program has, the proposal keeps it. Cross-conference rivalries are permitted and, in some cases, restored. The proposal does not ask the sport to give up what it loves about itself. It asks the sport to stop apologizing for the parts that don't work.`,
    ],
    pullquote:
      "The sport's best programs claim they want this schedule and have spent forty years arranging their calendars to avoid it.",
  },
  {
    id: 'what-else',
    eyebrow: 'What else',
    heading: 'The proposal reshapes incentives the current debate does not touch.',
    body: [
      `Consider a good player at a middling Power 4 program. Under the current system, his rational move is to enter the transfer portal. His program is not going to win a title, the roster around him is not going to get better fast enough to change that, and the path to a national stage runs through a different roster at a different school. Under the proposal, the calculation changes. His program is either in the Champions Conference, with a real path through the standings and relegation matches that reward improvement, or it is one good season from the promotion playoff. Staying is a strategy.`,
      `Every conference championship matters again. Winning the Mountain West, the MAC, or the AAC currently earns a bowl bid and a line in a press release. Under the proposal, winning any FBS conference earns a promotion-playoff berth — a real shot, in the same calendar window as the College Football Playoff, at a Champions Conference spot for the following season. An undefeated Boise State season stops being a what-if.`,
      `And conference realignment, as it has been practiced for the last decade, loses its purpose. A program does not need to be in a power conference if power-conference membership is no longer the mechanism through which titles are contested. The Champions Conference is. Whether Oregon plays in the Big Ten for scheduling convenience or the Pac-12 for regional coherence becomes a question about the other sports — which is the question it should have been all along.`,
    ],
    pullquote: 'Staying is a strategy.',
  },
];

export const cta = {
  primary: { label: 'Read the proposal', href: '/proposal' },
  secondary: { label: 'Read the spec', href: '/spec' },
};

export const newsletter = {
  eyebrow: 'Newsletter',
  heading: 'Occasional dispatches on the proposal and its reception.',
  body: 'Updates when there is something to say. No schedule, no marketing, no spam.',
  disabledNote: 'Signup opens at launch.',
};

export const byline = {
  name: 'Michael Schanbacher',
  bio: 'Designer. Lifelong college football fan. Writing a proposal because the current arrangement is worse than it has to be.',
  email: 'commissioner@thetwenty-four.com',
};
