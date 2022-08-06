const router = require('express').Router();

const carsRoutes = require('./carsRoutes');


router.use('/cars', carsRoutes);


module.exports = router;
