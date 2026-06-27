import React from 'react';

/**
 * Primary action element — Futura Heavy, uppercase, zero-radius.
 * Supports five visual variants and four sizes.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  href,
  fullWidth = false,
  leftIcon,
  rightIcon,
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const sizeMap = {
    sm: { padding: '7px 16px',  fontSize: '10px', gap: '6px' },
    md: { padding: '11px 22px', fontSize: '12px', gap: '7px' },
    lg: { padding: '15px 30px', fontSize: '13px', gap: '8px' },
    xl: { padding: '19px 44px', fontSize: '15px', gap: '10px' },
  };

  const getVariant = () => {
    if (variant === 'primary') return {
      background: pressed ? '#DDB400' : hovered ? '#FFD400' : '#F5C800',
      color: '#0C0C0C',
      border: '2px solid transparent',
      transform: pressed ? 'translateY(0)' : hovered ? 'translateY(-1px)' : 'none',
      boxShadow: hovered && !pressed ? '0 0 28px rgba(245,200,0,0.35)' : 'none',
    };
    if (variant === 'secondary') return {
      background: hovered ? '#F5C800' : 'transparent',
      color: hovered ? '#0C0C0C' : '#F5C800',
      border: '2px solid #F5C800',
      transform: pressed ? 'translateY(0)' : hovered ? 'translateY(-1px)' : 'none',
    };
    if (variant === 'ghost') return {
      background: 'transparent',
      color: hovered ? '#F5C800' : '#FFFFFF',
      border: '2px solid transparent',
    };
    if (variant === 'dark') return {
      background: hovered ? '#252525' : '#181818',
      color: '#FFFFFF',
      border: '2px solid #383838',
    };
    if (variant === 'electric') return {
      background: pressed ? '#AADD00' : hovered ? '#D8FF44' : '#C8FF00',
      color: '#0C0C0C',
      border: '2px solid transparent',
      transform: pressed ? 'translateY(0)' : hovered ? 'translateY(-1px)' : 'none',
      boxShadow: hovered && !pressed ? '0 0 28px rgba(200,255,0,0.35)' : 'none',
    };
    return {};
  };

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    outline: 'none',
    transition: 'all 0.18s ease',
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    borderRadius: 0,
    boxSizing: 'border-box',
    ...sizeMap[size],
    ...getVariant(),
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      style={style}
      disabled={!href && disabled}
      onClick={!disabled ? onClick : undefined}
      href={href}
      onMouseEnter={() => { if (!disabled) setHovered(true); }}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => { if (!disabled) setPressed(true); }}
      onMouseUp={() => setPressed(false)}
    >
      {leftIcon && (
        <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.15em', flexShrink: 0 }}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.15em', flexShrink: 0 }}>
          {rightIcon}
        </span>
      )}
    </Tag>
  );
}
