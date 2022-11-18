import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/', (req, res, next) => new CarController(req, res, next).create());

export default router;
