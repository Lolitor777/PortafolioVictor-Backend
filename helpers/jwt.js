import jwt from "jsonwebtoken";
import { PRIVATE_KEY } from "../config.js";


const generateJWT = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = { id }
        jwt.sign( payload, `${PRIVATE_KEY}`, {
            expiresIn: '2h'
        }, (err, token) => {
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el token')
            }

            resolve( token );
        })
    })
}

export default generateJWT;