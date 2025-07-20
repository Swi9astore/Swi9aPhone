import express from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ApiResponse } from '../types';

const router = express.Router();

// GET /api/orders - Get user orders
router.get('/', asyncHandler(async (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'Orders retrieved successfully (placeholder)'
  };
  res.json(response);
}));

// POST /api/orders - Create new order
router.post('/', asyncHandler(async (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'Order created successfully (placeholder)'
  };
  res.status(201).json(response);
}));

export default router;