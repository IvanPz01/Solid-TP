import { ClientService } from "../services/ClientService";
import { Request, Response } from "express";

export class ClientController {
    constructor(private clientService: ClientService) {}
    async createClient(req: Request, res: Response): Promise<void> {
        const client = req.body;
        await this.clientService.createClient(client);
        res.status(201).send('Creado');
    }
    async getClientById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const client = await this.clientService.getClientById(id);
        if(client){
            res.status(200).send(client);
        }else{
            res.status(404).send('No encontrado');
        }
    }
    async getAllClients(req: Request, res: Response): Promise<void> {
        const clients = await this.clientService.getAllClients();
        res.status(200).send(clients);
    }
}