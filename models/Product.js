const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  description : {
    type: String,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  categories: {
    type: Array,
    default: [],
  },
  quantity: {
    type: Number,
    default: 1
  },
  weight: {
    type: Number,
    required: true,
  },
  imageUrl: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
