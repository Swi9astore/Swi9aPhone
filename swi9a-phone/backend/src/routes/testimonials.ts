import express from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ApiResponse } from '../types';

const router = express.Router();

// GET /api/testimonials - Get all testimonials
router.get('/', asyncHandler(async (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'Testimonials retrieved successfully (placeholder)'
  };
  res.json(response);
}));

export default router;