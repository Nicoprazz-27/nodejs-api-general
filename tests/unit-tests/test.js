const request = require('supertest');
const app = require('../../index');

describe('GET /', function() {
    it('responds with json', function() {
      return request(app)
        .get('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJpYXQiOjE3MDU3ODU2NTN9.RSMDPYDIf6bB2g_R2gyW49OnZWbDqCQLXXU3X34g372TUju2cmb16HeXmNuMftHtoxnS8L5i5OyANZArOHSKag`)
        .expect(200)
    });
  });