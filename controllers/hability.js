import { request, response } from "express";
import Hability from '../models/Hability.js';


export const consultHability = async(req, res = response) => {

    try {
        
        const hability = await Hability.findAll()

        res.status(200).json({
            ok: true,
            hability
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false, 
            msg: 'Error al consultar habilidades'
        })
    }
}


export const createHability = async(req, res = response) => {

    const { title, description } = req.body

    try {

        const hability = await Hability.create({
            title,
            description
        })

        res.status(200).json({
            ok: true,
            msg: 'Se agregó la habilidad'
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al agregar habilidad'
        })
    }
}