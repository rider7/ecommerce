var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cart = require('./cart.js')

var orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  item: [Cart]

});

module.exports = mongoose.model('orders', orderSchema)
