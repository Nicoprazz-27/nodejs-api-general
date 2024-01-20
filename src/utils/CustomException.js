const { appLogger } = require('./logger')

class CustomException extends Error {

    constructor(statusCode, errorKey, message){
        super(message);

        const errorMessage = {
            errorKey: errorKey,
            statusCode: statusCode,
            stack: this.stack.replace(/ {4}/g, "").split('\n').slice(1)
        };

        appLogger.error(JSON.stringify(errorMessage));
    }
}


module.exports = CustomException;