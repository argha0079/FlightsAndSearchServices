import { FlightService } from "../services/index.js";

const flightService = new FlightService();

export const createFlight = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "flight created successfully", 
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a flight",
            err: error
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: "flights fetched successfully",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false, 
            message: "unable to fetch flights", 
            err: error
        })
    }
}