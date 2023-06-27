import { Router } from 'express';
import { readFile } from "fs/promises";

const data = await readFile('./src/data/characters.json', 'utf-8');
const characters = JSON.parse(data);

const characterRouter = Router();

characterRouter.get("/", (req, res) => {
  res.status(200).json(characters);
});

export default characterRouter;
