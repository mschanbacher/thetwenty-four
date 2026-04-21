# The Twenty-Four — Site Specification

**Version:** 0.6
**Status:** North star for build sessions. Revise freely.
**Project:** thetwenty-four.com
**Changelog:**
- 0.6 — Landing page copy pass complete. Placeholder prose in `src/content/landing.ts` replaced with the author's real voice, section by section: thesis (~150 words), four argument sections (each 200–300 words), figcaption swapped to the long variant from `champions-field-spec.md` § 7 (Notre Dame / BYU / Tulane / James Madison now named as the concrete illustration of the current CFP's exclusion logic), newsletter and byline copy tightened to match voice. Fourth section renamed from `whats-next` to `what-else` — it's now an argumentative section on second-order effects (player retention, conference-championship meaning, the end of realignment as a revenue-chasing mechanism), not housekeeping. Oxblood audit run against the settled copy: the page is past the original budget in raw instance count (~40 total) but visually balanced; two targeted design-system adjustments shipped — `.button:disabled` styling added to `tokens.css` so the stubbed Newsletter button no longer reads equal-weight to the live CTA, and the Newsletter eyebrow set to the `muted` variant. `docs/champions_conference_spec.md` added to the repo (previously lived only in the author's local materials). Next up: 3b (two-track calendar) or session 4 (proposal drafting) — both now unblocked.
- 0.5 — Champions Field shipped. Landing page renders the inaugural 2025 Champions Field via `src/components/visuals/ChampionsField.tsx` + `src/components/landing/KeyVisual.tsx`; `KeyVisualPlaceholder.tsx` removed. Mobile layout uses a dual-SVG approach (wide 1600×900 and narrow 1000×1250 variants in parallel markup, toggled by a `@media (max-width: 639px)` rule in `globals.css`) — zero client JS, zero hydration. Figcaption in `src/content/landing.ts` updated to the terse version from `champions-field-spec.md` § 7. 63/63 programmatic geometry checks verified against rendered SVG output, including per-team (x, y) placement against the snake-draft pattern. Narrow-variant name/record gap concern raised mid-build and resolved with the real font: tightest gap is 32 SVG units on "Notre Dame" — readable, not a collision. Next up: 3b (two-track calendar).
- 0.4 — Champions Field key visual scoped. Landing-page key visual reframed: the first visual is the **Champions Field** (the 24-team league membership for a given year), not a bracket. The bracket, if it appears on the site at all, belongs downstream on `/proposal` as the 12-team CFP that emerges from the Field. Data settled (2025 inaugural field, top 24 of final CFP committee rankings, snake-draft divisions labeled I · II · III). Component spec written; build deferred to next session. See `docs/champions-field-spec.md`.
- 0.3 — Landing page session complete. `/` ships end-to-end with placeholder copy; `/proposal`, `/spec`, `/about` stubbed. Site is live at thetwenty-four.com (Vercel + Cloudflare DNS). Self-hosted fontsource stack chosen over next/font/google. Key visuals (bracket, calendar, promotion/relegation flow) deferred to next session.
- 0.2 — Design system session locked (palette, fonts, type scale, spacing, motion, link treatment). See style-guide.html.
---

## 1. Purpose

The Twenty-Four is a publication for one proposal: a restructuring of college football into a 24-team Champions Conference with promotion and relegation. The site is the authoritative home of that argument — the place journalists, fans, and thought leaders are sent, and the artifact that makes the proposal impossible to dismiss as a hot take.

The site is not a blog. It is a whitepaper microsite for a single project, designed to be taken seriously by people who are paid to think about college football.

### Audience

- **Primary:** Sports media (writers, podcasters, editors) who might cover or engage with the proposal.
- **Secondary:** Engaged CFB fans who argue about structure — the r/CFB power-posters, the Twitter commentariat, the Athletic commenters.
- **Tertiary:** Everyone the author sends a link to — including potential architectural clients encountering the author's creative-intellectual register for the first time.

