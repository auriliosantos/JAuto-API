"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
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
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("clients");
}
exports.down = down;
