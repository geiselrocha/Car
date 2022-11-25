import { Schema } from 'mongoose';
import IMoto from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotoODM extends AbstractODM<IMoto> {
  constructor() {
    const schema = new Schema<IMoto>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }
}
