import { IClient } from "../models/IClient";

export interface IClientRepository {
    create(client:IClient): Promise <void>
    findById(id:number): Promise<IClient | null>
    findAll(): Promise<IClient[]>
}