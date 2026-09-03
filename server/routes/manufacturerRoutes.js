const express = require('express');
const { body } = require('express-validator');
const { createLead, getLeads } = require('../controllers/manufacturerController');

const router = express.Router();

// Validation rules for creating a lead
const createLeadValidation = [
  body('businessName')
    .trim()
    .notEmpty().withMessage('Business name is required')
    .isLength({ max: 200 }).withMessage('Business name cannot exceed 200 characters'),
  body('contactPerson')
    .trim()
    .notEmpty().withMessage('Contact person is required')
    .isLength({ max: 150 }).withMessage('Contact person name cannot exceed 150 characters'),
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .isLength({ max: 20 }).withMessage('Phone number cannot exceed 20 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('city')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('City cannot exceed 100 characters'),
  body('state')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('State cannot exceed 100 characters'),
  body('country')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Country cannot exceed 100 characters'),
  body('natureOfBusiness')
    .optional()
    .trim()
    .isLength({ max: 300 }).withMessage('Nature of business cannot exceed 300 characters'),
  body('yearsInBusiness')
    .optional()
    .trim(),
  body('manufacturingLocation')
    .optional()
    .trim()
    .isLength({ max: 300 }),
  body('salesChannels')
    .optional()
    .trim()
    .isLength({ max: 500 }),
  body('website')
    .optional()
    .trim()
    .isLength({ max: 300 }),
  body('socialMedia')
    .optional()
    .trim()
    .isLength({ max: 500 }),
  body('productCount')
    .optional()
    .trim(),
  body('monthlyCapacity')
    .optional()
    .trim(),
  body('individualOrders')
    .optional()
    .isIn(['yes', 'no', 'flexible', '']),
  body('preparationTime')
    .optional()
    .trim(),
  body('stockAvailability')
    .optional()
    .isIn(['always', 'mostly', 'made-to-order', '']),
  body('productCategory')
    .optional()
    .isIn(['Consumer Products', 'Apparel', 'Accessories', 'Home & Lifestyle', 'Electronics', 'Industrial', 'Other'])
    .withMessage('Invalid product category'),
  body('productDescription')
    .optional()
    .trim()
    .isLength({ max: 2000 }),
  body('priceRange')
    .optional()
    .trim()
    .isLength({ max: 100 }),
  body('catalogueLink')
    .optional()
    .trim()
    .isLength({ max: 500 }),
  body('message')
    .optional()
    .trim()
    .isLength({ max: 3000 }),
  body('leadSource')
    .optional()
    .isIn(['instagram', 'linkedin', 'google', 'referral', 'other', '']),
  body('agreement')
    .equals('true').withMessage('You must confirm the information is accurate'),
];

// Routes
router.post('/', createLeadValidation, createLead);
router.get('/', getLeads);

module.exports = router;
