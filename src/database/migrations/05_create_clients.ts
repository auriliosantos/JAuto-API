import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("clients", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.date("birthday").notNullable();

    table
      .integer("marital_status_id")
      .notNullable()
      .references("id")
      .inTable("marital_statuses")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("clients");
}
