var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  title: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  });

module.exports = mongoose.model('product', productSchema)
