const express = require('express');

const { createProduct, getAllProducts, getProduct, editProduct, deleteProduct } = require('../controllers/productController')

const router = express.Router();

const {route} = router

// router.get('/', getAllProducts);
// router.get('/:id', getProduct);
// router.post('/', createProduct);
// router.patch('/:id', editProduct);
// router.delete('/:id', deleteProduct);

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(editProduct).delete(deleteProduct);

module.exports = router;