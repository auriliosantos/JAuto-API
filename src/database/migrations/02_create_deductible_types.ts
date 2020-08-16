import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("deductible_types", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("deductible_types");
}
