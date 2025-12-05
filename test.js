// test.js
const request = require('supertest');
const app = require('./app');
const { expect } = require('chai');

describe('GET endpoints', function() {
  it('GET / responds with Hello From DSCE', async function() {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('response', 'Hello From DSCE');
  });

  it('GET /will responds with Hello World', async function() {
    const res = await request(app).get('/will');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('response', 'Hello World');
  });

  it('GET /ready responds with Great!, It works!', async function() {
    const res = await request(app).get('/ready');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('response', 'Great!, It works!');
  });
});
