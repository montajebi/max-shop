const Product = require('../models/Product');

const { NotFound } = require('./../utils/Errors');
const messages = require('./../shared/constants/messages');

exports.find = async () => {
  const products = await Product.find();

  return products;
};

exports.findById = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new NotFound(messages.PRODUCT.NOT_FOUND);
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
    throw new NotFound(messages.PRODUCT.NOT_FOUND);
  }

  return editedProduct;
};

exports.deleteById = async (id) => {
  await this.findById(id);
  await Product.findByIdAndDelete(id);
};
