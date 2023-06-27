import { Router } from 'express';
import characterRouter from './charactersRouter.js';

const router = Router();

router.get('/', (req, res) => res.status(200).send('Hello World'));

router.use('/characters', characterRouter);

export default router;