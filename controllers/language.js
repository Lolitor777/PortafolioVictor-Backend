import { request, response } from "express";
import Language from '../models/Language.js';


export const consultLanguage = async(req, res = response) => {

    try {
        
        const language = await Language.findAll({
            attributes: ['title', 'link']
        })


        res.status(200).json({
            ok: true,
            language
        })

    } catch (error) {
        
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al consultar lenguajes'
        })
    }
}