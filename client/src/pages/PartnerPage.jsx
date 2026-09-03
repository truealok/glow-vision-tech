import React, { useState } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { submitManufacturerLead } from '../services/api';
import './Pages.css';
import './PartnerPage.css';

const trustPoints = [
  'Quick Response',
  '100% Confidential',
  'No Obligation',
];

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    phoneNumber: '',
    companyName: '',
    companyPhone: '',
    emailAddress: '',
    companyEmailAddress: '',
    products: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.yourName.trim()) newErrors.yourName = 'Your name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.emailAddress.trim()) newErrors.emailAddress = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) newErrors.emailAddress = 'Invalid email format';
    if (!formData.products.trim()) newErrors.products = 'Please tell us about your products';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');
    try {
      const payload = {
        businessName: formData.companyName,
        contactPerson: formData.yourName,
        phone: formData.phoneNumber,
        email: formData.emailAddress,
        city: '',
        state: '',
        country: 'India',
        natureOfBusiness: 'Manufacturing',
        productCategory: 'Other',
        productDescription: formData.products,
        monthlyCapacity: '',
        individualOrders: 'flexible',
        agreement: 'true',
      };

      await submitManufacturerLead(payload);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="gv-page">
      {/* Page Hero */}
      <section className="gv-page-hero">
        <div className="gv-container">
          <h1>Partner With Us</h1>
        </div>
      </section>

      {/* Partner Section */}
      <section className="gv-section gv-partner-section">
        <div className="gv-container">
          <div className="gv-partner-layout">
            {/* Left Side — Info */}
            <div className="gv-partner-info">
              <div className="gv-partner-logo">
                <span className="gv-logo-icon" style={{ width: 44, height: 44, fontSize: 14 }}>GV</span>
                <div className="gv-logo-text">
                  <span className="gv-logo-name">GLOW</span>
                  <span className="gv-logo-tagline">VISION TECH</span>
                </div>
              </div>
              <h2>Let's Start a<br />Conversation</h2>
              <p>
                We'd love to learn about your business and explore how we can grow together.
              </p>
              <div className="gv-partner-trust-list">
                {trustPoints.map((point, index) => (
                  <div className="gv-partner-trust-item" key={index}>
                    <FiCheck size={16} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side — Form */}
            <div className="gv-partner-form-wrapper">
              {submitted ? (
                <div className="gv-partner-success">
                  <div className="gv-partner-success-icon">
                    <FiCheck size={28} />
                  </div>
                  <h3>Message sent successfully!</h3>
                  <p>We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="gv-partner-form">
                  <div className="gv-partner-form-grid">
                    <div className="gv-partner-form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleChange}
                      />
                      {errors.yourName && <span className="gv-form-error">{errors.yourName}</span>}
                    </div>
                    <div className="gv-partner-form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      {errors.phoneNumber && <span className="gv-form-error">{errors.phoneNumber}</span>}
                    </div>
                    <div className="gv-partner-form-group">
                      <label>Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                      {errors.companyName && <span className="gv-form-error">{errors.companyName}</span>}
                    </div>
                    <div className="gv-partner-form-group">
                      <label>Company Phone Number *</label>
                      <input
                        type="tel"
                        name="companyPhone"
                        value={formData.companyPhone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="gv-partner-form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                      />
                      {errors.emailAddress && <span className="gv-form-error">{errors.emailAddress}</span>}
                    </div>
                    <div className="gv-partner-form-group">
                      <label>Company Email Address *</label>
                      <input
                        type="email"
                        name="companyEmailAddress"
                        value={formData.companyEmailAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="gv-partner-form-group gv-partner-form-full">
                      <label>Tell about the products you manufacture *</label>
                      <textarea
                        name="products"
                        value={formData.products}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Please share details about your products, categories, monthly capacity, target market, or any other information that helps us understand you better."
                      />
                      {errors.products && <span className="gv-form-error">{errors.products}</span>}
                    </div>
                  </div>

                  {submitError && (
                    <div className="gv-form-submit-error">{submitError}</div>
                  )}

                  <button
                    type="submit"
                    className="gv-btn gv-btn-primary gv-partner-submit"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Message'} <FiArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
