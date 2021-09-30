const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
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
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
