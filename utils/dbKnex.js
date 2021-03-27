const { knex } = require("knex");

class DbProvider {

  constructor() {

    

  }

  get dbProvider() {

    return knex({
      client: "mysql",
      connection: {
        host: "localhost",
        user: "root",
        password: 3310,
        database: "db_seguridad"
      }
    })

  }

}

const dbProvider = new DbProvider();

Object.freeze(dbProvider);

module.exports = dbProvider;
