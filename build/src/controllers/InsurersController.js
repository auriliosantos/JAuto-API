"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class InsurersControler {
    async index(request, response) {
        try {
            const insurers = await connection_1.default("insurers").select("*");
            return response.json({ insurers });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async create(request, response) {
        try {
            const { name, support_phone } = request.body;
            await connection_1.default("insurers").insert({ name, support_phone });
            return response.status(201).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async update(request, response) {
        try {
            const { id } = request.params;
            const { name, support_phone } = request.body;
            await connection_1.default("insurers").where({ id }).update({ name, support_phone });
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async delete(request, response) {
        try {
            const { id } = request.params;
            await connection_1.default("insurers").where({ id }).del();
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
}
exports.default = InsurersControler;
