import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Photo from "./Photo.js";

const Comment = db.define('tb_comment', {
    name: {
        type: DataTypes.STRING
    },
    id_photo: {
        type: DataTypes.BIGINT
    },
    description: {
        type: DataTypes.STRING
    }
})

Comment.belongsTo(Photo, {
    foreignKey: 'id_photo'
})

export default Comment;

