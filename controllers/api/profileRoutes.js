// once the user gets to this profile route home page they g et user data from DB
// const router = require('express').Router();
// const NewQuestions = require('../../models/newQuestions');


// router.get('/', async (req, res) => { 
    
//     try {
  
//         const newQuestionsData = await NewQuestions.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             attributes: [
//                 'gasoline',
//                 'diesel',
//                 'electric',
//                 'miles',
//                 'hours',
//                 'nattie',
//                 'liquid',
//                 'fuel',
//                 'recycle',
//                 'bbq',
//                 'phones',
//                 'water',
//                 'meat', 
//                 'average',
//                 'nobeef',
//                 'vegetarian',
//                 'vegan',
//             ],
         
//         });
//         console.log(newQuestionsData)
//         // Serialize data so the template can read it -gets a plane object out of the data
//         const profileCharts = newQuestionsData.map((profileCharts) => profileCharts.get({ plain: true }));
        
//         // profileCharts is what will get rendered out into the brackets in the profile.handlebars page...?
//         res.render('profile', {
//             layout: 'profile.handlebars', profileCharts,
//             logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });


//   router.get('/', async (req, res) => {
//     try {
//       const newQuestionsData = await NewQuestions.findAll();
//       res.status(200).json(newQuestionsData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
