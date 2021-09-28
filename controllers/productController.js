const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        
        res.status(200).json({
            status: 'success',
            data: {
                products
            }
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getProduct = async (req, res) => {
    const {id} = req.params;
    
    try {
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).json({
                status: 'failed',
                message: 'Product not found!'
            }); 
        }
        
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.createProduct = async (req, res) => {
    const {name, price} = req.body;

    try {
    const newProduct = await Product.create({name, price}); 

    res.status(201).json({
        status: 'success',
        data: {
            product: newProduct
        }
    });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};


exports.editProduct = async (req, res) => {
    const {id} = req.params;
    const {name, price} = req.body;

    try {
    const editedProduct = await Product.findByIdAndUpdate(id, {name, price}, {
        new: true,
    })

    if(!editedProduct) {
        return res.status(404).json({
            status: 'failed',
            message: 'Product not found!'
        }); 
    }

    res.status(200).json({
        status: 'success',
        data: {
            product: editedProduct
        }
    });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).json({
                status: 'failed',
                message: 'Product not found!'
            }); 
        }

        await Product.findByIdAndDelete(id);

        res.status(204).json();
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};