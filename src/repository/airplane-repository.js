import { prisma } from "../config/dbConfig.js";

export class AirplaneRepository {
    async createAirplane(data) {
        try {
            const airplane = await prisma.airplane.create({
                data
            })
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async destroyAirplane(airplaneId) {
        try {
            await prisma.airplane.delete({
                where: {
                    id: airplaneId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllAirplane() {
        try {
            const airplanes = await prisma.airplane.findMany()
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAirplaneById(airplaneId) {
        try {
            const airplane = await prisma.airplane.findUnique({
                    where: {
                        id: airplaneId
                    }
                })
                return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}