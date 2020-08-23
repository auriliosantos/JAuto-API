import { Request, Response } from "express";

import db from "../database/connection";

export default class InputsControler {
  async clientsData(request: Request, response: Response) {
    try {
      const marital_statusesData = await db("marital_statuses").select(
        "marital_statuses.id",
        "marital_statuses.name"
      );

      return response.json({ marital_statusesData });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async vehiclesData(request: Request, response: Response) {
    try {
      const ownerData = await db("clients").select(
        "clients.id",
        "clients.name"
      );
      const usage_typesData = await db("usage_types").select(
        "usage_types.id",
        "usage_types.name"
      );

      return response.json({ ownerData, usage_typesData });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async insurancesData(request: Request, response: Response) {
    try {
      const insurersData = await db("insurers").select(
        "insurers.id",
        "insurers.name"
      );
      const vehiclesData = await db("vehicles").select(
        "vehicles.id",
        "vehicles.plate",
        "vehicles.chassis"
      );
      const deductible_typesData = await db("deductible_types").select(
        "deductible_types.id",
        "deductible_types.name"
      );
      const payment_methodsData = await db("payment_methods").select(
        "payment_methods.id",
        "payment_methods.name"
      );

      return response.json({
        insurersData,
        vehiclesData,
        deductible_typesData,
        payment_methodsData,
      });
    } catch (err) {
      return response.status(500).send();
    }
  }
}
