import React from 'react';
import './ManufacturerJourney.css';
import {
  FiLink, FiUserPlus, FiList, FiSpeaker,
  FiShoppingCart, FiPackage, FiTruck,
  FiPieChart, FiTrendingUp
} from 'react-icons/fi';

const journeySteps = [
  { icon: FiLink, label: 'Connect', description: 'Reach out and share your manufacturing business with us.' },
  { icon: FiUserPlus, label: 'Onboard', description: 'We learn about your products, pricing and capabilities.' },
  { icon: FiList, label: 'List', description: 'Your products are organized and presented online.' },
  { icon: FiSpeaker, label: 'Market', description: 'We promote your products to relevant audiences.' },
  { icon: FiShoppingCart, label: 'Sell', description: 'Customers discover and order your products online.' },
  { icon: FiPackage, label: 'Fulfill', description: 'You prepare and pack confirmed orders.' },
  { icon: FiTruck, label: 'Deliver', description: 'Orders reach customers through coordinated delivery.' },
  { icon: FiPieChart, label: 'Analyze', description: 'We study performance data and customer response.' },
  { icon: FiTrendingUp, label: 'Grow', description: 'Expand successful products and scale the partnership.' },
];

const ManufacturerJourney = () => {
  return (
    <section className="gv-section gv-journey">
      <div className="gv-container">
        <span className="gv-badge">Your Journey</span>
        <h2 className="gv-section-title">
          Your Journey With<br />
          <span className="gv-text-primary">Glow Vision Tech</span>
        </h2>
        <p className="gv-section-subtitle">
          A clear path from first contact to a growing online sales channel.
        </p>

        <div className="gv-journey-steps">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="gv-journey-step">
                  <div className="gv-journey-icon">
                    <Icon size={24} />
                  </div>
                  <span className="gv-journey-label">{step.label}</span>
                  <p className="gv-journey-desc">{step.description}</p>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="gv-journey-arrow">→</div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManufacturerJourney;
