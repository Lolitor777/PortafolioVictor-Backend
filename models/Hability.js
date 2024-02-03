import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Hability = db.define('tb_habilitie', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})



export default Hability;