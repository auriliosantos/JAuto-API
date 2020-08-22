import { Request, Response } from "express";

import db from "../database/connection";

export default class InputsControler {
  async insurers(request: Request, response: Response) {
    try {
      const insurersData = await db("insurers").select(
        "insurers.id",
        "insurers.name"
      );

      return response.json({ insurersData });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async clients(request: Request, response: Response) {
    try {
      const clientsData = await db("clients").select(
        "clients.id",
        "clients.name"
      );

      return response.json({ clientsData });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async usage_types(request: Request, response: Response) {
    try {
      const usage_typesData = await db("usage_types").select(
        "usage_types.id",
        "usage_types.name"
      );

      return response.json({ usage_typesData });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async marital_statuses(request: Request, response: Response) {
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
  async payment_methods(request: Request, response: Response) {
    try {
      const payment_methodsData = await db("payment_methods").select(
        "payment_methods.id",
        "payment_methods.name"
      );

      return response.json({ payment_methodsData });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async deductible_types(request: Request, response: Response) {
    try {
      const deductible_typesData = await db("deductible_types").select(
        "deductible_types.id",
        "deductible_types.name"
      );

      return response.json({ deductible_typesData });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async vehicles(request: Request, response: Response) {
    try {
      const vehiclesData = await db("vehicles").select(
        "vehicles.id",
        "vehicles.plate",
        "vehicles.chassis"
      );

      return response.json({ vehiclesData });
    } catch (err) {
      return response.status(500).send();
    }
  }
}
