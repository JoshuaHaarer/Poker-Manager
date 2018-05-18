//Dependencies
var db = require('../models');
var passport = require("passport");

module.exports = function (app) {

    //GET route for all games
    app.get('/api/games', function (req, res) {
        db.Games.findAll({})
            .then(function (dbGame) {
                res.json(dbGame)
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

    //POST route for new profile
    app.post('/api/profiles', function (req, res) {
        db.playerProfile.create({
            playerName: req.body.playerName,
            nickName: req.body.nickName,
            totalWins: req.body.totalWins,
            knockouts: req.body.knockouts,
            ranking: req.body.ranking,
            bounties: req.body.bounties
        }).then(function (dbProfile) {
            res.json(dbProfile)
        });
    });

    // Register User
    app.post('/register', function (req, res) {
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;

        // Validation
        req.checkBody('username', 'Username is Required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is required').notEmpty();

        var errors = req.validationErrors();

        if (errors) {
            res.render('register', {
                errors: errors
            });
        } else {
            var newUser = new User({
                email: email,
                username: username,
                password: password,
            });

            User.createUser(newUser, function (err, user) {
                if (err) throw err;
                console.log(user);
            });

            req.flash('success_msg', 'You are now registered. Log In!');
            res.redirect('/users/login');
        }
    });
    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.getUserByUsername(username, function (err, user) {
                if (err) throw err;
                if (!user) {
                    return done(null, false, {
                        message: 'User does not exist!'
                    });
                }

                User.comparePassword(password, user.password, function (err, isMatch) {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {
                            message: 'Invalid password'
                        });
                    }
                });
            });
        }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.getUserById(id, function (err, user) {
            done(err, user);
        });
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