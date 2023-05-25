const request = require('supertest');

const app = require('../app');

describe('GET /sabotage', function () {
    it('trying to get /sabotage', function (done) {
        request(app)
            .get('/sabotage')
            
           
            .expect(404, done);
    });
});