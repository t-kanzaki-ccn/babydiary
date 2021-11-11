const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
chai.should();

const config = require("../src/config");
const knex = require("knex")(config.db);

const server = setupServer(knex);

describe("BabyDiary API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("rest basics", () => {
    describe("GET /api/v1/:id/diary/:date - happycase", () => {
      it("should return status 200", async () => {
        const res = await request.get("/api/v1/01/diary/20211111");
        res.should.have.status(200);
      });
    });
  });
});
