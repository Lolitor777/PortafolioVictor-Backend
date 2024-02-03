import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Education = db.define('tb_education', {
    name: {
        type: DataTypes.STRING
    },
    start_date: {
        type: DataTypes.DATE
    },
    finish_date: {
        type: DataTypes.DATE
    }
})


export default Education;