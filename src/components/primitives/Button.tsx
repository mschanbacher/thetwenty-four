import Link from 'next/link';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'text';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

/**
 * Button — an `<a>` (internal via next/link, external via anchor)
 * or a `<button>` depending on whether `href` is supplied.
 *
 * Styles come from the .button / .button-text utility classes in
 * tokens.css. This component is purely structural + routing glue.
 */
export function Button(props: LinkProps | ButtonProps) {
  const { children, variant = 'primary', className = '' } = props;
  const cls = `${variant === 'primary' ? 'button' : 'button-text'} ${className}`.trim();

  if ('href' in props && props.href) {
    const isExternal = /^https?:\/\//i.test(props.href);
    if (isExternal) {
      return (
        <a className={cls} href={props.href} rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
}
