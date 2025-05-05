/* eslint-disable no-undef */
import request from "supertest";
import app from "../index"; // Ensure the path is correct
// import "../tests/setup";

/**
 * Test suite for the URL Shortener API.
 * Includes tests for creating, redirecting, retrieving statistics, updating, and deleting shortened URLs.
 */
describe("URL Shortener API", () => {
  /**
   * Test case: Should create a shortened URL.
   * Sends a POST request to create a new shortened URL and verifies the response.
   */
  it("should create a shortened URL", async () => {
    const response = await request(app)
      .post("/shorten")
      .send({ url: "https://openai.com" })
      .expect(201);

    expect(response.body).toBeDefined();
    expect(response.body.originalUrl).toBe("https://openai.com");
  });

  /**
   * Test case: Should redirect to the original URL and increment the access count.
   * Sends a GET request to the shortened URL and verifies the redirection.
   */
  it("should redirect to the original URL and count the access", async () => {
    const create = await request(app)
      .post("/shorten")
      .send({ url: "https://openai.com" });

    const shortId = create.body.shortCode;

    const redirect = await request(app).get(`/shorten/${shortId}`).expect(302);

    expect(redirect.header.location).toBe("https://openai.com"); // Added assertion for the redirect location
  });

  /**
   * Test case: Should return access statistics for a shortened URL.
   * Sends multiple GET requests to the shortened URL and verifies the access count.
   */
  it("should return access statistics", async () => {
    const create = await request(app)
      .post("/shorten")
      .send({ url: "https://openai.com" });

    const shortId = create.body.shortCode;

    // Call the redirection 3 times
    await request(app).get(`/shorten/${shortId}`);
    await request(app).get(`/shorten/${shortId}`);
    await request(app).get(`/shorten/${shortId}`);

    const stats = await request(app)
      .get(`/shorten/${shortId}/stats`)
      .expect(200);

    expect(stats.body.accessCount).toBe(3);
  });

  /**
   * Test case: Should update the original URL for a shortened URL.
   * Sends a PUT request to update the original URL and verifies the response.
   */
  it("should update the original URL", async () => {
    const create = await request(app)
      .post("/shorten")
      .send({ url: "https://old.com" });

    const shortId = create.body.shortCode;

    const update = await request(app)
      .put(`/shorten/${shortId}`)
      .send({ url: "https://new.com" })
      .expect(200);

    expect(update.body.originalUrl).toBe("https://new.com"); // Updated key from longUrl to url
  });

  /**
   * Test case: Should delete a shortened URL.
   * Sends a DELETE request to remove the shortened URL and verifies it no longer exists.
   */
  it("should delete the URL", async () => {
    const create = await request(app)
      .post("/shorten")
      .send({ url: "https://delete.com" });

    const shortId = create.body.shortCode;

    await request(app).delete(`/shorten/${shortId}`).expect(200);

    await request(app).get(`/shorten/${shortId}`).expect(404);
  });
});
