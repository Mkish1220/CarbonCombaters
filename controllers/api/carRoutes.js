const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');
const Sequelize = require('sequelize');


router.get('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.findByPk(req.params.id, {
        // JOIN with locations, using the Trip through table
        include: [{ model: Location, through: Trip, as: 'planned_trips' }]
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller found with this id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });