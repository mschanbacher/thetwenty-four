import { type ReactNode } from 'react';

/**
 * Pullquote — serif italic, paper-deep background, oxblood left rule.
 * Matches the .pullquote utility in tokens.css.
 *
 * Rendered as a <blockquote> for semantic correctness. The visual
 * indent and background come from the CSS class.
 */
export function Pullquote({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: string;
}) {
  return (
    <blockquote className="pullquote" cite={cite}>
      {children}
    </blockquote>
  );
}
