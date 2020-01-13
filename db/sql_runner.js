const { Pool } = require("pg");
const pool = new Pool({
  host: "database",
  database: "npc_gen",
  password: 'npc_gen',
  user: 'npc_gen'
});

class SqlRunner {
  static run(sqlQuery, values = []) {
    return pool.query(sqlQuery, values).then(results => {
      return results;
    });
  }
}

module.exports = SqlRunner;
