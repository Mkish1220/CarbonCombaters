// once the user gets to this profile route home page they g et user data from DB
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
        console.log(profileData)
        // Serialize data so the template can read it -gets a plane object out of the data
        const profileCharts = profileData.map((profileCharts) => profileCharts.get({ plain: true }));
        
        // profileCharts is what will get rendered out into the brackets in the profile.handlebars page...?
        res.render('profile', {
            layout: 'profile.handlebars', profileCharts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
  });