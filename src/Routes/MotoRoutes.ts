import { Router } from 'express';
import MotoController from '../Controllers/MotoController';
import ValidateId from '../validation/validateId';

const router = Router();

router.post('/', (req, res, next) => new MotoController(req, res, next).create());
router.get('/', (req, res, next) => new MotoController(req, res, next).findAll());
router.get(
  '/:id',
  (req, res, next) => new ValidateId(req, res, next).validate(),
  (req, res, next) => new MotoController(req, res, next).findById(),
);

export default router;
