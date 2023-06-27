import { Router } from 'express';
import { readFile } from "fs/promises";

const data = await readFile('./src/data/planets.json', 'utf-8');
const planets = JSON.parse(data);

const planetsRouter = Router();

planetsRouter.get("/", (req, res) => {
  res.status(200).json(planets);
});

export default planetsRouter;
