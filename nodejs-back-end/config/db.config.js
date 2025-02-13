import mongoose from "mongoose";
import dotenv from "dotenv";

// Load biến môi trường từ file .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/sport-shop";

const dbconnect = mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("MongoDB is connected!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

export default dbconnect;
