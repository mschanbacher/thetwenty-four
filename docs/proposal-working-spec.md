# Proposal Working Spec

**Project:** thetwenty-four.com
**Scope:** The long-form essay at `/proposal`, from the end of the drafting session through launch on the site.
**Parent document:** `docs/site-spec.md` (authoritative). This working spec does not duplicate anything from the site spec; it extends it for the post-drafting phase only.
**Locked essay source:** `docs/proposal-essay.md`. All chapter numbers below refer to that file.
**Status:** Draft v1.0 of the essay is locked. Citation pass, consistency pass, and site-integration work remain.

---

## 1. Purpose

This document is the north star for the sessions that follow the essay's drafting. It does three things:

1. Tracks the outstanding tasks on the essay before it is ready for the site. Organized by task type, with chapter-level granularity where relevant.
2. Records the decisions made during the drafting session that need to propagate back to adjacent documents (landing copy, CC spec, site spec, design system).
3. Names the visual and structural questions that were deferred to a later session.

The drafting session established the essay's voice, structure, and argument. Everything here is refinement, verification, or integration — not substantive new writing.

---

## 2. Tasks by type

### 2.1 Citation pass

The citation pass verifies specific external claims in the essay and attaches inline links or references where appropriate. The rule the essay is written under: **inline links on specific claims, no footnotes, no bibliography.** This matches the Works in Progress model. The citation rate should stay low — roughly 8–15 inline links across the whole essay, not dozens. Claims that are the essay's own argument do not get citations; claims that could in principle be verified by a skeptical reader do.

Citations are worked chapter by chapter. The session proposes citations; the author checks every one and flags claims that want a citation the session missed.

#### Chapter I — The problem

Most citation-heavy chapter in the essay. Order of importance:

- **Big Ten 2023 media deal (~$1B/year) and SEC equivalent.** The anchor numbers for the chapter's diagnosis. Primary sources or credible industry reporting (Sports Business Journal, The Athletic, Associated Press). The figures matter precisely; if they've shifted materially since the claim was written, the sentences may want retuning.
- **Pac-12 dissolution timeline.** UCLA/USC announcement summer 2022 (verify exact date), Colorado to Big 12 summer 2023, Oregon/Washington to Big Ten same window, Utah/Arizona/Arizona State to Big 12 following, and the Pac-2 football-only-round-robin arrangement of 2024–25 (verify dates on final seasons). The "two-year span" claim rests on the sequence; the citation pass should produce one good timeline source.
- **Pac-2 single-game conference schedule.** Verify that Oregon State and Washington State played only one conference football game per season during 2024 and 2025; confirm whether they played each other non-conference as well.
- **Number of Pac-12 football-bearing programs at the point of dissolution.** The text says "ten football-bearing programs." The original Pac-12 at dissolution had twelve (the original ten plus Colorado, which had been a member since 2011, plus Utah). This sentence may need the number changed to twelve or rephrased to "the football-bearing programs of the Pac-12."
- **Pacific-12's 1915 origin, SEC's 1932, Big Ten's 1896.** Verifiable from the conferences' own materials; one citation per claim, or a single combined source.
- **Stanford's 36 varsity sports.** Verify the current figure on Stanford's athletics website.
- **CFP expansion announcement (2022) and first running (2024).** Verify exact dates.
- **CFP four-team era distribution of bids (2014–2023).** The claim that bids went "almost entirely from the SEC, the Big Ten, and two or three other recurring contenders" could be tightened to a specific count.
- **Boise State 2024 CFP result.** Undefeated in the Mountain West as MW champion, included via autobid, lost in the first round. Verify all three claims.
- **"Two orders of magnitude" on economic scale differences between football and other sports.** This is the chapter's most arithmetically-loose claim. Either cite to a specific study or soften to "an order of magnitude or more."

#### Chapter II — The proposal, in outline

