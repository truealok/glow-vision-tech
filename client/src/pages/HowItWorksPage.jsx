import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import './HowItWorksPage.css';

const yourSteps = [
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
];

const ourSteps = [
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
          <h1>How It Works</h1>
          <p>From your factory to your customer's doorstep — here's the complete journey.</p>
        </div>
      </section>

      {/* YOUR PART Section */}
      <section className="gv-section hiw-section">
        <div className="gv-container">
          <div className="hiw-section-header">
            <div className="hiw-section-badge hiw-badge-you">Your Part</div>
            <h2 className="hiw-section-title">What You Do</h2>
            <p className="hiw-section-subtitle">Just focus on what you do best — manufacturing quality products.</p>
          </div>
          <div className="hiw-row hiw-row-single">
            {yourSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="hiw-card hiw-card-you">
                  <div className="hiw-card-number">{step.number}</div>
                  <div className="hiw-card-icon hiw-icon-you">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                <div className="hiw-arrow-down">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* OUR OPERATIONS Section */}
      <section className="gv-section hiw-section hiw-ops-section">
        <div className="gv-container">
          <div className="hiw-section-header">
            <div className="hiw-section-badge hiw-badge-us">Our Operations</div>
            <h2 className="hiw-section-title">What We Handle</h2>
            <p className="hiw-section-subtitle">We take care of everything else — so you don't have to worry about a thing.</p>
          </div>

          {/* Row 1: Steps 2-4 */}
          <div className="hiw-row hiw-row-three">
            {ourSteps.slice(0, 3).map((step, index) => (
              <React.Fragment key={index}>
                <div className="hiw-card hiw-card-us">
                  <div className="hiw-card-number">{step.number}</div>
                  <div className="hiw-card-icon hiw-icon-us">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hiw-arrow-right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Arrow down between rows */}
          <div className="hiw-arrow-down hiw-arrow-row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>

          {/* Row 2: Steps 5-6 */}
          <div className="hiw-row hiw-row-two">
            {ourSteps.slice(3).map((step, index) => (
              <React.Fragment key={index}>
                <div className="hiw-card hiw-card-us">
                  <div className="hiw-card-number">{step.number}</div>
                  <div className="hiw-card-icon hiw-icon-us">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                {index < 1 && (
                  <div className="hiw-arrow-right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
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
            <Link to="/partner-with-us" className="btn btn-white">
              Partner With Us <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
