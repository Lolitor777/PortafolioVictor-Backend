import { request, response } from "express";
import Project from '../models/Project.js'


export const consultProject = async(req, res = response) => {
    
    try {

        const project = await Project.findAll();

        res.status(200).json({
            ok: true,
            project
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al consultar proyecto'
        })
    }
}


export const createProject = async(req, res = response) => {

    const { photo, name, link } = req.body

    try {

        const project = await Project.create({
            photo,
            name,
            link
        })

        res.status(200).json({
            ok: true,
            msg: 'Proyecto añadido correctamente'
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al crear proyecto'
        })
    }
}


export const deleteProject = async(req, res = response) => {

    const { id } = req.params

    try {

        const project = await Project.destroy({
            where:{
                id
            }
        })

        res.status(200).json({
            ok: true,
            msg: 'Proyecto eliminado con éxito'
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al eliminar proyecto'
        })
    }
}