- **Premier League turnover rate.** Three of twenty (15%) annually. Verifiable through the Premier League's own rules or any football governance source. The "half-century" figure is wrong; Premier League founded 1992 so it's about 33 seasons as of 2025–26. The essay says *"the evidence from its half-century under that system"* — this should be changed to *"the evidence from its thirty-some years under that system"* or *"three decades"* in both Chapter II and Chapter IV.

No other external claims in Chapter II needing citation. The rest is the proposal's own structure.

#### Chapter III — How the Champions Conference works

Almost entirely internal to the proposal. No external citations needed beyond possibly one link back to the CC spec for readers who want the exact rotation mechanics. Internal `/spec` link at the end of the chapter, if it earns its place.

#### Chapter IV — How promotion and relegation work

- **Premier League turnover at 15% / three decades.** Same fix as Chapter II. These should match between the two chapters after the citation pass.
- **Notre Dame's football independence since 1887.** Verify the specific year. Notre Dame's ACC partial-membership date (2013) also verify.
- **The specific Conference list (six power conferences, four G5 conferences) totaling ten Promotion Playoff entries.** Verify the math works under the 2012 reset. The six: SEC, Big Ten, Big 12, ACC, Pac-12, American. The four G5: Mountain West, Sun Belt, Conference USA, MAC. The key question for the citation pass is whether this math holds across the 2012 conference map the proposal assumes — it should, but verify there are no edge cases (independents, transitional programs) that break the count.

#### Chapter V — The CFP, re-imagined

