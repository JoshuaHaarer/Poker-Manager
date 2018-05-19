//Dependencies
var db = require('../models');
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');


module.exports = function (app) {


    //GET route for all games
    app.get('/api/games', function (req, res) {
        db.Games.findAll({})
            .then(function (dbGame) {
                res.json(dbGame)
            })
    });
    app.get('/profile/:id', function (req, res) {
        var id = req.params.id;

        db.playerProfile.findOne({
            where: {
                id: id
            },
        })
            .then(function(results){
                res.render('../views/profile.handlebars', results)
            })
           
    });

    //GET route for all profiles
    app.get('/api/profiles', function (req, res) {
        db.playerProfile.findAll({})
            .then(function (dbProfile) {
                res.json(dbProfile)
            })
    });

    //POST route for new game
    app.post('/api/games', function (req, res) {
        console.log(req.body);
        db.Games.create({
            gameType: req.body.gameType,
            totalTimePlayed: req.body.totalTimePlayed,
            largestPool: req.body.largestPool
        }).then(function (dbGame) {
            res.json(dbGame);
        });
    });

    // Register User
    app.post('/api/profiles/create', function (req, res) {
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var playerFirstName = req.body.playerFirstName;
        var playerLastName = req.body.playerLastNamel
        var nickName = req.body.nickName;

        // Validation
        req.checkBody('username', 'Username is Required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('playerFirstName', "Player first name must not be blank").notEmpty();
        req.checkBody('playerLastName', "Player last name must not be blank").notEmpty();
        req.checkBody('nickName', "Nick name must not be empty").notEmpty();

        var errors = req.validationErrors();

        if (errors) {
            res.render('register', {
                errors: errors
            });
        } else {
            db.playerProfile.create({
                email: email,
                username: username,
                password: password,
                playerName: playerName,
                nickName: nickName,
                totalWins: req.body.totalWins,
                knockouts: req.body.knockouts,
                ranking: req.body.ranking,
                bounties: req.body.bounties
            }).then(function (dbProfile) {
                res.json(dbProfile)
            });
        }
    });
    passport.use(new LocalStrategy(
        function (username, password, done) {
            db.Profile.findOne({where: {
                username : username
            }}).then(function(user) {
                if (user == null) {
                    return done(null, false, {message: 'User not found'})
                }

                if (user.password == password) {
                    return done(null, user)
                }

                return done(null, false, { message: 'Incorrect credentials.'})
            })
        }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        db.Profile.findOne({
            where: {
                'id': id
            }
        }).then(function(user) {
            if (user == null) {
                done(new Error('Wrong user id.'))
            }

            done(null, user);
        })
    });
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/profile',
            failureRedirect: '/login',
            failureFlash: true
        }),
        function (req, res) {
            res.redirect('/profile')

        });
}