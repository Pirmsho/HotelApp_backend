const express = require('express');
const morgan = require('morgan');

const hotelRouter = require('./routes/hotelRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from the middleware!');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
