import React from 'react';
import { Link } from 'react-router-dom';
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

      {/* Flow Diagram - Enhanced */}
      <section className="gv-section about-flow-section">
        <div className="gv-container">
          <div className="about-flow-wrapper">
            {/* Manufacturers Box */}
            <div className="about-flow-card about-flow-card-mfg">
              <div className="about-flow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h4>MANUFACTURERS</h4>
              <p>You focus on making quality products.</p>
              <div className="about-flow-label about-flow-label-you">Your Part</div>
            </div>

            {/* Arrow */}
            <div className="about-flow-arrow">
              <div className="about-flow-arrow-line" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            {/* Glow Vision Tech Box - Center */}
            <div className="about-flow-card about-flow-card-gvt">
              <div className="about-flow-logo">
                <Logo size={48} showText={false} />
              </div>
              <h4>GLOW VISION TECH</h4>
              <p>We connect. We market. We deliver.</p>
              <div className="about-flow-label about-flow-label-us">Our Operations</div>
            </div>

            {/* Arrow */}
            <div className="about-flow-arrow">
              <div className="about-flow-arrow-line" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            {/* Customers Box */}
            <div className="about-flow-card about-flow-card-customer">
              <div className="about-flow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4>CUSTOMERS WORLDWIDE</h4>
              <p>We deliver value to customers everywhere.</p>
              <div className="about-flow-label about-flow-label-result">The Result</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="gv-section about-details-section">
        <div className="gv-container">
          <div className="about-details-grid">
            <div className="about-detail-card">
              <div className="about-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h4>Global Reach</h4>
              <p>We help you reach customers across India and beyond through online platforms.</p>
            </div>

            <div className="about-detail-card">
              <div className="about-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h4>Marketing & Sales</h4>
              <p>We handle all digital marketing, ads, and customer acquisition for your products.</p>
            </div>

            <div className="about-detail-card">
              <div className="about-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h4>Logistics & Delivery</h4>
              <p>We manage the complete supply chain from your factory to the customer's doorstep.</p>
            </div>

            <div className="about-detail-card">
              <div className="about-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>End-to-End Management</h4>
              <p>From orders to customer support, we handle everything so you can focus on manufacturing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="gv-cta-strip">
        <div className="gv-container">
          <div className="gv-cta-strip-content">
            <div className="gv-cta-strip-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className="gv-cta-strip-text">
              <h3>Ready to Go Online?</h3>
              <p>Partner with us and let's grow your business together.</p>
            </div>
            <Link to="/partner-with-us" className="btn btn-white">
              Partner With Us <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
