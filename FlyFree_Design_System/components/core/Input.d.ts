/**
 * Text input — dark background, yellow focus ring, uppercase label above.
 * Use for search, checkout fields, newsletter signup.
 */
export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Uppercase label displayed above the field */
  label?: string;
  /** Error message — turns border red and shows message below */
  error?: string;
  disabled?: boolean;
  /** Icon element rendered inside left edge */
  leftIcon?: React.ReactNode;
  /** Icon element rendered inside right edge (e.g. clear, toggle-password) */
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to parent width */
  fullWidth?: boolean;
}
