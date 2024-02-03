import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Project = db.define('tb_project', {
    photo: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
})


export default Project;