const productService = require('./../service/productService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.find();

    res.status(200).json({
      status: 'success',
      data: {
        products,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 400).json({
      status: 'failed',
      error,
    });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productService.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 400).json({
      status: 'failed',
      error: {
        ...error,
        message: error.message,
      },
    });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, imageUrl } = req.body;

  try {
    const newProductData = {name, price, imageUrl};
    const newProduct = await productService.create(newProductData);

    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 400).json({
      status: 'failed',
      error,
    });
  }
};

exports.editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const editedProduct = await productService.editById(id, {name,price});
    res.status(200).json({
      status: 'success',
      data: {
        product: editedProduct,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 400).json({
      status: 'failed',
      error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await productService.deleteProductById(id);

    res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 400).json({
      status: 'failed',
      error,
    });
  }
};
