
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
        
        'vehicle class': {
        type: DataTypes.STRING
        },

        Transmission: {
        type: DataTypes.STRING
        },

        'CO2 Emissions(g/km)': {
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
