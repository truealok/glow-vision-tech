import React from 'react';
import './GrowthSection.css';
import {
  FiPackage, FiMonitor, FiTrendingUp, FiUser,
  FiShoppingCart, FiSearch, FiArrowUp, FiMaximize
} from 'react-icons/fi';

const growthSteps = [
  { icon: FiPackage, label: 'Product' },
  { icon: FiMonitor, label: 'Present' },
  { icon: FiTrendingUp, label: 'Market' },
  { icon: FiUser, label: 'Customer' },
  { icon: FiShoppingCart, label: 'Order' },
  { icon: FiSearch, label: 'Learn' },
  { icon: FiArrowUp, label: 'Improve' },
  { icon: FiMaximize, label: 'Grow' },
];

const GrowthSection = () => {
  return (
    <section className="gv-section gv-growth">
      <div className="gv-container">
        <div className="gv-growth-layout">
          <div className="gv-growth-content">
            <span className="gv-badge">Continuous Growth</span>
            <h2 className="gv-section-title gv-growth-title">
              Built to Grow With<br />
              <span className="gv-text-primary">Your Business</span>
            </h2>
            <p className="gv-growth-desc">
              The relationship doesn't end at listing a product. We continuously learn from
              customer response, improve product presentation, test marketing approaches, and
              focus resources on what performs.
            </p>
            <ul className="gv-growth-points">
              <li>We learn from customer response and buying patterns</li>
              <li>We improve product presentation and online visibility</li>
              <li>We test marketing approaches and optimize channels</li>
              <li>We identify products with stronger demand</li>
              <li>We focus resources on what performs best</li>
              <li>We build the online channel progressively over time</li>
            </ul>
          </div>

          <div className="gv-growth-visual">
            <div className="gv-growth-circle">
              {growthSteps.map((step, index) => {
                const Icon = step.icon;
                const angle = (index * 360) / growthSteps.length - 90;
                const radian = (angle * Math.PI) / 180;
                const radius = 140;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);

                return (
                  <div
                    className="gv-growth-node"
                    key={index}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="gv-growth-node-icon">
                      <Icon size={18} />
                    </div>
                    <span className="gv-growth-node-label">{step.label}</span>
                  </div>
                );
              })}
              <div className="gv-growth-center">
                <span className="gv-growth-center-text">GROWTH</span>
                <span className="gv-growth-center-sub">Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
