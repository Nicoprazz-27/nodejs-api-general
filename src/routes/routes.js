const express = require('express');
const app = express();
const CustomException = require('../utils/CustomException');
const { createJWT } = require('../utils/authentication');

app.get('', (req, res) =>{
    res.status(200).send('Succes');
});

app.get('/authenticated', (req, res)=> {
    const jwt = createJWT();
    res.status(200).send(
        
    );
});

app.use('/error', (req, res, next) => {
    throw new CustomException(450, 'UNKNOWN', 'Message quelconque');
})

module.exports = app;