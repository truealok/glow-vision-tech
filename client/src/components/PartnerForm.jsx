import React, { useState } from 'react';
import './PartnerForm.css';
import { FiX, FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { submitManufacturerLead } from '../services/api';

const PartnerForm = ({ show, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    country: 'India',
    // Business Details
    natureOfBusiness: '',
    yearsInBusiness: '',
    manufacturingLocation: '',
    salesChannels: '',
    website: '',
    socialMedia: '',
    // Business Capacity
    productCount: '',
    monthlyCapacity: '',
    individualOrders: '',
    preparationTime: '',
    stockAvailability: '',
    // Product / Catalog
    productCategory: '',
    productDescription: '',
    priceRange: '',
    catalogueLink: '',
    // Additional
    message: '',
    leadSource: '',
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 4;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (stepNum) => {
    const newErrors = {};
    if (stepNum === 1) {
      if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
      if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
    }
    if (stepNum === 2) {
      if (!formData.natureOfBusiness.trim()) newErrors.natureOfBusiness = 'Nature of business is required';
    }
    if (stepNum === 3) {
      if (!formData.productCategory) newErrors.productCategory = 'Product category is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step) && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      setErrors({ agreement: 'You must confirm the information is accurate' });
      return;
    }

    setSubmitting(true);
    setErrors({});
    try {
      // Map frontend field names to backend field names
      const payload = {
        businessName: formData.businessName,
        contactPerson: formData.contactPerson,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        natureOfBusiness: formData.natureOfBusiness,
        yearsInBusiness: formData.yearsInBusiness,
        manufacturingLocation: formData.manufacturingLocation,
        salesChannels: formData.salesChannels,
        website: formData.website,
        socialMedia: formData.socialMedia,
        productCount: formData.productCount,
        monthlyCapacity: formData.monthlyCapacity,
        individualOrders: formData.individualOrders,
        preparationTime: formData.preparationTime,
        stockAvailability: formData.stockAvailability,
        productCategory: formData.productCategory,
        productDescription: formData.productDescription,
        priceRange: formData.priceRange,
        catalogueLink: formData.catalogueLink,
        message: formData.message,
        leadSource: formData.leadSource,
        agreement: String(formData.agreement),
      };

      await submitManufacturerLead(payload);
      setSubmitted(true);
    } catch (err) {
      if (err.message) {
        setErrors({ submit: err.message });
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="gv-form-overlay" onClick={onClose}>
      <div className="gv-form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gv-form-close" onClick={onClose}>
          <FiX size={20} />
        </button>

        {submitted ? (
          <div className="gv-form-success">
            <div className="gv-form-success-icon">
              <FiCheck size={32} />
            </div>
            <h3>Thank You for Your Interest</h3>
            <p>
              We have received your partnership request. Our team will review your
              information and contact you regarding the next steps.
            </p>
            <button className="gv-btn gv-btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="gv-form-progress">
              <div className="gv-form-progress-bar">
                <div
                  className="gv-form-progress-fill"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
              <span className="gv-form-progress-text">Step {step} of {totalSteps}</span>
            </div>

            <form onSubmit={handleSubmit} className="gv-form-body">
              {/* Step 1: Business Information */}
              {step === 1 && (
                <div className="gv-form-step">
                  <h3>Business Information</h3>
                  <div className="gv-form-grid">
                    <div className="gv-form-group">
                      <label>Business / Manufacturer Name *</label>
                      <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} />
                      {errors.businessName && <span className="gv-form-error">{errors.businessName}</span>}
                    </div>
                    <div className="gv-form-group">
                      <label>Contact Person *</label>
                      <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} />
                      {errors.contactPerson && <span className="gv-form-error">{errors.contactPerson}</span>}
                    </div>
                    <div className="gv-form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                      {errors.phone && <span className="gv-form-error">{errors.phone}</span>}
                    </div>
                    <div className="gv-form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} />
                      {errors.email && <span className="gv-form-error">{errors.email}</span>}
                    </div>
                    <div className="gv-form-group">
                      <label>City *</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} />
                      {errors.city && <span className="gv-form-error">{errors.city}</span>}
                    </div>
                    <div className="gv-form-group">
                      <label>State *</label>
                      <input type="text" name="state" value={formData.state} onChange={handleChange} />
                      {errors.state && <span className="gv-form-error">{errors.state}</span>}
                    </div>
                    <div className="gv-form-group gv-form-full">
                      <label>Country</label>
                      <input type="text" name="country" value={formData.country} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Details */}
              {step === 2 && (
                <div className="gv-form-step">
                  <h3>Business Details</h3>
                  <div className="gv-form-grid">
                    <div className="gv-form-group gv-form-full">
                      <label>Nature of Business *</label>
                      <input type="text" name="natureOfBusiness" value={formData.natureOfBusiness} onChange={handleChange} placeholder="e.g., Manufacturing, Trading" />
                      {errors.natureOfBusiness && <span className="gv-form-error">{errors.natureOfBusiness}</span>}
                    </div>
                    <div className="gv-form-group">
                      <label>Years in Business</label>
                      <input type="text" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} />
                    </div>
                    <div className="gv-form-group">
                      <label>Manufacturing Location</label>
                      <input type="text" name="manufacturingLocation" value={formData.manufacturingLocation} onChange={handleChange} />
                    </div>
                    <div className="gv-form-group">
                      <label>Current Sales Channels</label>
                      <input type="text" name="salesChannels" value={formData.salesChannels} onChange={handleChange} placeholder="e.g., Wholesale, Retail, Offline" />
                    </div>
                    <div className="gv-form-group">
                      <label>Website</label>
                      <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://" />
                    </div>
                    <div className="gv-form-group gv-form-full">
                      <label>Instagram / Social Media</label>
                      <input type="text" name="socialMedia" value={formData.socialMedia} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Business Capacity & Products */}
              {step === 3 && (
                <div className="gv-form-step">
                  <h3>Products & Capacity</h3>
                  <div className="gv-form-grid">
                    <div className="gv-form-group">
                      <label>Primary Product Category *</label>
                      <select name="productCategory" value={formData.productCategory} onChange={handleChange}>
                        <option value="">Select category</option>
                        <option value="Consumer Products">Consumer Products</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Home & Lifestyle">Home & Lifestyle</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.productCategory && <span className="gv-form-error">{errors.productCategory}</span>}
                    </div>
                    <div className="gv-form-group">
                      <label>Approximate Product Range</label>
                      <input type="text" name="productCount" value={formData.productCount} onChange={handleChange} placeholder="e.g., 20-50 products" />
                    </div>
                    <div className="gv-form-group">
                      <label>Monthly Production Capacity</label>
                      <input type="text" name="monthlyCapacity" value={formData.monthlyCapacity} onChange={handleChange} />
                    </div>
                    <div className="gv-form-group">
                      <label>Can Fulfill Individual Orders?</label>
                      <select name="individualOrders" value={formData.individualOrders} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="flexible">Flexible / Can discuss</option>
                      </select>
                    </div>
                    <div className="gv-form-group">
                      <label>Typical Order Preparation Time</label>
                      <input type="text" name="preparationTime" value={formData.preparationTime} onChange={handleChange} placeholder="e.g., 2-3 days" />
                    </div>
                    <div className="gv-form-group">
                      <label>Stock Availability</label>
                      <select name="stockAvailability" value={formData.stockAvailability} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="always">Always in stock</option>
                        <option value="mostly">Mostly available</option>
                        <option value="made-to-order">Made to order</option>
                      </select>
                    </div>
                    <div className="gv-form-group gv-form-full">
                      <label>Product Description</label>
                      <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} rows={3} placeholder="Brief description of your products" />
                    </div>
                    <div className="gv-form-group">
                      <label>Price Range</label>
                      <input type="text" name="priceRange" value={formData.priceRange} onChange={handleChange} placeholder="e.g., ₹200 - ₹2000" />
                    </div>
                    <div className="gv-form-group">
                      <label>Catalogue / Website Link</label>
                      <input type="url" name="catalogueLink" value={formData.catalogueLink} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Info & Agreement */}
              {step === 4 && (
                <div className="gv-form-step">
                  <h3>Additional Information</h3>
                  <div className="gv-form-grid">
                    <div className="gv-form-group gv-form-full">
                      <label>Message / Description</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us anything else about your business" />
                    </div>
                    <div className="gv-form-group gv-form-full">
                      <label>How did you hear about us?</label>
                      <select name="leadSource" value={formData.leadSource} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="gv-form-group gv-form-full">
                      <label className="gv-form-checkbox">
                        <input
                          type="checkbox"
                          name="agreement"
                          checked={formData.agreement}
                          onChange={handleChange}
                        />
                        <span>
                          I confirm that the information provided is accurate and that Glow Vision Tech
                          may contact me regarding partnership opportunities.
                        </span>
                      </label>
                      {errors.agreement && <span className="gv-form-error">{errors.agreement}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Error */}
              {errors.submit && (
                <div className="gv-form-submit-error">{errors.submit}</div>
              )}

              {/* Navigation */}
              <div className="gv-form-nav">
                {step > 1 && (
                  <button type="button" className="gv-btn gv-btn-outline" onClick={handleBack}>
                    <FiArrowLeft /> Back
                  </button>
                )}
                <div className="gv-form-nav-spacer" />
                {step < totalSteps ? (
                  <button type="button" className="gv-btn gv-btn-primary" onClick={handleNext}>
                    Next <FiArrowRight />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="gv-btn gv-btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Partnership Request'} <FiArrowRight />
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PartnerForm;
