import Moto from '../Domains/Motorcycle';
import IMoto from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';
import VehicleService from './VehicleService';

export default class CarService extends VehicleService<IMoto> {
  constructor() {
    const motoODM = new MotoODM();
    super(motoODM, 'Motorcycle');
  }

  public createVehicleDomain(moto: IMoto | null): Moto {
    if (moto) {
      return new Moto(moto);
    }
    throw super.notFoundException();
  }
}
