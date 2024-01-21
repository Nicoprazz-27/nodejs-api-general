const express = require('express');
const app = express();
const { getENVValue } = require('./src/utils/fonction');
const routes = require('./src/routes/routes');
const requestLogMiddleware = require('./src/middlewares/request-log-middleware');
const authenticationMiddleware = require('./src/middlewares/authentication-middleware');
const errorMiddleware = require('./src/middlewares/error-middleware');

const port = getENVValue('PORT');

app.use(requestLogMiddleware);
app.use(authenticationMiddleware);

app.use(express.json());
app.use('/', routes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;