const express = require('express');
const CustomException = require('../utils/CustomException');
const { createJWT } = require('../utils/authentication');
const usersRoutes = require('./users-routes');
const router = express.Router();

router.use('/users', usersRoutes);

router.get('', (req, res) =>{
    res.status(200).send({});
});

router.get('/authenticated', (req, res)=> {
    const jwt = createJWT();
    res.status(200).send({jwt: jwt});
});

router.get('/error', (req, res, next) => {
    throw new CustomException(410, 'ERR_UNKNOWN', 'Message quelconque');
})

router.get('/unhandled-error', (req, res, next) => {
    throw new Error('Message quelconque');
})

module.exports = app;