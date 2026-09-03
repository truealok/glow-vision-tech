import React from 'react';
import './BusinessFlow.css';
import { businessFlowSteps } from '../data/workflow';
import {
  FiUsers, FiCheckCircle, FiMonitor, FiTrendingUp,
  FiShoppingCart, FiMessageSquare, FiPackage, FiTruck,
  FiBarChart2, FiArrowUpRight
} from 'react-icons/fi';

const iconMap = {
  users: FiUsers,
  check: FiCheckCircle,
  monitor: FiMonitor,
  trending: FiTrendingUp,
  cart: FiShoppingCart,
  message: FiMessageSquare,
  package: FiPackage,
  truck: FiTruck,
  chart: FiBarChart2,
  grow: FiArrowUpRight,
};

const BusinessFlow = () => {
  return (
    <section className="gv-section gv-business-flow" id="how-it-works">
      <div className="gv-container">
        <span className="gv-badge">Our Operating Model</span>
        <h2 className="gv-section-title">From Manufacturer to Market</h2>
        <p className="gv-section-subtitle">
          A complete end-to-end process that takes your products from the factory floor to the online customer.
        </p>

        <div className="gv-flow-steps">
          {businessFlowSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div className="gv-flow-step" key={index}>
                <div className="gv-flow-step-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="gv-flow-step-icon">
                  {Icon && <Icon size={22} />}
                </div>
                <h4 className="gv-flow-step-title">{step.title}</h4>
                <p className="gv-flow-step-desc">{step.description}</p>
                {index < businessFlowSteps.length - 1 && (
                  <div className="gv-flow-step-connector">→</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessFlow;
