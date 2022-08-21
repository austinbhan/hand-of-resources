const pool = require('../utils/pool');

class Arnold {
  id;
  movie;
  catchphrase;

  constructor(row) {
    this.id = row.id;
    this.movie = row.movie;
    this.catchphrase = row.catchphrase;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
            SELECT * from arnold
        `
    );
    return rows.map((row) => new Arnold(row));
  }
}

module.exports = { Arnold };

