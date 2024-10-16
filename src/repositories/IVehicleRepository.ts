import { IVehicle } from "../models/IVehicleModels"
export interface IVehicleRepository {
    create(vehicle:IVehicle): Promise<void>;
    findById(id:number): Promise<IVehicle | null>;
    findAll(): Promise<IVehicle[]>;
}