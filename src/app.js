const express = require('express');
const app = express();
const routes = require('./routes/routes');
const requestLogMiddleware = require('./middlewares/request-log-middleware');
const authenticationMiddleware = require('./middlewares/authentication-middleware');
const errorMiddleware = require('./middlewares/error-middleware');


app.use(requestLogMiddleware);
app.use(authenticationMiddleware);

app.use(express.json());
app.use('/', routes);

app.use(errorMiddleware);

module.exports = app;