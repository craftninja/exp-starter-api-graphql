const expect = require('expect');
const request = require('supertest');

require('../helpers/testSetup');

const app = require('../../app');

describe('Root of API', () => {
  it('welcomes visitors', async () => {
    const res = await request(app)
      .get('/')
      .send({query: '{ hello }'})
      .expect(200);

    expect(res.body).toEqual({ data: { hello: 'oh hai' } });
  });
});
