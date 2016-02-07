'use strict';
var mongoose = require('mongoose');


var ContactModel = function () {
    var contactSchema = new mongoose.Schema({
        'name': {type: String},
        'email': String,
        'date': { type: Date, default: Date.now },
        'cellphone': String,
        'message': String
    });

    return mongoose.model('Contact', contactSchema);
}

module.exports = ContactModel();
