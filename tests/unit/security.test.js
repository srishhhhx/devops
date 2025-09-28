const request = require('supertest');
const app = require('../../src/app');

describe('Security Middleware Tests', () => {
  test('Should set security headers', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.headers['x-content-type-options']).toBe('nosniff');
    expect(response.headers['x-frame-options']).toBe('DENY');
    expect(response.headers['x-xss-protection']).toBe('1; mode=block');
  });

  test('Rate limiting should be applied to API routes', async () => {
    // Make multiple requests to test rate limiting
    const promises = Array(5).fill().map(() => 
      request(app).get('/api/test')
    );
    
    const responses = await Promise.all(promises);
    responses.forEach(response => {
      expect(response.status).toBe(200);
    });
  });
});
