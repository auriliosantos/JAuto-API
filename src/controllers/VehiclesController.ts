import { Request, Response } from "express";

import db from "../database/connection";

export default class VehiclesControler {
  async index(request: Request, response: Response) {
    try {
      const vehicles = await db("vehicles").select("*");
      const vehiclesInfo = await db("usage_types").select("*");

      return response.json({ vehicles, vehiclesInfo });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async create(request: Request, response: Response) {
    try {
      const { year, model, chassis, plate, usage_type_id } = request.body;

      if (usage_type_id == null) return response.status(400).send();

      const foreignKeyCheck = await db("usage_types").where({
        id: usage_type_id,
      });

      if (foreignKeyCheck.length <= 0) {
        return response.status(400).send();
      }

      await db("vehicles").insert({
        year,
        model,
        chassis,
        plate,
        usage_type_id,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { year, model, chassis, plate, usage_type_id } = request.body;

      await db("vehicles")
        .where({ id })
        .update({ year, model, chassis, plate, usage_type_id });

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
