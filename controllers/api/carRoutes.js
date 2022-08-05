const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');
const Sequelize = require('sequelize');



  router.get('/make', async (req, res) => {
    try {
      const carData = await Car.findOne({
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
    }
  });

  module.exports = router;