import { prisma } from "../config/dbConfig.js";

export class AirportRepository {

    async getAirportByCity(cityId) {
        try {
            if(cityId) {
                const airports = await prisma.airport.findMany({
                    where: {
                        cityId
                    }
                })
                return airports;
            }
            const airports = await prisma.airport.findMany()
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}