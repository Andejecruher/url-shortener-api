import mongoose, { Schema, Document } from "mongoose";

/**
 * Interface representing a URL document in MongoDB.
 * @interface IUrl
 * @extends {Document}
 */
export interface IUrl extends Document {
  /**
   * The original URL that was shortened.
   * @type {string}
   */
  originalUrl: string;

  /**
   * The unique short code for the URL.
   * @type {string}
   */
  shortCode: string;

  /**
   * The number of times the shortened URL has been accessed.
   * @type {number}
   */
  accessCount: number;

  /**
   * The date when the URL document was created.
   * @type {Date}
   */
  createdAt: Date;

  /**
   * The date when the URL document was last updated.
   * @type {Date}
   */
  updatedAt: Date;
}

/**
 * Mongoose schema for the URL model.
 * Represents the structure of a URL document in the database.
 */
const UrlSchema: Schema = new Schema(
  {
    /**
     * The original URL that was shortened.
     * @type {string}
     */
    originalUrl: { type: String, required: true },

    /**
     * The unique short code for the URL.
     * @type {string}
     */
    shortCode: { type: String, required: true, unique: true },

    /**
     * The number of times the shortened URL has been accessed.
     * Defaults to 0.
     * @type {number}
     */
    accessCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

/**
 * Mongoose model for the URL schema.
 * Provides an interface to interact with the URL collection in the database.
 */
export const Url = mongoose.model<IUrl>("Url", UrlSchema);
