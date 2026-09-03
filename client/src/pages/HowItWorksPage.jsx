import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Pages.css';
import './HowItWorksPage.css';

const steps = [
  {
    number: '01',
    title: 'Manufacturing',
    description: 'You manufacture high-quality products at your facility.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Shipping & Logistics',
    description: 'We arrange pickup from your location through our logistics network.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Order Management',
    description: 'We manage orders, inventory updates and customer communication seamlessly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Online Marketing',
    description: 'We run ads, promotions and campaigns across multiple digital platforms.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Right Product to Right Customer',
    description: 'We connect the right products with the right customers who truly need them.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Sales & Growth',
    description: 'More orders, more exposure and continuous growth for your business.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
];

const HowItWorksPage = () => {
  return (
    <div className="gv-page">
      {/* Page Hero */}
      <section className="gv-page-hero">
        <div className="gv-container">
          <h1>Our End-to-End Process</h1>
          <p>From your factory to your customer's doorstep.</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="gv-section gv-process-section">
        <div className="gv-container">
          <div className="gv-process-grid">
            {steps.map((step, index) => (
              <div className="gv-process-card" key={index}>
                <div className="gv-process-card-number">{step.number}</div>
                <div className="gv-process-card-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="gv-process-card-arrow">→</div>
                )}
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
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="gv-cta-strip-text">
              <h3>We Handle Everything In Between, So You Can Focus On What You Do Best.</h3>
              <p>Manufacture great products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
