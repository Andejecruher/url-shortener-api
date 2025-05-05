// Create connection to the MongoDB database
import mongoose from "mongoose";
import config from "./config";

/**
 * Establishes a connection to the MongoDB database.
 * Uses the connection URI specified in the configuration file.
 * If the connection fails, the process will exit with a failure code.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Resolves when the connection is successfully established.
 * @throws Will log an error and terminate the process if the connection fails.
 */
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(config.mongoURI!);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
