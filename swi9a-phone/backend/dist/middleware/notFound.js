"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res, next) => {
    const response = {
        success: false,
        message: `Endpoint not found: ${req.method} ${req.originalUrl}`,
        error: 'The requested resource does not exist'
    };
    res.status(404).json(response);
};
exports.notFound = notFound;
//# sourceMappingURL=notFound.js.map