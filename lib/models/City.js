const pool = require('../utils/pool');

class City {
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
            SELECT * from cities
            `,
    );
    return rows.map((row) => new City(row));
  }
}

module.exports = { City };

