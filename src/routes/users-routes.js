const express = require('express');
const router = express.Router();
const { getUTCNow } = require('../utils/fonction');
const { generateEmail, generateUuid } = require('../../tests/helpers');
const usersRepository = require('../repositories/users-repository');
const User = require('../models/user-model');
const CustomException = require('../utils/CustomException');

router.get('/', (req, res, next)=>{
    const users = usersRepository.getAllUser();
    res.send(users);
});

router.get('/:user_id', (req, res, next) => {
    const user_id = req.params.user_id;

    usersRepository.getUser(user_id)
        .then( (user) => {
            res.send(user);
        })
        .catch( (err) => {
            return next(err);
        });
});


router.post('/', async (req, res, next)=>{
    const email = generateEmail();
    const user = new User(generateUuid(), 'Name', email, 'ABCdef123!', 0, getUTCNow());

    const isEmailUsed = await usersRepository.isEmailUsed(email);
    if (isEmailUsed) {
        return next(new CustomException(400, 'ERR_EMAIL_ALREADY_USED', `This email: ${email} is already used`));
    }

    usersRepository.createUser(user)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            console.log('\nERR\n'+err);
        });
});

module.exports = router;