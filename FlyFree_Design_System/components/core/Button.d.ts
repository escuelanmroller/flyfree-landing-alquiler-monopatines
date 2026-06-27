/**
 * Primary action element. Futura Heavy, uppercase, zero border radius.
 * Use for all CTAs — shop, purchase, explore actions.
 *
 * @startingPoint section="Core Components" subtitle="CTA button — primary / secondary / ghost / electric" viewport="700x220"
 */
export interface ButtonProps {
  /** Button label */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'electric';
  /** Size tier */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Disabled state — reduces opacity and blocks interaction */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Render as anchor tag */
  href?: string;
  /** Stretch to parent width */
  fullWidth?: boolean;
  /** Icon to the left of label */
  leftIcon?: React.ReactNode;
  /** Icon to the right of label */
  rightIcon?: React.ReactNode;
}
