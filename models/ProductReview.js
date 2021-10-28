const mongoose = require('mongoose');

const productReviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Types.ObjectId, //https://mongoosejs.com/docs/schematypes.html#objectids
    required: true,
  },
});

const ProductReview = mongoose.model('ProductReview', productReviewSchema);

module.exports = ProductReview;
