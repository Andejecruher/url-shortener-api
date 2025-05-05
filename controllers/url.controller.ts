import type { Request, Response } from "express";
import {
  createShortUrl,
  getOriginalUrl,
  updateUrl,
  getStats,
  deleteUrl,
} from "../services/url.service";

/**
 * Creates a new shortened URL.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @returns {Promise<void>}
 */
export const create = async (req: Request, res: Response): Promise<void> => {
  const { url } = req.body;

  if (!url) res.status(400).send("Falta el longUrl");

  const result = await createShortUrl(url);

  res.status(201).json(result);
};

/**
 * Redirects to the original URL based on the short ID.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @returns {Promise<void>}
 */
export const redirect = async (req: Request, res: Response): Promise<void> => {
  const { shortId } = req.params;
  if (!shortId) {
    res.status(400).send("Falta el shortId");
    return;
  }

  const url = await getOriginalUrl(shortId);

  if (!url) {
    res.status(404).send("No existe");
    return;
  }

  res.redirect(url.originalUrl);
};

/**
 * Retrieves statistics for a given short ID.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @returns {Promise<void>}
 */
export const stats = async (req: Request, res: Response): Promise<void> => {
  const { shortId } = req.params;
  if (!shortId) {
    res.status(400).send("Falta el shortId");
    return;
  }

  const data = await getStats(shortId);

  if (!data) {
    res.status(404).send("No existe");
    return;
  }

  res.status(200).json({ accessCount: data.accessCount });
};

/**
 * Updates the original URL for a given short ID.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @returns {Promise<void>}
 */
export const update = async (req: Request, res: Response): Promise<void> => {
  const { shortId } = req.params;
  const { url } = req.body;

  if (!shortId) {
    res.status(400).send("Falta el shortId");
    return;
  }
  if (!url) {
    res.status(400).send("Falta el url");
    return;
  }

  const result = await updateUrl(shortId, url);

  res.json(result);
};

/**
 * Deletes a shortened URL based on the short ID.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @returns {Promise<void>}
 */
export const remove = async (req: Request, res: Response): Promise<void> => {
  const { shortId } = req.params;

  if (!shortId) {
    res.status(400).send("Falta el shortId");
    return;
  }

  const result = await deleteUrl(shortId);

  if (!result) {
    res.status(404).send("No existe");
    return;
  }

  res.status(200).send(result);
};
