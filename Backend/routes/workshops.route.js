const express = require('express');
const router = express.Router();

const workshopService = require('../services/workshops.service');

module.exports = function(){
    router.post('/', workshopService.addWorkshop);

    return router;
}