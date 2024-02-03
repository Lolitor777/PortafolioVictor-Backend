import { request, response } from "express";
import Comment from '../models/Comment.js';
import Photo from "../models/Photo.js";


export const consultComment = async(req, res = response) => {

    try {
        
        const comment = await Comment.findAll({
            include: [{
                model: Photo,
                attributes: ['description']
            }],
            order: [["createdAt", "DESC"]]
        })

        res.status(200).json({
            ok: true,
            comment
        })

    } catch (error) {
        
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al consultar comentarios'
        })
    }
}

export const createComment = async(req, res = response) => {

    const { name, id_photo, description } = req.body

    try {
        
        const comment = await Comment.create({
            name,
            id_photo,
            description
        })

        res.status(200).json({
            ok: true,
            msg: 'Comentario creado con éxito!' 
        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al crear comentario'
        })
    }
}

export const deleteComment = async(req, res = response) => {

    const { id } = req.params;

    try {
        
        const comment = await Comment.destroy({
            where: {
                id
            }
        })

        res.status(200).json({
            ok: true,
            msg: 'Comentario eliminado'
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al eliminar comentario'
        })
    }
}