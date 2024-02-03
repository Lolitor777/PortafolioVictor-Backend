import { request, response } from "express";
import Photo from '../models/Photo.js'

export const consultPhotos = async(req, res = response) => {

    try {
        const photo = await Photo.findAll()

        res.status(200).json({
            ok: true,
            photo
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg:'Error al consultar fotos'
        })
    }
}