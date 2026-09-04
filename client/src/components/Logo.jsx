import React from 'react';
import logoFull from '../assets/logo-full.png';

const Logo = ({ size = 40, showText = true, light = false, className = '', showTagline = false }) => {
  const height = showText ? Math.max(size, 36) : size;

  return (
    <div className={`gv-logo ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <img
        src={logoFull}
        alt="Glow Vision Tech"
        style={{
          height: height,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
      {showTagline && (
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--color-primary, #3b82f6)',
          letterSpacing: '0.3px',
          marginTop: 6,
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}>
          We Connect. We Deliver. We Grow.
        </span>
      )}
    </div>
  );
};

export default Logo;
