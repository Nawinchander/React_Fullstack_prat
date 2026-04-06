//// Mongo API Test

test("POST /api/tasks", async () => {
  const res = await request(app)
    .post("/api/tasks")
    .send({ title: "Test Task" });

  expect(res.statusCode).toBe(200);
  expect(res.body.title).toBe("Test Task");
});



