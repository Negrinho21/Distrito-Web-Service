const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

// Definição do modelo
const distrito = sequelize.define('distrito', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    total_populacao:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    area:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    densidade:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    total_masculino:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    total_feminino:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    tableName: 'distritos',
    timestamps: false
});
module.exports = distrito;