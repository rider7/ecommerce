var mongoose = require('mongoose');
var Cart = require('./../models/cart.js');
var Schema = mongoose.Schema;

var userSchema = new Schema({
 name: {type: String, required: true},
 email: {type: String, required: true, unique: true, index: true},
 password: {type: String, required: true},
 cart: [Cart],
 orders: []
})

module.exports = mongoose.model('User', userSchema)
