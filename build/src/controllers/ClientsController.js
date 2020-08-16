"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class ClassesControler {
    async index(request, response) {
        try {
            const clients = await connection_1.default("clients").select("*");
            const clientsInfo = await connection_1.default("marital_statuses").select("*");
            return response.json({ clients, clientsInfo });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async create(request, response) {
        try {
            const { name, address, birthday, marital_status_id } = request.body;
            if (marital_status_id == null)
                return response.status(400).send();
            const foreignKeyCheck = await connection_1.default("marital_statuses").where({
                id: marital_status_id,
            });
            if (foreignKeyCheck.length <= 0) {
                return response.status(400).send();
            }
            await connection_1.default("clients").insert({
                name,
                address,
                birthday,
                marital_status_id,
            });
            return response.status(201).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async update(request, response) {
        try {
            const { id } = request.params;
            const { name, address, birthday, marital_status_id } = request.body;
            await connection_1.default("clients")
                .where({ id })
                .update({ name, address, birthday, marital_status_id });
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async delete(request, response) {
        try {
            const { id } = request.params;
            await connection_1.default("clients").where({ id }).del();
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
}
exports.default = ClassesControler;
