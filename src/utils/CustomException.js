class CustomException extends Error {

    constructor(statusCode, errorKey, message, isHandled = true){
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);

        this.statusCode = statusCode;
        this.errorKey = errorKey;
        this.isHandled = isHandled;
        this.errorMessage = {
            errorKey: errorKey,
            statusCode: statusCode,
            isHandled: isHandled,
            stack: this.stack.replace(/ {4}/g, "").split('\n').slice(1)
        };
    }
}

module.exports = CustomException;