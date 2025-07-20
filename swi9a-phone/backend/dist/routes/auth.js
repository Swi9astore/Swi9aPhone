"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("../middleware/errorHandler");
const router = express_1.default.Router();
router.post('/register', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const response = {
        success: true,
        message: 'User registered successfully (placeholder)'
    };
    res.status(201).json(response);
}));
router.post('/login', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const response = {
        success: true,
        message: 'User logged in successfully (placeholder)'
    };
    res.json(response);
}));
router.post('/logout', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const response = {
        success: true,
        message: 'User logged out successfully (placeholder)'
    };
    res.json(response);
}));
exports.default = router;
//# sourceMappingURL=auth.js.map