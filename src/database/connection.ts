import knex from "knex";

const db = knex({
  client: "pg",
  version: "7.18.2",
  connection: process.env.DATABASE_URI,
});

export default db;
