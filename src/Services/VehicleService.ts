import Vehicle from '../Domains/Vehicle';
import AbstractODM from '../Models/AbstractODM';
import HttpException from '../utils/HttpException';

export default abstract class VehicleService<T> {
  protected vehicleODM: AbstractODM<T>;
  protected serviceName: string;

  constructor(odm: AbstractODM<T>, serviceName: string) {
    this.vehicleODM = odm;
    this.serviceName = serviceName;
  }

  protected notFoundException() {
    return new HttpException(404, `${this.serviceName} not found`);
  }

  abstract createVehicleDomain(vehicle: T | null): Vehicle;

  public async create(vehicle: T): Promise<Vehicle | null> {
    const newVehicle: T | null = await this.vehicleODM.create(vehicle);
    return this.createVehicleDomain(newVehicle);
  }

  public async findAll(): Promise<(Vehicle | null)[]> {
    const moto: T[] = await this.vehicleODM.findAll();
    const motoDomain: (Vehicle | null)[] = moto.map((motorcycle) => (
      this.createVehicleDomain(motorcycle)));
    return motoDomain;
  }

  public async findById(id: string): Promise<Vehicle> {
    const car: T | null = await this.vehicleODM.findById(id);
    if (!car) throw this.notFoundException();
    const carDomain: Vehicle = this.createVehicleDomain(car);
    return carDomain;
  }

  public async update(id: string, updateInfo: T): Promise<Vehicle> {
    const vehicle = this.createVehicleDomain(updateInfo);
    const moto: T | null = await this.vehicleODM.update(id, vehicle);
    if (!moto) throw this.notFoundException();
    const motoDomain: Vehicle = this.createVehicleDomain(moto);
    return motoDomain;
  }
}
