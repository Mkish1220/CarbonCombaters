const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class newQuestions extends Model {}

newQuestions.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
        miles: {
        type: DataTypes.INTEGER,
        },
        hours: {
         type: DataTypes.INTEGER,
        },
        nattie: {
            type: DataTypes.BOOLEAN,
           },
        liquid: {
            type: DataTypes.BOOLEAN,
           },  
        fuel: {
            type: DataTypes.BOOLEAN,
        },
        recycle: {
            type: DataTypes.BOOLEAN,
        },
        bbq: {
            type: DataTypes.INTEGER,
        },
        phones: {
            type: DataTypes.INTEGER,
        },
        water: {
            type: DataTypes.INTEGER,
        },     
        fuel: {
            type: DataTypes.BOOLEAN,
        },
        recycle: {
            type: DataTypes.BOOLEAN,
        },
        bbq: {
            type: DataTypes.INTEGER,
        },
        phones: {
            type: DataTypes.INTEGER,
        },
        water: {
            type: DataTypes.INTEGER,
        },        
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'newquestions'
    }
);

module.exports = newQuestions;
