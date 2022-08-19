const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /cities should return a list of cities', async () => {
    const resp = await request(app).get('/cities');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      { id: '1', name: 'London', country: 'United Kingdom' },
      { id: '2', name: 'Berlin', country: 'Germany' },
      { id: '3', name: 'Lisbon', country: 'Portugal' },
      { id: '4', name: 'Cape Town', country: 'South Africa' },
      { id: '5', name: 'Sarajevo', country: 'Bosnia and Herzegovina' },
    ]);
  });
  it('#GET cities/:id should return a single id', async () => {
    const resp = await request(app).get('/cities/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      name: 'Berlin',
      country: 'Germany'
    });
  });

  it('#POST /cities should create a new city', async () => {
    const newCity = {
      name: 'Edinburgh',
      country: 'Scotland',
    };
    const resp = await request(app).post('/cities').send(newCity);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newCity,
    });
  });
  it('#PUT /cities/:id should update an existing city', async () => {
    const resp = await request(app).put('/cities/1').send({
      name: 'Munich',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toBe('Munich');
  });

  afterAll(() => {
    pool.end();
  });
});
