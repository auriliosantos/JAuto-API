import { Request, Response } from "express";

import db from "../database/connection";

export default class VehiclesControler {
  async index(request: Request, response: Response) {
    try {
      const vehicles = await db("vehicles")
        .join("usage_types", "vehicles.usage_type_id", "usage_types.id")
        .join("clients", "vehicles.owner_id", "clients.id")
        .select(
          "vehicles.id",
          "vehicles.year",
          "vehicles.model",
          "vehicles.chassis",
          "vehicles.plate",
          "usage_types.name as usage_type",
          "clients.name as owner"
        );

      return response.json({ vehicles });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async create(request: Request, response: Response) {
    try {
      const {
        year,
        model,
        chassis,
        plate,
        usage_type_id,
        owner_id,
      } = request.body;

      if (owner_id == null || usage_type_id == null)
        return response.status(400).send({ error: "Campo vazio" });

      const foreignKeyCheck = await db("usage_types").where({
        id: usage_type_id,
      });
      const owner_idCheck = await db("clients").where({
        id: owner_id,
      });

      if (owner_idCheck.length <= 0 || foreignKeyCheck.length <= 0) {
        return response
          .status(400)
          .send({ error: "Relacionamento não existe" });
      }

      await db("vehicles").insert({
        year,
        model,
        chassis,
        plate,
        usage_type_id,
        owner_id,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const {
        year,
        model,
        chassis,
        plate,
        usage_type_id,
        owner_id,
      } = request.body;

      await db("vehicles")
        .where({ id })
        .update({ year, model, chassis, plate, usage_type_id, owner_id });

      return response.status(202).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await db("vehicles").where({ id }).del();

      return response.status(202).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
}
