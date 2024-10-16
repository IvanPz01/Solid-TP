import { IClient } from "../models/IClient";
import { IClientRepository } from "../repositories/IClientRepository";

export class ClientService {
    constructor(private clientRepository: IClientRepository){}
    async createClient(client:IClient):Promise<void>{
        await this.clientRepository.create(client)
    }
    async getClientById(id:number):Promise<IClient | null>{
        return await this.clientRepository.findById(id)
    }
    async getAllClients():Promise<IClient[]>{
        return await this.clientRepository.findAll()
    }
}