### What success looks like (v1.0)

- The site exists at thetwenty-four.com and is beautiful enough that a skeptical journalist screenshots it.
- A single r/CFB post generates real discussion.
- The proposal gets referenced by at least one working CFB writer or podcast.
- A working newsletter captures interested readers.
- The author is comfortable sending the link to anyone without caveat.

### Explicit non-goals for v1.0

- Virality. This is a slow-burn credibility play.
- Feature parity with the eventual simulator — that's Stage 2.
- Comments, user accounts, or community features.
- Paid tiers or monetization.

---

## 2. Author & Voice

- **Byline:** Author's real name, listed prominently on the About page and in the newsletter. A short bio (2-3 sentences) covering professional background (designer), connection to the subject (lifelong CFB fan), and intent behind the project.
- **Voice:** First person when personal, third person when institutional. Confident but not strident. The prose equivalent of the design register — assumes a smart reader, doesn't oversell, never winks. Never uses sports-media voice (no "folks," no "here's the thing," no "hot takes"). Closer to a New Yorker essay than an ESPN column.
- **Contact:** `commissioner@thetwenty-four.com`, presented plainly on the site. The email is in-world but not labored — it should feel like a small confident choice, not a bit.

---

## 3. Information Architecture

Hybrid model: a strong landing page that routes to three deep pages.

### Pages

1. **Landing (`/`)** — The pitch. Above-the-fold elevator pitch, key visual (bracket or calendar), brief argument with pull-quotes, "read the full proposal" CTAs, newsletter signup, author byline. This is the single most-linked URL the site will ever have. Every word earns its place.

2. **The Proposal (`/proposal`)** — The full long-form essay. The argument as a reading experience: 3,000-5,000 words, carefully typeset, with inline visuals (bracket, calendar, flow diagrams). This is the "read this" surface for journalists and deep readers. Not the spec — a narrative version.

3. **The Spec (`/spec`)** — The full technical specification, readable in-browser, navigable by section, with a table of contents. The existing MD spec lightly edited for readability. This is the "show your work" surface. Also available as a downloadable PDF.

4. **About (`/about`)** — Who wrote this, why, the project's intent, contact info, colophon (fonts, tools, acknowledgments). Shorter than expected — a single-scroll page.

### Deferred routes (Stage 2+)

- `/simulator` — the interactive 2024 retrospective. Reserved in the IA from day one but not built in v1.0.
- `/essays` or `/journal` — if Ghost is subdomain-based, this may live at `read.thetwenty-four.com` instead. Discussed in §8.

### Navigation

Top nav on every page, minimal: **The Proposal · The Spec · About**. Newsletter signup lives at the bottom of every page, not in the nav. The `/` link is the wordmark in the top-left.

No breadcrumbs, no sidebars, no footer nav beyond copyright + email + newsletter signup.

---

## 4. Visual Direction

### Aesthetic register

Editorial/institutional publication. Reference lineage: Stripe Press, Works in Progress, Asterisk, MW Works, Cabinet magazine, university press monograph websites. The site should feel like a design-first publication that happens to be about football — not a sports site that happens to be well-designed.

The register's core move is *restraint as status signal.* Generous margins, quiet typography, minimal motion, near-monochromatic palette. The confidence is the pitch.

### Palette

Warm, restrained, near-monochromatic with one strong accent.

- **Ground (background):** Warm off-white, paper-like. Specifically not pure white. Target: `#F7F2EA` or similar (a soft ivory/cream). Backgrounds should feel like good paper, not screen.
- **Text:** Near-black, warm. Not pure `#000`. Target: `#1A1510` or similar (a warm graphite).
- **Accent:** Deep oxblood. Target: `#6B1F1F` or similar (a burgundy that reads as academic, not as "red"). Used sparingly — logo mark, key pull-quotes, section numerals, link hover states, CTA buttons. Appears maybe 3-5 times on any given page.
- **Rules & dividers:** A hairline warm gray, ~`#D4CBBD`. Quiet, paper-edge feel.

