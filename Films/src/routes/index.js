import { Router } from "express";
import controllers from "../controllers/index.js";
import middlewares from "../middleware/index.js";
const router = Router();

router.get("/films", controllers.getFilms);
router.get("/films/:id", controllers.getFilmId);
router.post("/films", middlewares.filmsValidation, controllers.postFilm);

export default router;
