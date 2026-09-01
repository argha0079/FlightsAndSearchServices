import { prisma } from "../config/dbConfig.js";
import CrudRepository from "./crud-repository.js";

export class FlightRepository extends CrudRepository{

    constructor() {
        super(prisma.flight);
    }
    #createFilter(data) {
        let filter = {};
        if (data.departureAirportId) {
            filter.departureAirportId = Number(data.departureAirportId);
        }
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = Number(data.arrivalAirportId);
        }
        if (data.minPrice || data.maxPrice) {
            filter.price = {};
            if (data.minPrice) {
                filter.price.gte = Number(data.minPrice);
            }
            if (data.maxPrice) {
                filter.price.lte = Number(data.maxPrice);
            }
        }
        return filter;
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await prisma.flight.findMany({
                where: filterObject,
                include: {
                    airplane: true,
                    departureAirport: true,
                    arrivalAirport: true,
                },
            })
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };

        }
    }
    
    
}