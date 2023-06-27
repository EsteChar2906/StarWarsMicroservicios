import { Router } from 'express';
import planetsRouter from './planetsRouter.js';

const router = Router();

router.get('/', (req, res) => res.status(200).send('Hello World'));

router.use('/planets', planetsRouter);

export default router;