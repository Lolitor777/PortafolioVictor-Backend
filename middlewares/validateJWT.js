import { response } from "express";
import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from "../config.js";

const validateJWT = ( req, res = response, next ) => {

    const token = req.header('x-token');

    if( !token ){
        return res.status(400).json({
            ok: false,
            msg: 'No hay token'
        })
    }

    try {
        const { id } = jwt.verify(
            token,
            `${PRIVATE_KEY}`
        )

        req.id = id
        
    } catch (error) {

        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Token no válido'
        })
    }

    next()
}

export default validateJWT;