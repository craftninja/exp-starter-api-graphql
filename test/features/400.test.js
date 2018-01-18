const expect = require('expect');
const request = require('supertest');

require('../helpers/testSetup');

const app = require('../../app');

describe('Bad reqests - ', () => {
  it('missing query string returns "Must provide query string."', async () => {
    const res = await request(app)
      .get('/')
      .expect(400);

    const errorResponse = { errors: [{ message: 'Must provide query string.' }] };
    expect(res.body).toEqual(errorResponse);
  });

  it('undefined query string returns "gross, dude"', async () => {
    const res = await request(app)
      .get('/')
      .send({query: '{ undefined }'})
      .expect(400);

    const errorResponse = { errors: [{
      locations: [{column: 3, line: 1}],
      message: 'Cannot query field "undefined" on type "Query".'
    }] };
    expect(res.body).toEqual(errorResponse);
  });
});
