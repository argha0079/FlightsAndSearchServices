export class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async getAll(filter = {}) {
        try {
            const response = await this.repository.getAll(filter);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await this.repository.getById(id);

            if (!response) {
                throw new Error("Resource not found");
            }

            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await this.repository.delete(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}