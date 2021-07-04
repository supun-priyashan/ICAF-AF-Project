const express = require('express');
const router = express.Router();

const workshopService = require('../services/workshops.service');

module.exports = function(){
    router.post('/', workshopService.addWorkshop);
    router.post('/uploadFile', workshopService.uploadFile);
    router.put('/', workshopService.approveWorkshop);
    router.get('/', workshopService.getWorkshops);

    return router;
}
