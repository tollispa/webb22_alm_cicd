const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

request
  .get("/users")
  .expect(200)
  .end((err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.body);
  });