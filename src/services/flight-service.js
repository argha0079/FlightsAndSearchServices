import { FlightRepository, AirplaneRepository } from "../repository/index.js"
import { compareTime } from "../utils/helper.js";

export class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();

    }
    
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: "Arrival time cannot be greater than departure time"}
            }
            const airplane = await this.airplaneRepository.getAirplaneById(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async deleteFlight(flightId) {
        try {
            const response = await flightRepository.deleteFlight(flightId);
            return response;
        } catch (error) {
            
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