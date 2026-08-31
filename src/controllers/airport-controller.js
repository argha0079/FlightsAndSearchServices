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