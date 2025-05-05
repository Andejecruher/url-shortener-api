/**
 * Application configuration object.
 * Contains environment-specific settings such as the server port and MongoDB URI.
 */
export const config = {
  /**
   * The port on which the server will run.
   * Defaults to 4000 if not specified in the environment variables.
   * @type {string | number}
   */
  PORT: (process.env.PORT as string) || 4000,

  /**
   * The MongoDB connection URI.
   * Defaults to "mongodb://localhost:27017/url_shortener" if not specified in the environment variables.
   * @type {string}
   */
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/url_shortener",
};

export default config;
