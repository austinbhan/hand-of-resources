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

  static async updateById(id, newAttrs) {
    const vegetable = await Vegetable.getById(id);
    if (!vegetable) return null;
    const updatedData = { ...vegetable, ...newAttrs };
    const { rows } = await pool.query(
      `
      UPDATE vegetables
      SET name = $2, color = $3
      WHERE id = $1
      RETURNING *
      `,
      [
        id,
        updatedData.name,
        updatedData.color
      ]
    );
    return new Vegetable(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE from vegetables
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );
    return new Vegetable(rows[0]);
  }

  static async insert({ name, color }) {
    const { rows } = await pool.query(
      `
        INERT INTO vegetables (name, color)
        VALUES ($1, $2)
        RETURNING *
      `,
      [name, color]
    );
    return new Vegetable(rows[0]);
  }

}

module.exports = { Vegetable };
