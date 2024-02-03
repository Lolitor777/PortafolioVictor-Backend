import { request, response } from "express";
import Contact from "../models/Contact.js";


export const createContact = async(req, res = response) => {

    const {name, last_name, email, description} = req.body;

    try {

        const contact = await Contact.create({
            name,
            last_name,
            email,
            description
        })

        res.status(200).json({
            ok: true,
            msg: 'He recibido tu mensaje. Te contactaré lo antes posible.',
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al crear usuario'
        })
    }
}