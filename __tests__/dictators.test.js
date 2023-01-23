const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /dictators should return a list of autocrats ', async () => {
    const resp = await request(app).get('/dictators');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      { id: '1',
        name: 'Josef Tito',
        country: 'Yugoslavia',
      },
      { id: '2',
        name: 'Park Chung Hee',
        country: 'South Korea',
      },
      { id: '3',
        name: 'Mobutu Seko',
        country: 'Zaire',
      },
      { id: '4',
        name: 'Francisco Franco',
        country: 'Spain',
      },
      { id: '5',
        name: 'Manuel Noreiga',
        country: 'Panama',
      }        
    ]);
  });
  it('#GET dictators/:id should return a single dictator', async () => {
    const resp = await request(app).get('/dictators/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      name: 'Park Chung Hee',
      country: 'South Korea'
    });
  });
  it('#POST /dictators should create a new dictator', async () => {
    const newDictator = {
      name: 'Lee Kuan Yew',
      country: 'Singapore',
    };
    const resp = await request(app).post('/dictators').send(newDictator);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newDictator,
    });
  });
  it('#PUT /dictators/:id should update an existing dictator', async () => {
    const resp = await request(app).put('/dictators/1').send({
      country: 'Federal Republic of Chicken Soup',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.country).toBe('Federal Republic of Chicken Soup');
  });
  it('#DELETE /dictators/:id should delete a dictator', async () => {
    const resp = await request(app).delete('/dictators/1');
    expect(resp.status).toBe(200);

    const dictatorResp = await request(app).get('/dictators/1');
    expect(dictatorResp.body).toBe(null);
  });

  afterAll(() => {
    pool.end();
  });
    
});
