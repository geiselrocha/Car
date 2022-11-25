import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import { allVehicle, oneVehicle } from './vehicle.mock';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMoto from '../../../src/Interfaces/IMotorcycle';
import MotoService from '../../../src/Services/MotoService';

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
    const result = await service.findById('634852326b35b59438fbea2f');
    expect(result).to.deep.equal(car);
  });

  it('should successfully update a car by id', async function () {
    const carInput: ICar = {
      model: 'Uno',
      year: 2012,
      color: 'Red',
      status: true,
      buyValue: 23.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car({
      id: '633ec9fa3df977e30e993492',
      model: 'Uno',
      year: 2012,
      color: 'Red',
      status: true,
      buyValue: 23.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'findOneAndUpdate').resolves(carOutput);
    const service = new CarService();
    const result = await service.update('633ec9fa3df977e30e993492', carInput);
    expect(result).to.deep.equal(carOutput);
    sinon.restore();
  });

  describe('Test Service Motorcycle', function () {
    it('should create a motorcycle with success', async function () {
      const motoInput: IMoto = {
        model: 'Hayabusa',
        year: 2015,
        color: 'Black',
        status: true,
        buyValue: 60.000,
        category: 'Street',
        engineCapacity: 1200,
      };

      const motoOutput: Motorcycle = new Motorcycle({
        model: 'Harley',
        year: 2008,
        color: 'Gray',
        status: true,
        buyValue: 50.000,
        category: 'Custom',
        engineCapacity: 900,
      });

      sinon.stub(Model, 'create').resolves(motoOutput);
      const service = new MotoService();
      const result = await service.create(motoInput);
      expect(result).to.deep.equal(motoOutput);
      sinon.restore();
    });

    it('should return registered all motorcycles', async function () {
      const moto: Motorcycle[] = allVehicle.map((mot) => new Motorcycle(mot as unknown as IMoto));
      sinon.stub(Model, 'find').resolves(moto);
      const service = new MotoService();
      const result = await service.findAll();
      expect(result).to.deep.equal(moto);
    });
  
    it('should successfully search for a motorcycle by id', async function () {
      const moto: Motorcycle = new Motorcycle(oneVehicle as unknown as IMoto);
      sinon.stub(Model, 'findById').resolves(moto);
      const service = new MotoService();
      const result = await service.findById('634852326bg5459438fbea31');
      expect(result).to.deep.equal(moto);
    });
  
    it('should successfully update a motorcycle by id', async function () {
      const MotoInput: IMoto = {
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };
  
      const MotoOutput: Motorcycle = new Motorcycle({
        id: '637819f3f09df7d36ef01c36',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      });
  
      sinon.stub(Model, 'findOneAndUpdate').resolves(MotoOutput);
      const service = new MotoService();
      const result = await service.update('637819f3f09df7d36ef01c36', MotoInput);
      expect(result).to.deep.equal(MotoOutput);
      sinon.restore();
    });
  });
});
