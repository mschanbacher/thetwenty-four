import { type ReactNode } from 'react';

/**
 * Eyebrow — the small-caps sans label that sits above H2 sections.
 * Default color is oxblood (.eyebrow in tokens.css).
 *
 * The `muted` variant uses ink-muted — the style guide uses this
 * for secondary eyebrows inside specimens, not for top-level section
 * labels. Use muted sparingly.
 */
export function Eyebrow({
  children,
  as: Tag = 'div',
  muted = false,
  className = '',
}: {
  children: ReactNode;
  as?: 'div' | 'span' | 'p';
  muted?: boolean;
  className?: string;
}) {
  const color = muted ? { color: 'var(--color-ink-muted)' } : undefined;
  return (
    <Tag className={`eyebrow ${className}`.trim()} style={color}>
      {children}
    </Tag>
  );
}
