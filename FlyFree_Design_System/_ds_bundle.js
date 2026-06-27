/* @ds-bundle: {"format":3,"namespace":"FlyFreeUrbanDesignSystem_3c4997","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"NavBar","sourcePath":"components/core/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7850c6d3947b","components/core/Button.jsx":"9ab476cb9641","components/core/Card.jsx":"dc6545c8d72d","components/core/Input.jsx":"eee4b40da8df","components/core/NavBar.jsx":"ca7b42bfadb1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FlyFreeUrbanDesignSystem_3c4997 = window.FlyFreeUrbanDesignSystem_3c4997 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Status and category label chip. Uppercase Futura Bold, zero radius.
 */
function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false
}) {
  const sizeMap = {
    sm: {
      padding: '3px 8px',
      fontSize: '9px',
      letterSpacing: '0.12em'
    },
    md: {
      padding: '4px 10px',
      fontSize: '10px',
      letterSpacing: '0.12em'
    },
    lg: {
      padding: '6px 14px',
      fontSize: '11px',
      letterSpacing: '0.1em'
    }
  };
  const variantMap = {
    default: {
      background: '#252525',
      color: '#FFFFFF',
      border: '1px solid #383838'
    },
    yellow: {
      background: '#F5C800',
      color: '#0C0C0C',
      border: '1px solid transparent'
    },
    electric: {
      background: '#C8FF00',
      color: '#0C0C0C',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: '#FFFFFF',
      border: '1px solid #525252'
    },
    dark: {
      background: '#181818',
      color: '#959595',
      border: '1px solid #252525'
    },
    accent: {
      background: 'transparent',
      color: '#F5C800',
      border: '1px solid #F5C800'
    },
    error: {
      background: 'rgba(239,68,68,0.15)',
      color: '#EF4444',
      border: '1px solid rgba(239,68,68,0.4)'
    },
    success: {
      background: 'rgba(34,197,94,0.15)',
      color: '#22C55E',
      border: '1px solid rgba(34,197,94,0.4)'
    }
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
    ...variantMap[variant]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Primary action element — Futura Heavy, uppercase, zero-radius.
 * Supports five visual variants and four sizes.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  href,
  fullWidth = false,
  leftIcon,
  rightIcon
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const sizeMap = {
    sm: {
      padding: '7px 16px',
      fontSize: '10px',
      gap: '6px'
    },
    md: {
      padding: '11px 22px',
      fontSize: '12px',
      gap: '7px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: '13px',
      gap: '8px'
    },
    xl: {
      padding: '19px 44px',
      fontSize: '15px',
      gap: '10px'
    }
  };
  const getVariant = () => {
    if (variant === 'primary') return {
      background: pressed ? '#DDB400' : hovered ? '#FFD400' : '#F5C800',
      color: '#0C0C0C',
      border: '2px solid transparent',
      transform: pressed ? 'translateY(0)' : hovered ? 'translateY(-1px)' : 'none',
      boxShadow: hovered && !pressed ? '0 0 28px rgba(245,200,0,0.35)' : 'none'
    };
    if (variant === 'secondary') return {
      background: hovered ? '#F5C800' : 'transparent',
      color: hovered ? '#0C0C0C' : '#F5C800',
      border: '2px solid #F5C800',
      transform: pressed ? 'translateY(0)' : hovered ? 'translateY(-1px)' : 'none'
    };
    if (variant === 'ghost') return {
      background: 'transparent',
      color: hovered ? '#F5C800' : '#FFFFFF',
      border: '2px solid transparent'
    };
    if (variant === 'dark') return {
      background: hovered ? '#252525' : '#181818',
      color: '#FFFFFF',
      border: '2px solid #383838'
    };
    if (variant === 'electric') return {
      background: pressed ? '#AADD00' : hovered ? '#D8FF44' : '#C8FF00',
      color: '#0C0C0C',
      border: '2px solid transparent',
      transform: pressed ? 'translateY(0)' : hovered ? 'translateY(-1px)' : 'none',
      boxShadow: hovered && !pressed ? '0 0 28px rgba(200,255,0,0.35)' : 'none'
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
    ...getVariant()
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    style: style,
    disabled: !href && disabled,
    onClick: !disabled ? onClick : undefined,
    href: href,
    onMouseEnter: () => {
      if (!disabled) setHovered(true);
    },
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => {
      if (!disabled) setPressed(true);
    },
    onMouseUp: () => setPressed(false)
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.15em',
      flexShrink: 0
    }
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.15em',
      flexShrink: 0
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content container. Three variants: product, feature, category.
 */
function Card({
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
  icon
}) {
  const [hovered, setHovered] = React.useState(false);
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick
  };

  /* ── Feature card ── */
  if (variant === 'feature') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        background: '#1C1C1C',
        border: `1px solid ${hovered ? '#525252' : '#252525'}`,
        padding: '32px',
        transition: 'all 0.18s ease',
        cursor: onClick ? 'pointer' : 'default'
      }
    }, handlers), icon && /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#F5C800',
        marginBottom: '16px',
        fontSize: '22px',
        display: 'flex'
      }
    }, icon), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "'Futura Std', sans-serif",
        fontWeight: 900,
        fontSize: '14px',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        margin: '0 0 8px 0',
        lineHeight: 1.2
      }
    }, title), description && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "'Futura Std', sans-serif",
        fontWeight: 300,
        fontSize: '13px',
        color: '#737373',
        margin: 0,
        lineHeight: 1.6
      }
    }, description));
  }

  /* ── Category card ── */
  if (variant === 'category') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '3/2',
        background: '#181818'
      }
    }, handlers), image && /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        filter: `grayscale(20%) brightness(${hovered ? 0.85 : 0.65}) contrast(1.1)`,
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'scale(1.04)' : 'scale(1)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 60%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '24px'
      }
    }, tag && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Futura Std', sans-serif",
        fontWeight: 700,
        fontSize: '10px',
        color: '#F5C800',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginBottom: '6px'
      }
    }, tag), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "'Futura Std Cond', 'Futura Condensed', sans-serif",
        fontWeight: 900,
        fontSize: '32px',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '-0.01em',
        margin: 0,
        lineHeight: 1
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "'Futura Std', sans-serif",
        fontWeight: 300,
        fontSize: '12px',
        color: '#959595',
        margin: '6px 0 0'
      }
    }, subtitle)), hovered && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '16px',
        right: '16px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '6px 12px',
        background: '#F5C800',
        color: '#0C0C0C',
        fontFamily: "'Futura Std', sans-serif",
        fontWeight: 900,
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }
    }, "Ver \u2192")));
  }

  /* ── Product card (default) ── */
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: '#1C1C1C',
      border: `1px solid ${hovered ? '#525252' : '#252525'}`,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.18s ease',
      transform: hovered ? 'translateY(-3px)' : 'none',
      boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.7)' : '0 1px 4px rgba(0,0,0,0.5)'
    }
  }, handlers), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: '#181818',
      overflow: 'hidden',
      position: 'relative'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'grayscale(15%) brightness(0.95)',
      transition: 'transform 0.35s ease',
      transform: hovered ? 'scale(1.04)' : 'scale(1)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#383838',
      fontFamily: "'Futura Std Cond', sans-serif",
      fontWeight: 900,
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, title), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, tag && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 700,
      fontSize: '10px',
      color: '#F5C800',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      marginBottom: '6px'
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 900,
      fontSize: '16px',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      margin: '0 0 4px',
      letterSpacing: '-0.01em',
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 300,
      fontSize: '12px',
      color: '#737373',
      margin: '0 0 14px'
    }
  }, subtitle), (price !== undefined || priceFormatted) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 900,
      fontSize: '20px',
      color: '#FFFFFF'
    }
  }, priceFormatted || `$${price}`)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * Text input field — dark background, yellow focus ring, label above.
 */
