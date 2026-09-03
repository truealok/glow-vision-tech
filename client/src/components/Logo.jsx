import React from 'react';

const Logo = ({ size = 40, showText = true, light = false, className = '' }) => {
  const textColor = light ? '#fff' : '#1a1a2e';
  const taglineColor = light ? 'rgba(255,255,255,0.6)' : '#6b7280';

  return (
    <div className={`gv-logo ${className}`} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`shieldGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* Hexagonal shield shape */}
        <path
          d="M50 5 L85 22 L85 60 L50 95 L15 60 L15 22 Z"
          fill={`url(#shieldGrad-${size})`}
        />
        {/* Stylized G lettermark */}
        <path
          d="M62 42 C62 30 50 24 40 30 C32 35 30 48 35 58 C40 68 52 72 60 67 L60 55 L45 55 L45 48 L55 48"
          stroke="#fff"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontSize: size * 0.42, fontWeight: 800, color: textColor, letterSpacing: '0.5px' }}>
            GLOW
          </span>
          <span style={{ fontSize: size * 0.24, fontWeight: 600, color: taglineColor, letterSpacing: '1.5px' }}>
            VISION TECH
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
