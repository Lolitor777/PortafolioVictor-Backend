import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Contact = db.define('tb_contact', {
    name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
})


export default Contact;