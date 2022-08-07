const router = require('express').Router();
const Questions = require('../../models/questions');

// CREATE questions in DB

router.post('/', async (req, res) => {
    try {
        const questionsData = await Questions.create(req.body);
        res.status(200).json(questionsData);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const questionsData = await Questions.findAll();
      res.status(200).json(questionsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;