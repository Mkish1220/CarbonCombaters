const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

Questions.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
        country: {
        type: DataTypes.STRING,
        allowNull: false
            
        },
        state: {
         type: DataTypes.STRING,
        },
        cpass: {
            type: DataTypes.INTEGER,
           },
        make: {
            type: DataTypes.STRING,
           },   

        model: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.STRING
            },
        lastName: {
            type: DataTypes.STRING
                },
        phone: {
            type: DataTypes.INTEGER
                },       
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'cars'
    }
);

module.exports = Questions;
