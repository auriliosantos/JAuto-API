import { Request, Response } from "express";

import db from "../database/connection";

export default class InsurersControler {
  async index(request: Request, response: Response) {
    try {
      const insurers = await db("insurers").select("*");

      return response.json({ insurers });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async create(request: Request, response: Response) {
    try {
      const { name, support_phone } = request.body;

      await db("insurers").insert({ name, support_phone });

      return response.status(201).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, support_phone } = request.body;

      await db("insurers").where({ id }).update({ name, support_phone });

      return response.status(202).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await db("insurers").where({ id }).del();

      return response.status(202).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
}
