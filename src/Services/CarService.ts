import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import VehicleService from './VehicleService';

export default class CarService extends VehicleService<ICar> {
  constructor() {
    const carODM = new CarODM();
    super(carODM, 'Car');
  }

  public createVehicleDomain(car: ICar | null): Car {
    if (car) {
      return new Car(car);
    }
    throw super.notFoundException();
  }
}
