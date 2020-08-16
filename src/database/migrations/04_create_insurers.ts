import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("insurers", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("support_phone").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("insurers");
}
