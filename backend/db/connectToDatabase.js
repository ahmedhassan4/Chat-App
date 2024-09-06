import mongoose from "mongoose";
import catchAsync from "../utils/catchAsync.js";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_DB_URI || !process.env.DATABASE_PASSWORD) {
  throw new Error(
    "Missing environment variables: MONGO_DB_URI or DATABASE_PASSWORD"
  );
}
const DB = process.env.MONGO_DB_URI.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB connection successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
