const router = require('express').Router();
const { Car, DataTypes } = require('../../models/car');
const withAuth = require('../../utils/auth');
const Sequelize = require('sequelize');


  router.get('/:id', async (req, res) => {
    try {
      const carData = await Car.findByPk({
        where: {
          make: req.params.make
        },
      });
  
      if (!carData) {
        res.status(404).json({
          message: 'This car was not found'
        });
        return;
      }
  
      res.status(200).json(carData);
    } catch (err) {
      res.status(500).json(err);
      console.log(carData)
    }
  });

  module.exports = router;