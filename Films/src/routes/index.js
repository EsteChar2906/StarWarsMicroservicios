import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/films", controllers.getFilms);

export default router;
