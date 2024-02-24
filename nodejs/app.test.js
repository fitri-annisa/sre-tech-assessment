const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return "Hello, world! This is Fitri."', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world! This is Fitri.');
  });
});
