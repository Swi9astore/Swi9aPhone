import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/swi9a-phone';
    
    await mongoose.connect(mongoURI, {
      // Remove deprecated options - these are now defaults in mongoose 6+
    });

    // Connection event listeners
    mongoose.connection.on('connected', () => {
      console.log('📄 Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('📄 Mongoose disconnected from MongoDB');
    });

    // Log database name
    console.log(`📄 Connected to database: ${mongoose.connection.db?.databaseName || 'Unknown'}`);

  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connection.close();
    console.log('📄 Database connection closed successfully');
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
    throw error;
  }
};