/**
 * Content container — product listing, feature highlight, category banner.
 * Three distinct visual variants for different content contexts.
 */
export interface CardProps {
  /** Card headline */
  title?: string;
  /** Secondary line — product model or short descriptor */
  subtitle?: string;
  /** Body copy — feature cards only */
  description?: string;
  /** Image URL */
  image?: string;
  /** Raw price number — rendered as `$N` */
  price?: number;
  /** Pre-formatted price string — overrides `price` */
  priceFormatted?: string;
  /** Badge element (e.g. `<Badge variant="yellow">Nuevo</Badge>`) overlaid on image */
  badge?: React.ReactNode;
  /** Category label shown above title in accent color */
  tag?: string;
  /** Click handler */
  onClick?: () => void;
  /** Layout style */
  variant?: 'product' | 'feature' | 'category';
  /** Icon element — feature cards only */
  icon?: React.ReactNode;
}
