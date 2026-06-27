import React from 'react';

/**
 * Content container. Three variants: product, feature, category.
 */
export function Card({
  title,
  subtitle,
  description,
  image,
  price,
  priceFormatted,
  badge,
  tag,
  onClick,
  variant = 'product',
  icon,
}) {
  const [hovered, setHovered] = React.useState(false);

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick,
  };

  /* ── Feature card ── */
  if (variant === 'feature') {
    return (
      <div
        style={{
          background: '#1C1C1C',
          border: `1px solid ${hovered ? '#525252' : '#252525'}`,
          padding: '32px',
          transition: 'all 0.18s ease',
          cursor: onClick ? 'pointer' : 'default',
        }}
        {...handlers}
      >
        {icon && (
          <div style={{ color: '#F5C800', marginBottom: '16px', fontSize: '22px', display: 'flex' }}>
            {icon}
          </div>
        )}
        <h3 style={{
          fontFamily: "'Futura Std', sans-serif",
          fontWeight: 900,
          fontSize: '14px',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          margin: '0 0 8px 0',
          lineHeight: 1.2,
        }}>
          {title}
        </h3>
        {description && (
          <p style={{
            fontFamily: "'Futura Std', sans-serif",
            fontWeight: 300,
            fontSize: '13px',
            color: '#737373',
            margin: 0,
            lineHeight: 1.6,
          }}>
            {description}
          </p>
        )}
      </div>
    );
  }

  /* ── Category card ── */
  if (variant === 'category') {
    return (
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          aspectRatio: '3/2',
          background: '#181818',
        }}
        {...handlers}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: `grayscale(20%) brightness(${hovered ? 0.85 : 0.65}) contrast(1.1)`,
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 60%)',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
          {tag && (
            <div style={{
              fontFamily: "'Futura Std', sans-serif",
              fontWeight: 700, fontSize: '10px',
              color: '#F5C800', textTransform: 'uppercase',
              letterSpacing: '0.15em', marginBottom: '6px',
            }}>
              {tag}
            </div>
          )}
          <h3 style={{
            fontFamily: "'Futura Std Cond', 'Futura Condensed', sans-serif",
            fontWeight: 900,
            fontSize: '32px',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            margin: 0,
            lineHeight: 1,
          }}>
            {title}
          </h3>
          {subtitle && (
            <p style={{
              fontFamily: "'Futura Std', sans-serif",
              fontWeight: 300, fontSize: '12px',
              color: '#959595', margin: '6px 0 0',
            }}>
              {subtitle}
            </p>
          )}
        </div>
        {hovered && (
          <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
            <span style={{
              display: 'inline-block', padding: '6px 12px',
              background: '#F5C800', color: '#0C0C0C',
              fontFamily: "'Futura Std', sans-serif",
              fontWeight: 900, fontSize: '10px',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              Ver →
            </span>
          </div>
        )}
      </div>
    );
  }

  /* ── Product card (default) ── */
  return (
    <div
      style={{
        background: '#1C1C1C',
        border: `1px solid ${hovered ? '#525252' : '#252525'}`,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.18s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.7)' : '0 1px 4px rgba(0,0,0,0.5)',
      }}
      {...handlers}
    >
      <div style={{
        aspectRatio: '4/3',
        background: '#181818',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {image ? (
          <img
            src={image} alt={title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              filter: 'grayscale(15%) brightness(0.95)',
              transition: 'transform 0.35s ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#383838',
            fontFamily: "'Futura Std Cond', sans-serif",
            fontWeight: 900, fontSize: '13px',
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            {title}
          </div>
        )}
        {badge && (
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            {badge}
          </div>
        )}
      </div>
      <div style={{ padding: '20px' }}>
        {tag && (
          <div style={{
            fontFamily: "'Futura Std', sans-serif",
            fontWeight: 700, fontSize: '10px',
            color: '#F5C800', textTransform: 'uppercase',
            letterSpacing: '0.18em', marginBottom: '6px',
          }}>
            {tag}
          </div>
        )}
        <h3 style={{
          fontFamily: "'Futura Std', sans-serif",
          fontWeight: 900, fontSize: '16px',
          color: '#FFFFFF', textTransform: 'uppercase',
          margin: '0 0 4px', letterSpacing: '-0.01em', lineHeight: 1.2,
        }}>
          {title}
        </h3>
        {subtitle && (
          <p style={{
            fontFamily: "'Futura Std', sans-serif",
            fontWeight: 300, fontSize: '12px',
            color: '#737373', margin: '0 0 14px',
          }}>
            {subtitle}
          </p>
        )}
        {(price !== undefined || priceFormatted) && (
          <div style={{
            fontFamily: "'Futura Std', sans-serif",
            fontWeight: 900, fontSize: '20px',
            color: '#FFFFFF',
          }}>
            {priceFormatted || `$${price}`}
          </div>
        )}
      </div>
    </div>
  );
}
