var path = require('path');

module.exports = function (app) {
    app.get('/', function (req, res) {
        //Home page should be where the user selects either player or manager, then sends to login page 
        res.sendFile(path.join(__dirname + "/../views/frontPage.html"));
    })
/*     app.get('/profile/:id', function (req, res) {
        var name = req.params.id;
        console.log("html route");
        console.log(name);
        res.render(path.join(__dirname + "/../views/profile.handlebars"));
    }) */

    app.get('/creategame', function (req, res) {
        res.sendFile(path.join(__dirname + "/../views/creategame.html"));
    })

    app.get('/createprofile', function (req, res) {
        res.sendFile(path.join(__dirname + "/../views/user-input.html"));
    })
    app.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname + "/../views/login.html"));
    })
}