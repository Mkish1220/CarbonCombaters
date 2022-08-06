
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
            
        }
        // model: {
        //  type: DataTypes.STRING,
        // },
        
        // class: {
        //  type: DataTypes.STRING
        // },
        // emissions: {
        //  type: DataTypes.INTEGER
        // },
        
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'cars',
    }
);

module.exports = Cars;
