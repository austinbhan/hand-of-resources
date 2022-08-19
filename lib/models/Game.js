const pool = require('../utils/pool');

class Game {
  id;
  title;
  developer;
  genre;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.developer = row.developer;
    this.genre = row.genre;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
            SELECT * from games
            `,
    );
    return rows.map((row) => new Game(row));
  }
}

module.exports = { Game };
