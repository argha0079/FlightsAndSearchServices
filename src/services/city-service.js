import { CityRepository } from "../repository/index.js";
import { CrudService } from "./crud-service.js";

export class CityService extends CrudService {

    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository);
        this.cityRepository = cityRepository;
    }

    async getAll(filter) {
        try {
            const cities = await this.repository.getAll({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

}