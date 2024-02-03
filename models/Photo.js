import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Photo = db.define('tb_photo', {
    description: {
        type: DataTypes.STRING
    }
})

export default Photo;