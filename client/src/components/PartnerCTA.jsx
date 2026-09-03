import React from 'react';
import './PartnerCTA.css';
import { FiArrowRight } from 'react-icons/fi';

const PartnerCTA = ({ onPartnerClick }) => {
  return (
    <section className="gv-section gv-partner-cta">
      <div className="gv-container">
        <div className="gv-cta-card">
          <div className="gv-cta-content">
            <h2>Ready to Take Your Business Online?</h2>
            <p>
              Tell us about your manufacturing business and explore how Glow Vision Tech
              can build an additional online sales channel for you.
            </p>
          </div>
          <div className="gv-cta-action">
            <button className="gv-btn gv-btn-white" onClick={onPartnerClick}>
              Become a Partner <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
