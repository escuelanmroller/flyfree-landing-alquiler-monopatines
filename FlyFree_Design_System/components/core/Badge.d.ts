/**
 * Status and category label chip. Uppercase Futura Bold, zero border radius.
 * Use for product categories, stock status, promotions.
 */
export interface BadgeProps {
  /** Badge label */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'default' | 'yellow' | 'electric' | 'outline' | 'dark' | 'accent' | 'error' | 'success';
  /** Size tier */
  size?: 'sm' | 'md' | 'lg';
  /** Show leading status dot */
  dot?: boolean;
}
