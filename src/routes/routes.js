const express = require('express');
const app = express();
const CustomException = require('../utils/CustomException');

app.use('', (req, res) =>{
    res.status(200).send('Succes');
});

app.use('/error', (req,res,next)=>{
    throw new CustomException(450, 'UNKNOWN', 'Message quelconque');
})

module.exports = app;