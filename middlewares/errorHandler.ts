import type { Response, Request, NextFunction } from "express";

/**
 * Global error handling middleware for the application.
 * Logs the error stack trace and sends a 500 Internal Server Error response.
 *
 * @param {Error} err - The error object representing the thrown error.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @param {NextFunction} next - The next middleware function in the stack (optional).
 * @returns {void}
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
};
