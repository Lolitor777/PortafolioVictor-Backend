import { request, response } from "express";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import generateJWT from "../helpers/jwt.js";


export const consultUserById = async(req, res = response) => {
    
    const { id } = req.params

    try {
        const user = await User.findOne({
            where: {
                id
            }
        })

        if (!user) {
            return res.status(200).json({
                ok: false,
                msg: 'El usuario no existe'
            })
        }

        res.status(200).json({
            ok: true,
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al encontrar usuario'
        })
    }
}


export const createUser = async(req, res = response) => {

    let { email, password } = req.body

    try {

        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt)

        const user = await User.create({
            email,
            password
        })

        const token = await generateJWT( user.id )

        res.status(200).json({
            ok: true,
            msg: 'Registro completo',
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al crear usuario'
        })
    }
}



export const login = async(req, res = response) => {

    const { email, password } = req.body

    try {

        const user = await User.findOne({
            where:{
                email
            }
        });

        if ( !user ) {
            return res.status(200).json({
                ok: false,
                msg: 'Usuario incorrecto'
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password)

        if ( !validPassword ) {
            return res.status(200).json({
                msg: 'Contraseña incorrecta'
            })
        }

        const token = await generateJWT( user.dataValues.id );

        res.status(200).json({
            user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error interno del servidor'
        })
    }
}

export const logout = async(req, res = response) => {

    try {
        res.status(200).json({
            msg: 'El usuario cerró sesión correctament'
        })
    } catch (error) {
        console.log(error);
    }
}


export const renewToken = async(req, res = response) => {

    const { id } = req;

    const user = await User.findByPk( id );

    if (!user) {
        return res.status(200).json({
            ok: false,
            msg: 'El usuario no existe'
        })
    }

    return res.json({
        user,
        msg: 'Token validado'
    })
}