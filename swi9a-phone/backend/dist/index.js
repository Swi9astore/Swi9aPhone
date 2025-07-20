"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const products_1 = __importDefault(require("./routes/products"));
const users_1 = __importDefault(require("./routes/users"));
const orders_1 = __importDefault(require("./routes/orders"));
const categories_1 = __importDefault(require("./routes/categories"));
const testimonials_1 = __importDefault(require("./routes/testimonials"));
const contact_1 = __importDefault(require("./routes/contact"));
const admin_1 = __importDefault(require("./routes/admin"));
const auth_1 = __importDefault(require("./routes/auth"));
const errorHandler_1 = require("./middleware/errorHandler");
const notFound_1 = require("./middleware/notFound");
const database_1 = require("./config/database");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.set('trust proxy', 1);
app.use((0, helmet_1.default)({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/', limiter);
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Language']
}));
app.use((0, compression_1.default)());
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
else {
    app.use((0, morgan_1.default)('combined'));
}
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Swi9a Phone API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        version: '1.0.0'
    });
});
app.use('/api/auth', auth_1.default);
app.use('/api/products', products_1.default);
app.use('/api/users', users_1.default);
app.use('/api/orders', orders_1.default);
app.use('/api/categories', categories_1.default);
app.use('/api/testimonials', testimonials_1.default);
app.use('/api/contact', contact_1.default);
app.use('/api/admin', admin_1.default);
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Swi9a Phone API',
        tagline: 'Morocco\'s Premier iPhone Destination',
        documentation: '/api/docs',
        health: '/health',
        version: '1.0.0'
    });
});
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
const startServer = async () => {
    try {
        await (0, database_1.connectDatabase)();
        console.log('📄 Database connected successfully');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            console.log(`📱 Swi9a Phone API - Morocco's Premier iPhone Destination`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
            console.log(`🔗 Health check: http://localhost:${PORT}/health`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};
process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Promise Rejection:', err.message);
    console.error(err.stack);
    process.exit(1);
});
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err.message);
    console.error(err.stack);
    process.exit(1);
});
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received. Shutting down gracefully...');
    mongoose_1.default.connection.close().then(() => {
        console.log('📄 Database connection closed.');
        process.exit(0);
    });
});
process.on('SIGINT', () => {
    console.log('🛑 SIGINT received. Shutting down gracefully...');
    mongoose_1.default.connection.close().then(() => {
        console.log('📄 Database connection closed.');
        process.exit(0);
    });
});
startServer();
exports.default = app;
//# sourceMappingURL=index.js.map