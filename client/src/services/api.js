import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || 'Something went wrong. Please try again.';
    return Promise.reject({ message, status: error.response?.status });
  }
);

/**
 * Submit a manufacturer partnership lead
 * @param {Object} data - Form data from the partner registration form
 */
export const submitManufacturerLead = (data) => {
  return api.post('/manufacturer-leads', data);
};

/**
 * Get all manufacturer leads (admin/dev use only)
 */
export const getManufacturerLeads = () => {
  return api.get('/manufacturer-leads');
};

export default api;
