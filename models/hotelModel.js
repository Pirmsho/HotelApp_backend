const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required'],
        trim: true,
        unique: [true, 'Hotel name already exists'],
    },
    address1: {
        type: String,
        required: [true, 'Hotel address is required'],
        trim: true,
    },
    address2: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        required: [true, 'Hotel city is required'],
        trim: true,
        lowercase: true,
    },
    country: {
        type: String,
        required: [true, 'Hotel country is required'],
        trim: true,
        lowercase: true,
    },
    phoneNumber1: {
        type: String,
        required: [true, 'Hotel phone number is required'],
        trim: true,
        match: [
            /^\+?[1-9][0-9]{7,14}$/,
            'Please enter a valid phone number',
        ],
    },
    phoneNumber2: {
        type: String,
        trim: true,
        match: [
            /^\+?[1-9][0-9]{7,14}$/,
            'Please enter a valid phone number',
        ],
    },
    email: {
        type: String,
        required: [true, 'Hotel email is required'],
        trim: true,
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Please enter a valid email address',
        ],
    },
    website: {
        type: String,
        trim: true,
        match: [
            /^((http|https):\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
            'Please enter a valid website address',
        ],
    },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
