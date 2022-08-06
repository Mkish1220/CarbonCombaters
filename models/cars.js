
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cars extends Model {}

Cars.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
        Make: {
        type: DataTypes.STRING,
        allowNull: false
            
        },
        Model: {
         type: DataTypes.STRING,
        },
        
        Class: {
         type: DataTypes.STRING
        },
        CO2: {
         type: DataTypes.INTEGER
        },
        
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'cars'
    }
);

module.exports = Cars;
