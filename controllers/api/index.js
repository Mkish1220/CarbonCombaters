const router = require('express').Router();

const carsRoutes = require('./carsRoutes');
const userRoutes = require('./user-routes');
const questionsRoutes = require('./questionsRoutes');

router.use('/users', userRoutes);
router.use('/cars', carsRoutes);
router.use('/questions', questionsRoutes);


module.exports = router;
