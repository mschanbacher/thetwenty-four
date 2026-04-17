/**
 * THE TWENTY-FOUR — TAILWIND CONFIG
 *
 * Mirrors tokens.css so you can use either approach interchangeably:
 *   <div style="color: var(--color-oxblood)">
 *   <div className="text-oxblood">
 * Both resolve to #721818.
 *
 * Place at project root as tailwind.config.ts.
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    // We override rather than extend — the default Tailwind palette and
    // type scale actively fight this design system. Start clean.
    screens: {
      sm:  '640px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1240px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      paper:        '#F7F2EA',
      'paper-deep': '#EFE8DC',

      ink:          '#1A1510',
      'ink-muted':  '#5C5245',
      'ink-faint':  '#8A7F6E',

      oxblood:      '#721818',
      'oxblood-deep': '#501111',

      rule:         '#D4CBBD',
      'rule-strong':'#B8AD99',
    },

    fontFamily: {
      serif: ['var(--font-serif)'],
      sans:  ['var(--font-sans)'],
      mono:  ['var(--font-mono)'],
    },

    // Type scale — each entry is [size, { lineHeight, letterSpacing }]
    fontSize: {
      display:     ['3.05rem', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      h1:          ['2.42rem', { lineHeight: '1.1',  letterSpacing: '-0.01em'  }],
      h2:          ['1.95rem', { lineHeight: '1.2',  letterSpacing: '-0.005em' }],
      h3:          ['1.58rem', { lineHeight: '1.3' }],
      h4:          ['1.26rem', { lineHeight: '1.4' }],
      lead:        ['1.16rem', { lineHeight: '1.5' }],
      body:        ['1.00rem', { lineHeight: '1.6' }],
      'body-sm':   ['0.89rem', { lineHeight: '1.55' }],
      pullquote:   ['1.26rem', { lineHeight: '1.45' }],
      caption:     ['0.74rem', { lineHeight: '1.45' }],
      label:       ['0.63rem', { lineHeight: '1.3',  letterSpacing: '0.14em' }],
      micro:       ['0.58rem', { lineHeight: '1.3',  letterSpacing: '0.14em' }],
    },

    fontWeight: {
      regular:  '400',
      medium:   '500',
      semibold: '600',
    },

    spacing: {
      0:   '0',
      1:   '0.25rem',
      2:   '0.5rem',
      3:   '0.75rem',
      4:   '1rem',
      6:   '1.5rem',
      8:   '2rem',
      12:  '3rem',
      16:  '4rem',
      24:  '6rem',
      32:  '8rem',
    },

    maxWidth: {
      measure:        '65ch',
      'measure-wide': '78ch',
      'measure-narrow':'48ch',
      container:      '1240px',
      full:           '100%',
    },

    transitionDuration: {
      fast: '120ms',
      base: '200ms',
      slow: '400ms',
    },

    transitionTimingFunction: {
      out:       'cubic-bezier(0.16, 1, 0.3, 1)',
      'in-out':  'cubic-bezier(0.65, 0, 0.35, 1)',
    },

    borderWidth: {
      0:        '0',
      hairline: '1px',
      accent:   '2px',
    },

    extend: {
      // Extensions rather than overrides go here as the system grows.
    },
  },

  // No plugins for v1.0 — we want explicit, known behavior.
  plugins: [],
};

export default config;
