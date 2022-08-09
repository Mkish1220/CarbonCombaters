const router = require('express').Router();
const NewQuestions = require('../models/newQuestions');
// const User = require('../models/user');

router.get("/landing", async (req, res) => {
  res.render("landing", { title: "Carbon Combaters" });
});

// router.get("/profile", async (req, res) => {
//   res.render("profile", { title: "Profile" });
// });

// router.get('/', async (req, res) => {
//   const newQuestionsData = await NewQuestions.findAll().catch((err) => { 
//       res.json(err);
//     });
//       const questions = newQuestionsData.map((question) => question.get({ plain: true }));
//       res.render('profile', { questions });
//     });


router.get('/', async (req, res) => { 
    
    try {
  
        const newQuestionsData = await NewQuestions.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'gasoline',
                'diesel',
                'electric',
                'miles',
                'hours',
                'nattie',
                'liquid',
                'fuel',
                'recycle',
                'bbq',
                'phones',
                'water',
                'meat', 
                'average',
                'nobeef',
                'vegetarian',
                'vegan',
            ],
         
        });
        console.log(newQuestionsData)
        // Serialize data so the template can read it -gets a plane object out of the data
        const profileCharts = newQuestionsData.map((profileCharts) => profileCharts.get({ plain: true }));
        
        // profileCharts is what will get rendered out into the brackets in the profile.handlebars page...?
        res.render('profile', {
            layout: 'profile.handlebars', profileCharts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
  });



router.get("/learn", async (req, res) => {
  res.render("learnMore", { title: "Learn More" });
});

router.get("/sign", async (req, res) => {
  res.render("signUp", { title: "Sign Up" });
});

router.get("/questions", async (req, res) => {
  res.render("questions", { title: "Profile Questions" });
});

router.get("/contact", async (req, res) => {
  res.render("contact", { title: "Contact us" });
});


module.exports = router;




