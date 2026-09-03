import React from 'react';
import './Pages.css';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="gv-page">
      {/* Page Hero */}
      <section className="gv-page-hero">
        <div className="gv-container">
          <div className="gv-contact-brand">
            <span className="gv-logo-icon" style={{ width: 48, height: 48, fontSize: 16 }}>GV</span>
            <div className="gv-logo-text">
              <span className="gv-logo-name" style={{ fontSize: 20 }}>GLOW</span>
              <span className="gv-logo-tagline" style={{ fontSize: 11 }}>VISION TECH</span>
            </div>
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
              <a href="tel:+919876543210" className="gv-contact-card-value">+91 98765 43210</a>
              <p className="gv-contact-card-note">Mon - Sat: 10:00 AM - 7:00 PM</p>
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
              <a href="mailto:hello@glowvisiontech.com" className="gv-contact-card-value">hello@glowvisiontech.com</a>
              <p className="gv-contact-card-note">We reply within 24 hours</p>
            </div>

            {/* Connect With Us */}
            <div className="gv-card gv-contact-card gv-contact-social-card">
              <h3>Connect With Us</h3>
              <div className="gv-contact-social-grid">
                <a href="#" className="gv-contact-social-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  <span>YouTube</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span>X (Twitter)</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12a4 4 0 018 0" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                  <span>Threads</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                  <span>Telegram</span>
                </a>
                <a href="#" className="gv-contact-social-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
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
                  <h4>Naman Singh</h4>
                  <p>Co-Founder & Director</p>
                  <a href="tel:+919876543210">+91 98765 43210</a>
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
                  <h4>Rahul Sharma</h4>
                  <p>Co-Founder & Director</p>
                  <a href="tel:+919123456789">+91 91234 56789</a>
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
