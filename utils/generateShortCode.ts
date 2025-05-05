/**
 * Generates a random alphanumeric short ID.
 * The generated ID consists of 6 characters.
 *
 * @function
 * @returns {string} A 6-character alphanumeric string.
 */
export const generateShortId = (): string => {
  return Math.random().toString(36).substring(2, 8); // 6 alphanumeric characters
};
