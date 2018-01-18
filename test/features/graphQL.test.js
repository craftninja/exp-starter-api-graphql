const expect = require('expect');
const request = require('supertest');

require('../helpers/testSetup');

const app = require('../../app');

describe('GraphQL', () => {

  it('returns `Hello World` at hello route', async () => {
    const res = await request(app)
      .get('/graphql')
      .send({query: '{ hello }'})
      .expect(200);

    expect(res.body).toEqual({ data: { hello: 'Hello world!' } });
  });
});
