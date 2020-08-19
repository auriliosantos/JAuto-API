import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("vehicles", (table) => {
    table.increments("id").primary();
    table.string("year", 10).notNullable();
    table.string("model").notNullable();
    table.string("chassis", 17).notNullable();
    table.string("plate").notNullable();

    table
      .integer("usage_type_id")
      .notNullable()
      .references("id")
      .inTable("usage_types")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("owner_id")
      .notNullable()
      .references("id")
      .inTable("clients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("vehicles");
}