These are starting targets — we'll refine exact values during build.

### Typography

Two-font system.

- **Primary (serif, body + headlines):** A contemporary serif with character and weight. Preferred: **GT Sectra** (paid, ideal), **Tiempos** (paid, excellent alt), or **Source Serif 4** (free, genuinely good). Worst case: **EB Garamond** or **Cormorant Garamond** (free, elegant but more traditional). Must have proper small caps, old-style and tabular numerals, real italics.
- **Secondary (sans, UI + metadata):** A restrained, slightly-characterful neo-grotesque. Preferred: **GT America** (paid) or **Söhne** (paid). Free alternatives: **Inter Tight** (acceptable), or better, **Manrope** or **Fraunces**'s sister sans. Explicitly avoid default Inter — too generic for this register per the design skill's guidance.
- **Numerals:** Tabular lining figures for anything structural — standings tables, brackets, calendar dates, scores. Old-style figures for inline prose text. This distinction matters.

Final font choices made in the build session, contingent on budget and availability.

### Typographic hierarchy

- **Display (H1):** Serif, heavy weight, tight leading, generous letter-spacing. Used once per page.
- **Section headings (H2):** Serif, semibold, smaller than display, with a small-caps eyebrow label (sans, uppercase, oxblood) above when appropriate.
- **Body:** Serif, regular weight, 18-20px desktop / 17-18px mobile. Line-height ~1.55. Measure (line length) capped at ~65-70 characters via max-width on the body column.
- **Metadata / UI labels:** Sans, small, uppercase, letter-spaced. Oxblood or graphite.
- **Pull-quotes:** Serif, larger than body, italic, indented, oxblood mark or rule as visual anchor.

### Layout & grid

- Generous outer margins on desktop. Body text column ~640-720px max-width, centered or offset, with space either side that the design treats as intentional.
- 12-column underlying grid, but used asymmetrically. Some elements break the grid deliberately — pull-quotes offset, visuals full-bleed or set into the margin.
- Section numerals (Roman or Arabic, oxblood, large) anchor major sections — a visual move borrowed from literary magazines.
- Mobile: everything collapses to a single column, but margins and measure stay generous. The aesthetic does not degrade on mobile.

### Motion & interaction

Minimal and purposeful. No hero animations, no parallax, no scroll-jacking.

Acceptable: subtle fade-in on scroll for sections (staggered, maybe 200ms each), smooth scroll behavior, gentle hover states on links (oxblood underline appearing/thickening), subtle page transitions if using Next.js routing.

Unacceptable: animated illustrations that loop, mouse-followers, motion that announces itself, anything gimmicky.

### Imagery philosophy

Near-zero stock photography. When imagery appears, it is:

1. **Custom editorial infographics** — the Champions Field (the 24-team league membership for a given year), the calendar (two-track regular season + postseason), the promotion/relegation flow, and where it earns its place, the 12-team CFP bracket. Built as SVG or carefully-designed static images. These should be virtuoso — the one place the design lets itself be rich. Think NYT data visualization embedded in a quiet essay.
2. **Carefully chosen editorial photography** (optional, sparse) — empty stadiums at dusk, architectural details of historic venues, crowds shot from behind. Nothing celebratory, nothing action-shot, nothing that reads as stock sports imagery. The absence of expected sports imagery is itself a statement. May defer entirely to v1.1.

### Logo / mark

A proper mark for "24" is a priority, but scope it as its own work session after v1.0 launches. For v1.0 launch: a clean wordmark ("The Twenty-Four" set in the primary serif, custom-tuned) acts as placeholder. The dedicated logo design session follows once the site is live and the project has shape.

---

## 5. Landing Page Content Outline

Working outline — reflects the copy shipped in v0.6.

*As of v0.6: built, live, and in the author's voice. The copy file at `src/content/landing.ts` is the source of truth for every string on the page; components in `src/components/landing/` are purely structural and should not carry copy.*

