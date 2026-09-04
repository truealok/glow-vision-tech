import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoFull from '../assets/logo-full.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMobile = () => setMobileOpen(false);
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <nav className={`gv-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="gv-container">
          {/* Row 1: Logo image + Nav links + CTA */}
          <div className="gv-navbar-top">
            <Link to="/" className="gv-navbar-logo-link">
              <img src={logoFull} alt="Glow Vision Tech" className="gv-navbar-logo-img" />
            </Link>

            <ul className="gv-nav-links">
              <li><Link to="/" className={isActive('/')}>Home</Link></li>
              <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
              <li><Link to="/how-it-works" className={isActive('/how-it-works')}>How It Works</Link></li>
              <li><Link to="/for-manufacturers" className={isActive('/for-manufacturers')}>For Manufacturers</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
            </ul>

            <Link to="/partner-with-us" className="gv-btn gv-btn-primary gv-nav-cta">
              Partner With Us <span>→</span>
            </Link>

            <button
              className="gv-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Row 2: Tagline below logo */}
          <div className="gv-navbar-tagline">
            We Connect. We Deliver. We Grow.
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`gv-mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMobile}>Home</Link>
        <Link to="/about" onClick={closeMobile}>About Us</Link>
        <Link to="/how-it-works" onClick={closeMobile}>How It Works</Link>
        <Link to="/for-manufacturers" onClick={closeMobile}>For Manufacturers</Link>
        <Link to="/contact" onClick={closeMobile}>Contact Us</Link>
        <Link to="/partner-with-us" onClick={closeMobile} className="gv-btn gv-btn-primary" style={{ marginTop: '24px', textAlign: 'center', justifyContent: 'center' }}>
          Partner With Us →
        </Link>
      </div>
    </>
  );
};

export default Navbar;
