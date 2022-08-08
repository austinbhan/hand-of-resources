const pool = require('../utils/pool');

class Vegetable {
  id;
  name;
  color;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.color = row.color;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * from vegetables
    `);
    return rows.map((row) => new Vegetable(row));
  }


}

module.exports = { Vegetable };
