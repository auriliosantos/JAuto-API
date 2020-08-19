"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
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
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("vehicles");
}
exports.down = down;
