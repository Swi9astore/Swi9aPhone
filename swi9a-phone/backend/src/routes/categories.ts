import express from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ApiResponse } from '../types';

const router = express.Router();

// GET /api/categories - Get all categories
router.get('/', asyncHandler(async (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'Categories retrieved successfully (placeholder)'
  };
  res.json(response);
}));

export default router;