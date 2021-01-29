const express = require("express");
const router = express.Router();
const session = require("express-session");
const databaseController = require("../controllers/databaseController");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", databaseController.getInstitutions, (req, res) => {
  if(res.locals.institutions) {
    res.render("register", {
      institutions: res.locals.institutions,
      messageFail: session.messageFail
      //queryData: req.query
    });
  } else {
    res.status(500).redirect("/");
  }
})

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;