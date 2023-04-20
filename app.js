const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/hotelRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from the middleware!');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/hotels', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;