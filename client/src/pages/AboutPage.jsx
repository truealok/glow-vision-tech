import React from 'react';
import Logo from '../components/Logo';
import './Pages.css';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="gv-page">
      {/* Page Hero */}
      <section className="gv-page-hero">
        <div className="gv-container">
          <h1>
            We Bridge The Gap Between<br />
            Manufacturers And <span className="text-primary">Global Customers.</span>
          </h1>
          <p>
            Glow Vision Tech is a growth partner for offline manufacturers.
            We connect your quality products to the online world.
          </p>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="gv-section">
        <div className="gv-container">
          <div className="gv-about-flow">
            {/* Manufacturers */}
            <div className="gv-about-flow-box">
              <div className="gv-about-flow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h4>MANUFACTURERS</h4>
              <p>You focus on making quality products.</p>
            </div>

            {/* Arrow */}
            <div className="gv-about-flow-arrow">
              <div className="gv-about-flow-dotted-line" />
              <span>→</span>
              <div className="gv-about-flow-dotted-line" />
            </div>

            {/* Glow Vision Tech */}
            <div className="gv-about-flow-box gv-about-flow-center">
              <div className="gv-about-flow-logo">
                <Logo size={36} showText={false} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 800, fontSize: 14, letterSpacing: '0.5px' }}>GLOW</span>
                  <span style={{ fontWeight: 600, fontSize: 10, color: 'var(--color-text-muted)', letterSpacing: '1px' }}>VISION TECH</span>
                </div>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: 'var(--font-size-sm)', margin: 0 }}>We connect. We market. We deliver.</p>
            </div>

            {/* Arrow */}
            <div className="gv-about-flow-arrow">
              <div className="gv-about-flow-dotted-line" />
              <span>→</span>
              <div className="gv-about-flow-dotted-line" />
            </div>

            {/* Customers */}
            <div className="gv-about-flow-box">
              <div className="gv-about-flow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4>CUSTOMERS WORLDWIDE</h4>
              <p>We deliver value to customers everywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
