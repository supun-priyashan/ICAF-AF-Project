const express = require('express');
const router = express.Router();

const conferenceService = require('../services/conference.service');

module.exports = function(){
    router.get('/', conferenceService.getConference);
    router.post('/', conferenceService.addConference);
    router.put('/', conferenceService.putConference);

    return router;
}
