# Proposal Working Spec

**Project:** thetwenty-four.com
**Scope:** The long-form essay at `/proposal`, from the end of the drafting session through launch on the site.
**Parent document:** `docs/site-spec.md` (authoritative). This working spec does not duplicate anything from the site spec; it extends it for the post-drafting phase only.
**Locked essay source:** `docs/proposal-essay.md`. All chapter numbers below refer to that file.
**Status:** Draft v1.0 of the essay is locked. Citation pass, consistency pass, landing-copy pass, and site/CC spec update pass all complete (see § 2.1, § 2.2, § 2.3, § 2.4). Author's final review (§ 2) and site-integration work (§ 2.6) remain; the graphics pass (§ 2.5) is now specced and build-ready (build pending).

---

## 1. Purpose

This document is the north star for the sessions that follow the essay's drafting. It does three things:

1. Tracks the outstanding tasks on the essay before it is ready for the site. Organized by task type, with chapter-level granularity where relevant.
2. Records the decisions made during the drafting session that need to propagate back to adjacent documents (landing copy, CC spec, site spec, design system).
3. Names the visual and structural questions that were deferred to a later session.

The drafting session established the essay's voice, structure, and argument. Everything here is refinement, verification, or integration — not substantive new writing.

---

## 2. Tasks by type

### 2.1 Citation pass — complete

The citation pass is complete as of the April 2026 session. Model followed: **inline links on specific external claims, no footnotes, no bibliography.** Markdown link syntax (`[anchor](url)`) throughout the essay source file. The final essay carries **18 inline links** across 9 chapters — slightly above the 8–15 target the spec originally set, but the author was comfortable exceeding the cap where claims earned citations. Primary sources were preferred where available (conference announcements, school athletics sites, government pages like army.mil); mainstream industry reporting (ESPN, Sports Illustrated, CBS Sports, Sports Media Watch, Sportico) was used where primary sources weren't available or didn't carry the rhetorical framing the claim needed.

**Prose edits the citation pass surfaced and locked (19 total):** Every prose edit below was driven by a factual check the citation pass performed. These are in addition to the citations themselves.

- **Chapter I:** Media-deal language reframed to total distributions rather than per-rights-deal (both Big Ten and SEC sentences); "ten football-bearing programs" → "twelve" at Pac-12 dissolution; Oregon State / Washington State 2024 characterization expanded to reference the Mountain West scheduling alliance; Boise State 2024 CFP rewrite (top-five conference champions autobid structure, No. 3 seed by virtue of autobid, lost to Penn State in quarterfinals); "two orders of magnitude" softened to "more than an order of magnitude."
- **Chapter II:** "Half-century" → "three decades" on the Premier League turnover precedent.
- **Chapter IV:** "Since 2013" → "since 2014" on Notre Dame's partial ACC football schedule (2013 was the broader non-football ACC membership; the football scheduling arrangement began in 2014).
- **Chapter V:** Autobid coverage claim softened from "the volume of coverage that the quarterfinals received" to "drew enough sustained coverage that the CFP altered the autobid structure for 2026" (verifiable consequence replaces unverifiable volume comparison).
- **Chapter VI:** Texas–Texas A&M attribution corrected (Texas A&M left the Big 12, not Texas); Army-Navy softened from "older than every program" to "older than nearly every program" (to accommodate Michigan 1879 and Notre Dame 1887, which predate Army-Navy 1890); "Red River Shootout" → "Red River Rivalry" (current canonical name since 2005); "World's Largest Outdoor Cocktail Party" retained despite being dropped from official usage since 1988, because it remains the rivalry's recognizable popular name.
- **Chapter VII:** Vanderbilt → Mississippi State (seven instances across the chapter). See § 3.3 for the rationale.

**The one piece of future-facing citation work.** The Chapter VII revenue-loss example now uses Mississippi State, which — being a public FOIA-accessible SEC school — has financial data that is obtainable without reporter contacts or paywalled sources. The current essay cites Mississippi State's 1932 SEC membership and the general structural claim via SEC-distribution sources already linked in Chapter I. If the author later wants to sharpen the Chapter VII claim with specific Mississippi State football-media-revenue numbers (e.g., in a future revision or supporting appendix), the reporter-contact path and FOIA route remain open and would now return data on the named program rather than on a private-school proxy. Not required for publication; available as a later sharpening.

**Link inventory by chapter** (for future consistency-pass reference):

