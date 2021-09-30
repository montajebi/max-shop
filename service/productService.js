const Product = require('../models/Product');

exports.find = async () => {
  const products = await Product.find();

  return products;
};

exports.findById = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

exports.createProduct = async (data) => {
    const newProduct = await Product.create(data);

    return newProduct;
};
