import { Router } from 'express';
import filmsRouter from './filmsRouter.js';

const router = Router();

router.get('/', (req, res) => res.status(200).send('Hello World'));

router.use('/films', filmsRouter);

export default router;