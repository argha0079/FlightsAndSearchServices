import { AirplaneRepository } from "../repository/index.js";

const airplaneRepository = new AirplaneRepository();

export class AirplaneService {
    async createAirplane(data) {
        try {
            const airplane = await airplaneRepository.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
    async destroyAirplane(airplaneId) {
        try {
            const response = await airplaneRepository.destroyAirplane(airplaneId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
    async getAllAirplane() {
        try {
            const airplanes = await airplaneRepository.getAllAirplane();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
    async getAirplaneById(airplaneId) {
        try {
            const airplane = await airplaneRepository.getAirplaneById(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}