- **2023 Florida State, undefeated ACC, left out of four-team playoff.** Verify season record (did lose starting QB Jordan Travis to injury before playoff decision; the essay doesn't name this but the citation might).
- **2017 UCF undefeated American season, not seriously considered for four-team playoff.** Verify.
- **2014 TCU and Baylor Big 12 co-champions excluded in favor of Ohio State.** Verify.
- **2024 CFP first-year autobid debate volume claim.** The sentence *"an argument that in the 2024 CFP's first year was the subject of roughly the volume of coverage that the quarterfinals received"* is subjective and should either be backed with one or two specific pieces of coverage or softened.

#### Chapter VI — What's preserved

- **USC-UCLA rivalry as a conference game ending with Pac-12 dissolution.** Verify 2024 was the final Pac-12 meeting; both have played as Big Ten members since.
- **Backyard Brawl (West Virginia-Pittsburgh) interruption.** Verify dates — was interrupted when West Virginia left the Big East in 2012; restored 2022 as non-conference. Current essay says "over a decade" — tighten if possible.
- **Texas-Texas A&M unplayed 2011 to 2024.** Verify the exact gap.
- **Army-Navy as "a game older than every program in the Champions Conference and most of the Group of Five."** Army-Navy first played 1890. Verify the claim is structurally correct against program ages.
- **Rivalry names — all confirmed as correct per the drafting session, but a copy-pass should verify canonical spelling.** "The Game" (Ohio State-Michigan), "Iron Bowl" (Alabama-Auburn), "Egg Bowl" (Ole Miss-Mississippi State), "Red River Shootout" (Oklahoma-Texas — note: also called the Red River Rivalry; pick one), "The World's Largest Outdoor Cocktail Party" (Florida-Georgia — this is the historical name; Florida and Georgia schools have both tried to distance from it over the years, but it's still the rivalry's popular name). The citation pass should land on each canonical name, ideally citing the rivalry's own history.
- **Big Ten volleyball travel claim** — the specific list of Big Ten volleyball opponents. Verifiable through the conference's own schedule.

#### Chapter VII — What's lost, and why that's acceptable

Highest-stakes citation pass. Three specific claims need external sourcing:

- **Vanderbilt's SEC media distribution under the current deal.** This is the chapter's most consequential factual claim. Needs the actual recent-year figure for Vanderbilt's football media revenue share from the SEC, and ideally a comparable figure for what their distribution would look like under the proposal's regional-form SEC arrangement. **The author has a reporter contact with relevant data (may be paywalled; workable). FOIA requests to public schools in the SEC would produce comparable figures for peer programs.** Not Vanderbilt directly (private school, not subject to FOIA), but a public SEC school in the bottom tier (Mississippi State, for example) would produce the data for a comparable program.
- **SEC Championship Game as "one of the three or four most valuable individual properties in the sport."** Needs a credible source — SBJ, ESPN's own disclosed property rankings, or similar. Possibly citable to the broadcast rights values of the SEC Championship window.
- **Vanderbilt's SEC membership since 1932.** Verify the exact year.
- **Oklahoma and Texas to SEC in 2024.** Verify — announced 2021, effective 2024 season.
- **USC and UCLA to Big Ten.** Announced 2022, effective 2024 season. Verify.
- **SEC Championship Game thirty-three-year run.** First SEC Championship Game 1992. Verify the "thirty-three years" at time of writing is correct.
- **Big Ten Championship Game first played 2011.** Verify.

#### Chapter VIII — Open questions

- **Notre Dame's 1887 football independence date.** Verify (same claim as Chapter IV; should match).
- **Notre Dame's 2013 partial ACC scheduling arrangement.** Verify.
- **NBC broadcast arrangement with Notre Dame.** Verify current status of the contract.
- **UConn becoming FBS football independent in 2020.** Verify date and circumstances.
- **CC spec's two candidate inaugural-selection methods.** Cross-reference to the CC spec file; the essay paraphrases and the citation pass should confirm the paraphrase is accurate.
- **CC spec's Promotion Playoff seeding formula inputs.** Same — cross-reference to the CC spec.

#### Chapter IX — An invitation

No external citations. The chapter is entirely about the proposal's own posture.

---

### 2.2 Consistency pass

Scope: single sweep of the full essay against the decisions accumulated during drafting. Many of these are small but collectively shape the essay's voice. Worked after the citation pass, because citation-pass edits may shift phrasings that change what consistency applies to.

#### Voice and register

- **Forward and backward chapter references.** The rule landed during drafting is that the essay does not point at other chapters in prose. Two instances remain in the locked text that should be caught:
  - Chapter VII opening: *"The preceding chapter made the case for what the proposal preserves."* Tighten or remove.
  - Chapter VII's UCF paragraph: *"The preceding chapter named this in the context of the CFP's replacement mechanism."* Tighten to something like *"Chapter V named this; it belongs here too"* — no, that still references. Probably: *"The selection committee's capacity to honor an exceptional single-season case was introduced in the CFP discussion. It belongs in the accounting."*
  - General sweep: search the essay for "chapter" and eliminate any remaining pointer phrasings.
- **First-person versus third-person voice.** First person (*I*, *I believe*) appears only where the author is taking personal responsibility for a contested claim. The third-person institutional voice (*the essay argues*, *the proposal's position is*) is the default. Scan for places where third-person was used reflexively and first person would serve, or vice versa. Chapter VII uses *I believe* once (on the realignment-as-mobility argument); Chapter IX uses first-person throughout.
- **Meta-commentary about the essay's own structure.** Phrases like *"this is the beat where..."*, *"worth making carefully"*, *"chapter N is about"* should be cut anywhere they appear. The drafting process caught most instances but a final scan is worth doing.
- **Flourish-after-claim.** Pattern: a paragraph lands its claim and then adds a rhetorical tail that extends the claim sonically rather than argumentatively. Several of these were cut in the edit rounds (the "teeth working" line in Chapter VII, the "essay's final chapter" sentence in Chapter VIII, the *"what that refinement looks like"* close). The final pass should scan for remaining instances.
- **"Load-bearing" as a phrase.** The author flagged this as an idiosyncrasy of the essay's drafter that appeared too often. Chapter IV's close uses "Each of these is a loss the current arrangement is producing" — verify no "load-bearing" remains as a drafter's tic.

#### Terminology and proper nouns

- **Boundary Games.** Capitalized as a proper noun. Referenced throughout Chapters IV and VIII; verify every instance is capitalized and the plural/singular is used correctly (Boundary Games as the default plural; singular Boundary Game when referring to a specific one).
- **Promotion Playoff.** Capitalized. Verify throughout.
- **Champions Conference.** Capitalized throughout. Should not see "the conference" alone as a reference to the Champions Conference; it should be "the Champions Conference" or "the league."
- **The Game, the Iron Bowl, the Egg Bowl, the Red River Shootout (or Rivalry), The World's Largest Outdoor Cocktail Party, the Backyard Brawl.** Rivalry names use the canonical capitalization. Some (*The Game*) are capitalized as a proper noun with *The*; others (*the Iron Bowl*) are lowercase-*the* with capitalized proper noun. Follow the rivalry's own convention.
- **"Matches" versus "games."** The essay uses *games* throughout for CC play, relegation structure, and Boundary Games. *Matches* appears only when describing the Premier League on its own terms. Verify no slips.
- **"Catalog" versus "catalogue."** Use *catalog* throughout (American spelling). One instance in Chapter VIII was standardized during drafting; verify no others remain.
- **"The author" versus "the proposal's authors."** Singular *the author* when referring to the person who wrote the essay and proposal. Plural *the proposal's authors* only when referring to the broader collective effort including contributors who will refine it. Scan for accidental plurals.
- **"Semifinals" versus "semi-finals."** American usage: *semifinals*, one word, no hyphen. One instance in Chapter VIII uses *semi-finals*; standardize.
- **"FBS" versus "FBC."** One instance of *FBC* in Chapter VI was noted during drafting. Verify and correct.
- **Hawai'i with the 'okina.** Correct in Chapter VI; verify no other Hawai'i references drop the 'okina.
- **Specific numbers.** The Premier League figure (*"three decades"* or *"thirty-some years"*) should match between Chapters II and IV. The SEC Championship Game figure (*"thirty-three years"*) in Chapter VII should match whatever the citation pass confirms.

#### Sentence-level precision

- **"Accrues to a different audience"** in Chapter VII — the edit round kept this phrasing; it's correct as-is and worth preserving through the consistency pass.
- **"Cleaner" versus "better."** The landing page uses *cleaner arrangement* in the thesis. The essay shifted to *better arrangement* as the author's preferred framing (Chapter I close). The landing page should match; see Section 3 below.
- **Oregon as the opening example in Chapter III.** Confirmed correct. Do not change unless the citation pass surfaces a reason Oregon is no longer an appropriate typical-program example.

---

### 2.3 Landing-copy pass

After the essay is locked and citations are verified, the landing copy at `src/content/landing.ts` should be reviewed against the essay's final decisions. Most of the landing copy holds, but specific items need attention:

- **"A cleaner arrangement is possible"** in the thesis. The essay closes Chapter I on *"A better arrangement is possible."* The landing thesis uses *"cleaner."* Decide which is canonical — likely *better*, matching the essay — and update the landing.
- **"An audition for an audition"** in the thesis. This was a deliberately sonic phrase from the landing copy; the essay did not carry it forward. The essay's register shifted from New Yorker to Works in Progress, and this phrase is the one most New-Yorker-register moment in the landing copy. Decide whether to retain it (the landing page operates at compression where a sonic move is defensible) or replace with something more in the WiP register.
- **Rivalry examples in the landing copy.** The landing uses *Ohio State and Michigan*, *Texas and Texas A&M*, *USC and Notre Dame*. The essay uses *The Game, the Iron Bowl, the Egg Bowl* as the core three. The examples don't need to match, but the landing might benefit from referencing at least one rivalry by its canonical name to match the essay's register.
- **"What else" section pullquote.** *"Staying becomes a strategy, not a sacrifice."* This was preserved through the essay's rewrite. Verify the phrasing is still accurate to the essay's player-retention argument, which lives implicitly in Chapter IV's promotion-and-relegation logic.
- **Figcaption on the Champions Field.** Currently names Notre Dame, BYU, Tulane, and James Madison as the CFP-exclusion case. The essay in Chapter I uses Boise State 2024 as its concrete CFP-expansion case. The two examples are complementary, not contradictory. Verify they stay distinct and do not create a conflict.
- **Champions Field figcaption — 36-sports Stanford reference.** Chapter I adds *"Stanford, whose 36 varsity sports programs are located in northern California"* — the landing should probably match or at least not conflict.
- **Newsletter copy.** The essay's Chapter IX ends with *"I'd love to hear what you think"* — a warm close. The landing's newsletter copy is currently *"Occasional dispatches on the proposal and its reception."* These are in different registers but both defensible. No action required unless the author wants the landing's newsletter copy to match the essay's warmer Chapter IX register.

---

### 2.4 Site spec and CC spec updates

The site spec (`docs/site-spec.md`) and CC spec (`docs/champions_conference_spec.md`) both need updates reflecting decisions made during the drafting session. Cleanest to do this in a dedicated short session after the essay's final state is locked.

#### Site spec, bump to v0.7

- **§ 2 Voice note.** Currently reads *"Closer to a New Yorker essay than an ESPN column."* Update to reflect the Works in Progress register the essay actually uses. Proposed phrasing: *"Closer to a Works in Progress essay than an ESPN column. Authoritative but quirky; plainspoken but careful; willing to name the joints of an argument rather than conceal them."*
- **§ 6 The Proposal.** Update the tentative chapter list to match the nine chapters as drafted. Chapter titles as they appear in the essay file. Possibly add a note that the essay ran long (~10,700 words) and that site-design decisions should account for the length.
- **§ 11 Open questions.** Several items can be resolved or closed:
  - *Chapter TOC vs spec TOC — shared component or separate?* Resolved to *cousins, not shared* during drafting. Note the resolution.
  - *Landing-page oxblood budget.* Resolved in v0.6; no change.
- **§ 11 add new items if they emerge from the citation/consistency passes.**

#### CC spec updates

The CC spec was written before the drafting session and some of its language will want to shift to match the essay's terminology. Not urgent; handle during the `/spec` build session.

- **"Relegation Match" should become "Boundary Game" throughout.** This is a proper-noun rename and should propagate. The word *match* survives only in the Premier League comparison context.
- **"Promotion Playoff" capitalization.** Already capitalized in the CC spec; verify consistency.
- **"Champions Conference" capitalization.** Same.
- **Possible addition: a short glossary.** The CC spec could benefit from a one-page glossary naming Boundary Games, Promotion Playoff, Champions Conference, and the key named rivalries. Good UX for a reader arriving at the spec cold from the essay.
- **Notre Dame section.** The CC spec notes Notre Dame as an open question. The essay treats Notre Dame as *a rule with a negotiation attached* — the rule applies (full ACC membership required), but the negotiation is harder than the rule. Update the CC spec to reflect this more settled position, flagging the negotiation as the remaining open piece rather than the rule itself.
- **UConn note.** Should be added symmetrically to the Notre Dame section — same rule applies; leverage differs.

---

### 2.5 Visual pass (deferred)

The drafting session agreed to defer all visual decisions to a later session. Candidates named during drafting, to be revisited with an editorial/design eye:

- **Chapter IV — Promotion Playoff and Boundary Games bracket.** The mechanism is complex and has an asymmetric bracket structure (two auto-promotions, two Boundary Games, two auto-relegations) that a diagram would clarify. Best candidate visual in the essay for a reader to want a picture.
- **Chapter I — Conference revenue over time or conference revenue by conference.** A line chart or bar chart illustrating the football-revenue concentration the chapter diagnoses. Works best as a chart that shows the widening gap between Power Four and Group of Five revenue, or between football and non-football sports revenue.
- **Chapter III — Schedule composition visual.** The ten-plus-two schedule structure (division round-robin + cross-division + rivalry games) is conceptually simple but visually illustrative. May or may not earn its place; consider during visual session.
- **Chapter VII — Revenue distribution comparison, current vs proposal.** For the Vanderbilt revenue argument, a two-bar comparison could make the loss concrete. Depends on getting the data, which is the citation-pass FOIA/reporter path.
- **Chapter VI — Map of the 2012 conference alignment versus current.** Could illustrate *what's preserved* vs *what's changed* geographically. Possibly too complex for the essay's register.

**Visual-pass logistics.**

- Wait until citation pass is complete, because some visuals depend on data the citation pass will surface.
- Visuals on `/proposal` should share design language with the Champions Field on the landing page: editorial infographic, typography-driven, oxblood accent used sparingly.
- Not every chapter needs a visual. The essay reads well as text; visuals should only appear where they do meaningful work.
- Total essay length (~10,700 words) makes *some* visual break valuable for reader pacing, but the site design will contribute to that via generous margins, chapter boundaries, and typographic register.

---

### 2.6 Site integration

The essay exists as a single file in the repo. Turning it into a working site route (`/proposal`) is a build session separate from the editorial work above.

#### Routing and structure

- Per the site spec § 6, the essay is *chaptered* rather than a single scroll. Each chapter is its own reading unit with a URL. Likely shape: `/proposal` is the TOC landing; `/proposal/the-problem`, `/proposal/the-proposal-in-outline`, etc. are the individual chapters. Alternatively anchor-based (`/proposal#chapter-1`). Build session decides.
- Sequential navigation (previous / next) at the foot of each chapter.
- Sticky TOC on desktop, collapsible on mobile.
- TOC component is a *cousin* of the `/spec` TOC component — same design language, different behavior (sequential nav on the proposal, reference jumping on the spec).

#### Content format

- The essay source lives in `docs/proposal-essay.md`. The build session should decide whether to MDX the file (to allow custom components inline) or render it as straight markdown.
- Pullquotes. The essay was drafted without pullquote markup; the build session should identify 3–5 pullquote candidates across the essay and design their placement. Candidates that emerged during drafting:
  - Chapter I: *"The conference map looks the way it does because football revenue shifted, and everything else was obliged to follow."*
  - Chapter II: *"The proposal is not complete. It is complete enough to debate, iterate, and refine."*
  - Chapter V: *"A team is where its record places it."*
  - Chapter V: *"The entire vocabulary the sport has developed over the past decade to litigate its own postseason disappears, because there is nothing left to litigate."*
  - Chapter VI: *"The proposal is structurally radical about what is currently broken, and conservative about what still works."*
  - Chapter VII: *"A proposal that cost nothing would be a proposal worth nothing."*
  - Chapter IX: *"The proposal is ambitious. It is not implausible."*
- These are candidates, not commitments. The build session picks the 3–5 that serve the reading experience best.

#### Reading experience

- Chapter length averages about 1,200 words; Chapter IX is ~450. Reading-time estimates would be useful at the top of each chapter (a small piece of sans-serif metadata).
- A chapter's opening page should include: chapter numeral (oxblood, per the site's typographic register), chapter title, optional eyebrow, and the prose. No subsections within chapters — the chapters are structurally atomic.
- A chapter's closing page should include: sequential nav (previous / next), and a small indicator of where the reader is in the nine-chapter arc.

---

## 3. Decisions locked during drafting

The drafting session made a series of decisions that future sessions should not revisit unless new information warrants. Recorded here to prevent rediscovery.

### 3.1 Voice and register

- **Works in Progress register, not New Yorker.** Authoritative but quirky. Direct over ornate. Plain words over reached-for ones. Quirks come from framing and observation, not from word choice.
- **American English throughout.** *Catalog* not *catalogue*. *Games* not *matches* (except when describing the Premier League on its own terms). The essay respects borrowed sports structures by using their vocabulary — *football club* for the Premier League, *units* (basketball tournament) for the Conference Development Pool — but the default vocabulary is American football.
- **First person for personal stake; third person for institutional claims.** The switch is earned; it should not be reflexive.
- **No forward or backward chapter references in prose.** The chapter structure does the navigation. The prose does not point at other chapters.
- **No flourish after a landed claim.** When a paragraph lands its argument, stop.

### 3.2 Substantive positions

- **2012 conference-map reset as prescriptive.** The proposal assumes the conference map as it stood around 2012. The Pac-12 reconstituted; Texas and Oklahoma back in the Big 12; Big Ten not stretched to Los Angeles; Cal and Stanford back on the Pacific. This is one choice among defensible ones; the essay names 2004 and 2014 as alternatives. The proposal holds the 2012 line because it preserves the ACC's absorption of Big East football schools (which made sense on football-quality grounds) and undoes the 2021–2024 expansions.
- **Notre Dame: Option A.** Full ACC membership required for Champions Conference pathway access. The rule is declarative; the negotiation is hard. Chapter IV states the rule; Chapter VIII does the honest accounting of the negotiation.
- **UConn: same rule, different leverage.** Treated symmetrically by design.
- **Inaugural twenty-four selection: one-time problem that self-corrects in a handful of years.** Either Option A (top 24 of final CFP committee ranking) or Option B (one-time selection committee) is acceptable; the essay does not insist on one.
- **Turnover rate of four per year (~17%).** Defended but not sacrosanct. Three or five would also be defensible.
- **Boundary Games.** New proper noun coined during drafting. Capitalized throughout. Describes the games between Champions Conference teams 21 and 22 and the third- and fourth-place Promotion Playoff finishers.
- **The essay is a design document inviting refinement, not a consensus document.** Every chapter holds this posture.

### 3.3 Chapter-level decisions worth preserving

- **Chapter III opens with Oregon as the typical-program example.** Not Indiana (unusual as 2025 #1), not Ohio State or Alabama (pilot-light programs).
- **Chapter V enumerates what disappears through repeated "disappears" sentence structure.** The pattern is the argument.
- **Chapter VII uses Vanderbilt as the concrete revenue-loss example.** Chosen because (a) their SEC membership is long-established, (b) they are academically insulated from football criticism in a way that keeps the chapter from reading as a takedown, (c) they represent the structural category cleanly.
- **Chapter IX has three asks.** Write, engage, share. In ascending scope: individual act, stance, network effect.

---

## 4. Open questions (new, from the drafting session)

Things that emerged during drafting that were flagged for later consideration but not resolved.

- **Essay length vs site-spec target.** The site spec's § 6 says 3,000–5,000 words; the essay is ~10,700. Decision required: update the spec to match (simpler), or discuss whether compression is desirable (harder). Author's disposition during drafting was *as long as it needs to be*, which supports keeping the length.
- **Whether "the preceding chapter" is a permissible construction.** Softer than naming a specific chapter by number but still a reference to the essay's structure. Two instances remain in Chapter VII; the consistency pass should land a final rule.
- **Long arc of worthwhile institutions claim in Chapter IX.** The sentence *"We should be perpetually considering the long arc of any worthwhile institution"* is claim-forward. No action required unless the author wants to revisit.
- **Whether Chapter IV's Notre Dame paragraph reads right after Chapter VIII locks.** The author flagged a possible revisit. Could relocate the substantive Notre Dame argument to Chapter VIII entirely and leave Chapter IV with just the rule statement, or leave as currently drafted.
- **Whether the essay earns a subtitle or title beyond *"The Proposal."*** Deferred to the site-integration session.

---

## 5. How to use this spec

Future sessions working on the proposal should:

1. Load this file into context alongside the essay source (`docs/proposal-essay.md`) and the site spec.
2. Choose one of the tasks in § 2 and work through it. Citation pass and consistency pass can be done partially — a chapter or two at a time is fine.
3. Update this spec at the end of the session with what was completed, what's still outstanding, and any new decisions or open questions.
4. When the essay is ready for site integration, move from § 2.1–2.4 work into the § 2.6 build session.

This spec is a working document. Edit directly as decisions are made.

---

*End of working spec v1.0.*
