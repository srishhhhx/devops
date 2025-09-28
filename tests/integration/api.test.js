const request = require('supertest');
const app = require('../../src/app');

describe('API Integration Tests', () => {
  test('GET /api/test should return success', async () => {
    const response = await request(app)
      .get('/api/test')
      .expect(200);

    expect(response.body).toHaveProperty('message', 'API is working!');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /api/status should return operational status', async () => {
    const response = await request(app)
      .get('/api/status')
      .expect(200);

    expect(response.body).toHaveProperty('status', 'operational');
    expect(response.body).toHaveProperty('version');
  });
});
