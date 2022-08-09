const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewQuestions extends Model { }

NewQuestions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        gasoline: {
            type: DataTypes.BOOLEAN,
        },
        diesel: {
            type: DataTypes.BOOLEAN,
        },
        electric: {
            type: DataTypes.BOOLEAN,
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
        meat: {
            type: DataTypes.BOOLEAN,
        },
        average: {
            type: DataTypes.BOOLEAN,
        },
        nobeef: {
            type: DataTypes.BOOLEAN,
        },
        vegetarian: {
            type: DataTypes.BOOLEAN,
        },
        vegan: {
            type: DataTypes.BOOLEAN,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                // user comes from a second model in another js file in this folder
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'newquestions'
    }
);

module.exports = NewQuestions;
