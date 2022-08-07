const router = require('express').Router();
const Questions = require('../../models');

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