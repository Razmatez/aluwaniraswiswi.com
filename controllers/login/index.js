'use strict';

var LoginModel = require('../../models/login'),
    passport = require('passport');

module.exports = function(router) {

    var model = new LoginModel();

    router.get('/', function(req, res) {
        model.messages = req.flash('error');
        res.render('login/index', model);
    });

    /**
     * Receive the login credentials and authenticate.
     * Successful authentications will go to /profile or if the user was trying to access a secured resource, the URL
     * that was originally requested.
     *
     * Failed authentications will go back to the login page with a helpful error message to be displayed.
     */
    router.post('/', function(req, res) {

        passport.authenticate('local', {
            successRedirect: req.session.goingTo || '/',
            failureRedirect: '/login'
            failureFlash: true
        })(req, res);

    });
};
