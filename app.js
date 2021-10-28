const express = require('express');
const morgan = require('morgan');

const { NODE_ENV } = require('./config');
const messages = require('./shared/constants/messages');

const { productsRouter } = require('./routes');

const app = express();

// Middlewares
app.use(express.json());
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/v1/products', productsRouter);

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

// Global error handler https://expressjs.com/en/guide/error-handling.html
app.use((error, req, res, next) => {
  const { statusCode, message } = error;

  const responseStatusCode = statusCode || 500;
  const responseMessage = message || messages.GENERAL.SERVER_ERR;

  res.status(responseStatusCode).json({
    status: 'failed',
    error: {
      message: responseMessage,
    },
  });
});

module.exports = app;
