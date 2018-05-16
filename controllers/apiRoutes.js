//Dependencies
var db = require('../models');

module.exports = function(app) {

    //GET route for all games
    app.get('/api/games', function(req, res) {
        db.Games.findAll({})
        .then(function(dbGame) {
            res.json(dbGame)
        })
    });

    //GET route for all profiles
    app.get('/api/profiles', function(req, res) {
        db.playerProfile.findAll({})
        .then(function(dbProfile) {
            res.json(dbProfile)
        })
    });

    //POST route for new game
    app.post('/api/games', function(req, res) {
        console.log(req.body);
        db.Games.create({
            gameType : req.body.gameType,
            totalTimePlayed : req.body.totalTimePlayed,
            largestPool : req.body.largestPool
        }).then(function(dbGame) {
            res.json(dbGame);
        });
    });

    //POST route for new profile
    app.post('/api/profiles', function(req, res) {
        db.playerProfile.create({
            playerName : req.body.playerName,
            nickName : req.body.nickName,
            totalWins : req.body.totalWins,
            knockouts : req.body.knockouts,
            ranking : req.body.ranking,
            bounties : req.body.bounties
        }).then(function(dbProfile) {
            res.json(dbProfile)
        });
    });
}