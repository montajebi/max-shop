const productService = require('./../service/productService');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.find();

    res.status(200).json({
      status: 'success',
      data: {
        products,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res, next) => {
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
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  const { name, price, imageUrl } = req.body;

  try {
    const newProductData = { name, price, imageUrl };
    const newProduct = await productService.create(newProductData);

    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.editProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const editedProduct = await productService.editById(id, { name, price });
    res.status(200).json({
      status: 'success',
      data: {
        product: editedProduct,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    await productService.deleteProductById(id);

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
