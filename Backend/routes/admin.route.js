const express = require('express');
const router = express.Router();

const attendeeService = require('../services/attendee.service');

module.exports = function(){
    //router.get('/', attendeeService.getConference);
    //router.post('/', attendeeService.addConference);

    return router;
}