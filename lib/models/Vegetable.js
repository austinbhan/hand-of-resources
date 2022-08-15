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

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT * from vegetables
      WHERE id = $1
      `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Vegetable(rows[0]);
  }


}

module.exports = { Vegetable };
