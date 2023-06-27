import { Router } from 'express';
import { readFile } from "fs/promises";

const data = await readFile('./src/data/films.json', 'utf-8');
const films = JSON.parse(data);

const filmsRouter = Router();

filmsRouter.get("/", (req, res) => {
  res.status(200).json(films);
});

export default filmsRouter;