function Input({
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
  fullWidth = false
}) {
  const [focused, setFocused] = React.useState(false);
  const sizeMap = {
    sm: {
      padding: '8px 12px',
      fontSize: '12px',
      iconSize: '14px'
    },
    md: {
      padding: '12px 16px',
      fontSize: '13px',
      iconSize: '16px'
    },
    lg: {
      padding: '16px 20px',
      fontSize: '15px',
      iconSize: '18px'
    }
  };
  const {
    padding,
    fontSize,
    iconSize
  } = sizeMap[size];
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: fullWidth ? '100%' : 'auto'
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
    opacity: disabled ? 0.5 : 1
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
    cursor: disabled ? 'not-allowed' : 'text'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapStyle
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 700,
      fontSize: '10px',
      color: focused ? '#F5C800' : '#737373',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      transition: 'color 0.1s ease'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: containerStyle
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#525252',
      display: 'flex',
      alignItems: 'center',
      fontSize: iconSize,
      flexShrink: 0
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inputStyle
  }), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#525252',
      display: 'flex',
      alignItems: 'center',
      fontSize: iconSize,
      flexShrink: 0,
      cursor: 'pointer'
    }
  }, rightIcon)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 400,
      fontSize: '11px',
      color: '#EF4444',
      letterSpacing: '0.02em'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/NavBar.jsx
try { (() => {
/**
 * Top navigation bar — logo left, links center, CTA right.
 */
function NavBar({
  logo,
  logoSrc,
  links = [],
  ctaLabel = 'Tienda',
  ctaHref = '#',
  variant = 'dark',
  sticky = true
}) {
  const [hovered, setHovered] = React.useState(null);
  const bgMap = {
    dark: {
      background: '#0C0C0C',
      borderBottom: '1px solid #252525'
    },
    transparent: {
      background: 'transparent',
      borderBottom: '1px solid transparent'
    },
    overlay: {
      background: 'rgba(12,12,12,0.88)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    },
    light: {
      background: '#F4F3EE',
      borderBottom: '1px solid #D5D5D5'
    }
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
    transition: 'all 0.18s ease'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: logo || 'FlyFree Urban',
    style: {
      height: '32px',
      objectFit: 'contain',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 900,
      fontSize: '18px',
      color: isLight ? '#0C0C0C' : '#FFFFFF',
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, logo || 'FLYFREE')), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '36px'
    }
  }, links.map((link, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: link.href || '#',
    style: {
      fontFamily: "'Futura Std', sans-serif",
      fontWeight: 700,
      fontSize: '11px',
      color: hovered === i ? isLight ? '#0C0C0C' : '#FFFFFF' : isLight ? '#737373' : '#737373',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      transition: 'color 0.1s ease',
      whiteSpace: 'nowrap'
    },
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null)
  }, link.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
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
      whiteSpace: 'nowrap'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#FFD400',
    onMouseLeave: e => e.currentTarget.style.background = '#F5C800'
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
