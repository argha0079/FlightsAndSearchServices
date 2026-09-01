import { prisma } from "../config/dbConfig.js";
import CrudRepository from "./crud-repository.js";

export class AirplaneRepository extends CrudRepository{
    constructor() {
        super(prisma.airplane);
    }
}