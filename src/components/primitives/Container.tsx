import { type HTMLAttributes, type ReactNode } from 'react';

type Tag =
  | 'div'
  | 'section'
  | 'header'
  | 'footer'
  | 'main'
  | 'article'
  | 'nav'
  | 'figure'
  | 'aside';

type ContainerProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>;

/**
 * Container — mirrors the .container utility in tokens.css.
 * Max-width 1240px, gutter padding that responds to viewport.
 *
 * Accepts any HTML/ARIA attributes via spread so the container can
 * participate in semantic markup (e.g. aria-labelledby on a section).
 */
export function Container({
  children,
  as: Tag = 'div',
  className = '',
  ...rest
}: ContainerProps) {
  return (
    <Tag className={`container ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
