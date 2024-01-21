const express = require('express');
const app = express();
const CustomException = require('../utils/CustomException');
const { createJWT } = require('../utils/authentication');

app.get('', (req, res) =>{
    res.status(200).send({});
});

app.get('/authenticated', (req, res)=> {
    const jwt = createJWT();
    res.status(200).send({jwt: jwt});
});

app.get('/error', (req, res, next) => {
    throw new CustomException(410, 'ERR_UNKNOWN', 'Message quelconque');
})

app.get('/unhandled-error', (req, res, next) => {
    throw new Error('Message quelconque');
})

module.exports = app;