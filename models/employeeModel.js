const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Employee first name is required'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Employee last name is required'],
        trim: true,
    },
    fullName: {
        type: String,
        trim: true,
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    },
    password: {
        type: String,
        required: [true, 'Employee password is required'],
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        // not required mail
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Please enter a valid email address',
        ],
    },
    phoneNumber: {
        type: String,
        // required: [
        //     true,
        //     'Employee phone number is required',
        // ],
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
    worksAtHotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        // required: [true, 'Employee must belong to a hotel'],
    },
    role: {
        type: String,
        enum: ['housekeeper', 'receptionist', 'porter'],
        default: 'housekeeper',
        required: [true, 'Employee must have a role'],
    },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

// TODO: add relationship to hotels
// TODO: 2 categories of housekeeper
// TODO: add birthdate
// TODO: add photo
// TODO: concierge type

// first housekeeper
// TODO: employee timetable: weekly timetable, days, rooms, time interval to do the job
// TODO: time worked calculated in a week, aadmmin

// emergency housekeeper
// TODO: emergency

// Cleanup types: before check-in, daily, emergency, check-out, active

// TODO: georgian bank angarishi
