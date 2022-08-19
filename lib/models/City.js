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

  static async insert({ name, country }) {
    const { rows } = await pool.query(
      `
        INSERT INTO cities (name, country)
        VALUES ($1, $2)
        RETURNING *
        `,
      [name, country]
    );
    return new City(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const city = await City.getById(id);
    if (!city) return null;
    const updatedData = { ...city, ...newAttrs };
    const { rows } = await pool.query(
      `
        UPDATE cities
        SET name = $2, country = $3
        WHERE id = $1
        RETURNING *
        `,
      [
        id,
        updatedData.name,
        updatedData.country
      ]
    );
    return new City(rows[0]);
  }

}

module.exports = { City };

