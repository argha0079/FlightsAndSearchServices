import { AirportService } from "../services/index.js";

const airportService = new AirportService()

export const getAirportByCity = async (req, res) => {
    try {
        const cityId = Number(req.query.cityId);
        const airports = await airportService.getAirportByCity(cityId);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "airports fetched successfully",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch airports", 
            err: error
        })
    }
}

export const createAirport = async (req, res) => {
    try {
        const data = req.body;
        const airport = await airportService.createAirport(data);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "airport created successfully",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to create airport",
            err: error
        })
    }
}
export const destroyAirport = async (req, res) => {

    try {
        const airportId = Number(req.params.id);
        const response = await airportService.destroyAirport(airportId);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted an airport",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to delete airport",
            err: error
        })
    }

}