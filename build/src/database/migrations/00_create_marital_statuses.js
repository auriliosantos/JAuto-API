"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable("marital_statuses", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("marital_statuses");
}
exports.down = down;
