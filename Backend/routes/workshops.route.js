const express = require('express');
const router = express.Router();

const workshopService = require('../services/workshops.service');

module.exports = function(){
    router.post('/', workshopService.addWorkshop);
    router.get('/', workshopService.getWorkshops);
    router.put('/',workshopService.putWorkshops);

    return router;
}
