
var path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        //Home page should be where the user selects either player or manager, then sends to login page 
        res.sendFile(path.join(__dirname + "/../views/main.html"));
    })
    app.get('/profile/:id', function(req, res) {
        var name = req.params.id;
        console.log(name);
        res.render(path.join(__dirname + "/../views/profile.handlebars"));
    })
    app.get('/creategame', function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/creategame.html"));
    })
}