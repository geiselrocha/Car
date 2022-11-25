import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import { allVehicle, oneVehicle } from './vehicle.mock';

describe('Test Service Car', function () {
  it('should create a car with success', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car({
      model: 'Marea',
      year: 2002,
      color: 'Blue',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(carOutput);
    const service = new CarService();
    const result = await service.create(carInput);
    expect(result).to.deep.equal(carOutput);
    sinon.restore();
  });

  it('should return registered all cars', async function () {
    const cars: Car[] = allVehicle.map((car) => new Car(car));
    sinon.stub(Model, 'find').resolves(cars);
    const service = new CarService();
    const result = await service.findAll();
    expect(result).to.deep.equal(cars);
  });

  it('should successfully search for a car by id', async function () {
    const car: Car = new Car(oneVehicle);
    sinon.stub(Model, 'findById').resolves(car);
    const service = new CarService();
    const result = await service.findById('634852326bg5459438fbea31');
    expect(result).to.deep.equal(car);
  });
});
