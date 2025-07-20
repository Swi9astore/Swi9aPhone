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
        message: 'Products retrieved successfully',
        data: {
            data: [],
            pagination: {
                currentPage: 1,
                totalPages: 0,
                totalItems: 0,
                itemsPerPage: 12,
                hasNext: false,
                hasPrev: false
            }
        }
    };
    res.json(response);
}));
router.get('/featured', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const response = {
        success: true,
        message: 'Featured products retrieved successfully',
        data: []
    };
    res.json(response);
}));
router.get('/series/:series', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const { series } = req.params;
    const response = {
        success: true,
        message: `iPhone ${series} products retrieved successfully`,
        data: []
    };
    res.json(response);
}));
router.get('/:id', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    const response = {
        success: true,
        message: 'Product retrieved successfully',
        data: {}
    };
    res.json(response);
}));
router.post('/', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const response = {
        success: true,
        message: 'Product created successfully',
        data: {}
    };
    res.status(201).json(response);
}));
router.put('/:id', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    const response = {
        success: true,
        message: 'Product updated successfully',
        data: {}
    };
    res.json(response);
}));
router.delete('/:id', (0, errorHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    const response = {
        success: true,
        message: 'Product deleted successfully'
    };
    res.json(response);
}));
exports.default = router;
//# sourceMappingURL=products.js.map