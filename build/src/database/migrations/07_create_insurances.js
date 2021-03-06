"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable("insurances", (table) => {
        table.increments("id").primary();
        table.string("proposal_number", 10).notNullable();
        table.string("policy", 20).notNullable();
        table.date("validity_start").notNullable();
        table.date("validity_end").notNullable();
        table.string("installments").notNullable();
        table.string("bonus_class", 2).notNullable();
        table.string("total_premium", 20).notNullable();
        table.string("observations").notNullable();
        table
            .integer("insurer_id")
            .notNullable()
            .references("id")
            .inTable("insurers")
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
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("insurances");
}
exports.down = down;
