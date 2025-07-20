"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDatabase = exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDatabase = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/swi9a-phone';
        await mongoose_1.default.connect(mongoURI, {});
        mongoose_1.default.connection.on('connected', () => {
            console.log('📄 Mongoose connected to MongoDB');
        });
        mongoose_1.default.connection.on('error', (err) => {
            console.error('❌ Mongoose connection error:', err);
        });
        mongoose_1.default.connection.on('disconnected', () => {
            console.log('📄 Mongoose disconnected from MongoDB');
        });
        console.log(`📄 Connected to database: ${mongoose_1.default.connection.db?.databaseName || 'Unknown'}`);
    }
    catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        throw error;
    }
};
exports.connectDatabase = connectDatabase;
const disconnectDatabase = async () => {
    try {
        await mongoose_1.default.connection.close();
        console.log('📄 Database connection closed successfully');
    }
    catch (error) {
        console.error('❌ Error closing database connection:', error);
        throw error;
    }
};
exports.disconnectDatabase = disconnectDatabase;
//# sourceMappingURL=database.js.map