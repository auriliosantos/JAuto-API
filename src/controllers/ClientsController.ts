import { Request, Response } from "express";

import db from "../database/connection";

export default class ClassesControler {
  async index(request: Request, response: Response) {
    try {
      const clients = await db("clients").select("*");
      const clientsInfo = await db("marital_statuses").select("*");

      return response.json({ clients, clientsInfo });
    } catch (err) {
      return response.status(500).send();
    }
  }
  async create(request: Request, response: Response) {
    try {
      const { name, address, birthday, marital_status_id } = request.body;

      if (marital_status_id == null)
        return response.status(400).send({ error: "Campo vazio" });

      const foreignKeyCheck = await db("marital_statuses").where({
        id: marital_status_id,
      });

      if (foreignKeyCheck.length <= 0)
        return response
          .status(400)
          .send({ error: "Relacionamento não existe" });

      await db("clients").insert({
        address,
        birthday,
        marital_status_id,
        name,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, address, birthday, marital_status_id } = request.body;

      await db("clients")
        .where({ id })
        .update({ name, address, birthday, marital_status_id });

      return response.status(202).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await db("clients").where({ id }).del();

      return response.status(202).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
}
