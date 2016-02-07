'use strict';

var BlogModel = require('../../models/blog.js');

var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

module.exports =  function (router) {
    var model = new BlogModel();

    router.get('/', function(req, res) {
         res.render('blog', model);
    });

    router.get('/create', function(req, res){
        res.render('blog/create');
    });
    router.use(bodyParser.json()); // for parsing application/json
    router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    router.post('/', upload.array(), function(req, res){
        console.log(req.body);
        res.json(req.body);

    });
};
