import { prisma } from "../config/dbConfig.js"

export class CityRepository {
    async createCity({ name }) {
        try {
            const city = await prisma.city.create({ 
                data: {
                    name
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await prisma.city.delete({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error}; 
        }
    }

    async getCity(cityId) {
        
        try {
            const city = await prisma.city.findUnique({
                where: {
                    id: cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error}; 
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await prisma.city.update({
                where: {
                    id: cityId
                }, data
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}
