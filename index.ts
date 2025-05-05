import express from "express";
import cors from "cors";
import config from "./config/config";
import connectDB from "./config/db";
import urlRoutes from "./routes/url.routes";
import { errorHandler } from "./middlewares/errorHandler";

/**
 * Entry point for the URL Shortener API application.
 * Initializes the Express application, sets up middlewares, routes, and error handling,
 * and starts the server.
 */

// Initialize application
const app = express();

/**
 * Apply application middlewares.
 * - Enables CORS for cross-origin requests.
 * - Parses incoming JSON and URL-encoded payloads.
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Register application routes.
 * Routes all requests starting with `/shorten` to the URL routes.
 */
app.use("/shorten", urlRoutes);

/**
 * Register global error handling middleware.
 * Handles errors and sends appropriate HTTP responses.
 */
app.use(errorHandler);

/**
 * Verify connection to MongoDB.
 * Establishes a connection to the database using the configuration provided.
 */
connectDB();

/**
 * Start the server.
 * Listens for incoming requests on the configured port.
 */
app.listen(config.PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${config.PORT}`);
});

export default app;
