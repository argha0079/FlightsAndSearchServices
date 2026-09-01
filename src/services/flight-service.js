import { FlightRepository, AirplaneRepository } from "../repository/index.js"
import { compareTime } from "../utils/helper.js";
import { CrudService } from "./crud-service.js";

export class FlightService extends CrudService {

    constructor() {
        const flightRepository = new FlightRepository();
        super(flightRepository);
        this.flightRepository = flightRepository;
        this.airplaneRepository = new AirplaneRepository();
    }
    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival time cannot be greater than departure time" }
            }
            const airplane = await this.airplaneRepository.getById(data.airplaneId);
            const flight = await this.flightRepository.create({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error: "Arrival time must be after departure time"};
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}