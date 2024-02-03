import { DataTypes } from "sequelize";
import db from "../database/db.js";


const User = db.define('tb_user', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
})


export default User;