- **Ch I (5):** Big Ten revenue (Sportico); SEC distributions (SEC); Pac-12 dissolution (ESPN); Stanford 36 sports (Stanford Facts); CFP expansion (CFP).
- **Ch II (1):** Premier League turnover rule (Premier League).
- **Ch IV (1):** Notre Dame 1887 independence (fightingirish.com).
- **Ch V (4):** 2023 Florida State (ESPN); 2017 UCF (SI); 2014 TCU/Baylor retrospective (ESPN); 2026 autobid rule change (SI Boise State).
- **Ch VI (3):** Army-Navy 1890 (U.S. Army); Backyard Brawl restoration (Pitt); Texas–Texas A&M 2024 renewal (ESPN recap).
- **Ch VII (3):** SEC Championship Game history (ESPN retrospective); SEC/Big Ten CCG valuation (Sports Media Watch); Oklahoma/Texas to SEC 2024 (ESPN).
- **Ch VIII (1):** Notre Dame NBC arrangement and independence (ESPN Bevacqua interview).
- **Ch III and Ch IX:** No external citations. Chapter III is the proposal's own mechanics; Chapter IX is the closing invitation.

**Decisions made during the citation pass that should not be revisited.**

- The 18-link total is above the original 8–15 guideline but the author explicitly accepted the overage. Future consistency passes should not reflexively cut links to return to the original cap.
- Rivalry-name treatment in Chapter VI (keeping "Cocktail Party" despite official discontinuation, swapping "Shootout" for "Rivalry") is locked.
- The Mississippi State substitution in Chapter VII supersedes the earlier Vanderbilt decision recorded in § 3.3; the rationale is preserved there for completeness.
- Retrospective sources (e.g., the ESPN 2014 TCU/Baylor piece) were accepted where they tell the story more cleanly than contemporaneous fragmentary coverage would.

---

### 2.2 Consistency pass — complete

The consistency pass is complete as of the April 2026 session, immediately following the citation pass. Worked as a single sweep against the cited version of the essay. Twelve discrete edits landed.

**Voice and register (5 edits):**
- Line 43 (Ch II): Removed *"The argument for the 2012 map is made later in the essay."* The following sentence already handles the "reader is entitled to know that up front" work; the forward-pointer was redundant.
- Line 141 (Ch VII opening): Removed the *"preceding chapter made the case for what the proposal preserves; this chapter owes an accounting of what it doesn't"* construction. Replaced with a direct opening — *"What follows is that accounting"* — that does the same framing work without pointing at another chapter or meta-describing the current one.
- Line 143 (Ch VII UCF paragraph): Removed *"The preceding chapter named this in the context of the CFP's replacement mechanism. It belongs in the accounting."* The UCF example carries the point directly; the chapter pointer and the "belongs in the accounting" connective were both redundant given the chapter's overall accounting conceit.
- Line 183 (Ch VIII): *"open questions that this chapter does not name"* → *"open questions the proposal has not yet named."* The scope shift from chapter to proposal is more accurate to the claim (future contributors will find problems beyond what the proposal as a whole names, not just what Chapter VIII names).
- Line 149 (Ch VII): Removed *"This is, structurally, the argument the essay has been making throughout — merit-based mobility is a better arrangement than conference-shopping — but it is also a real constraint..."* meta-reference. Let the *"merit-based mobility is a better arrangement than conference-shopping"* claim carry directly.

**Meta-commentary and tics (5 edits):**
- Line 57 (Ch III): *"a side benefit worth naming:"* → *"a side benefit:"*
- Line 61 (Ch III): *"An edge case worth noting:"* → *"An edge case:"*
- Line 85 (Ch IV): *"The asymmetry of the mechanism is worth naming."* → *"The mechanism is asymmetric."*
- Line 133 (Ch VI): *"it is also worth naming as its own thing, because"* → *"it is also its own thing, because"*
- Line 157 (Ch VII): *"The argument for why the cost is acceptable is the same argument that runs through the rest of the essay: the current arrangement's revenue concentration is itself the force driving the realignment the essay has diagnosed."* → *"The argument for why the cost is acceptable is structural: the current arrangement's revenue concentration is itself the force driving the realignment."* Eliminated two meta-references in a single sentence.
- Line 171 (Ch VIII): *"the essay does not soften it"* → *"the proposal does not soften it."* The honest accounting belongs to the proposal, not the essay describing itself.
- Line 119 (Ch VI opening): Removed *"This chapter is about what stays."* Folded *"what stays"* into the next sentence (*"It is worth walking through what stays in some detail, because..."*) to preserve the transition.
- Line 63 (Ch III): *"historically load-bearing"* → *"a preserved rivalry."* Eliminated the only *load-bearing* instance in the essay, matching the essay's earlier rivalry-preservation language.

**Terminology and proper nouns (3 edits):**
- Line 175: *"semi-finals"* → *"semifinals"* (American usage; matched the form already used in lines 81 and 83).
- Line 33 (Ch II): *"promotion playoff"* → *"Promotion Playoff"* (capitalization consistency; all 17 instances now capitalized).
- Line 41 (Ch II): *"promotion playoff"* → *"Promotion Playoff"* (same).

