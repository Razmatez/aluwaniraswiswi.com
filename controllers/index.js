'use strict';

var IndexModel = require('../models/index'),
    auth = require('../lib/auth'),
    passport = require('passport');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {

        // console.log(user);
        res.render('index', model);


    });

    //Logout the user
    router.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

};
