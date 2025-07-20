import express from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ApiResponse } from '../types';

const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', asyncHandler(async (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'Contact form submitted successfully (placeholder)'
  };
  res.json(response);
}));

export default router;