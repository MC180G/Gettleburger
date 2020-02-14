const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
// const methodOverride = require("method-override");

const app = express()
const PORT = process.env.PORT || 3660;

// var db = require("../db/");

// Sets up the Express app to handle data parsing
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride("_method"));


//app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const burgerRoutes = require("./controllers/burgers_controller.js"); 
app.use(burgerRoutes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});