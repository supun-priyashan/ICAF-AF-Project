const express = require('express');
const router = express.Router();

const paperService = require('../services/paper.service');

module.exports = function(){
    router.post('/', paperService.addPaper);
    router.post('/uploadFile', paperService.uploadFile);
    router.get('/', paperService.getPapers);
    router.put('/approve', paperService.approvePaper);
    router.put('edit/:id', paperService.editPaper);

    return router;
}
