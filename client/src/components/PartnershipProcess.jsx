import React from 'react';
import './PartnershipProcess.css';
import {
  FiPhoneCall, FiSearch, FiUpload, FiZap,
  FiSpeaker, FiShoppingBag, FiPackage,
  FiTruck, FiSettings, FiTrendingUp
} from 'react-icons/fi';

const steps = [
  { icon: FiPhoneCall, title: 'Connect With Us', description: 'Submit a partnership request to get started.' },
  { icon: FiSearch, title: 'We Understand Your Business', description: 'We learn about your products, pricing and operational capabilities.' },
  { icon: FiUpload, title: 'We Onboard', description: 'Your business and product information is organized for online presentation.' },
  { icon: FiZap, title: 'Launch', description: 'Your products become part of the online sales channel.' },
  { icon: FiSpeaker, title: 'Marketing', description: 'We work to attract potential customers to your products.' },
  { icon: FiShoppingBag, title: 'Orders', description: 'Orders received through the online channel are coordinated with you.' },
  { icon: FiPackage, title: 'Fulfillment', description: 'You prepare and pack the confirmed order.' },
  { icon: FiTruck, title: 'Delivery', description: 'Pickup and delivery are coordinated to the customer.' },
  { icon: FiSettings, title: 'Optimization', description: 'We study customer response and product performance.' },
  { icon: FiTrendingUp, title: 'Growth', description: 'Strong products and successful partnerships can be expanded.' },
];

const PartnershipProcess = () => {
  return (
    <section className="gv-section gv-partnership-process" id="manufacturers">
      <div className="gv-container">
        <span className="gv-badge">Partnership Process</span>
        <h2 className="gv-section-title">
          Simple for Manufacturers.<br />
          <span className="gv-text-primary">Built for Growth.</span>
        </h2>
        <p className="gv-section-subtitle">
          From first contact to ongoing growth — here's exactly how the partnership works.
        </p>

        <div className="gv-process-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="gv-process-step" key={index}>
                <div className="gv-process-step-left">
                  <div className="gv-process-step-num">{String(index + 1).padStart(2, '0')}</div>
                  <div className="gv-process-step-line" />
                </div>
                <div className="gv-process-step-content">
                  <div className="gv-process-step-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnershipProcess;
