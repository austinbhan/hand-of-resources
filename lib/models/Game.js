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

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from games
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Game(rows[0]);
  }

  static async insert({ title, developer, genre }) {
    const { rows } = await pool.query(
      `
            INSERT INTO games (title, developer, genre)
            VALUES ($1, $2, $3)
            RETURNING *
        `,
      [title, developer, genre]
    );
    return new Game(rows[0]);
  }
}

module.exports = { Game };
