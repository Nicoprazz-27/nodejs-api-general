const path = require('path');
const dotenv = require('dotenv');

module.exports.getDate = () => {
    const todayDate = new Date();

    const annee = todayDate.getFullYear();
    const mois = (todayDate.getMonth() + 1).toString().padStart(2, '0'); 
    const jour = todayDate.getDate().toString().padStart(2, '0');
 
    return `${annee}.${mois}.${jour}`;
}

module.exports.getUTCNow = () => {
    return new Date().toISOString();
}

module.exports.getProjectPath = () => {
    return path.resolve(__dirname, '..', '..');
}

module.exports.getENVValue = (key) => {
    dotenv.config();
    return process.env[key];
}