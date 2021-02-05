const request = require("supertest");
const app = require("../app");

test("testando rota hello world", async () => {
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
  expect(response.text).toContain("Hello World");
});
