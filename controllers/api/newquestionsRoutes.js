const router = require('express').Router();
const NewQuestions = require('../../models/newQuestions');

// CREATE new user data
router.post('/', async (req, res) => {
  try {
    const newQuestionsData = await NewQuestions.create(req.body);
    newQuestionsData.toJSON();
    console.log("hello");
    console.log(newQuestionsData);
    res.status(200).json(newQuestionsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET user data
router.get('/', async (req, res) => {
  try {
    const newQuestionsData = await NewQuestions.findAll();
    res.status(200).json(newQuestionsData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;