const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
	{
		Make: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Model: {
			type: DataTypes.TEXT,
		},
		Class: {
			type: DataTypes.TEXT,
		},
		Emissions: {
			type: DataTypes.Integer,
		},
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'car',
	}
);

module.exports = Car;