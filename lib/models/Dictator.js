const pool = require('../utils/pool');

class Dictator {
  id;
  name;
  country;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.country = row.country;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
            SELECT * from dictators
        `
    );
    return rows.map((row) => new Dictator(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from dictators
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Dictator(rows[0]);
  }

  static async insert({ name, country }) {
    const { rows } = await pool.query(
      `
            INSERT INTO dictators (name, country)
            VALUES ($1, $2)
            RETURNING *
        `,
      [name, country]
    );
    return new Dictator(rows[0]);
  }
}

module.exports = { Dictator };
