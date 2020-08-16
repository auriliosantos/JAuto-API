import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("insurances", (table) => {
    table.increments("id").primary();
    table.string("proposal_number").notNullable();
    table.string("policy").notNullable();
    table.date("validity_start").notNullable();
    table.date("validity_end").notNullable();
    table.string("installments").notNullable();
    table.string("bonus_class").notNullable();
    table.string("total_premium").notNullable();
    table.string("observations").notNullable();

    table
      .integer("insurer_id")
      .notNullable()
      .references("id")
      .inTable("insurers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("client_id")
      .notNullable()
      .references("id")
      .inTable("clients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("vehicle_id")
      .notNullable()
      .references("id")
      .inTable("vehicles")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("deductible_type_id")
      .notNullable()
      .references("id")
      .inTable("deductible_types")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("payment_method_id")
      .notNullable()
      .references("id")
      .inTable("payment_methods")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("insurances");
}
