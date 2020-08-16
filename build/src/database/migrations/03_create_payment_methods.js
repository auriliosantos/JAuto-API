"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable("payment_methods", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("payment_methods");
}
exports.down = down;
