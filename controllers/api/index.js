const router = require('express').Router();

const carsRoutes = require('./carsRoutes');
const userRoutes = require('./user-routes');
const questionsRoutes = require('./questionsRoutes');
const newQuestionsRoutes = require('./newquestionsRoutes');
// const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/cars', carsRoutes);
router.use('/questions', questionsRoutes);
router.use('/newquestions', newQuestionsRoutes);
// router.use('/profile', profileRoutes);


module.exports = router;
