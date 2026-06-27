import React from 'react';

/**
 * Top navigation bar — logo left, links center, CTA right.
 */
export function NavBar({
  logo,
  logoSrc,
  links = [],
  ctaLabel = 'Tienda',
  ctaHref = '#',
  variant = 'dark',
  sticky = true,
}) {
  const [hovered, setHovered] = React.useState(null);

  const bgMap = {
    dark:        { background: '#0C0C0C',                 borderBottom: '1px solid #252525' },
    transparent: { background: 'transparent',              borderBottom: '1px solid transparent' },
    overlay:     { background: 'rgba(12,12,12,0.88)',      borderBottom: '1px solid rgba(255,255,255,0.06)',
                   backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' },
    light:       { background: '#F4F3EE',                 borderBottom: '1px solid #D5D5D5' },
  };

  const isLight = variant === 'light';

  const navStyle = {
    ...bgMap[variant],
    position: sticky ? 'sticky' : 'relative',
    top: 0,
    zIndex: 100,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 clamp(1rem, 5vw, 4rem)',
    height: '68px',
    boxSizing: 'border-box',
    transition: 'all 0.18s ease',
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {logoSrc ? (
          <img src={logoSrc} alt={logo || 'FlyFree Urban'} style={{ height: '32px', objectFit: 'contain', display: 'block' }} />
        ) : (
          <span style={{
            fontFamily: "'Futura Std', sans-serif",
            fontWeight: 900,
            fontSize: '18px',
            color: isLight ? '#0C0C0C' : '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
          }}>
            {logo || 'FLYFREE'}
          </span>
        )}
      </div>

      {/* Links */}
      {links.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href || '#'}
              style={{
                fontFamily: "'Futura Std', sans-serif",
                fontWeight: 700,
                fontSize: '11px',
                color: hovered === i ? (isLight ? '#0C0C0C' : '#FFFFFF') : (isLight ? '#737373' : '#737373'),
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                transition: 'color 0.1s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
        <a
          href={ctaHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '9px 20px',
            background: '#F5C800',
            color: '#0C0C0C',
            fontFamily: "'Futura Std', sans-serif",
            fontWeight: 900,
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            textDecoration: 'none',
            transition: 'background 0.1s ease',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#FFD400'}
          onMouseLeave={e => e.currentTarget.style.background = '#F5C800'}
        >
          {ctaLabel}
        </a>
      </div>
    </nav>
  );
}
