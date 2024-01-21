const { decodeJWT } = require('../utils/authentication');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
module.exports = function(req, res, next){

    const headers = req.headers;
    const authorization = headers['authorization'];

    if (authorization) {
        const token = authorization.split(' ')[1];

        const payload = decodeJWT(token);
        console.log(decode);
    }   

    next();
}