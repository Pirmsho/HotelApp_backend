const express = require('express');
const hotelController = require('../controllers/hotelController');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router
    .route('/')
    .get(hotelController.getAllHotels)
    .post(hotelController.createHotel);

router
    .route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel);

router
    .route('/:id/employees')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createEmployee);

router
    .route('/:id/employees/:employeeId')
    .get(employeeController.getEmployee)
    .patch(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

module.exports = router;
