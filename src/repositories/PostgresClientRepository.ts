import { IClient } from "../models/IClient";
import { IClientRepository } from "./IClientRepository";

export class PostgresClientRepository implements IClientRepository {
    private clients: IClient[] = [];

    async create(client: IClient): Promise<void> {
        this.clients.push(client);
    }

    async findById(id: number): Promise<IClient | null> {
        const client = this.clients.find(c => c.id === id);
        return client || null;
    }

    async findAll(): Promise<IClient[]> {
        return this.clients;
    }
}