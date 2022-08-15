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
}

module.exports = { Dictator };