import { AirplaneRepository } from "../repository/index.js";
import { CrudService } from "./crud-service.js";


export class AirplaneService extends CrudService {
    constructor() {
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
        this.airplaneRepository = airplaneRepository;

    }

}