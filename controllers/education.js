import { request, response } from "express";
import Education from '../models/Education.js';


export const consultEducation = async(req, res = response) => {

    try {
        
        const education = await Education.findAll()
        
        res.status(200).json({
            ok: true,
            education
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al consultar la tabla de educación'
        })
    }
}

export const createEducation = async(req, res = response) => {

    const { name, start_date, finish_date} = req.body;

    try {

        const education = await Education.create({
            name,
            start_date,
            finish_date
        })

        res.status(200).json({
            ok: true,
            msg: 'Se creó correctamente'
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al crear campo en tabla de educación'
        })
    }
}