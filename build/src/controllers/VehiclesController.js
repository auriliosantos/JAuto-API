"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class VehiclesControler {
    async index(request, response) {
        try {
            const vehicles = await connection_1.default("vehicles").select("*");
            const vehiclesInfo = await connection_1.default("usage_types").select("*");
            return response.json({ vehicles, vehiclesInfo });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async create(request, response) {
        try {
            const { year, model, chassis, plate, usage_type_id } = request.body;
            if (usage_type_id == null)
                return response.status(400).send();
            const foreignKeyCheck = await connection_1.default("usage_types").where({
                id: usage_type_id,
            });
            if (foreignKeyCheck.length <= 0) {
                return response.status(400).send();
            }
            await connection_1.default("vehicles").insert({
                year,
                model,
                chassis,
                plate,
                usage_type_id,
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
            const { year, model, chassis, plate, usage_type_id } = request.body;
            await connection_1.default("vehicles")
                .where({ id })
                .update({ year, model, chassis, plate, usage_type_id });
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async delete(request, response) {
        try {
            const { id } = request.params;
            await connection_1.default("vehicles").where({ id }).del();
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
}
exports.default = VehiclesControler;
