class CrudRepository {

    constructor(model) {
        this.model = model;
    }
// create(data) destroy(modelId) get(modelId) getAll() update(modelId, data)
    async create(data) {
        try {
            const result = await this.model.create({
                data
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw { error };
        }
    }

    async delete(modelId) {
        try {
            const result = await this.model.delete({
                where: {
                    id: modelId,
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw { error };
        }
    }

    async getById(modelId) {
        try {
            const result = await this.model.findUnique({
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw { error };
        }
    }

    async getAll(filter) {
        try {
            const result = await this.model.findMany({
                where: filter
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw { error };
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.update({
                where: {
                    id: modelId,
                },
                data
            })
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw { error };
        }
    }
}

export default CrudRepository;