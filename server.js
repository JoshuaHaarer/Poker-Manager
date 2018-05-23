var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require('express-validator');
var expect = require("chai").expect;
var should = require('chai').should();
// var url = window.location.href;

var PORT = process.env.PORT || 8080;

var app = express();
var db = require("./models");

app.use(expressValidator());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// app.use(express.static(__dirname + 'frontPage'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/apiRoutes.js")(app);
require("./controllers/htmlRoutes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//   describe("GET /login", function(){
//     it("should render the login page after clicking the log-in button", function(done){
//         request.get('/login')
//         .expect(200)
//         .end(function(err, result){
//             expect.url.to.equal('http://localhost:8080/login');
//             done(err);
//         })
//     })
// })

});
