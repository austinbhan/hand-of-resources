const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /games should return a list of games', async () => {
    const resp = await request(app).get('/games');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      { id: '1', title: 'X-Com', developer: 'Firaxis', genre: 'Strategy' },
      { id: '2', title: 'Frostpunk', developer: '11-bit', genre: 'City building' },
      { id: '3', title: 'Call of Duty', developer: 'Infinity Ward', genre: 'FPS' },
      { id: '4', title: 'Microsoft Flight Simulator', developer: 'Asobo', genre: 'Simulation' },
      { id: '5', title: 'Super Meat Boy', developer: 'Team Meat', genre: 'Platformer' },
    ]);
  });
});
