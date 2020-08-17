import { Request, Response } from "express";

import db from "../database/connection";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class AuthControler {
  async register(request: Request, response: Response) {
    try {
      const { name, password } = request.body;
      const hash = bcrypt.hashSync(password, 8);

      await db("users").insert({ name, hash });

      return response.status(201).send();
    } catch (err) {
      return response.status(500).send();
    }
  }
  async login(request: Request, response: Response) {
    const { name, password } = request.body;
    const [{ hash, id }] = await db("users")
      .where({ name })
      .select("hash")
      .select("id");

    const isAMatch = bcrypt.compareSync(password, hash);

    if (isAMatch) {
      const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "2 days",
      });
      return response.status(201).send({ name, token });
    }

    return response.status(400).send();
  }
}
