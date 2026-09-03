import React from 'react';
import './Services.css';
import { services } from '../data/services';
import {
  FiMonitor, FiBox, FiTrendingUp, FiUsers, FiClipboard, FiTruck
} from 'react-icons/fi';

const iconMap = {
  storefront: FiMonitor,
  onboarding: FiBox,
  marketing: FiTrendingUp,
  customers: FiUsers,
  orders: FiClipboard,
  delivery: FiTruck,
};

const Services = () => {
  return (
    <section className="gv-section gv-services" id="about">
      <div className="gv-container">
        <span className="gv-badge">What We Do</span>
        <h2 className="gv-section-title">
          Everything Around Online Selling.<br />
          <span className="gv-text-primary">You Focus on Manufacturing.</span>
        </h2>
        <p className="gv-section-subtitle">
          We build the complete online sales engine for your products.
        </p>

        <div className="gv-services-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div className="gv-card gv-service-card" key={index}>
                <div className="gv-service-icon">
                  {Icon && <Icon size={28} />}
                </div>
                <span className="gv-service-number">{service.number}</span>
                <h3 className="gv-service-title">{service.title}</h3>
                <p className="gv-service-desc">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
