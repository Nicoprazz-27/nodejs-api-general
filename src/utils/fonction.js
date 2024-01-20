const { log } = require('console');
const path = require('path');

module.exports.getDate = () => {
    const todayDate = new Date();

    const annee = todayDate.getFullYear();
    const mois = (todayDate.getMonth() + 1).toString().padStart(2, '0'); 
    const jour = todayDate.getDate().toString().padStart(2, '0');
 
    return `${annee}.${mois}.${jour}`;
}

module.exports.getProjectPath = () => {
    return path.resolve(__dirname, '..', '..');
}