import { IVehicleRepository } from "../repositories/IVehicleRepository";
import { IVehicle } from "../models/IVehicleModels";

export class VehicleService {
    constructor(private vehicleRepositor: IVehicleRepository){}

    async createVehicle(vehicle:IVehicle):Promise<void>{
        await this.vehicleRepositor.create(vehicle)
    }
    async getVehicleById(id:number):Promise<IVehicle | null>{
        return await this.vehicleRepositor.findById(id)
    }
    async getAllVehicles():Promise<IVehicle[]>{
        return await this.vehicleRepositor.findAll()
    }
}