const supertest = require("supertest");
const app = require("../index");

describe("API Test", () => {
    it("GET /sum returns sum of provided integers", () => {
        supertest(app).post("/sum", (err, res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toBe(15);
        });
    })
})