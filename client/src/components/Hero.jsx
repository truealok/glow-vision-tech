import React from 'react';
import './Hero.css';
import { FiArrowRight, FiChevronDown, FiHome, FiGlobe } from 'react-icons/fi';

const Hero = ({ onPartnerClick }) => {
  return (
    <section className="gv-hero" id="home">
      <div className="gv-container gv-hero-inner">
        {/* Left Content */}
        <div className="gv-hero-content">
          <span className="gv-badge">Manufacturer-Focused Digital Commerce</span>
          <h1 className="gv-hero-title">
            You Manufacture.<br />
            <span className="gv-hero-highlight">We Help You Reach the Market.</span>
          </h1>
          <p className="gv-hero-description">
            Glow Vision Tech helps manufacturers build an online sales channel by
            bringing together product onboarding, digital presence, marketing,
            customer acquisition, order coordination and delivery support.
          </p>
          <div className="gv-hero-buttons">
            <button className="gv-btn gv-btn-primary" onClick={onPartnerClick}>
              Partner With Us <FiArrowRight />
            </button>
            <a href="#how-it-works" className="gv-btn gv-btn-outline">
              How It Works <FiChevronDown />
            </a>
          </div>
        </div>

        {/* Right Visual — Business Flow */}
        <div className="gv-hero-visual">
          <div className="gv-flow-diagram">
            {/* Manufacturer */}
            <div className="gv-flow-node gv-flow-manufacturer">
              <div className="gv-flow-icon-wrap">
                <FiHome size={32} />
              </div>
              <span className="gv-flow-label">You Manufacture</span>
              <span className="gv-flow-sub">We start at your factory.</span>
            </div>

            {/* Arrow */}
            <div className="gv-flow-arrow">
              <FiArrowRight size={20} />
            </div>

            {/* Glow Vision Tech */}
            <div className="gv-flow-node gv-flow-gvt">
              <div className="gv-flow-icon-wrap gv-flow-icon-gvt">
                <span className="gv-flow-gvt-logo">GV</span>
              </div>
              <span className="gv-flow-label gv-flow-label-gvt">Glow Vision Tech</span>
              <span className="gv-flow-sub">We Build. We Market. We Coordinate.</span>
            </div>

            {/* Arrow */}
            <div className="gv-flow-arrow">
              <FiArrowRight size={20} />
            </div>

            {/* Customer */}
            <div className="gv-flow-node gv-flow-customer">
              <div className="gv-flow-icon-wrap">
                <FiGlobe size={32} />
              </div>
              <span className="gv-flow-label">Online Customer</span>
              <span className="gv-flow-sub">We help you reach them.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
