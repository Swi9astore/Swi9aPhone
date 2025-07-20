import express from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ApiResponse } from '../types';

const router = express.Router();

// GET /api/admin/dashboard - Get dashboard stats
router.get('/dashboard', asyncHandler(async (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'Dashboard stats retrieved successfully (placeholder)'
  };
  res.json(response);
}));

export default router;