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
├── docs/                      # project documents, not code
│   ├── site-spec.md           # the full spec (v0.2) — authoritative brief
│   └── style-guide.html       # rendered design system reference
├── design-tokens/             # source-of-truth design values
│   ├── tokens.css             # CSS custom properties, imported at app root
│   └── tailwind.config.ts     # Tailwind mirror of the same values
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # <html>, Metadata, SiteHeader + SiteFooter
│   │   ├── page.tsx           # landing — composes landing/* sections
│   │   ├── globals.css        # tokens + font @imports + chrome CSS
│   │   ├── proposal/page.tsx  # stub (noindex until built)
│   │   ├── spec/page.tsx      # stub (noindex until built)
│   │   └── about/page.tsx     # stub (noindex until built)
│   ├── components/
│   │   ├── site/              # header, footer, shared stub page
│   │   ├── landing/           # Hero, Thesis, ArgumentSection, etc.
│   │   └── primitives/        # Container, Eyebrow, Button, Pullquote
│   └── content/
│       └── landing.ts         # typed copy for the landing page
├── public/                    # static assets (favicon today)
├── tailwind.config.ts         # copied/adapted from design-tokens/
├── postcss.config.mjs         # Tailwind v3 + autoprefixer
├── next.config.ts
├── tsconfig.json
├── package.json
├── README.md                  # this file
└── .gitignore
```

Two files are load-bearing references, both in `docs/`:

- **`site-spec.md`** is the project brief. Every build session starts by loading it into context. It defines audience, voice, IA, tech stack, and the build plan.
- **`style-guide.html`** is the rendered design system. Open it in a browser to see every locked decision (palette, type scale, spacing, motion, components) in situ. When you're deciding whether a new UI choice fits the system, this is what you check against.

## Design system

Locked in the design system session (see `docs/site-spec.md` § 11 changelog). Summary:

- **Fonts:** Source Serif 4 (body + headings, variable font with `opsz` axis 8–60), IBM Plex Sans (UI + metadata, static weights 400/500/600), IBM Plex Mono (code, data labels, 400/500). **Self-hosted** via `@fontsource-variable/source-serif-4` and `@fontsource/ibm-plex-*` packages — no third-party font fetch at build or runtime. See the "Fonts" subsection below.
- **Palette:** 9 tokens across grounds (paper `#F7F2EA`, paper-deep `#EFE8DC`), inks (ink `#1A1510`, ink-muted, ink-faint), accent (oxblood `#721818`, oxblood-deep `#501111`), and rules (rule, rule-strong).
- **Type scale:** 1.25 ratio on a 19px-equivalent base. 12 named sizes from micro (11px) to display (58px). Mobile drops the top of the scale below 640px.
- **Links:** ink text + oxblood underline; underline thickens 1→2px and text goes oxblood on hover.
- **Motion:** 120/200/400ms durations, cubic-bezier easings, full `prefers-reduced-motion` support.

The tokens file enforces WCAG AA+ contrast throughout (most pairings pass AAA).

## Fonts

The site self-hosts all three typefaces via `@fontsource-*` npm packages. The deciding factor for Source Serif 4 was the **optical-size axis (`opsz`)**: every heading-level rule in `tokens.css` carries a matching `font-variation-settings: 'opsz' N` declaration (60 at display, 48 at H1, 36 at H2, etc.), and those declarations only do anything if a variable font with the `opsz` axis is actually loaded. `@fontsource-variable/source-serif-4/opsz.css` ships the `woff2-variations` file with that axis.

The binding works like this: `tokens.css` declares the canonical `--font-serif`, `--font-sans`, `--font-mono` variables with their Google-family names, which is what the standalone `docs/style-guide.html` uses. `src/app/globals.css` imports `tokens.css` first, then the `@fontsource` CSS files, then re-points the same three variables to the self-hosted family names (`'Source Serif 4 Variable'`, `'IBM Plex Sans'`, `'IBM Plex Mono'`). This keeps `tokens.css` portable and the style guide unchanged while the Next app uses self-hosted files.

Verified at build time: the compiled CSS bundle contains `format('woff2-variations')` references and the full set of `opsz` declarations (60, 48, 36, 24, 20). Verified at runtime via headless Chromium: the hero wordmark reports `font-variation-settings: "opsz" 60`, section H2s report `"opsz" 36`, and so on — the optical sizing specified in the style guide manifests on the live page.

One known inconsistency, not introduced by this session: `tokens.css`'s `.pullquote` utility doesn't declare an opsz value, so pullquotes render with `normal` variation settings. The style-guide demo applies `'opsz' 20` inline. Small enough to defer to a design-system polish pass rather than edit a locked tokens file mid-build.

## Getting started

```bash
# install dependencies (Next 16, React 19, Tailwind 3.4, fontsource)
npm install

# run locally — http://localhost:3000
npm run dev

# production build
npm run build

# preview the production build
npm run start
```

Node 20+ is required (Next 16 requirement). The repo uses `npm`, not `yarn` or `pnpm`.

## Landing page session — what shipped

The `/` route is built end-to-end, matching the content outline in spec § 5:

1. **Hero** — wordmark at display size (58px), italic tagline, small byline.
2. **Thesis** — ~150 words of placeholder copy in `src/content/landing.ts`, lead paragraph italicized.
3. **Key visual placeholder** — 16:9 paper-deep frame with `role="img"` and an aria-label, scheduled to be replaced by the bracket graphic in the next session.
4. **Four argument sections** — `The problem`, `The proposal`, `Why it works`, `What's next`. Two carry pullquotes. Each rendered as `<article>` inside a `<section>` for screen readers.
5. **CTAs** — "Read the proposal" (primary button) and "Read the spec →" (text button).
6. **Newsletter** — form UI only, input and Subscribe button both `disabled` with an honest "signup opens at launch" note.
7. **Byline** — name, one-line bio, `commissioner@thetwenty-four.com` mailto link.
8. **Site footer** — second byline instance, copyright, colophon line.

All landing-page copy lives as typed data in `src/content/landing.ts`. Edit copy there, not in JSX. Future sessions will replace the placeholder prose.

Stub routes at `/proposal`, `/spec`, `/about` render a shared `StubPage` component with eyebrow + H1 + one-paragraph holding copy + a back-link to `/`. All three carry `robots: { index: false, follow: true }` metadata so Google doesn't index them.

No client JavaScript on the landing page. Mobile nav stacks (wordmark above links) below 640px rather than using a hamburger — editorial register, no JS required.

## Deployment

- **Hosting:** Vercel, connected to this repo. Pushes to `main` deploy to production.
- **Branch previews:** every other branch gets an automatic preview URL.
- **Environment variables:** managed in the Vercel dashboard. Keep `.env.local` out of git.

## Build sessions

Each major surface of the site is built in a focused session, with its own spec. The current plan (from `docs/site-spec.md` § 10):

1. ~~Design system~~ — complete, see `docs/style-guide.html`
2. ~~Landing page~~ — complete, `/` ships with four argument sections, stubs for `/proposal`, `/spec`, `/about`.
3. **Key visuals** (bracket, calendar, promotion/relegation flow) — next. Placeholder frame is in place on `/`.
4. Proposal page + long-form essay
5. Spec page + TOC + PDF
6. About page + launch polish
7. Newsletter setup (Ghost, separate repo)
8. Logo / 24 mark (post-launch)

Cut scope before quality. Launch three exquisite pages rather than five merely good ones.

## Contact

commissioner@thetwenty-four.com
