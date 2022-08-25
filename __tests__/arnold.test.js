const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /arnold should return a list of movie catchphrases', async () => {
    const resp = await request(app).get('/arnold');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual(
      [{ id: '1', movie: 'Kindergarten Cop', catchphrase: 'Its not a toomuh' },
        { id: '2', movie: 'Commando', catchphrase: 'Stick Around' },
        { id: '3', movie: 'The Terminator', catchphrase: 'Ill be back' },
        { id: '4', movie: 'Terminator 2', catchphrase: 'Come with me if you want to live' },        
        { id: '5', movie: 'Batman and Robin', catchphrase: 'Lets kick some ice' }, 
      ]
    );
  });
  afterAll(() => {
    pool.end();
  });
});
