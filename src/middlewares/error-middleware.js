const { appLogger } = require('../utils/logger');
const { getENVValue } = require('../utils/fonction');
const CustomException = require('../utils/CustomException');

module.exports = (err, req, res, next) => {

    const error = (err.isHandled === undefined) ? new CustomException(500, 'ERR_UNKNOWN', err.stack.replace(/ {4}/g, "").split('\n').slice(1), false) : err;
    const errorResponseBody = (getENVValue('ENV') === 'LOCAL') ? error.errorMessage : error.errorKey;

    appLogger.error(JSON.stringify(error.errorMessage));
    res.status(error.statusCode).send(errorResponseBody);
}