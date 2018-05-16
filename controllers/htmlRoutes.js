
var path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/main.html"));
    })
    app.get('/:name', function(req, res) {
        var name = req.body.name;
        console.log(name);
        res.render(path.join(__dirname + "/../views/profile.handlebars"));
    })
}