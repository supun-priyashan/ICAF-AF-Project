const express = require('express');
const router = express.Router();

const paymentService = require('../services/payment.service');

module.exports = function(){
    router.get('/', paymentService.getPayments);
    router.post('/', paymentService.addPayment);

    return router;
}
