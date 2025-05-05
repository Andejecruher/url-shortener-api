import { Url, type IUrl } from "../models/url.model";
import { generateShortId } from "../utils/generateShortCode";

/**
 * Creates a new shortened URL document in the database.
 * @param {string} longUrl - The original URL to be shortened.
 * @returns {Promise<IUrl>} The created URL document.
 */
export const createShortUrl = async (longUrl: string): Promise<IUrl> => {
  const shortId = generateShortId();
  const url = await Url.create({
    originalUrl: longUrl,
    shortCode: shortId,
  });
  return url;
};

/**
 * Retrieves the original URL and increments the access count.
 * @param {string} shortId - The unique short code for the URL.
 * @returns {Promise<IUrl | null>} The URL document or null if not found.
 */
export const getOriginalUrl = async (
  shortId?: string
): Promise<IUrl | null> => {
  const url = await Url.findOneAndUpdate(
    { shortCode: shortId },
    { $inc: { accessCount: 1 } },
    { new: true }
  );
  return url;
};

/**
 * Retrieves statistics for a given short ID.
 * @param {string} shortId - The unique short code for the URL.
 * @returns {Promise<IUrl | null>} The URL document or null if not found.
 */
export const getStats = async (shortId: string): Promise<IUrl | null> => {
  return Url.findOne({ shortCode: shortId });
};

/**
 * Updates the original URL for a given short ID.
 * @param {string} shortId - The unique short code for the URL.
 * @param {string} newLongUrl - The new original URL to replace the existing one.
 * @returns {Promise<IUrl | null>} The updated URL document or null if not found.
 */
export const updateUrl = async (
  shortId: string,
  newLongUrl: string
): Promise<IUrl | null> => {
  return Url.findOneAndUpdate(
    { shortCode: shortId },
    { originalUrl: newLongUrl },
    { new: true }
  );
};

/**
 * Deletes a shortened URL document based on the short ID.
 * @param {string} shortId - The unique short code for the URL.
 * @returns {Promise<IUrl | null>} The deleted URL document or null if not found.
 */
export const deleteUrl = async (shortId: string): Promise<IUrl | null> => {
  return Url.findOneAndDelete({ shortCode: shortId });
};
