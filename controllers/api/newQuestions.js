const router = require('express').Router();
const NewQuestions = require('../../models/user');

// CREATE new user data
router.post('/', async (req, res) => {
    try {
      const newQuestionsData = await NewQuestions.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = newQuestionsData.id;
        req.session.loggedIn = true;
  
        res.status(200).json(newQuestionsData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


//   GET user data
  router.get('/', async (req, res) => {
    try {
      const newQuestionsData = await NewQuestions.findAll();
      res.status(200).json(carsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  