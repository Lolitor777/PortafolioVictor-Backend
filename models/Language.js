import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Language = db.define('tb_language', {
    title: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    }
})


export default Language;