const express = require('express');
const router = express.Router();

const paperService = require('../services/paper.service');

module.exports = function(){
    router.post('/', paperService.addPaper);

    return router;
}