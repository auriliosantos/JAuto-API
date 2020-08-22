"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class InsurancesControler {
    async index(request, response) {
        try {
            const insurances = await connection_1.default("insurances")
                .join("insurers", "insurances.insurer_id", "insurers.id")
                .join("vehicles", "insurances.vehicle_id", "vehicles.id")
                .join("deductible_types", "insurances.deductible_type_id", "deductible_types.id")
                .join("payment_methods", "insurances.payment_method_id", "payment_methods.id")
                .join("clients", "vehicles.owner_id", "clients.id")
                .select("insurances.id", "insurances.proposal_number", "insurances.validity_start", "insurances.validity_end", "insurances.installments", "insurances.bonus_class", "insurances.total_premium", "insurances.observations", "insurers.name as insurer", "vehicles.plate as vehicle_plate", "vehicles.chassis as vehicle_chassis", "deductible_types.name as deductible_type", "payment_methods.name as payment_method", "clients.name as client");
            return response.json({ insurances });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async create(request, response) {
        try {
            const { proposal_number, policy, validity_start, validity_end, installments, bonus_class, total_premium, observations, insurer_id, vehicle_id, deductible_type_id, payment_method_id, } = request.body;
            if (insurer_id == null ||
                vehicle_id == null ||
                deductible_type_id == null ||
                payment_method_id == null)
                return response.status(400).send({ error: "Campo vazio" });
            const insurer_idCheck = await connection_1.default("insurers").where({
                id: insurer_id,
            });
            const vehicle_idCheck = await connection_1.default("vehicles").where({
                id: vehicle_id,
            });
            const deductible_type_idCheck = await connection_1.default("deductible_types").where({
                id: deductible_type_id,
            });
            const payment_method_idCheck = await connection_1.default("payment_methods").where({
                id: payment_method_id,
            });
            if (insurer_idCheck.length <= 0 ||
                vehicle_idCheck.length <= 0 ||
                deductible_type_idCheck.length <= 0 ||
                payment_method_idCheck.length <= 0) {
                return response
                    .status(400)
                    .send({ error: "Relacionamento não existe" });
            }
            await connection_1.default("insurances").insert({
                proposal_number,
                policy,
                validity_start,
                validity_end,
                installments,
                bonus_class,
                total_premium,
                observations,
                insurer_id,
                vehicle_id,
                deductible_type_id,
                payment_method_id,
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
            const { proposal_number, policy, validity_start, validity_end, installments, bonus_class, total_premium, observations, insurer_id, vehicle_id, deductible_type_id, payment_method_id, } = request.body;
            await connection_1.default("insurances").where({ id }).update({
                proposal_number,
                policy,
                validity_start,
                validity_end,
                installments,
                bonus_class,
                total_premium,
                observations,
                insurer_id,
                vehicle_id,
                deductible_type_id,
                payment_method_id,
            });
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async delete(request, response) {
        try {
            const { id } = request.params;
            await connection_1.default("insurances").where({ id }).del();
            return response.status(202).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
}
exports.default = InsurancesControler;
