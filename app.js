const express = require('express');

const app = express();

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'success'
    });
});

module.exports = app;