**Checks that ran clean with no edits required:**
- Boundary Games capitalization (all 5 instances correct).
- Champions Conference capitalization — no bare *the conference* used as a reference to it.
- Hawai'i with 'okina (correct in the one instance).
- Catalog vs. catalogue (one instance, correct American spelling).
- FBS vs. FBC (no FBC instances found; the concern flagged in drafting did not survive into the final text).
- Games vs. matches (all *matches* instances are either volleyball, which uses the term correctly, or describing the Premier League on its own terms).
- First-person voice audit — every first-person use lands where the spec said it should (Chapter VII's one *I believe* on realignment-as-mobility; Chapter IX throughout).

**Retained deliberately:**
- One *"worth naming"* instance at line 45 (Ch II on the inaugural-selection caveat). Does specific rhetorical work — signals that the problem exists and deserves acknowledgment, but shouldn't derail the chapter. The spec's concern was about the drafter's overuse of the phrase; one well-placed instance doing specific work doesn't match the pattern the spec flagged.
- *"The World's Largest Outdoor Cocktail Party"* retained in Chapter VI despite official discontinuation, per decision locked during citation pass (§ 2.1).

**Decisions from this pass that should not be revisited:**
- The four *"worth naming/noting"* instances that were removed (lines 57, 61, 85, 133) are all tightenings that replace filler with direct framing. Reintroducing the phrasing would re-add the tic.
- The shift from *"essay"* to *"proposal"* in line 171 reflects the editorial principle that Chapter VIII's Notre Dame accounting is the proposal's posture, not the essay's self-description. Keep any future edits consistent with this principle.
- The line 119 removal of *"This chapter is about what stays"* applies the "Chapter N is about Y" rule consistently. No chapter in the essay now points at its own scope meta-descriptively.

**"Not X; it is Y" construction sub-pass (April 2026).** After the initial consistency pass, a sub-pass surfaced the *"X is not A; it is B"* rhetorical construction as a recurring tic — ten-plus instances across the essay, clustered audibly in Chapter IX. The author chose to reduce to a maximum of one instance, retained where the construction does load-bearing structural work rather than rhythmic work. Eleven instances were revised; two retained. Edits landed at lines 37, 53, 57, 61, 131, 145, 157, 163, 183, 195 (twice — one original "not X; it is Y" instance and one "not only X; it is also Y" variant), 197 (twice — same pattern), 199. The one "not X; it is Y" retained is line 123 (*"This is not sentimentality; it is structural preservation, and the distinction matters"*), chosen because the distinction being drawn is the chapter's own premise and the construction is self-aware (explicitly naming that the distinction matters). The one "gradation" instance retained is line 47 (*"The proposal is not complete. It is complete enough to debate, iterate, and refine"*), which does calibrating-degree rhetorical work rather than binary contrast. Future edits should avoid reintroducing the construction; an automated grep for `is not .*; it is` or `are not .*\. They are` catches the pattern.

**Link count preserved:** 18 inline links unchanged across the full consistency pass (main pass plus construction sub-pass).

---

### 2.3 Landing-copy pass — complete

The landing-copy pass is complete as of the April 2026 session. Scope: reconcile `src/content/landing.ts` against the essay's final decisions (citation pass and consistency pass) and extend the "not X, it is Y" construction reduction to the landing copy. Seven edits applied.

**Edits applied:**

- **Thesis (line 33):** *"There is a cleaner arrangement"* → *"There is a better arrangement."* Matches the essay's Chapter I close and the essay's consistent use of *better* as the proposal's framing.
- **The problem, paragraph 3 (line 52):** *"One Group of Five bid in a field of twelve is not access; it is decoration."* → *"One Group of Five bid in a field of twelve is decoration."* Dropped the *"not X; it is Y"* contrast half; the word *decoration* against the reader's implied expectation of *access* carries the contrast implicitly.
- **The proposal, paragraph 2 (line 62):** *"Membership is earned and lost on the field, not in a boardroom."* → *"Membership is earned and lost on the field."* Dropped the *"not in a boardroom"* half; the paragraph's framing of conference champions entering the promotion playoff carries the anti-boardroom implication.
- **Why it works, paragraph 2 (line 72):** *"A 4-6 Champions Conference program is not playing out the string; it is playing for its place in the league."* → *"A 4-6 Champions Conference program is playing for its place in the league."* Dropped the *"not playing out the string"* half; the preceding sentence (*"Relegation gives the bottom of the standings stakes the current system cannot offer"*) already implies the contrast.
- **Why it works, paragraph 3 (line 73):** Rivalry examples changed from *"Ohio State and Michigan. Texas and Texas A&M. USC and Notre Dame."* to *"The Game. The Iron Bowl. The Egg Bowl."* Canonical names match the essay's Chapter VI register and compress cleanly for the landing's scale.
- **What else, paragraph 1 (line 83):** *"Staying becomes a strategy, not a sacrifice."* → *"Staying is a strategy."* Matches the pullquote revision below.
- **What else pullquote (line 87):** *"Staying becomes a strategy, not a sacrifice."* → *"Staying is a strategy."* Preserves the argument (staying as the strategic choice under the proposal) while eliminating the construction. The pullquote is the landing's most-emphasized text; the construction needed to be removed there as a priority.

**Retained deliberately:**

- **"An audition for an audition" (line 31).** The working spec flagged this as the landing's most New-Yorker-register moment, not carried forward into the WiP-register essay. Retained because the landing page operates at compression where a sonic move is defensible; the essay's Chapter I has the space to make the argument substantively and doesn't need the compressed sonic move.
- **Figcaption Notre Dame/BYU/Tulane/James Madison example (line 41).** The example is complementary to Chapter I's Boise State autobid example — one illustrates autobid inclusion (Boise State 2024), the other illustrates autobid exclusion (Notre Dame/BYU 2025). Both are accurate facets of the autobid structure. No conflict.
- **Figcaption omission of the "36 varsity sports" Stanford reference.** The landing's argument body (*"Stanford, a school most of whose sports never leave the Pacific, plays in the ACC"*) makes the Stanford point at a different level of specificity than the essay. Different levels, not conflicting levels.
- **Newsletter copy.** The newsletter and Chapter IX serve different functions — utility vs. conversational sendoff. Different registers are appropriate.

**Construction pattern extension.** The anti-*"not X, it is Y"* rule applied to the essay during the consistency sub-pass was extended to the landing. All four construction instances in the landing copy were revised. The landing no longer carries any "not X, it is Y" or "X, not Y" constructions. The 1-instance essay retention (line 123, *"This is not sentimentality; it is structural preservation"*) remains the only instance across both the essay and the landing; the landing has zero.

**Decisions from this pass that should not be revisited:**

- Canonical rivalry names on the landing page (The Game / Iron Bowl / Egg Bowl) match the essay's Chapter VI register. Future edits should not reintroduce the school-name-pair form (*Ohio State and Michigan*) unless a new rhetorical purpose warrants it.
- The *"audition for an audition"* retention is deliberate; it's the one intentional register variance between landing and essay. Future edits should not "correct" it toward WiP register without reconsidering the landing's compression-tolerant context.
- The pullquote change (*"Staying becomes a strategy, not a sacrifice"* → *"Staying is a strategy"*) is load-bearing for the landing's what-else section. Future revisions should preserve the three-word version; reverting to the longer version reintroduces the construction.

---

### 2.4 Site spec and CC spec updates — complete

Both specs were updated in the April 2026 session, bringing them into alignment with the essay's final state. Site spec bumped from v0.7 to v0.8; CC spec updated with terminology renames and a Notre Dame/UConn section rewrite. Glossary addition deferred to the `/spec` build session per prior decision.

#### Site spec updates (v0.7 → v0.8)

Eight edits applied to `docs/site-spec.md`:

- **§ 2 Voice note.** Added the *"X is not A; it is B"* construction rule to the standing constraints list. The paragraph now names it explicitly as reserved for one or two load-bearing instances across the project, with the default move being to drop the *"not A"* half. Includes the automated grep pattern (`is not .*; it is` or `are not .*\. They are`) that future sessions can use to catch reintroductions.
- **§ 6 Structural decisions, graphics candidates.** Chapter VII graphic candidate updated from *"Vanderbilt revenue comparison"* to *"Mississippi State revenue comparison"* with a note explaining the swap (Mississippi State is public and FOIA-accessible, closing the data dependency that threatened the chapter).
- **§ 6 Chapter VI summary.** *"Red River Shootout"* → *"Red River Rivalry"* in the canonical rivalry list, matching the citation pass's name correction.
- **§ 6 Chapter VII summary.** *"Vanderbilt named"* → *"Mississippi State named"* with a short note on the citation-pass swap.
- **§ 6 Writing notes on landing page.** Updated from pending-future-work framing ("will need a targeted rewrite") to completed-work framing, referencing the landing-copy pass's specific edits.
- **§ 11 Open questions.** The *"v0.7: Landing-copy tone drift"* item marked resolved in v0.8, with a brief summary of what the landing-copy pass accomplished.
- **§ 13 Recommended order of operations.** Items 2 (citation pass), 3 (consistency pass), and 4 (landing-copy rewrite + CC spec updates) marked complete with brief summaries of the outcome.
- **Version footer.** v0.7 → v0.8.

#### CC spec updates

Three edit clusters applied to `docs/champions_conference_spec.md`:

- **Terminology rename: Relegation Match → Boundary Game.** All 16 instances renamed, covering both singular and plural forms. Section header *"Relegation Match Details"* became *"Boundary Game Details."* The rename was mechanical (via sed) and an initial pluralization error (*Matches* → *Gamees*) was caught and fixed in a second pass. Final state: 16 Boundary Game instances, all correctly capitalized, zero Relegation Match remaining.
- **Notre Dame section rewrite.** The section at line 452 was reframed from *"⚠️ OPEN DISCUSSION"* to *"A Rule With a Negotiation Attached"* — the framing the essay's Chapter VIII established. Structure now documents (a) the rule, (b) why the rule is clean, (c) Notre Dame's specific negotiation shape, (d) UConn's symmetric-rule-asymmetric-stakes treatment, and (e) the closing honest distinction between what's resolved (the rule) and what's open (the negotiations, which the design cannot by itself produce consent for). UConn promoted from a three-bullet "UConn Note" appendix to a full parallel subsection matching Notre Dame's structure.
- **Capitalization verification.** *Promotion Playoff* (38 instances) and *Champions Conference* (61 instances) both uniformly capitalized across the CC spec. No slips. One lowercase *"boundary games"* that slipped in during the rename was caught and fixed.

#### Deferred to the `/spec` build session

- **Glossary addition.** A one-page glossary naming Boundary Games, Promotion Playoff, Champions Conference, and the key rivalries would be good UX for readers arriving at the spec cold from the essay. Deferred because glossary design interacts with `/spec` page layout decisions that belong to the build session (§ 2.6).

#### Decisions from this pass that should not be revisited

- The terminology is *Boundary Game* (singular) and *Boundary Games* (plural), proper-noun capitalized throughout the CC spec. Future edits should not revert toward *Relegation Match*.
- The Notre Dame / UConn section's framing ("a rule with a negotiation attached") matches the essay's Chapter VIII and closes the prior OPEN DISCUSSION flag. Future edits should not reintroduce the flag unless the rule itself becomes genuinely contested again; negotiation-difficulty updates belong in the body prose, not in a section-level status marker.
- The Mississippi State / Vanderbilt swap is documented in both the site spec and the CC spec (where the CC spec did not carry the example, no swap was needed). Future edits should reference Mississippi State as the Chapter VII revenue example; Vanderbilt retained only in explanatory context about the swap itself.

---

### 2.5 Graphics pass — specced (build pending)

The graphics pass was held as a dedicated planning session (a follow-on to the citation, consistency, landing-copy, and spec-update passes). It was **spec-only by design**: no assets were built. The session walked all five candidates one at a time, locking each before moving on, and tested every candidate against a single bar — *does it illustrate something the prose cannot?* Five assets survived that test. One essay inconsistency was surfaced and corrected (see Cross-document outcomes). Two system-level motifs were recorded for build continuity.

This section supersedes the drafting-era candidate list that previously lived here; see **Superseded** at the end for what changed and why.

Each asset below is specced in the format a designer can execute against: **purpose · data source · visual form · register · build approach**, plus any open item carried into the build.

#### Chapter I — The Broken Map

- **Purpose.** Open the essay with the geographic *symptom* of the revenue distortion — make the sprawl land as an image before the analysis begins (Big Ten New Jersey→California, Stanford in the ACC, the Pac-12 scatter, cross-country travel for non-revenue sports). Problem-only: the 2012 reset is left to its Chapter II reveal and to Chapter VI's prose, not front-run in the diagnosis. Reframed from the placeholder's "logistical comedy" to *the geography of the distortion* — analytical, not editorial-cartoon.
- **Data source.** Fully public and known — conference memberships and school locations. No sourcing dependency.
- **Visual form.** Schematic, not accurate cartography. A very soft, low-contrast national silhouette as ground (no state borders, no labels); the horizontal axis honestly scaled to real longitude so East–West extent is truthful. Conference footprints as lightly tinted regions / grouped points, so a league reads as a *spread* across time zones.
- **Register.** Monochromatic. Oxblood reserved for the single longest, most absurd span (the Pacific-to-Atlantic case). Serif for any labels, sans for the eyebrow, mono only if distances/coordinates appear.
- **Build.** Hand-built SVG, zero-JS, cousin of `ChampionsField.tsx`. Dual responsive; the narrow variant is the hard part (East–West span is worst-case on a phone — expect reflow/rotate, not just scale).
- **Open item (build-time A/B).** Foundation is locked (schematic ground, honest longitude, tinted footprints, oxblood on the longest span). The one unresolved fork is whether thin cross-country **arcs** sit on top (reads as *athletes traveling*) or the tinted **footprints alone** carry it (more restrained, further from the flight-path-arrow instinct being avoided). This is a see-it decision: the build renders both variants and the author picks on sight. Author lean: keep a few arcs, lightly. This is the only asset carrying an open decision into the build; III, IV, V are fully closed.

#### Chapter III — Mirrored-Rotation Alignment Diagram

*(Reframed from the placeholder's "10+2 Schedule Matrix.")*

- **Purpose.** Show the one genuinely spatial idea in the chapter: **mirrored rotation** — a team's slot within its division determines that it plays the same slot in the other two divisions (top plays top, bottom plays bottom, at every rung). The 7+3+2 composition is already carried by prose and by the table at essay lines 100–104; a composition card would only re-skin that table. The graphic's subject is the cross-division alignment the prose cannot hold in the reader's head.
- **Data source.** Internal — Oregon's slot and opponents from the 2025 Champions Field snake-draft dataset (the same data Ch V uses). Illustrative for a representative season, framed as such (consistent with Ch V). Oregon is inherited from locked prose (the typical-program choice — not Indiana, not the pilot-light programs). The build may substitute a cleaner representative slot if Oregon's actual 2025 slot hides the mirror logic, labeled illustrative.
- **Visual form.** Three division columns (I / II / III), rendered mostly as light *empty* slot markers. Oregon lit at its slot; its ~10 opponents revealed as connections — 7 division ties within its own column (the round-robin, subordinate), 2 mirrored cross-division ties to the *same slot* in the other two columns (the hero move), 1 rotating cross-division game marked distinctly, 2 rivalry games as off-grid annotations hanging off Oregon (they come from outside the league structure). A small 10+2 tally rides along, subordinate.
- **Register.** Monochromatic. Game types distinguished by **line/shape treatment and tonal value** (solid / dashed / off-grid; graphite / tint), *not* color — a multi-hue dashboard would blow the palette. Oxblood reserved for rivalry games only, tying the asset to the proposal's preservation argument rather than dashboard-labeling a schedule slot.
- **Build.** Hand-built SVG. Kept distinct from the Champions Field via the one-team-connection reading (mostly empty slots, ~10 lit; a *connection* diagram, not a *membership* snapshot). Dual responsive.

#### Chapter IV — Promotion & Relegation (boundary-crossing exchange)

- **Purpose.** Show the annual exchange (four out, four in, ~17%), the **asymmetry** the chapter turns on (relegation is a season-long verdict; promotion is a sprint), and the Boundary Games as the hinge where the two systems meet.
- **Data source / mechanics.** No external data. Mechanics are canonical from the CC spec's Promotion Playoff Structure (lines 430–449): the **six-bye** structure. The essay's prose at lines 158–159 was corrected this session to match (see Cross-document outcomes) — the prior "two top seeds bye, other eight play-in" summary did not close arithmetically; ten teams admit exactly one clean single-elimination shape (four in the play-in, six byed).
- **Visual form.** A **vertical boundary-crossing exchange diagram — not a bracket.** A horizontal membership line is the spine (deliberately rhyming with the Champions Field cut-line). Above it, the Conference bottom (positions 21–24); below it, the Promotion Playoff field. 23 and 24 drop straight down (out); the two semifinal winners rise straight up (in); 21, 22 and the two semifinal losers converge *onto the line*, where the two Boundary Games sit. The relegation side is a **calm static standings column** (the verdict); the promotion side is an **abstracted collapsing feeder** (the sprint) — seeds 1–10 labeled, internal matchups left to the spec. The two visual temperatures encode the asymmetry.
- **Register.** Monochromatic. Oxblood reserved for the hinge — the boundary line and the Boundary Games. Canonical labels PP #3 / PP #4 (not the ASCII's "Loser C/D"). No dates — timing belongs to the two-track calendar visual (site spec § 10, item 3b); do not double-encode it here.
- **Build.** Hand-built SVG, cousin of `ChampionsField.tsx`. The vertical orientation is mobile-friendly, so a dual wide/narrow treatment comes nearly for free.

#### Chapter V — The Playoff Standings Bracket

- **Purpose.** Show the **derivation** — the 12-team CFP field emerging as a mechanical consequence of the standings, seed equal to standings position, with no committee node in between. The mapping is the argument, not the bracket. Resist any committee imagery or lettered "no drama, just math" captions on the canvas; the directness of the mapping carries the point (same register discipline the consistency pass earned).
- **Data source.** **Compressed-hypothetical records on the real 2025 team identities** — top team ~11-1 descending to ~7-5 / 6-6 at #12, faithful to the essay's balance claim (lines 80–84) — carrying a small "illustrative Champions Conference standings" label so it cannot read as a real result. Real 2025 records were rejected: they are full of undefeateds and would visually contradict the chapter's own claim that balanced scheduling makes such records rare.
- **Visual form.** Side-by-side standings → bracket (horizontal, left→right, the way brackets conventionally read). The derivation is carried by two devices used lightly together: thin connective threads from each standings row to its bracket entry point (the "nothing comes from outside" argument) and a shared mono seed-number echo (the redundancy that makes it legible at a glance). Standard 2024 CFP shape: 12 teams, seeds 1–4 bye, 5–12 first round on the higher seed's campus, through the NY6 bowls to a mid-January final.
- **Register.** Monochromatic. Oxblood on the **#12/#13 cut-line only** (the in/out line); the champion slot stays graphite so oxblood appears once. Mono for seeds/positions/records, serif for names/labels, sans for the eyebrow.
- **Build.** Hand-built SVG, cousin of `ChampionsField.tsx`. Redraw a simple top-12 column echoing the Field's row treatment (type, chip style) — *not* a re-render of all 24, which would duplicate the landing hero. Dual responsive; 12-team brackets are wide, so the narrow variant (likely reorienting the bracket to run top-to-bottom) is the hard part — flagged for the build session, not solved in spec.

#### Chapter VII — Mississippi State revenue exposure

- **Purpose.** Make concrete the chapter's hardest loss: how much of the program's football revenue is the single guaranteed SEC-distribution check that the proposal turns performance-contingent.
- **The finding that shapes the form.** "Current vs. proposal" is *not* two comparable numbers. The current side (a full SEC pooled share) is real and reported. The proposal side (revenue in a regional-form SEC, plus a partial Conference Development Pool offset) is an output of a revenue model the proposal deliberately leaves unspecified — it is **unsourceable by nature**, not obtainable from Extra Points, FOIA, or the SEC, because it is not a fact about the world. A straight two-bar chart would have to fabricate its second bar, betraying the chapter's honest-accounting register. The form was chosen accordingly.
- **Data source (two real inputs).** (a) **SEC per-school distribution, FY2023–24** — SEC official reporting (already cited in Ch I; match the vintage so the essay's revenue figures stay internally consistent). (b) **Mississippi State generated football revenue by source** — from the NCAA MFRS filing and/or federal EADA report, obtainable by Mississippi public-records request or, more efficiently, via **Extra Points** (extrapointsmb.com, Matt Brown), which specializes in these filings. **MFRS care rule (build constraint):** use *generated* revenue and isolate the conference-distribution line; exclude or visually segregate allocated/institutional support (student fees, direct institutional and state subsidy), which MFRS "total revenue" folds in — including it would misattribute subsidy as football revenue or dilute the proportional severity of the loss. Extra Points' value here is the Mississippi-State-side composition, *not* a proposal-side figure; no source can provide the latter.
- **Visual form.** **Exposure / composition** — a single segmented bar (or proportion figure) of Mississippi State's generated football revenue by source, with the SEC-distribution slice highlighted as the large, guaranteed portion the proposal turns contingent. The loss is shown as *this slice becomes performance-contingent*, never as a fabricated smaller bar. Fallback if the composition data won't isolate cleanly: a **directional two-state** (one real anchored bar plus a downward arrow / shaded uncertainty band of deliberately unspecified magnitude). The modeled two-bar was rejected (it would require committing the proposal to revenue-model assumptions it declines to make).
- **Register.** Monochromatic; graphite segments, oxblood on the at-risk SEC-distribution slice. Mono for figures/percentages, serif for labels, sans for the eyebrow. A **visible source-and-vintage note is mandatory** here (optional elsewhere) — the citation is part of the graphic's honesty and this is the asset most exposed to "where did that come from."
- **Build.** Hand-built SVG with values hard-coded from the sourced filing (not a live chart library). This is the one genuinely **data-carrying** asset: its build is blocked on an upstream data pull (see Cross-document outcomes). Upside: a single composition bar is the most mobile-friendly of the five — near-zero responsive risk.

#### Working order and rationale

Specced in the order **IV → V → III → I → VII** (essay order is I → III → IV → V → VII; the deviation was deliberate). The two bracket-twins (IV, V) were worked consecutively so they could be differentiated on purpose — IV a vertical *exchange* with an abstracted feeder, V a horizontal *bracket* fully explicit; different orientation, different spine, opposite abstraction. Ch III followed as a quick, fully-internal asset. Ch I was held later as the contested one (register tension plus the displaced-chart and map-vs-map riders). Ch VII closed the session as the data-dependency hand-off.

#### System-level motifs (record for build continuity)

Two ideas now recur across multiple assets and should be treated as intentional systems, not coincidental repetition:

1. **The oxblood in/out line.** Recurs as the Champions Field top-12 cut-line, the Ch IV membership boundary, and the Ch V #12/#13 cut-line. All three express the same idea — the line between in and out — and should read as one visual vocabulary.
2. **The three-division scaffold (I / II / III).** Recurs across the Champions Field and Ch III. This one requires the deliberate differentiation built into Ch III (empty scaffold, one-team connections, not a membership snapshot) so the reuse reads as intentional rather than as the Field drawn twice.

#### Cross-document outcomes

- **Essay edit (applied this session).** Chapter IV bullets at essay lines 158–159 were corrected to the six-bye Promotion Playoff structure to match the CC spec; the prior summary did not close arithmetically. *Open sub-item:* confirm the doubled-"the" typo in the applied edit ("join the the top six seeds") has been fixed. Once confirmed, this session's essay dependency is fully closed.
- **Ch VII upstream data task (before build).** Pull (a) SEC FY2023–24 per-school distribution and (b) Mississippi State generated-football-revenue-by-source from EADA/MFRS or Extra Points, excluding allocated support per the MFRS care rule. The Ch VII build starts only after these land.
- **Ch I build-time A/B.** The build renders both the arcs and footprints-only variants of the Broken Map; the author picks on sight.

#### Superseded

This section replaces the drafting-era candidate list. What changed, and why:

- The **map moved from Chapter VI to Chapter I** and changed jobs — from a "what's preserved vs. what's changed" *solution* map to a *problem* map of the current geography (matching the placeholder the author added during the iA Writer pass).
- The **Chapter I revenue-concentration chart was retired.** The *cause* (revenue concentration) is sufficiently carried by the cited prose figures ($1B Big Ten, $1B SEC, "more than an order of magnitude"); the *consequence* is carried by Chapter VII. Charting it in Ch I would add a third data-viz and either crowd the chapter or duplicate Ch VII's register.
- A **Chapter V bracket asset was added** (not in the drafting-era list; anticipated by the site spec as the CFP bracket that emerges from the Champions Field).
- The **Chapter VI "what's preserved" solution-map was retired** — better carried by the rivalry list already in Chapter VI (essay lines 223–231) than by a second, more complex two-state map.

Net: **five assets** (Chapters I, III, IV, V, VII), each earning its place.

#### Retained logistics (still hold)

- Visuals on `/proposal` share design language with the Champions Field: editorial infographic, typography-driven, oxblood sparse.
- Not every chapter needs a visual; the essay reads well as text. Five across nine chapters is at the top of the earlier "3–5" range and is where the pass deliberately landed.
- All five are **hand-built SVG, zero-JS, cousins of `ChampionsField.tsx`.** None are chart-library output; Ch VII is data-carrying but hard-coded from a sourced filing.

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
- **Chapter VII uses Mississippi State as the concrete revenue-loss example.** This supersedes an earlier locked decision to use Vanderbilt. The swap was made during the citation pass when the author surfaced that Vanderbilt is a private school — not FOIA-accessible, no public financial disclosures required — which made Vanderbilt the least verifiable claim in the essay and inverted the chapter's honest-accounting posture. Mississippi State replaces Vanderbilt because: (a) it is public and FOIA-accessible, so the underlying financial figures are obtainable; (b) its SEC membership is equivalently long-established (1932 founding member, same as Vanderbilt); (c) it consistently sits in the bottom tier of SEC football revenue, fitting the structural category cleanly; (d) it was already named in the essay (Chapter II's Egg Bowl reference), which creates a small narrative through-line across the essay. The trade-off: Mississippi State lacks Vanderbilt's academic-insulation framing, but the chapter's honest-accounting register carries the weight without needing the academic-prestige angle as a buffer.
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

1. Load this file into context alongside the essay source (`docs/proposal-essay.md`), the landing copy (`src/content/landing.ts`), the site spec (`docs/site-spec.md`), and the CC spec (`docs/champions_conference_spec.md`).
2. Choose one of the outstanding tasks in § 2 and work through it. § 2.1 (citation pass), § 2.2 (consistency pass), § 2.3 (landing-copy pass), and § 2.4 (site / CC spec updates) are all complete. The recommended next task is to let the essay rest for a week or two, then do the author's final full review — which catches what the sweeps missed and should not be rushed. After that, § 2.5 (graphics pass) and § 2.6 (site integration) are the remaining substantive work items before launch.
3. Update this spec at the end of the session with what was completed, what's still outstanding, and any new decisions or open questions.
4. When the essay, landing, and both specs are ready for site integration, move into the § 2.6 build session.

This spec is a working document. Edit directly as decisions are made.

---

*End of working spec v1.6. Updated during the graphics-pass spec session (§ 2.5 rewritten from the deferred candidate list to five locked, build-ready asset specs).*
