var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user');

var mongoSchema = mongoose.Schema;
var userSchema = {
    'RegistrationId': String,
    'FullName': String,
    'Mobile': Number,
    'Email': String,
    'IdCard': String,
    'RegType': String,
    'Tickets': Number,
    'RegistrationDate': Date
};
module.exports = mongoose.model('user', userSchema);

