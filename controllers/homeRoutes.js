const router = require('express').Router();

router.get("/", async (req, res) => {
    res.render("landing");
  });


  router.get("/profile", async (req, res) => {
    res.render("profile");
  });


  router.get("/learn", async (req, res) => {
    res.render("learnMore");
  });

  router.get("/sign", async (req, res) => {
    res.render("signIn");
  });

  router.get("/questions", async (req, res) => {
    res.render("questions");
  });
  module.exports = router;




  