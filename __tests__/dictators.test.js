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

  afterAll(() => {
    pool.end();
  });
    
});
