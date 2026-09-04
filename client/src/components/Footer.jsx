import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';
import { FiInstagram, FiLinkedin, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="gv-footer" id="contact">
      <div className="gv-container">
        <div className="gv-footer-grid">
          {/* Brand Column */}
          <div className="gv-footer-brand">
            <Link to="/" className="gv-footer-logo">
              <Logo size={38} light />
            </Link>
            <p className="gv-footer-desc">
              Building digital sales channels that connect manufacturers with online customers.
            </p>
          </div>

          {/* Navigation */}
          <div className="gv-footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/for-manufacturers">For Manufacturers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="gv-footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <FiMail size={16} />
                <span>glowvisiontpl@gmail.com</span>
              </li>
              <li>
                <FiPhone size={16} />
                <span>+91 98923 30117</span>
              </li>
              <li>
                <FiMapPin size={16} />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="gv-footer-social">
            <h4>Follow Us</h4>
            <div className="gv-social-links">
              <a href="#" className="gv-social-link" aria-label="Instagram">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="gv-social-link" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="gv-social-link" aria-label="YouTube">
                <FiYoutube size={18} />
              </a>
            </div>
            <Link to="/partner-with-us" className="gv-btn gv-btn-primary gv-btn-sm" style={{ marginTop: '12px', display: 'inline-flex' }}>
              Partner With Us →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gv-footer-bottom">
          <p>© 2026 Glow Vision Tech. All Rights Reserved.</p>
          <div className="gv-footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
