const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
	{
		make: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		model: {
			type: DataTypes.STRING,
		},
		
		class: {
			type: DataTypes.STRING
		},
		emissions: {
			type: DataTypes.INTEGER
		},
		
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'car',
	}
);

module.exports = Car;