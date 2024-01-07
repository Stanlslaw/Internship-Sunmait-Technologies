import request from "supertest";
import app from "./app.js";

describe("Testing authentication scenarios", () => {
  test("should return object with field --> authenticated: true", async () => {
    const loginData = {
      username: "admin",
      password: "1234",
    };
    const res = await request(app).post("/api/auth/login").send(loginData);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("authenticated", true);
    expect(res.body).toHaveProperty("message", null);
  });
  test("should return object with field --> authenticated: false and message: 'Incorrect username or password'", async () => {
    const loginData = {
      username: "_admin_",
      password: "_1234_",
    };
    const res = await request(app).post("/api/auth/login").send(loginData);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("authenticated", false);
    expect(res.body).toHaveProperty(
      "message",
      "Incorrect username or password"
    );
  });
});
