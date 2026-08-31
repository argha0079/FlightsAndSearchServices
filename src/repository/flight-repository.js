import { prisma } from "../config/dbConfig.js";

export class FlightRepository {

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

    async createFlight(data) {
        try {
            const flight = await prisma.flight.create({
                data
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await prisma.flight.findUnique({
                where: {
                    id: flightId,
                }
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
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