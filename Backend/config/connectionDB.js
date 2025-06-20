const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB: ${process.env.MONGO_URL}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
