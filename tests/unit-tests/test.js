const request = require('supertest');
const app = require('../../index');

describe('GET /', () => {
    it('responds 200 with json', () => {
      return request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/);
    });
});

describe('GET /authenticated', () => {
    it('responds 200 with json and with jwt', () => {
      return request(app)
        .get('/authenticated')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect( (res) => {
          if (!('jwt' in res.body)) {
            throw new Error("Expected 'jwt' key in response body");
          }
        });
    });
});

describe('GET /error', () => {
    it('responds 410', () => {
      return request(app)
        .get('/error')
        .set('Accept', 'application/json')
        .expect(410)
        .expect( (res) => {
          if (!('errorKey' in res.body)) {
            throw new Error("Expected 'errorKey' key in response body");
          }
        })
    });
});

describe('GET /unhandled-error', () => {
    it('responds 500', () => {
      return request(app)
        .get('/unhandled-error')
        .set('Accept', 'application/json')
        .expect(500)
        .expect( (res) => {
          if (!('errorKey' in res.body)) {
            throw new Error("Expected 'errorKey' key in response body");
          }
        })
    });
});