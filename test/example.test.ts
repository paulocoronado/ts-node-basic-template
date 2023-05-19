import request from 'supertest';
import app from '../src/app';



 let server:any;
 
describe('GET /', () => {
  beforeAll((done) => {
    server= app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('should return a greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World!!');
  });
});

describe('GET /message', () => {
    beforeAll((done) => {
      server= app.listen(done);
    });
  
    afterAll((done) => {
      server.close(done);
    });
  
    test('should return the received message', async () => {
      const res = await request(app).get('/message/Hello World!!');
      expect(res.statusCode).toEqual(200);
      expect(res.text).toEqual('I get the following message: Hello World!!');
    });
  });