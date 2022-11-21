import { Router } from 'express';
import CarController from '../Controllers/CarController';
import ValidateId from '../validation/validateId';

const router = Router();

router.post('/', (req, res, next) => new CarController(req, res, next).create());
router.get('/', (req, res, next) => new CarController(req, res, next).findAll());
router.get(
  '/:id',
  (req, res, next) => new ValidateId(req, res, next).validate(),
  (req, res, next) => new CarController(req, res, next).findById(),
);

export default router;
