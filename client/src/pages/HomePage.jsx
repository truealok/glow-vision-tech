import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiTrendingUp, FiSettings, FiHeadphones } from 'react-icons/fi';
import './Pages.css';
import './HomePage.css';

const valuePoints = [
  { icon: FiShield, label: 'No Setup Cost' },
  { icon: FiTrendingUp, label: 'Performance Driven' },
  { icon: FiSettings, label: 'End-to-End Management' },
  { icon: FiHeadphones, label: 'Reliable Support' },
];

// Icons orbiting the globe (7 icons, no globe — globe is the center)
const orbitIcons = [
  { angle: 270, icon: 'package',   label: 'Package' },     // top
  { angle: 180, icon: 'truck',     label: 'Truck' },       // left
  { angle: 315, icon: 'cart',      label: 'Cart' },        // upper-right
  { angle:   0, icon: 'megaphone', label: 'Megaphone' },   // right
  { angle: 225, icon: 'factory',   label: 'Factory' },     // lower-left
  { angle: 135, icon: 'clipboard', label: 'Clipboard' },   // lower-left (bottom)
  { angle:  45, icon: 'user',      label: 'User' },        // lower-right
];

const OrbitSvgIcon = ({ type }) => {
  switch (type) {
    case 'package':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 9.4l-9-5.19" />
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'truck':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case 'cart':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="13" x2="13" y2="13" />
        </svg>
      );
    case 'factory':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <path d="M9 9v.01M9 13v.01M9 17v.01" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="15" y2="16" />
        </svg>
      );
    case 'user':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
};

const HomePage = () => {
  return (
    <div className="gv-page">
      {/* Hero Section */}
      <section className="gv-hero gv-home-hero">
        <div className="gv-container gv-hero-inner">
          {/* Left Content */}
          <div className="gv-hero-content">
            <span className="gv-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              EMPOWERING MANUFACTURERS
            </span>

            <h1 className="gv-hero-title">
              We Connect<br />
              We Deliver<br />
              <span className="gv-hero-highlight">We Grow</span>
            </h1>

            <p className="gv-hero-description">
              Glow Vision Tech helps offline manufacturers unlock the power of online selling. We handle
              everything from marketing to customer acquisition and shipping and logistics, so you can focus on
              what's best: manufacturing great products for customers.
            </p>

            <div className="gv-hero-buttons">
              <Link to="/partner-with-us" className="gv-btn gv-btn-primary">
                Partner With Us <FiArrowRight size={18} />
              </Link>
              <Link to="/about" className="gv-btn gv-btn-outline">
                Learn More <FiArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Visual — Circular Orbit Diagram */}
          <div className="gv-hero-visual">
            <div className="gv-orbit-wrapper">
              {/* Center Globe */}
              <div className="gv-orbit-center">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="globeGrad" cx="40%" cy="35%" r="55%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="45%" stopColor="#f0f7ff" />
                      <stop offset="100%" stopColor="#dbeafe" />
                    </radialGradient>
                  </defs>
                  {/* Globe sphere */}
                  <circle cx="100" cy="100" r="82" fill="url(#globeGrad)" stroke="#bfdbfe" strokeWidth="1" />
                  {/* Latitude lines */}
                  <ellipse cx="100" cy="100" rx="82" ry="28" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.8" />
                  <ellipse cx="100" cy="100" rx="82" ry="50" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.8" />
                  <ellipse cx="100" cy="100" rx="82" ry="68" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.8" />
                  {/* Longitude lines */}
                  <ellipse cx="100" cy="100" rx="28" ry="82" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.8" />
                  <ellipse cx="100" cy="100" rx="50" ry="82" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.8" />
                  <ellipse cx="100" cy="100" rx="68" ry="82" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.8" />
                  {/* Abstract continents */}
                  <path d="M55 50 Q70 42 82 50 Q88 60 78 68 Q65 65 55 50Z" fill="rgba(37,99,235,0.13)" />
                  <path d="M105 42 Q125 38 138 50 Q145 62 132 70 Q115 65 105 42Z" fill="rgba(37,99,235,0.13)" />
                  <path d="M48 85 Q65 78 78 88 Q85 100 72 105 Q55 100 48 85Z" fill="rgba(37,99,235,0.13)" />
                  <path d="M88 100 Q102 95 118 105 Q128 118 115 125 Q95 122 88 100Z" fill="rgba(37,99,235,0.13)" />
                  <path d="M118 95 Q135 88 148 100 Q155 115 142 122 Q125 118 118 95Z" fill="rgba(37,99,235,0.13)" />
                </svg>
              </div>

              {/* Dashed orbit ring */}
              <div className="gv-orbit-ring" />

              {/* Orbiting icons */}
              {orbitIcons.map((node, index) => {
                const angleRad = (node.angle * Math.PI) / 180;
                const radius = 168;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                return (
                  <div
                    className="gv-orbit-node"
                    key={index}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div className="gv-orbit-node-icon">
                      <OrbitSvgIcon type={node.icon} />
                    </div>
                  </div>
                );
              })}

              {/* Location pin on globe surface (right side, not on ring) */}
              <div className="gv-orbit-location-pin">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" fill="#fff" stroke="var(--color-primary)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Points Strip */}
      <section className="gv-home-values">
        <div className="gv-container">
          <div className="gv-home-values-grid">
            {valuePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div className="gv-home-value-item" key={index}>
                  <Icon size={18} />
                  <span>{point.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
