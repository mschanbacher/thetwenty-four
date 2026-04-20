/**
 * PLACEHOLDER COPY — to be replaced in the landing-copy session.
 *
 * This file exists so the landing page has real typographic rhythm
 * during build without committing to any argument Michael hasn't
 * written yet. Every string below is a stand-in. The word counts
 * target the spec's ranges (thesis ~150w, sections 200–300w each)
 * so the page reads at the right scale.
 *
 * When replacing: edit here, do not touch the JSX in /components/landing.
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
  // ~150 words. Placeholder — captures the argument's shape without
  // committing to specific rhetorical choices.
  body: `The College Football Playoff, as presently structured, treats the regular season as an audition for an audition. Four — now twelve — teams play for a title while a hundred-plus programs play for the privilege of being considered. The result is a sport whose biggest decisions are made in conference boardrooms and television negotiations, not on the field.

There is a better arrangement. A twenty-four-team Champions Conference, organized on competitive merit and refreshed annually by promotion and relegation, would replace the audition with the thing itself. The top tier plays for the national title. The second tier plays to join them. Every game in every week carries stakes that reach past the scoreboard — and the Group of Five stops being a permanent underclass and becomes a path.

What follows is the case for that arrangement. Not a hot take. A structure.`,
};

export const keyVisual = {
  figureLabel: 'Fig. 1',
  caption:
    'The 2025 Champions Field. Twenty-four teams organized into three snake-draft divisions. The top twelve qualify for the College Football Playoff.',
};

export const argumentSections: ArgumentSection[] = [
  {
    id: 'the-problem',
    eyebrow: 'The problem',
    heading: 'Football revenue is warping the structure of college sports.',
    body: [
      `Conference realignment is no longer driven by geography, rivalry, or academic affiliation. It is driven by television inventory. Programs now travel from Los Angeles to Piscataway for a Tuesday night football broadcast because a media partner needs a game on Tuesday night, and the conference that can supply one keeps its contract.`,
      `The damage is compounding. Traditional rivalries have been dissolved for scheduling efficiency. Olympic sports carry the cost of football's footprint without sharing in its revenue. The Group of Five — five conferences, sixty-odd programs — finds itself permanently structurally excluded from the title race, regardless of what happens on the field.`,
      `The College Football Playoff's twelve-team expansion acknowledged the problem without addressing it. One Group of Five bid in a field of twelve is not access; it is decoration. The underlying structure — a handful of conferences controlling the postseason — remains intact.`,
    ],
    pullquote:
      'One Group of Five bid in a field of twelve is not access. It is decoration.',
  },
  {
    id: 'the-proposal',
    eyebrow: 'The proposal',
    heading: 'A twenty-four-team Champions Conference, with promotion and relegation.',
    body: [
      `The top twenty-four programs in the country, selected on merit, form a Champions Conference. Each season they play a structured schedule that culminates in a true playoff — not a committee vote, not a selection show, a bracket earned on the field.`,
      `Below the Champions Conference sits a second tier of roughly equivalent size. At the end of each season, the worst performers of the top tier are relegated; the best performers of the second tier are promoted. Conference identity for basketball, baseball, and Olympic sports remains intact. Only football's competitive structure changes.`,
      `Notre Dame, the service academies, and other programs with non-football conference affiliations slot in cleanly. The model is borrowed from European football leagues, which have solved this exact problem — how to run a sport at continental scale without crushing smaller clubs — for more than a century.`,
    ],
  },
  {
    id: 'why-it-works',
    eyebrow: 'Why it works',
    heading: 'Merit-based, inclusive, and preserves what actually matters.',
    body: [
      `Promotion and relegation turn every regular-season game into a game that counts. A bottom-tier Champions Conference program is not playing for pride; it is playing to stay in the top tier. A top-tier second-division program is not playing out the string; it is playing to break into the Champions Conference for next year.`,
      `This is also the answer to the Group of Five's structural exclusion. Access is no longer granted by conference affiliation. It is earned, annually, on the field. A program that wins consistently cannot be kept out; a program that loses consistently cannot coast on its brand.`,
      `The things fans actually care about — rivalries, historic venues, the texture of a fall Saturday — are preserved. What changes is the incentive structure behind them. Every game stops being preparation for an audition and starts being part of the race.`,
    ],
    pullquote:
      'Every regular-season game becomes a game that counts. That is the whole argument.',
  },
  {
    id: 'whats-next',
    eyebrow: "What's next",
    heading: 'Discussion, refinement, and — if it holds up — adoption.',
    body: [
      `This site is the opening move. A specification exists; a long-form essay is in progress; a simulator of the 2024 season under this structure is being built. The goal is not to win an argument on social media. It is to produce an artifact that someone paid to think about college football can read in a Sunday morning and take seriously.`,
      `The proposal will be wrong in places. Specific numbers will need adjustment. Edge cases — Notre Dame's independence, mid-season injuries distorting relegation, the precise mechanism for initial selection — will need answers the current draft does not have. That is what the essay and the spec are for, and what the correspondence this site solicits is for.`,
      `If you are a journalist, a fan who argues about structure, or someone who has thought about this before: read the proposal, read the spec, and write back. The email is below.`,
    ],
  },
];

export const cta = {
  primary: { label: 'Read the proposal', href: '/proposal' },
  secondary: { label: 'Read the spec', href: '/spec' },
};

export const newsletter = {
  eyebrow: 'Newsletter',
  heading: 'Occasional dispatches on the proposal and its reception.',
  body: 'One-line updates when there is something to say, rather than a schedule performed for its own sake. No marketing, no spam.',
  disabledNote:
    'Signup opens at launch — newsletter wiring is scheduled for a future build session.',
};

export const byline = {
  name: 'Michael Schanbacher',
  bio: 'Designer. Lifelong college football fan. Writing a proposal nobody asked for because the current arrangement is worse than it has to be.',
  email: 'commissioner@thetwenty-four.com',
};
