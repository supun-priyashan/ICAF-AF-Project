const express = require('express');
const router = express.Router();

const attendeeService = require('../services/attendee.service');

module.exports = function(){
    router.post('/', attendeeService.addAttendee);

    return router;
}
