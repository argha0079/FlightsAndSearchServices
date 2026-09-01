import { prisma } from "../config/dbConfig.js";
import CrudRepository from "./crud-repository.js";

export class AirportRepository extends CrudRepository{
    constructor() {
        super(prisma.airport);
    }

    async getAirportByCity(cityId, filter) {
        try {
            if (cityId) {
                const airports = await prisma.airport.findMany({
                    where: {
                        cityId
                    }
                })
                return airports;
            }
            if(filter?.name) {
                const airports = await prisma.airport.findMany({
                    where: {
                        name: {
                            startsWith: filter.name
                        }
                    }
                })
                return airports;
            }
            const airports = await prisma.airport.findMany()
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

}