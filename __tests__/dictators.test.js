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
    
});