1. **Hero** — Wordmark, single-line tagline (*"A proposal to restructure college football."*), author byline ("by Michael Schanbacher"). Minimal.
2. **The thesis, in ~150 words** — The proposal's core argument, stated plainly. Leads with the root cause (football revenue is breaking every other sport) before introducing the structural response. No throat-clearing.
3. **Key visual — The Champions Field.** The 24 teams of a given season's Champions Conference, organized into three snake-draft divisions, with the top-12 CFP cut-line visible. The inaugural (2025) field is the landing-page visual. *Built in v0.5* — component at `src/components/visuals/ChampionsField.tsx`, data at `src/content/champions-field/2025.ts`, original build spec preserved at `docs/champions-field-spec.md`. Figcaption shipped with the long variant in v0.6 — names Notre Dame, BYU, Tulane, and James Madison as the concrete 2025 case. The CFP bracket that emerges from the Field is a downstream visual — it belongs on `/proposal`, not `/`.
4. **Four argument sections**, each ~200-300 words, three of them with pullquotes:
   - **The problem** — football revenue is warping the structure of college athletics. Pullquote: *"Football's revenue settles the argument every time."*
   - **The proposal** — a 24-team Champions Conference, with promotion and relegation. No pullquote (the Champions Field figure directly above carries the section's visual weight).
   - **Why it works** — merit-based, inclusive, and better football. Pullquote: *"The sport's best programs claim they want this schedule and have spent forty years arranging their calendars to avoid it."*
   - **What else** — second-order effects the current debate doesn't touch: the portal-incentive shift, conference-championship meaning, and the end of realignment as a revenue-chasing phenomenon. Pullquote: *"Staying becomes a strategy, not a sacrifice."*
5. **CTAs** — "Read the proposal" (→ /proposal, primary oxblood button), "Read the spec" (→ /spec, text-style secondary).
6. **Newsletter signup** — single email field, no frills. Currently stubbed as a disabled form; eyebrow set to muted per the v0.6 oxblood audit. Body: *"Updates when there is something to say. No schedule, no marketing, no spam."*
7. **Author byline + footer** — Name, two-sentence bio, `commissioner@thetwenty-four.com` email, copyright.

---

## 6. The Proposal (Long-Form Essay)

A narrative version of the argument, ~3,000-5,000 words, presented as a **chaptered** reading experience rather than a single scroll. The chaptered structure was decided in v0.6: at this length, a single-scroll essay asks too much of the reader, and the proposal has natural subdivisions (mechanism, consequences, open questions) that reward being navigable.

### Structural decisions (v0.6)

- **Chapters, not scroll.** Each chapter is its own reading unit — ~400-500 words, titled, numbered, anchored. The reader can land on a chapter from a TOC, a deep link, or sequential navigation.
- **Sticky TOC on desktop.** Sidebar or left-rail pattern, showing the chapter list with the current chapter marked. Collapsed behind a button on mobile. Open question: whether this component is shared with the `/spec` TOC or is a separate implementation. Flagged in § 11; to be resolved during drafting.
- **Sequential navigation.** "Previous chapter" / "Next chapter" controls at the foot of each chapter so a reader who wants to read end-to-end can do so without returning to the TOC. The spec, by contrast, is a reference document — no sequential nav there.
- **Visuals live inside chapters.** The two-track calendar (session 3b), the promotion/relegation flow diagram (3c), and possibly the CFP bracket (3d) are embedded where they earn their place, not collected in a gallery.
- **Chapter length is permissive, not uniform.** Some chapters will run shorter (an open-questions chapter might be 200 words) and some longer. The 400-500 target is a center, not a ceiling.

### Tentative chapter list

Starting scaffold, not a contract. The draft will reshape this — some chapters may merge, split, or reorder once the prose exists. Use this to start writing against.

1. **The problem** — Revenue distortion in college athletics, the conference-realignment era, the Pac-12 case, the CFP expansion as inadequate response. Lands the diagnosis at full depth (the landing-page version is compressed).
2. **The proposal, in outline** — The Champions Conference as a concept: 24 teams, merit-selected, decoupled from regional conferences. Short chapter; establishes the object before the mechanism chapters unpack it.
3. **How the Champions Conference works** — Snake-draft divisions, schedule structure (10 CC games + 2 rivalry games), what a CC season looks like for a program. First visual candidate: the two-track calendar.
4. **How promotion and relegation work** — The annual churn: bottom-four relegation, 10-team promotion playoff from the rest of FBS, auto-promotions and relegation matches. Second visual candidate: the promotion/relegation flow diagram.
5. **The CFP, re-imagined** — Top 12 by record, no committee, bracket reads itself. Possibly: the bracket visual, if it earns its place; otherwise prose-only.
6. **What's preserved** — Rivalries (inside and across conferences), conference identity for non-football sports, the regular-season calendar's cadence. The proposal as conservation, not demolition.
7. **What's lost, and why that's acceptable** — The end of the committee's discretion, the end of conference-driven postseason access, the end of realignment as a revenue strategy. Honest accounting.
8. **Open questions** — Notre Dame's status (flagged in the CC spec as unresolved), initial-year selection method, implementation timeline, player-contract considerations. The chapter admits what the proposal has not yet settled.
9. **An invitation** — To engage, to argue, to refine. Short closing chapter; functions as the essay's goodbye and the page's implicit call-to-action to the `/spec` and to `commissioner@`.

### Writing notes

- **Relationship to the landing page.** The landing page argues in compression; the essay argues at length. The essay should assume a reader who has seen the landing page but has not yet been convinced. Repetition of core claims is expected and appropriate.
- **Relationship to the spec.** The essay is narrative; the spec is structural. The essay can gesture at mechanisms ("a 10-team promotion playoff") and let the spec page carry the operational detail. Readers who want exact rules click through.
- **Voice.** Same author voice as the landing copy (§ 2). First person when personal, third person when institutional. Chapters can run slightly warmer than the landing copy — the essay is a reading experience, and warmth is earned at length in a way it isn't in a 150-word thesis.
- **Drafting cadence.** The essay doesn't exist yet as a written piece. Drafting is scoped as session 4 in § 10 and is probably the longest single writing session on the schedule. Outline first, then draft chapter by chapter with feedback between.

---

## 7. The Spec

The existing MD spec, lightly edited for readability on the web, presented as a single long page with a sticky table of contents on desktop. Downloadable as a beautifully-set PDF (generated with care — this is not a browser-print PDF, it's a designed document).

The spec page treats the content as a reference document, not a reading experience. Code-like clarity, proper section numbering, working anchor links, tabular figures in tables.

---

## 8. Newsletter (Ghost)

- **Platform:** Ghost Pro.
- **Location:** Subdomain — `read.thetwenty-four.com` (or `journal.`, `dispatches.`, TBD). Ghost handles publishing, subscriptions, delivery.
- **Relationship to main site:** Signup forms on the main site embed Ghost's form or POST directly to Ghost's API. Main site links to the newsletter; newsletter links back to the main site. They share design language (same fonts, same palette, same header treatment) but are separate technical projects.
- **Cadence:** Not committed. "Occasional" framing lets the author write when there's something to say rather than performing a schedule.
- **First posts (loose plan):**
  1. Launch announcement + pointer to site.
  2. "What the 2024 season would have looked like" (simulator precursor, even if text-only for now).
  3. Response to the first wave of feedback/objections.

---

## 9. Technical Stack

- **Framework:** Next.js 16 (App Router), React 19.
- **Hosting:** Vercel, auto-deploy on push to `main`. Custom domain managed through Cloudflare DNS (not proxied — grey cloud).
- **Styling:** Tailwind CSS v3.4 for utilities, with custom CSS variables in `design-tokens/tokens.css` doing the real design-system work. No UI kit (no shadcn, no Chakra) — the design is too specific. **Note:** Tailwind's `@tailwind base` (Preflight) overrides tokens.css's base-element rules; a targeted override block in `src/app/globals.css` restores what's needed. If Tailwind is later dropped entirely, that block becomes redundant. See the "Architecture notes" subsection.
- **Content:** MDX for the essay and spec content, so it stays version-controllable and we can mix prose with custom components (visuals, pull-quotes, tables). Landing-page copy lives as typed data in `src/content/landing.ts`.
- **Analytics:** Vercel Analytics, to be wired (not active at v1.0 launch). A `TODO: analytics` comment marks the insertion point in `src/app/layout.tsx`.
- **Fonts:** Self-hosted via `@fontsource-variable/source-serif-4` (with the `opsz` axis) and `@fontsource/ibm-plex-sans` + `@fontsource/ibm-plex-mono`. Not `next/font/google` — chosen during build because Google Fonts wasn't reachable from the sandbox, but arguably the better production choice anyway (no build-time third-party fetch, fonts served from the app's own domain). Optical sizing verified to engage at runtime.
- **PDF generation:** TBD — could be a pre-built PDF committed to the repo, or generated on-demand. Likely pre-built for v1.0.
- **Newsletter form:** Embedded Ghost signup form (or custom form POSTing to Ghost API). Currently stubbed as disabled form UI with an honest "signup opens at launch" note.
- **Repository:** Public GitHub repo at `github.com/mschanbacher/thetwenty-four`.

### Architecture notes

Two tensions worth naming so future sessions don't rediscover them:

- **Tailwind base vs tokens.css.** `tokens.css` is the design system's single source of truth; `@tailwind base` resets base elements in a way that silently overrides it. Current fix: an explicit override block in `globals.css` that restores tokens.css's paragraph and heading rules, documented as a Preflight override. Clean long-term move is probably to drop `@tailwind base` entirely (and possibly Tailwind along with it, since utility-class usage is near-zero). Deferred to a polish session.
- **tokens.css family names vs self-hosted families.** `tokens.css` declares `--font-serif: 'Source Serif 4', ...` for portability (it's also used by `docs/style-guide.html`, which loads fonts over HTTP). `globals.css` bridges to the self-hosted family names (`'Source Serif 4 Variable'`). If the style guide is ever rebuilt to use self-hosted fonts too, the bridge becomes redundant.

### Performance targets

Fast — this is an editorial site, it should feel like paper. Lighthouse 95+ across the board. No unnecessary JavaScript. The site should load and be readable before any motion or hydration completes.

### Accessibility

Not optional. Semantic HTML, proper heading hierarchy, keyboard navigation, alt text on all imagery, sufficient color contrast (oxblood on cream has been verified at body-text sizes but we'll check all pairings).

---

## 10. Build Plan

Each item below is a candidate standalone session with its own focused spec.

1. ~~**Design system session** — Lock in exact colors, final font choices, type scale, CSS variable setup. Produces: a tokens file, a style guide page, all decisions recorded.~~ **Complete (v0.2).** See `design-tokens/tokens.css` and `docs/style-guide.html`.
2. ~~**Landing page session** — Build `/` end to end. Produces: a deployable landing page, even if other routes are stubbed.~~ **Complete (v0.3).** `/` ships with placeholder copy; stubs in place for the other three routes; live at thetwenty-four.com.
3. **Key visual session(s)** — Design and build the editorial infographics. These are the richest single pieces of work on the site. Order:
   - ~~**(3a) Champions Field** — the 24-team league membership, for the landing page.~~ **Complete (v0.5).** See `src/components/visuals/ChampionsField.tsx`.
   - **(3b) Two-track calendar** — regular season + postseason, showing Champions Conference and non-CC tracks side by side. For `/proposal` and possibly `/` as a secondary visual.
   - **(3c) Promotion/relegation flow diagram** — the annual churn mechanism. For `/proposal`.
   - **(3d) 12-team CFP bracket** — the postseason that emerges from the Field. For `/proposal`, inline with the essay. *Only build if essay earns it; may end up as a table or list instead.*
4. **Proposal page session** — Build `/proposal`, write or polish the long-form essay, integrate visuals. Note: the essay doesn't exist yet as a written piece; this session will include drafting. Per the v0.6 decision in § 6, the essay is **chaptered** — the session includes building chapter routing (likely `/proposal/[chapter]` or anchor-based), a sticky TOC, sequential navigation, and the per-chapter reading frame. `docs/champions_conference_spec.md` (added to the repo in v0.6) is the authoritative source for proposal mechanics the essay needs to stay faithful to.
5. **Spec page session** — Build `/spec`, convert existing MD to MDX, build TOC, generate PDF. Input material: `docs/champions_conference_spec.md` (the 1,056-line authoritative spec added to the repo in v0.6). The `/spec` TOC is also a candidate for sharing a component with the `/proposal` chapter TOC — to be decided during one of these sessions, whichever runs first. See § 11.
6. **About page + polish session** — Build `/about`, fix cross-site bugs, finalize SEO/Open Graph (including an OG image when the wordmark/logo is ready), launch prep.
7. **Newsletter setup** — Separate from the main site; configure Ghost, design the newsletter template to match, embed signup on main site. Replaces the stubbed form on `/`.
8. **Logo session** — Design the "24" mark. Retroactively apply across site. Post-launch is fine.

### Interleaved micro-sessions

A few things don't warrant a full session but need doing, roughly in order of when they'd naturally fit:

- ~~**Landing copy rewrite** — replace placeholder prose in `src/content/landing.ts` with the author's real voice. Probably happens before or alongside session 3.~~ **Complete (v0.6).** See `src/content/landing.ts`.
- ~~**Oxblood audit** — re-audit the landing page's oxblood ratio once the real copy lands, per the flag in § 11 (v0.5).~~ **Complete (v0.6).** Two targeted adjustments shipped: `.button:disabled` styling in `tokens.css` so the stubbed Newsletter button reads as inactive, and `muted` variant applied to the Newsletter eyebrow.
- **Analytics wire-up** — three lines: install `@vercel/analytics`, import `<Analytics />`, drop it in `layout.tsx` where the TODO comment sits. Do once live traffic is worth measuring.
- **Architecture polish** — revisit `@tailwind base` vs tokens.css per the Architecture notes in § 9. Not urgent; clean when tackled.

### Scope discipline

If a session is taking too long, we cut scope, not quality. The site should never launch feeling rushed. It is better to launch with 3 pages that are exquisite than 5 that are merely good.

---

## 11. Open Questions

Things we haven't decided and should revisit:

- ~~Exact oxblood, ivory, and graphite hex values (design system session).~~ **Resolved in v0.2.** See tokens.css and style-guide.html. Oxblood `#721818` / `#501111`, paper `#F7F2EA`, ink `#1A1510`.
- ~~Font licensing budget (design system session). If budget is tight, the free-stack is still excellent.~~ **Resolved in v0.2.** Shipping on the free stack: Source Serif 4 + IBM Plex Sans.
- ~~Whether the "Proposal" long-form essay exists as a written piece yet.~~ **Resolved in v0.3.** It does not. Drafting is folded into the proposal page session (session 4 in the build plan).
- **Sans revisit, post-launch.** IBM Plex Sans is the right v1.0 choice but is drifting toward "thoughtful-designer default" status (noted during the design system session). Revisit after a few weeks of live use. If the site reads as generic in context, flip `--font-sans` to **Söhne** (Klim, ~$200 for two weights). This is a one-variable change that requires no other design work. Candidates also noted: Untitled Sans, ABC Diatype, ABC Monument Grotesk. Explicitly *not* Geist (converging on new-default status) or Fraunces-as-sans (shifts register too far).
- ~~**Landing page oxblood budget.** The wordmark currently renders in ink, which is right — oxblood is reserved for eyebrow labels, the pull-quote left rule, the primary CTA button, and link hover states. The budget feels correct at the current placeholder copy length; worth re-auditing after the real copy lands, since a longer or shorter thesis changes the ratio.~~ **Audited in v0.6.** With real copy in place, the page has ~40 discrete oxblood instances (29 inside the Champions Field figure, 11 outside) — past the "one raised voice" token comment in raw count, but visually balanced because instances are well-paced. Two adjustments shipped: `.button:disabled` styling added to `tokens.css` so the stubbed Newsletter button doesn't read equal-weight to the live CTA; Newsletter eyebrow set to the `muted` variant. Figure, pullquotes, and argument-section eyebrows unchanged — all load-bearing.
- **`.pullquote` opsz gap.** `tokens.css`'s `.pullquote` utility doesn't declare a `font-variation-settings` value, so pullquotes render with `normal` optical sizing while the style-guide demo applies `'opsz' 20` inline. Small inconsistency; fix is one line in tokens.css. Fold into a design-system polish session.
- **Tailwind architectural question** — see Architecture notes in § 9. Decision to make: keep `@tailwind base` with the current override block, or drop it entirely (and likely Tailwind with it). Not urgent.
- PDF aesthetic — does it match the site, or does it have its own (more print-native) treatment? Leans toward the latter.
- Whether to eventually migrate everything including Ghost to a single custom stack (Stage 3+, deferred).
- ~~**Landing-copy pass, now unblocked.** The current placeholder copy in `src/content/landing.ts` was written before the Champions Field visual was scoped. The Field shipped in v0.5, so this pass is now the next natural writing-focused session. When the real copy is written, add the **player-retention argument** — under the proposed structure, the multi-season path to a CFP berth (stay at a Conference team and climb standings, or earn promotion and then contend) reshapes the incentive structure away from annual portal churn. This is one of the proposal's stronger second-order claims and deserves a section or a pullquote. Not in the current thesis or argument placeholders.~~ **Complete in v0.6.** The player-retention argument landed in the "What else" section (formerly "What's next"), alongside the conference-championship and realignment-ends-as-a-strategy arguments. Pullquote: *"Staying becomes a strategy, not a sacrifice."*
- **Bracket as landing-page visual: closed.** The v0.3 spec gestured at "the bracket or the calendar" as the landing-page key visual. Work in v0.4 determined that a bracket is the wrong object for the landing page — a bracket shows a postseason, but the site is about the *league*, and the league's visible form is the Field. The CFP bracket (if built at all) lives on `/proposal` as a downstream illustration.
- **Chapter TOC vs spec TOC — shared component or separate?** `/proposal` is chaptered as of v0.6, and `/spec` was already specified as having a sticky desktop TOC (§ 7). Both need the same general pattern — left-rail list, current-section marker, collapse on mobile. Open question is whether they share a single `<TableOfContents>` component or whether they're deliberately different (because the proposal is a reading experience and the spec is a reference document, and the two may want slightly different behavior — e.g., the proposal might want sequential prev/next nav that the spec shouldn't have). Resolve in whichever of sessions 4 or 5 runs first.

---

## 12. Design Principles (for reference during build)

1. **Restraint is status.** When in doubt, subtract.
2. **Typography carries the design.** Every type decision is load-bearing.
3. **Confidence, not energy.** We are not trying to be exciting. We are trying to be taken seriously.
4. **The visuals can be rich; the surround must be quiet.** Editorial infographics get to be virtuoso precisely because everything around them is calm.
5. **The site is an artifact, not a content stream.** Durable, considered, not chasing freshness.
6. **Mobile is not a downgrade.** The aesthetic must survive the small screen with no concessions to character.

---

*End of spec v0.6. Revise directly in this file as decisions are made.*
