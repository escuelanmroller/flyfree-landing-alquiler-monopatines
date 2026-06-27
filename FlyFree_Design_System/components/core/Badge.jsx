import React from 'react';

/**
 * Status and category label chip. Uppercase Futura Bold, zero radius.
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
}) {
  const sizeMap = {
    sm: { padding: '3px 8px',   fontSize: '9px',  letterSpacing: '0.12em' },
    md: { padding: '4px 10px',  fontSize: '10px', letterSpacing: '0.12em' },
    lg: { padding: '6px 14px',  fontSize: '11px', letterSpacing: '0.1em'  },
  };

  const variantMap = {
    default:  { background: '#252525',        color: '#FFFFFF',  border: '1px solid #383838' },
    yellow:   { background: '#F5C800',        color: '#0C0C0C',  border: '1px solid transparent' },
    electric: { background: '#C8FF00',        color: '#0C0C0C',  border: '1px solid transparent' },
    outline:  { background: 'transparent',    color: '#FFFFFF',  border: '1px solid #525252' },
    dark:     { background: '#181818',        color: '#959595',  border: '1px solid #252525' },
    accent:   { background: 'transparent',    color: '#F5C800',  border: '1px solid #F5C800' },
    error:    { background: 'rgba(239,68,68,0.15)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.4)' },
    success:  { background: 'rgba(34,197,94,0.15)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.4)' },
  };

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 0,
    flexShrink: 0,
    ...sizeMap[size],
    ...variantMap[variant],
  };

  return (
    <span style={style}>
      {dot && (
        <span style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'currentColor',
          flexShrink: 0,
        }} />
      )}
      {children}
    </span>
  );
}
