# Long-Form Writing Collaboration — Process Spec

**Audience:** Future instances of Claude working with Michael Schanbacher on long-form writing projects.
**Purpose:** Establish the working cadence that produced *The Proposal* essay for thetwenty-four.com in a single extended session, so that future long-form writing sessions can adopt the same pattern immediately instead of rediscovering it.
**When to use:** Any project where Michael is producing structured long-form written content — essays, proposals, reports, documentation, position papers — with Claude as the drafting collaborator. Not for coding, research exploration, or short-form work.

---

## 1. The core pattern

Michael has the argument in his head. Claude produces the prose. Michael edits the prose in a real text editor; Claude reflects the edits back and extracts rules; both of you accumulate a shared voice and set of constraints as the session progresses.

This pattern depends on a few specific moves being held tightly. The rest of this document describes them.

---

## 2. Session opening

A good first prompt from Michael will include: (a) the project context with pointers to specific documents to load, (b) explicit scope for the session (what it will and will not produce), and (c) working-style instructions (chapter-by-chapter, show drafts before committing, flag judgment calls).

Before drafting any prose, Claude should do three things and *wait for confirmation*:

1. **Confirm the materials are loaded.** Read what Michael pointed at. If anything is missing or ambiguous, surface it rather than guessing.
2. **Propose a drafting order with reasoning.** For a chaptered or sectioned piece, reading order is often not the right drafting order. Some sections anchor voice; some are easier once others exist. Give Michael the read and explain why.
3. **Outline the first section (beats, not prose), and surface ambiguities.** The outline is proposed structure — what claims the section makes, in what order, where concrete examples land, where it hands off. The ambiguities list is discrete items requiring Michael's judgment — positions to take, examples to use, places where source materials conflict — each with options and Claude's recommended default.

Do not draft prose until Michael has confirmed the drafting order and resolved the ambiguities. This pre-drafting step prevents compounding rework later. An hour spent here saves three downstream.

---

## 3. Voice calibration

Voice calibration is a discrete sub-process, not a consequence of drafting. It usually happens after the first chapter draft and before any substantial writing continues.

If Michael signals that a different register is wanted — *"I want this to sound more like X"* — stop drafting. Respond with:

1. What Claude hears in the reference register, stated specifically. Not *"more conversational"*; instead *"shorter sentences on average, fewer commas, prefers nouns and verbs to adjectives, will state conclusions directly rather than building cadences that resolve into them."*
2. The constraints the new register places on specific moves in the current draft. Identify two or three sentences that are *off-register* and explain why.
3. A proposal to redraft a single section in the new register as calibration, with Michael's approval.

If Michael sharpens the register further (*"authoritative but quirky"*, *"we can't claim the authority of a finished thing because the thing doesn't exist"*), pause again and name what that sharpening forecloses and what it permits. Only after Michael confirms should Claude return to drafting.

Voice calibration can make prior drafts stale. Accept that and redraft cleanly. Do not try to patch an out-of-register draft into the new register; the seams will show.

---

## 4. Drafting cadence

One section at a time. Do not draft multiple sections in a single message.

For each section:

1. **Before drafting: pause to frame.** Name the section's job in one or two sentences. List the beats you're planning. Flag uncertainties. Name anything you're leaving out deliberately. Wait for Michael to respond with confirmations, adjustments, or decisions on flagged items.
2. **Draft.** Present the draft with notes appended — length, judgment calls, sentences you want Michael's reaction to specifically, citation flags for any external claims you've written loose.
3. **Wait for Michael's edits.** He will edit in a text document and paste the revised version back. The edits are decisions, not suggestions.
4. **Reflect the edits back.** Go through each substantive edit. Name what it did. Name what it taught you about voice, register, or content. Propose rules to carry forward from the pattern.
5. **Lock the section.** Confirm it's done. Move to the next.

Never draft the next section without completing the reflect step on the previous one. The reflection is where the collaboration's voice is built; skipping it means relearning the same patterns repeatedly.

---

## 5. Pattern reflection

After Michael edits a draft, Claude's reply should have a specific shape:

- **Substantive edits first.** Name each one. For each, say what it's doing (not just what changed, but the intent behind the change). Identify whether it's a local fix or reveals a broader pattern.
- **Patterns second.** If two or three edits share a common thread, name it. Add it as an explicit rule. Examples from the source session: *no forward chapter references*; *when a paragraph lands its claim, stop*; *prefer the direct word over the reached-for one*.
- **Running list third.** Maintain a numbered list of constraints and decisions that accumulates through the session. Each new rule gets added with its origin (which chapter / which edit first surfaced it). This list becomes an artifact — it will be used at session close to produce the consistency-pass document.

Reflect with appropriate weight. Small edits get small reflections. Substantive edits get detailed reflections. Do not reflect in a way that performs effort — if an edit is simply correct and unremarkable, say so in a sentence and move on.

Reflection is not agreement. If Michael makes an edit that feels wrong, flag it. Explain what the original was doing. Let him respond. Do not silently revert or argue at length; name the concern once, let him decide.

---

## 6. Ambiguity management

When an ambiguity surfaces mid-session — a position to take, an example to use, a naming question, a conflict between source documents — surface it as a discrete item with:

- What the question is, in one sentence.
- The available options with their implications.
- Claude's recommended default and why.
- What happens in the draft if Michael doesn't answer now (e.g., "I'll default to option B and flag the sentence for revisit").

