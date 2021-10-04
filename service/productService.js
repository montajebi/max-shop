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

exports.create = async (data) => {
  const newProduct = await Product.create(data);

  return newProduct;
};

exports.editById = async (id, data) => {
  const editedProduct = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!editedProduct) {
    throw new Error('Product not found');
  }

  return editedProduct;
};

exports.deleteById = async (id) => {
  await this.findById(id);
  await Product.findByIdAndDelete(id);
};
