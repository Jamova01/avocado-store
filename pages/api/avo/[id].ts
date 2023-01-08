import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database();

  const id = req.query.id;

  const entry = await db.getById(id as string);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify(entry));
};

export default allAvos;
