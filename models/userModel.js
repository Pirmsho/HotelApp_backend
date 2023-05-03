const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'User first name is required'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'User last name is required'],
        trim: true,
    },
    fullName: {
        type: String,
        trim: true,
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        trim: true,
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Please enter a valid email address',
        ],
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'User phone number is required'],
        trim: true,
        match: [
            /^\+?[1-9][0-9]{7,14}$/,
            'Please enter a valid phone number',
        ],
    },
    registeredAtDate: {
        type: Date,
        default: Date.now,
    },
    isCheckedIn: {
        type: Boolean,
        default: false,
    },
    checkedInAtHotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// TODO: Checkout date planned and actual checkins too
// TODO: room number

// TODO: check in validation with manager with times

// TODO: Nationality, Residence, geolocation

// rooms
// TODO: room number, input with letters

// amenities
// cleanup, mini-bar, restaurant + bar, swimmming pool, spa, shuttle, taxi, laundry...
