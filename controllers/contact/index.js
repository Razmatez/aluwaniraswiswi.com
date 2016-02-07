'use strict';

var Contact = require("../../models/contact.js");
var mongoose = require('mongoose');

module.exports = function(router) {
    router.get('/', function(req, res) {
        res.render('contact');
    });

    router.post('/', function(req, res) {
        var contact = new Contact(req.body);

        contact.save(function(err) {
            if (err) return console.error(err);
        
        });

        res.json(req.body);
    });

};
