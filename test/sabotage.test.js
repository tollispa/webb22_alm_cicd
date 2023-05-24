const request = require('supertest');

const app = require('../app');

describe('GET /sabotage', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/sabotage')
            .expect(200, done);
    });
});
router.get('/sabotage', (req, res) => {
  res.json('TP, PS, DT, VK');
});