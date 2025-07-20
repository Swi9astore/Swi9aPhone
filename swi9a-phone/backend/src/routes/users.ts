import express from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ApiResponse } from '../types';

const router = express.Router();

// GET /api/users/profile - Get user profile
router.get('/profile', asyncHandler(async (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'User profile retrieved successfully (placeholder)'
  };
  res.json(response);
}));

export default router;