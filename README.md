# The Twenty-Four

A publication for a single proposal: restructuring college football into a 24-team Champions Conference with promotion and relegation.

Live at [thetwenty-four.com](https://thetwenty-four.com) (when built).

---

## What this repository is

This is the Next.js codebase for the main site. It does not include the newsletter (which runs on Ghost at `read.thetwenty-four.com` and has its own repo) or the simulator (Stage 2, not yet started).

The site is an editorial publication: a landing page, a long-form essay, a full technical specification, and an about page. Design-first, near-monochromatic, quiet. See `docs/site-spec.md` for the full brief and `docs/style-guide.html` for the design system reference.

## Repository layout

```
thetwenty-four/
├── docs/                # project documents, not code
│   ├── site-spec.md     # the full spec (v0.2) — authoritative brief
│   └── style-guide.html # rendered design system reference
├── design-tokens/       # source-of-truth design values
│   ├── tokens.css       # CSS custom properties, import at app root
│   └── tailwind.config.ts  # Tailwind mirror of the same values
├── content/             # (created in landing page session) MDX essay + spec content
├── public/              # (created in landing page session) static assets
├── src/                 # (created in landing page session) Next.js App Router
├── README.md            # this file
└── .gitignore
```

Two files are load-bearing references, both in `docs/`:

- **`site-spec.md`** is the project brief. Every build session starts by loading it into context. It defines audience, voice, IA, tech stack, and the build plan.
- **`style-guide.html`** is the rendered design system. Open it in a browser to see every locked decision (palette, type scale, spacing, motion, components) in situ. When you're deciding whether a new UI choice fits the system, this is what you check against.

## Design system

Locked in the design system session (see `docs/site-spec.md` § 11 changelog). Summary:

- **Fonts:** Source Serif 4 (body + headings), IBM Plex Sans (UI + metadata), IBM Plex Mono (code, data labels). All loaded via Google Fonts / `next/font`.
- **Palette:** 9 tokens across grounds (paper `#F7F2EA`, paper-deep `#EFE8DC`), inks (ink `#1A1510`, ink-muted, ink-faint), accent (oxblood `#721818`, oxblood-deep `#501111`), and rules (rule, rule-strong).
- **Type scale:** 1.25 ratio on a 19px-equivalent base. 12 named sizes from micro (11px) to display (58px). Mobile drops the top of the scale below 640px.
- **Links:** ink text + oxblood underline; underline thickens 1→2px and text goes oxblood on hover.
- **Motion:** 120/200/400ms durations, cubic-bezier easings, full `prefers-reduced-motion` support.

The tokens file enforces WCAG AA+ contrast throughout (most pairings pass AAA).

## Getting started (when the Next.js project exists)

> **Current state:** the Next.js app has not been scaffolded yet. The next build session will run `create-next-app` inside this directory and wire the design tokens into the app. Until then, the repo holds the spec, style guide, and design tokens only.

After the landing page session:

```bash
# install
npm install

# run locally
npm run dev
# → http://localhost:3000

# build
npm run build

# preview production build
npm run start
```

## Deployment

- **Hosting:** Vercel, connected to this repo. Pushes to `main` deploy to production.
- **Branch previews:** every other branch gets an automatic preview URL.
- **Environment variables:** managed in the Vercel dashboard. Keep `.env.local` out of git.

## Build sessions

Each major surface of the site is built in a focused session, with its own spec. The current plan (from `docs/site-spec.md` § 10):

1. ~~Design system~~ — complete, see `docs/style-guide.html`
2. **Landing page** — next
3. Key visuals (bracket, calendar, promotion/relegation flow)
4. Proposal page + long-form essay
5. Spec page + TOC + PDF
6. About page + launch polish
7. Newsletter setup (Ghost, separate repo)
8. Logo / 24 mark (post-launch)

Cut scope before quality. Launch three exquisite pages rather than five merely good ones.

## Contact

commissioner@thetwenty-four.com
