import IVehicle from './IVehicle';

export type CategoryType = 'Street' | 'Custom' | 'Trail';

export default interface IMotorcycle extends IVehicle {
  category: CategoryType;
  engineCapacity: number;
}
