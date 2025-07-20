import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const response: ApiResponse = {
    success: false,
    message: `Endpoint not found: ${req.method} ${req.originalUrl}`,
    error: 'The requested resource does not exist'
  };

  res.status(404).json(response);
};