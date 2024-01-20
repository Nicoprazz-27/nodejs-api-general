const { requestLogger } = require('../utils/logger');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
module.exports = function(req, res, next){

    const message = {
        method: req.method,
        path: req.url,
        body: req.data,
        query: req.query,
        authorization: req.headers['authorization']
    };

    requestLogger.info(JSON.stringify(message));

    next();
}