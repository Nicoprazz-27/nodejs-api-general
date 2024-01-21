const jwt = require('jsonwebtoken');
const { getENVValue } = require('../utils/fonction');

const secret_key = getENVValue('AUTH_SECRET_KEY');

module.exports.createJWT = () => {
    return jwt.sign({'id': 123}, secret_key, {
        algorithm: "HS512",
        //expiresIn: jwtExpirySeconds,
    })
} 

module.exports.decodeJWT = (token) => {
    return jwt.verify(token, secret_key, {
        algorithm: "HS512",
        //expiresIn: jwtExpirySeconds,
    })
}