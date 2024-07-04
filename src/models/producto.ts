import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('Producto', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Producto;