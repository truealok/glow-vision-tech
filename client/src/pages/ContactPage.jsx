import React from 'react';
import Logo from '../components/Logo';
import './Pages.css';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="gv-page">
      {/* Page Hero */}
      <section className="gv-page-hero">
        <div className="gv-container">
          <div className="gv-contact-brand">
            <Logo size={44} />
          </div>
          <h1>Get In Touch With Us</h1>
          <p>We're here to help you grow your business globally.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="gv-section gv-contact-section">
        <div className="gv-container">
          <div className="gv-contact-cards">
            {/* Call Us */}
            <div className="gv-card gv-contact-card">
              <div className="gv-contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3>Call Us</h3>
              <a href="tel:+919876543210" className="gv-contact-card-value">+91 9892330117</a>
              <p className="gv-contact-card-note">24 x 7</p>
            </div>

            {/* Email Us */}
            <div className="gv-card gv-contact-card">
              <div className="gv-contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Email Us</h3>
              <a href="mailto:hello@glowvisiontech.com" className="gv-contact-card-value">glowvisiontpl@gmail.com</a>
              <p className="gv-contact-card-note">We reply within 24 hours</p>
            </div>

            {/* Connect With Us */}
            <div className="gv-card gv-contact-card gv-contact-social-card">
              <h3>Connect With Us</h3>
              <div className="gv-contact-social-grid">
                <a href="#" className="gv-contact-social-item">
                  <span className="gv-social-icon-circle" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span>Instagram</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <span className="gv-social-icon-circle" style={{ background: '#FF0000' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </span>
                  <span>YouTube</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <span className="gv-social-icon-circle" style={{ background: '#000' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </span>
                  <span>X (Twitter)</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <span className="gv-social-icon-circle" style={{ background: '#000' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12z" />
                      <path d="M8 12a4 4 0 018 0" fill="none" />
                      <circle cx="12" cy="12" r="1" fill="#fff" stroke="none" />
                    </svg>
                  </span>
                  <span>Threads</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <span className="gv-social-icon-circle" style={{ background: '#2AABEE' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 3L9 13" />
                      <path d="M21 3l-4 18-5-7-7-5z" />
                    </svg>
                  </span>
                  <span>Telegram</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <span className="gv-social-icon-circle" style={{ background: '#25D366' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="gv-contact-leadership">
            <h3>Our Leadership</h3>
            <div className="gv-contact-leadership-grid">
              <div className="gv-contact-leader-card">
                <div className="gv-contact-leader-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="gv-contact-leader-info">
                  <h4>Sunil Singh</h4>
                  <p>Co-Founder & Director</p>
                  <a href="tel:+919876543210">+91 98923 30117</a>
                </div>
              </div>
              <div className="gv-contact-leader-card">
                <div className="gv-contact-leader-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="gv-contact-leader-info">
                  <h4>Nilesh Patil</h4>
                  <p>Co-Founder & Director</p>
                  <a href="tel:+919123456789">+91 98923 32005</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
