const express = require('express');

const { productsRouter } = require('./routes');

const app = express();

app.use('/api/v1/products', productsRouter);

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'success'
    });
});

module.exports = app;