const router = require('express').Router();
const { User, NewQuestions } = require('../../models/user');


// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
  
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// Get user data from DB
router.get('/', async (req, res) => { 
  try {

      const profileData = await NewQuestions.findAll({
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
      // Serialize data so the template can read it
      const profile = profileData.map((profile) => profile.get({ plain: true }));
      
      res.render('profile', {
          layout: 'profile.handlebars',
          logged_in: req.session.logged_in,
      });
  } catch (err) {
      res.status(500).json(err);
  }
});




module.exports = router;
