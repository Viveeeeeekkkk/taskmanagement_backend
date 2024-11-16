const mongoose = require('mongoose');
require('dotenv').config();

// Connection to MongoDB Atlas
const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;

    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
