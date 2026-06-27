/**
 * Top navigation bar — logo left, links center-right, CTA right.
 * Supports dark, transparent, frosted-glass overlay, and light themes.
 */
export interface NavBarProps {
  /** Text logo fallback when logoSrc is not provided */
  logo?: string;
  /** Logo image URL */
  logoSrc?: string;
  /** Navigation link items */
  links?: Array<{ label: string; href?: string }>;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Background theme */
  variant?: 'dark' | 'transparent' | 'overlay' | 'light';
  /** `position: sticky; top: 0` — set false when placing inside a scroll container */
  sticky?: boolean;
}
