import React from 'react';
import './PartnershipModel.css';
import { FiCheck } from 'react-icons/fi';

const manufacturerResponsibilities = [
  'Provides product information',
  'Maintains product quality',
  'Maintains stock availability',
  'Confirms and fulfills orders',
  'Packs confirmed orders',
  'Provides required business information',
];

const gvtResponsibilities = [
  'Builds online presence',
  'Presents products professionally',
  'Supports digital marketing',
  'Works on customer acquisition',
  'Coordinates orders',
  'Coordinates pickup and delivery process',
  'Tracks performance and suggests improvements',
];

const PartnershipModel = () => {
  return (
    <section className="gv-section gv-partnership-model">
      <div className="gv-container">
        <span className="gv-badge">Partnership Model</span>
        <h2 className="gv-section-title">How We Work Together</h2>
        <p className="gv-section-subtitle">
          A clear division of responsibilities so both sides can focus on what they do best.
        </p>

        <div className="gv-model-grid">
          {/* Manufacturer Column */}
          <div className="gv-model-card">
            <div className="gv-model-header gv-model-header-manufacturer">
              <h3>Manufacturer</h3>
              <span className="gv-model-subtitle">You focus on making great products.</span>
            </div>
            <ul className="gv-model-list">
              {manufacturerResponsibilities.map((item, index) => (
                <li key={index}>
                  <FiCheck size={16} className="gv-model-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Glow Vision Tech Column */}
          <div className="gv-model-card">
            <div className="gv-model-header gv-model-header-gvt">
              <h3>Glow Vision Tech</h3>
              <span className="gv-model-subtitle">We handle the digital selling process.</span>
            </div>
            <ul className="gv-model-list">
              {gvtResponsibilities.map((item, index) => (
                <li key={index}>
                  <FiCheck size={16} className="gv-model-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="gv-model-note">
          Commercial terms, pricing, fulfillment responsibilities and other partnership conditions
          are agreed individually with each manufacturer.
        </p>
      </div>
    </section>
  );
};

export default PartnershipModel;
