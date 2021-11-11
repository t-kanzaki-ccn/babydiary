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


      const testdata = [{
        id: 1,
        baby_id: 1,
        date: '2021-11-10T15:00:00.000Z',
        branch: '01',
        title: 'test',
        comment: 'hahah',
        author: 'papa'
      },
      {
        id: 2,
        baby_id: 1,
        date: '2021-11-10T15:00:00.000Z',
        branch: '02',
        title: 'test2',
        comment: 'gagagaga',
        author: 'mama'
      }]

      const testdata2 = [{
        id: 2,
        baby_id: 1,
        date: '2021-11-10T15:00:00.000Z',
        branch: '02',
        title: 'test2',
        comment: 'gagagaga',
        author: 'mama'
      }]

      it("should return test data", async () => {
        const res = await request.get("/api/v1/01/diary/20211111");
        JSON.parse(res.text).should.eql(testdata);
      });

      it("should return branch 02 datta", async () => {
        const res = await request.get("/api/v1/01/diary/20211111?branch=02");
        JSON.parse(res.text).should.eql(testdata2);
      });

    });

    describe("POST /api/v1/:id/diary/:date - happycase", () => {
      it("should return status 201", async () => {
        const res = await request.post("/api/v1/01/diary/20211112")
            .send( {
                title: '遊園地',
                comment: '観覧車で大喜び！楽しかった！！',
                author: 'ママ'
            } );
        res.should.have.status(201);
      });


    });
  });
});
