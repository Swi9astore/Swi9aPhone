"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("../middleware/errorHandler");
const router = express_1.default.Router();
router.get('/', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const response = {
        success: true,
        message: 'Orders retrieved successfully (placeholder)'
    };
    res.json(response);
}));
router.post('/', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const response = {
        success: true,
        message: 'Order created successfully (placeholder)'
    };
    res.status(201).json(response);
}));
exports.default = router;
//# sourceMappingURL=orders.js.map