import express,{Application} from 'express';
import { VehicleController } from './Controller/VehicleController';
import { ClientController } from './Controller/ClientController';
import { VehicleService } from './services/VehicleService';
import { ClientService } from './services/ClientService';
import { PostgresVehicleRepository } from './repositories/PostgresVehicleRepository';
import { PostgresClientRepository } from './repositories/PostgresClientRepository';


export class App {
    private app: Application;
    constructor(){
        this.app = express();
        this.app.use(express.json());

        const vehicleRepository = new PostgresVehicleRepository();
        const vehicleService = new VehicleService(vehicleRepository);
        const vehicleController = new VehicleController(vehicleService);

        const clientRepository = new PostgresClientRepository();
        const clientService = new ClientService(clientRepository);
        const clientController = new ClientController(clientService);

        this.routes(vehicleController,clientController);
    }
    private routes(vehicleController: VehicleController, clientController: ClientController){
        this.app.post('/',vehicleController.createVehicle.bind(vehicleController));
        this.app.get('/:id',vehicleController.getVehicleById.bind(vehicleController));
        this.app.get('/',vehicleController.getAllVehicles.bind(vehicleController));

        this.app.post('/',clientController.createClient.bind(clientController));
        this.app.get('/:id',clientController.getClientById.bind(clientController));
        this.app.get('/',clientController.getAllClients.bind(clientController));
    }

    public listen(port: number){
        this.app.listen(port,()=>{
            console.log('Server is running on port 3000');
        });
    }
    
}

const app = new App();
app.listen(3000);