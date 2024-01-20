const { createLogger, format , transports} = require('winston');
const { combine, timestamp, printf } = format;
const { getDate, getProjectPath } = require('./fonction');
const fs = require('fs');


const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level.toLocaleUpperCase()} ${message}`;
});

const todayDate = getDate();
const projectPath = getProjectPath(); 

const logPath = `${projectPath}\\logs\\${todayDate}`;
if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath, { recursive: true });
}

const requestLogger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: logPath + '/requests.log' })
  ],
}); 


const appLogger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: logPath + '/app.log' })
  ],
}); 


module.exports.requestLogger = requestLogger;
module.exports.appLogger = appLogger;