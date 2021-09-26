const express = require('express');

const router = express.Router();

// /api/v1/products
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        length: 10,
        data: [
            {
                id: '0',
                name: 'iPhone 13',
                price: 10000
            },
            {
                id: '1',
                name: 'iPhone SE',
                price: 450
            }
        ]
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
                id: req.params.id,
                name: 'iPhone 13',
                price: 10000
            }
    });
});

router.post('/', (req, res) => {
    // create new product
});

router.patch('/:id', (req, res) => {
    // edit product
});

router.delete('/:id', (req, res) => {
    // delete product
});

module.exports = router;