const mongoose = require('mongoose');

const manufacturerLeadSchema = new mongoose.Schema(
  {
    // Business Information
    manufacturerName: {
      type: String,
      required: [true, 'Business name is required'],
      trim: true,
      maxlength: [200, 'Business name cannot exceed 200 characters'],
    },
    contactPerson: {
      type: String,
      required: [true, 'Contact person is required'],
      trim: true,
      maxlength: [150, 'Contact person name cannot exceed 150 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      maxlength: [20, 'Phone number cannot exceed 20 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    city: {
      type: String,
      trim: true,
      trim: true,
      maxlength: [100, 'City cannot exceed 100 characters'],
    },
    state: {
      type: String,
      trim: true,
      trim: true,
      maxlength: [100, 'State cannot exceed 100 characters'],
    },
    country: {
      type: String,
      trim: true,
      default: 'India',
      maxlength: [100, 'Country cannot exceed 100 characters'],
    },

    // Business Details
    natureOfBusiness: {
      type: String,
      trim: true,
      trim: true,
      maxlength: [300, 'Nature of business cannot exceed 300 characters'],
    },
    yearsInBusiness: {
      type: String,
      trim: true,
    },
    manufacturingLocation: {
      type: String,
      trim: true,
      maxlength: [300, 'Manufacturing location cannot exceed 300 characters'],
    },
    salesChannels: {
      type: String,
      trim: true,
      maxlength: [500, 'Sales channels cannot exceed 500 characters'],
    },
    website: {
      type: String,
      trim: true,
      maxlength: [300, 'Website URL cannot exceed 300 characters'],
    },
    socialMedia: {
      type: String,
      trim: true,
      maxlength: [500, 'Social media cannot exceed 500 characters'],
    },

    // Business Capacity
    productCount: {
      type: String,
      trim: true,
    },
    monthlyProductionCapacity: {
      type: String,
      trim: true,
    },
    individualOrderCapability: {
      type: String,
      enum: ['yes', 'no', 'flexible', ''],
      default: '',
    },
    orderPreparationTime: {
      type: String,
      trim: true,
    },
    stockAvailability: {
      type: String,
      enum: ['always', 'mostly', 'made-to-order', ''],
      default: '',
    },

    // Product / Catalog Information
    productCategory: {
      type: String,
      trim: true,
      enum: [
        'Consumer Products',
        'Apparel',
        'Accessories',
        'Home & Lifestyle',
        'Electronics',
        'Industrial',
        'Other',
      ],
    },
    productDescription: {
      type: String,
      trim: true,
      maxlength: [2000, 'Product description cannot exceed 2000 characters'],
    },
    priceRange: {
      type: String,
      trim: true,
      maxlength: [100, 'Price range cannot exceed 100 characters'],
    },
    catalogueLink: {
      type: String,
      trim: true,
      maxlength: [500, 'Catalogue link cannot exceed 500 characters'],
    },

    // Additional Information
    message: {
      type: String,
      trim: true,
      maxlength: [3000, 'Message cannot exceed 3000 characters'],
    },
    leadSource: {
      type: String,
      enum: ['instagram', 'linkedin', 'google', 'referral', 'other', ''],
      default: '',
    },

    // Status & Meta
    status: {
      type: String,
      enum: ['new', 'contacted', 'reviewing', 'approved', 'rejected'],
      default: 'new',
    },
    agreement: {
      type: Boolean,
      required: [true, 'You must confirm the information is accurate'],
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
manufacturerLeadSchema.index({ email: 1 });
manufacturerLeadSchema.index({ status: 1 });
manufacturerLeadSchema.index({ createdAt: -1 });

module.exports = mongoose.model('ManufacturerLead', manufacturerLeadSchema);
