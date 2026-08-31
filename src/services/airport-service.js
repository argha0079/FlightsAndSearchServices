import { AirportRepository } from "../repository/index.js";

const airportRepository = new AirportRepository();

export class AirportService {

    async getAirportByCity(cityId) {
        try {
            const airports = await airportRepository.getAirportByCity(cityId);
            return airports;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async createAirport(data) {
        try {
            const airport = await airportRepository.createAirport(data);
            return airport
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async destroyAirport(airportId) {
        try {
            const response = await airportRepository.destroyAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}