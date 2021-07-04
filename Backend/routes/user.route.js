const express = require('express');
const router = express.Router();

const userService = require('../services/user.service')

module.exports = function(){

    router.post('/login', userService.login);
    router.post('/', userService.createUser);
    router.get('/getAdmins', userService.createAdmins);

    return router;
}
