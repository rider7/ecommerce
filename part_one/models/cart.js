var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('./../models/product.js')

var cartSchema = new Schema({
 item: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
 quantity: {type: Number, min: 1}
});

module.exports = cartSchema;
