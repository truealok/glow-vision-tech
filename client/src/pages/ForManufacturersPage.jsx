import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import './ForManufacturersPage.css';

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Access to Global Market',
    description: 'We help you reach customers beyond your local market through online platforms.',
    color: 'blue',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Complete Management',
    description: 'We handle marketing, orders, shipping and customer support end-to-end.',
    color: 'green',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'No Digital Experience Needed',
    description: "You don't need to worry about e-commerce, ads or technology.",
    color: 'purple',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Timely Payments & Transparency',
    description: 'Clear processes, regular updates and timely settlements.',
    color: 'amber',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Growth Without Risk',
    description: 'Increase sales and brand value without investing in online infrastructure.',
    color: 'teal',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Long-Term Sales & Client Base',
    description: 'We help you build a sustainable business with repeat customers and long-term sales.',
    color: 'rose',
  },
];

const ForManufacturersPage = () => {
  return (
    <div className="gv-page">
      {/* Page Hero */}
      <section className="gv-page-hero">
        <div className="gv-container">
          <h1>
            Why Partner With<br />
            <span className="text-primary">Glow Vision Tech?</span>
          </h1>
          <p>We make online selling simple, scalable and stress-free for manufacturers.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="gv-section fm-benefits-section">
        <div className="gv-container">
          <div className="fm-benefits-header">
            <div className="fm-badge">For Manufacturers</div>
            <h2 className="fm-section-title">Everything You Need to Succeed Online</h2>
            <p className="fm-section-subtitle">Focus on what you do best — we handle the rest.</p>
          </div>

          <div className="fm-benefits-grid">
            {benefits.map((benefit, index) => (
              <div className={`fm-benefit-card fm-benefit-${benefit.color}`} key={index}>
                <div className="fm-benefit-number">0{index + 1}</div>
                <div className="fm-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
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
              <h3>Let's Build Something Big Together.</h3>
              <p>Join hands with Glow Vision Tech and unlock the true potential of your products.</p>
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

export default ForManufacturersPage;
