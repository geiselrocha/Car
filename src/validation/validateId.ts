import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';

export default class ValidateId {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public validate() {
    const { id } = this.req.params;
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) return this.res.status(422).send({ message: 'Invalid mongo id' });
    this.next();
  }
}
