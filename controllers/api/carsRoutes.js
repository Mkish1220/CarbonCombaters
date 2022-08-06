const router = require('express').Router();
const Cars  = require('../../models/cars');

// const withAuth = require('../../utils/auth');
// const Sequelize = require('sequelize');

// =========  original get route for the make ========
//   router.get('/:make', async (req, res) => {
//     try {
//       const carsData = await Cars.findOne({
//         where: {
//           make: req.params.make
//         },
//       });
  
//       if (!carsData) {
//         res.status(404).json({
//           message: 'This car was not found'
//         });
//         return;
//       }
  
//       res.status(200).json(carsData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });



  // ============== original get route for the id ============
  router.get('/:id', async (req, res) => {
    try {
      const carsData = await Cars.findByPk(req.params.id);
  
      if (!carsData) {
        res.status(404).json({message: 'No car found with this id!'});
        return;
      }
  
      res.status(200).json(carsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });




//  ===================  get route just to test with some random data ==========
 

// router.get('/', async (req, res) => {
//   try {
//     const carsData = await Cars.findAll();
//     res.status(200).json(carsData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });





module.exports = router;




