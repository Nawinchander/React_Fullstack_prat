/// jwt  test - Backend

const request = require("supertest");

test("login returns token", async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({ name: "Nawin" });

  expect(res.body.token).toBeDefined();
});

