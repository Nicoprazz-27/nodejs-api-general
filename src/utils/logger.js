const { createLogger, format , transports} = require('winston');
const { combine, timestamp, label, printf } = format;
const { getDate, getProjectPath } = require('./fonction');
const fs = require('fs');


const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level.toLocaleUpperCase()} ${message}`;
});

const todayDate = getDate();
const projectPath = getProjectPath(); 

const logPath = `${projectPath}\\logs\\${todayDate}`;
if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath, { recursive: true });
}

module.exports = createLogger({
    format: combine(
      //label({ label: 'message' }),
      timestamp(),
      myFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.File({ filename: logPath + '/requests.log' }),
    ],
  }); 