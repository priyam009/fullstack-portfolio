require("dotenv").config();

//Require Express
var express = require("express");

//Require Express Handlebars
var exphbs = require("express-handlebars");

//Require database model
var db = require("./models");

//Initialise express
var app = express();

//PORT assign
var PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Require Routes
require("./routes/apiroutes.js")(app);

//Clearing database only if the node environment is test
var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//Starting server and syncing models
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port http://localhost:" + PORT);
  });
});
