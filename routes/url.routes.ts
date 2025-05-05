import { Router } from "express";
import {
  create,
  redirect,
  stats,
  update,
  remove,
} from "../controllers/url.controller";

const router = Router();

/**
 * Route to create a new shortened URL.
 * Calls the `create` controller to handle the request.
 * @name POST /
 * @function
 * @memberof module:routes/url
 */
router.post("/", create);

/**
 * Route to redirect to the original URL based on the short ID.
 * Calls the `redirect` controller to handle the request.
 * @name GET /:shortId
 * @function
 * @memberof module:routes/url
 */
router.get("/:shortId", redirect);

/**
 * Route to retrieve statistics for a given short ID.
 * Calls the `stats` controller to handle the request.
 * @name GET /:shortId/stats
 * @function
 * @memberof module:routes/url
 */
router.get("/:shortId/stats", stats);

/**
 * Route to update the original URL for a given short ID.
 * Calls the `update` controller to handle the request.
 * @name PUT /:shortId
 * @function
 * @memberof module:routes/url
 */
router.put("/:shortId", update);

/**
 * Route to delete a shortened URL based on the short ID.
 * Calls the `remove` controller to handle the request.
 * @name DELETE /:shortId
 * @function
 * @memberof module:routes/url
 */
router.delete("/:shortId", remove);

export default router;
