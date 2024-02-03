const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const User = require('../models/user-model');
const CustomException = require('../utils/CustomException');

/**
 * 
 * @returns {User[]}
 */
module.exports.getAllUser = async () => {
    return await prisma.users.findMany()
}

/**
 * 
 * @param {string} user_id 
 * @returns {User}
 */
module.exports.getUser = async (user_id) => {
    const user = await prisma.users.findUnique({
        where: {
            user_id: user_id
        }
    });

    if(user === null){
        throw new CustomException(404, 'ERR_UNKNOWN_USER', `This user_id: doesn't refer to an existing user.`, true)
    }

    return user;
}

/**
 * 
 * @param {string} email 
 * @returns {boolean}
 */
module.exports.isEmailUsed = async (email) => {
    return (1 === await prisma.users.count({
        where: {
            email: email
        }
    }))
}

/**
 * 
 * @param {User} user 
 * @returns {User}
 */
module.exports.createUser = (user) => {
    return new Promise( (resolve, reject) => {
        prisma.users.create({ data: user })
            .then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
    });
}
