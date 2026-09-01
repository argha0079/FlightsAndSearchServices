import { AirportRepository } from "../repository/index.js";
import { CrudService } from "./crud-service.js";


export class AirportService extends CrudService {

    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository);
        this.airportRepository = airportRepository;
    }

    async getAirportByCity(cityId, filter) {
        try {
            const airports = await this.repository.getAirportByCity(cityId, filter);
            return airports;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}