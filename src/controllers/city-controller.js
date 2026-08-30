import { CityService } from "../services/index.js";

const cityService = new CityService();

export const create = async (req, res) => {

    try {
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a city", 
            err: error
        })
    }
}

export const destroy = async (req, res) => {

    try {
        const cityId = Number(req.params.id);
        const response = await cityService.deleteCity(cityId);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to delete city",
            err: error
        })
    }

}

export const update = async (req, res) => {

    try {
        const cityId = Number(req.params.id);
        const response = await cityService.updateCity(cityId, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully updated a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {}, 
            success: false,
            message: "unable to update city", 
            err: error
        })
    }

}

export const get = async (req, res) => {
    try {
        const cityId = Number(req.params.id) 
        const response = await cityService.getCity(cityId);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched a city",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch a city",
            err: error
        })
    }

}

export const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAll(req.query);

        return res.status(200).json({
            data: cities,
            success: true,
            message: "cities fetched successfully",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch cities",
            err: error
        })
    }
}