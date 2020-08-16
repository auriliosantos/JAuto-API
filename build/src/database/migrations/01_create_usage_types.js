"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable("usage_types", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("usage_types");
}
exports.down = down;
