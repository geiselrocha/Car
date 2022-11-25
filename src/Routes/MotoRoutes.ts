import { Router } from 'express';
import MotoController from '../Controllers/MotoController';

const router = Router();

router.post('/', (req, res, next) => new MotoController(req, res, next).create());
router.get('/', (req, res, next) => new MotoController(req, res, next).findAll());

export default router;
