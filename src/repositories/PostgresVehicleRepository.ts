import { IVehicle } from "../models/IVehicleModels";
import { IVehicleRepository } from "./IVehicleRepository";

export class PostgresVehicleRepository implements IVehicleRepository{
    private vehicles: IVehicle[] = [];

    async create(vehicle: IVehicle): Promise<void> {
        this.vehicles.push(vehicle);
    }

    async findById(id: number): Promise<IVehicle | null> {
        const vehicle = this.vehicles.find(v => v.id === id);
        return vehicle || null;
    }

    async findAll(): Promise<IVehicle[]> {
        return this.vehicles;
    }
}