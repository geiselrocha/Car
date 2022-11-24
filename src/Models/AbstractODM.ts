import {
  // isValidObjectId,
  Model,
  models,
  Schema,
  model,
  UpdateQuery,
} from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<T | null> {
    // if (!isValidObjectId(id)) throw Error('Invalid Mongo id');
    return this.model.findById(id);
  }

  public async update(id: string, updateInfo: UpdateQuery<T>): Promise<T | null> {
    // if (!isValidObjectId(id)) throw Error('Invalid Mongo id');
    return this.model.findByIdAndUpdate(id, updateInfo, { new: true });
  }
}
