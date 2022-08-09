const router = require('express').Router();


const userRoutes = require('./user-routes');
const newQuestionsRoutes = require('./newquestionsRoutes');
// const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/newquestions', newQuestionsRoutes);
// router.use('/profile', profileRoutes);


module.exports = router;
