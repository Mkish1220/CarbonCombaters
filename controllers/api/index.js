const router = require('express').Router();
const carRoutes = require('./carRoutes');


router.use('/car', carRoutes);
module.exports = router;
