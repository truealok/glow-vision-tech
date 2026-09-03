import React from 'react';
import './Benefits.css';
import {
  FiGlobe, FiMonitor, FiTrendingUp, FiTruck,
  FiUsers, FiArrowUpRight
} from 'react-icons/fi';

const benefits = [
  {
    icon: FiGlobe,
    title: 'Additional Sales Channel',
    description: 'Reach online customers without building an e-commerce operation from scratch.',
  },
  {
    icon: FiMonitor,
    title: 'Digital Presence',
    description: 'Present your business and products professionally in the online space.',
  },
  {
    icon: FiTrendingUp,
    title: 'Marketing Support',
    description: 'Get support in promoting products and reaching relevant audiences.',
  },
  {
    icon: FiTruck,
    title: 'Order Coordination',
    description: 'We help simplify the process from online order to manufacturer fulfillment.',
  },
  {
    icon: FiUsers,
    title: 'Customer Access',
    description: 'Create opportunities to reach customers beyond traditional bulk or offline channels.',
  },
  {
    icon: FiArrowUpRight,
    title: 'Long-Term Growth',
    description: 'Use customer response and sales data to identify opportunities for expansion.',
  },
];

const Benefits = () => {
  return (
    <section className="gv-section gv-benefits">
      <div className="gv-container">
        <span className="gv-badge">Why Partner With Us</span>
        <h2 className="gv-section-title">
          Why Partner With<br />
          <span className="gv-text-primary">Glow Vision Tech?</span>
        </h2>
        <p className="gv-section-subtitle">
          Partnering with us gives your manufacturing business the digital infrastructure to reach online customers.
        </p>

        <div className="gv-benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div className="gv-card gv-benefit-card" key={index}>
                <div className="gv-benefit-icon">
                  <Icon size={24} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
