var express = require("express");

var router = express.Router();

var db = require("../db/");

router.get("/", function(req, res) {

  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

  db.Burger.findAll()
   
    .then(function(dbBurger) {
      console.log(dbBurger);
    
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {

  db.Burger.create({
    burger_name: req.body.burger_name
  })
  
  .then(function(dbBurger) {
    
    console.log(dbBurger);
    
    res.redirect("/");
  });
});


router.put("/burgers/update", function(req, res) {

  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
  });
});

module.exports = router;