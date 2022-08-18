const cities = require('../controllers/cities');
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

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from cities
        WHERE id = $1
        `,
      [id]
    ); 
    if (rows.length === 0) {
      return null;
    }
    return new City(rows[0]);
  }
}

module.exports = { City };

