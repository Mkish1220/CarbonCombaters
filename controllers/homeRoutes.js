const router = require('express').Router();

router.get("/", async (req, res) => {
  res.render("landing", { title: "Carbon Combaters" });
});

router.get("/profile", async (req, res) => {
  res.render("profile", { title: "Profile" });
});

router.get("/learn", async (req, res) => {
  res.render("learnMore", { title: "Learn More" });
});

router.get("/sign", async (req, res) => {
  res.render("signIn", { title: "Sign In" });
});

router.get("/questions", async (req, res) => {
  res.render("questions", { title: "Profile Questions" });
});

router.get("/edit", async (req, res) => {
  res.render("edit", { title: "Learn More About You" });
});

module.exports = router;
