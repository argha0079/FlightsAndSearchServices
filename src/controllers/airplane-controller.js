import { AirplaneService } from "../services/index.js";

const airplaneService = new AirplaneService();

export const createAirplane = async (req, res) => {
    try {
        const data = req.body;
        const airplane = await airplaneService.createAirplane(data);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: "airplane created successfully",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to create airplane",
            err: error
        })
    }
}

export const destroyAirplane = async (req, res) => {
    try {
        const airplaneId = Number(req.params.id);
        const response = await airplaneService.destroyAirplane(airplaneId);
        return res.status(201).json({
            data: response,
            success: true,
            message: "airplane deleted successfully",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to delete airplane",
            err: error
        })
    }

}

export const getAllAirplanes = async (req, res) => {
    try { 
        const airplanes = await airplaneService.getAllAirplane();
        return res.status(201).json({
            data: airplanes,
            success: true,
            message: "airplanes fetched successfully",
            err: {}
        })

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch airplane",
            err: error
        })
    }
}

export const getAirplaneById = async (req, res) => {
    try { 
        const airplaneId = Number(req.params.id);
        const airplanes = await airplaneService.getAirplaneById(airplaneId);
        return res.status(201).json({
            data: airplanes,
            success: true,
            message: "airplanes fetched successfully",
            err: {}
        })

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch airplanes",
            err: error
        })
    }
}