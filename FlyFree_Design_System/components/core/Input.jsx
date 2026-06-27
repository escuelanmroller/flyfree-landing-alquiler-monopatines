import React from 'react';

/**
 * Text input field — dark background, yellow focus ring, label above.
 */
export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  size = 'md',
  fullWidth = false,
}) {
  const [focused, setFocused] = React.useState(false);

  const sizeMap = {
    sm: { padding: '8px 12px',   fontSize: '12px', iconSize: '14px' },
    md: { padding: '12px 16px',  fontSize: '13px', iconSize: '16px' },
    lg: { padding: '16px 20px',  fontSize: '15px', iconSize: '18px' },
  };

  const { padding, fontSize, iconSize } = sizeMap[size];

  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: fullWidth ? '100%' : 'auto',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#181818',
    border: `2px solid ${error ? '#EF4444' : focused ? '#F5C800' : '#252525'}`,
    transition: 'border-color 0.1s ease',
    padding,
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
  };

  const inputStyle = {
    flex: 1,
    minWidth: fullWidth ? 'auto' : '200px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
    fontWeight: 300,
    fontSize,
    color: '#FFFFFF',
    cursor: disabled ? 'not-allowed' : 'text',
  };

  return (
    <div style={wrapStyle}>
      {label && (
        <label style={{
          fontFamily: "'Futura Std', sans-serif",
          fontWeight: 700,
          fontSize: '10px',
          color: focused ? '#F5C800' : '#737373',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          transition: 'color 0.1s ease',
        }}>
          {label}
        </label>
      )}
      <div style={containerStyle}>
        {leftIcon && (
          <span style={{ color: '#525252', display: 'flex', alignItems: 'center', fontSize: iconSize, flexShrink: 0 }}>
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
        />
        {rightIcon && (
          <span style={{ color: '#525252', display: 'flex', alignItems: 'center', fontSize: iconSize, flexShrink: 0, cursor: 'pointer' }}>
            {rightIcon}
          </span>
        )}
      </div>
      {error && (
        <span style={{
          fontFamily: "'Futura Std', sans-serif",
          fontWeight: 400,
          fontSize: '11px',
          color: '#EF4444',
          letterSpacing: '0.02em',
        }}>
          {error}
        </span>
      )}
    </div>
  );
}
