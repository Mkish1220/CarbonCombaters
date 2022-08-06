const router = require('express').Router();

const carsRoutes = require('./carsRoutes');

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/cars', carsRoutes);


module.exports = router;
