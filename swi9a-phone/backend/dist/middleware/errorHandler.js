"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = exports.createError = exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || 'Internal Server Error';
    if (error.name === 'MongoServerError' && error.code === 11000) {
        statusCode = 400;
        const field = Object.keys(error.keyValue)[0];
        message = `${field} already exists`;
    }
    if (error.name === 'ValidationError') {
        statusCode = 400;
        const errors = Object.values(error.errors).map((val) => val.message);
        message = errors.join(', ');
    }
    if (error.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid ID format';
    }
    if (error.name === 'JsonWebTokenError') {
        statusCode = 401;
        message = 'Invalid token';
    }
    if (error.name === 'TokenExpiredError') {
        statusCode = 401;
        message = 'Token expired';
    }
    if (process.env.NODE_ENV === 'development') {
        console.error('❌ Error Stack:', error.stack);
    }
    const response = {
        success: false,
        message,
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };
    res.status(statusCode).json(response);
};
exports.errorHandler = errorHandler;
const createError = (message, statusCode = 500) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.isOperational = true;
    return error;
};
exports.createError = createError;
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
exports.asyncHandler = asyncHandler;
//# sourceMappingURL=errorHandler.js.map