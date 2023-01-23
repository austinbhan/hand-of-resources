const pool = require('../utils/pool');

class Country {
  id;
  country;
  capitol;
  langue;

  constructor(row) {
    this.id = row.id;
    this.country = row.country;
    this.capitol = row.capitol;
    this.langue = row.langue;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
              SELECT * from countries
            `
    );
    return rows.map((row) => new Country(row));
  }

    
}

module.exports = { Country };
