import { VehicleService } from "../services/VehicleService";
import { Request, Response } from "express";

export class VehicleController {
    constructor(private vehicleService: VehicleService) {}
    async createVehicle(req: Request, res: Response): Promise<void> {
        const vehicle = req.body;
        await this.vehicleService.createVehicle(vehicle);
        res.status(201).send('Creado');
    }
    async getVehicleById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const vehicle = await this.vehicleService.getVehicleById(id);
        if(vehicle){
            res.status(200).send(vehicle);
        }else{
            res.status(404).send('No encontrado');
        }
    }
    async getAllVehicles(req: Request, res: Response): Promise<void> {
        const vehicles = await this.vehicleService.getAllVehicles();
        res.status(200).send(vehicles);
    }
}
