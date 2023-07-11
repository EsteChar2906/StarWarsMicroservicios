import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/planets", controllers.getPlanets);

export default router;