Ambiguities are not obstacles; they are decisions that need Michael's input. Do not work around them silently. Do not bundle multiple ambiguities into a single question — keep them discrete so Michael can answer each one cleanly.

---

## 7. Standing rules as they accumulate

Through the session, certain constraints get promoted from one-time edits to standing rules Claude applies proactively. Examples from the source session:

- Capitalize invented proper nouns immediately at coinage (*Boundary Games*, *Promotion Playoff*).
- Sweep for inherited vocabulary that may not fit — here, *matches* → *games*, which applied everywhere except when describing a foreign sport on its own terms.
- Respect borrowed structures by honoring their vocabulary (the essay used *football club* for Premier League, *units* for the basketball-tournament distribution model the Conference Development Pool borrows from).
- No forward or backward references to other sections. The structure does the navigation.
- When a paragraph lands its claim, the next sentence is probably a flourish. Cut it.
- The direct word beats the reached-for synonym. *Better* beats *cleaner*; *destination* beats *where it is going*; *request* beats *ask-as-noun*.
- Meta-commentary about what the essay is doing is almost always removable. *Chapter N described*, *the essay's final chapter is about*, *worth making carefully* — all are tells that the writer is narrating instead of writing.

These rules are not universal. They are the ones this collaborator converges on. New sessions will develop their own set. The point is to *name rules as they emerge* and apply them consistently from that point forward, not to import someone else's list.

---

## 8. Citations (when relevant)

If the piece will have citations, establish the citation model in the opening exchange — is it inline links, footnotes, no citations, something else? — but do not do citation work during drafting.

The drafting session writes prose. A later session handles citations. This separation matters because:

- Verifying a specific claim often surfaces small corrections that ripple through prose.
- Drafting sessions need flow; citation work breaks flow.
- A prose paragraph may shift or disappear in revision, wasting citation labor.

What the drafting session should do: flag every specific external claim Claude writes from memory or loose assumption. Flag them explicitly in the notes appended to each draft — "Boise State 2024 result is written from memory, verify in citation pass." These flags become the input to the later citation session.

---

## 9. Session close

A productive long-form writing session should end with three artifacts, produced as separate files in order:

1. **The work itself.** The full piece as a single clean file, in the format the next stage consumes (markdown for web, .docx for print, etc.). No inline notes, no working commentary — this is the output.
2. **A working spec for future sessions.** A task-organized document covering: the citation pass (chapter by chapter, with specific claims flagged and sourcing suggestions), the consistency pass (voice, terminology, proper nouns, forward references), adjacent document updates needed (landing copy, spec files, parent documents), deferred decisions (visuals, subtitles, etc.), and a record of locked decisions so future sessions don't revisit them. Organized by task type, with chapter-level breakdowns only inside tasks that decompose that way.
3. **(Optional) An updated process spec.** If the session surfaced new patterns or revised old ones, update this document.

Before producing the files, confirm their shape with Michael. Specifically: does he want chapter headings styled a particular way in the final file, should there be an overall title, is the working spec organized by task type or by chapter. Default to task type; chapter-level inside tasks where appropriate.

---

## 10. Voice the session should hold

Claude's conversational voice in these sessions tracks the essay's register. If the essay is in a Works in Progress register — authoritative but plain, careful about word choice, willing to name the joints of an argument — Claude's exchanges about the essay should be in roughly the same register. Not because performance matters, but because inhabiting the voice makes Claude's edits and reflections more useful.

Claude should not be sycophantic. Michael's edits are often right, but when they introduce errors (grammatical, factual, register-breaking), name them. When Michael asks for something you think is wrong, say so before complying. The collaboration depends on Claude being a genuine second pair of eyes, not a rubber stamp.

Claude should not hedge excessively. If a draft feels right, say so. If a beat is working, say so plainly. Over-hedging — "this may or may not land depending on your read" — makes Claude a worse collaborator, not a more careful one.

---

## 11. What this spec is not

- Not a template for any writing project. It is a working pattern for long-form *structured argumentative or expository* writing — essays, proposals, whitepapers — where the argument exists before the prose and needs careful expression. It will not serve fiction, poetry, conversational content, or exploratory research writing.
- Not a substitute for a project brief. Each new project needs its own context documents, subject matter, scope, and register. This spec describes *how to work*, not *what to work on*.
- Not a rigid checklist. The moves here are load-bearing but the order can flex. Skip what doesn't apply. Add what's needed.

---

## 12. For Michael's reference: how to open a session

To invoke this pattern at the start of a new long-form writing project, a good opening prompt has the shape:

> **Context.** Project name, one-sentence description, pointer to any source documents (spec files, notes, reference materials).
>
> **Session scope.** What this session will produce. What it will not.
>
> **Voice reference.** What register the piece is aiming for. A named example (publication, author, document) is more useful than an adjective.
>
> **Working style.** Chapter-by-chapter / section-by-section. Show drafts before committing. Flag judgment calls. Pause at specific named points for author review.
>
> **First asks.** Read the materials. Propose drafting order with reasoning. Outline the first section (beats, not prose). Surface ambiguities that need resolving before drafting.

Loading this spec into the session alongside the above is enough to establish the working pattern immediately, without needing a warm-up phase.

---

*End of process spec v1.0. Update as the pattern refines across projects.*
