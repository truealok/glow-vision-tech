const ManufacturerLead = require('../models/ManufacturerLead');
const { validationResult } = require('express-validator');

// @desc    Create a new manufacturer lead
// @route   POST /api/manufacturer-leads
// @access  Public
const createLead = async (req, res) => {
  try {
    // Check for validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map((err) => ({
          field: err.path,
          message: err.msg,
        })),
      });
    }

    const {
      businessName,
      contactPerson,
      phone,
      email,
      city,
      state,
      country,
      natureOfBusiness,
      yearsInBusiness,
      manufacturingLocation,
      salesChannels,
      website,
      socialMedia,
      productCount,
      monthlyCapacity,
      individualOrders,
      preparationTime,
      stockAvailability,
      productCategory,
      productDescription,
      priceRange,
      catalogueLink,
      message,
      leadSource,
      agreement,
    } = req.body;

    // Check for duplicate email
    const existingLead = await ManufacturerLead.findOne({ email: email.toLowerCase() });
    if (existingLead) {
      return res.status(409).json({
        success: false,
        message: 'A partnership request with this email has already been submitted.',
      });
    }

    // Create the lead
    const lead = await ManufacturerLead.create({
      manufacturerName: businessName,
      contactPerson,
      phone,
      email,
      city,
      state,
      country,
      natureOfBusiness,
      yearsInBusiness,
      manufacturingLocation,
      salesChannels,
      website,
      socialMedia,
      productCount,
      monthlyProductionCapacity: monthlyCapacity,
      individualOrderCapability: individualOrders,
      orderPreparationTime: preparationTime,
      stockAvailability,
      productCategory,
      productDescription,
      priceRange,
      catalogueLink,
      message,
      leadSource,
      agreement,
    });

    res.status(201).json({
      success: true,
      message: 'Partnership request submitted successfully. Our team will review your application and contact you.',
      data: { id: lead._id },
    });
  } catch (error) {
    console.error('Create lead error:', error.message);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Get all manufacturer leads
// @route   GET /api/manufacturer-leads
// @access  Private (admin only — no auth yet, dev use only)
const getLeads = async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;

    const query = {};
    if (status) {
      query.status = status;
    }

    const total = await ManufacturerLead.countDocuments(query);
    const leads = await ManufacturerLead.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select('-__v');

    res.status(200).json({
      success: true,
      data: leads,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get leads error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

module.exports = { createLead, getLeads };
