'use strict';

var express = require('express');
var kraken = require('kraken-js');
var spec = require('./lib/spec.js');


var app;

app = module.exports = express();

var options = spec(app);

app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
