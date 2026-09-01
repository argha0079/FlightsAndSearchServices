import { prisma } from "../config/dbConfig.js"
import CrudRepository from "./crud-repository.js";

export class CityRepository extends CrudRepository{
    constructor() {
        super(prisma.city);
    }
    async getAll(filter) { // filter can be empty also
        try {
            if(filter.name) {
                const cities = await prisma.city.findMany({
                    where: {
                        name: {
                            startsWith: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await prisma.city.findMany();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}
