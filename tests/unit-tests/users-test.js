const request = require('supertest');
const app = require('../../src/app');


describe('GET /users/', () => {
    it('responds 200 with json', () => {
      return request(app)
        .get('/users/')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        // .expect((res)=> {
        //   console.log(res.body);
        // });
    });
  });
  
describe('GET /users/:id', () => {
  it('responds 200 with json', () => {
    return request(app)
      .get('/users/177de09b-8f48-43da-9839-debfd7ebb4fd')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      // .expect((res)=> {
      //   console.log(res.body);
      // });
  });

  it('responds 404 with json', () => {
      return request(app)
        .get('/users/404')
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
        // .expect((res)=> {
        //   console.log(res.body);
        // });
  });
});

// describe('POST /users/', () => {
//   it('responds 200 with json', () => {
//     return request(app)
//       .post('/users/')
//       .set('Accept', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)
//       // .expect((res)=> {
//       //   console.log(res.body);
//       // });
//   });

//   it('responds 400, email already used', () => {
//     return request(app)
//       .post('/users/')
//       .set('Accept', 'application/json')
//       .expect(400)
//       .expect('Content-Type', /json/)
//       .expect((res)=> {
//         console.log(res.body);
//       });
//   });
// });
  
  // describe('PUT /users/1', () => {
  //   it('responds 200 with json', () => {
  //     return request(app)
  //       .put('/users/1')
  //       .set('Accept', 'application/json')
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .expect((res)=> {
  //         console.log(res.body);
  //       });
  //   });
  // });
  