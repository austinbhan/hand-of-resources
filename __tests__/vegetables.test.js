const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /vegetables should return a list of vegetables', async () => {
    const resp = await request(app).get('/vegetables');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      {
        id: '1',
        name: 'Potato',
        color: 'Brown',
      },
      {
        id: '2',
        name: 'Bell Pepper',
        color: 'Red',
      },
      {
        id: '3',
        name: 'Carrot',
        color: 'Orange',
      },        
      {
        id: '4',
        name: 'Onion',
        color: 'Yellow',
      },
      {
        id: '5',
        name: 'Kale',
        color: 'Green',
      },
    ]);
  });

  it('#GET vegetables/:id should return a single vegetable', async () => {
    const resp = await request(app).get('/vegetables/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      name: 'Bell Pepper',
      color: 'Red',
    });
  });
  it('#PUT /vegetables/:id should update an existing vegetable', async () => {
    const resp = await request(app).put('/vegetables/1').send({
      color: 'Yellow',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.color).toBe('Yellow');
  });
  it('#DELETE /vegetables/:id should delete a vegetables', async () => { // Test Failing 
    const resp = await request(app).delete('/vegetables/1');
    expect(resp.status).toBe(200);

    const vegetableResp = await request(app).get('/vegetables/1');
    expect(vegetableResp.body).toBe(null);
  });

  it('#POST /vegetables should create a new vegetable', async () => {
    const newVegetable = {
      name: 'Eggplant',
      color: 'Purple',
    };
    const resp = await request(app).post('/vegetables').send(newVegetable);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newVegetable,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
