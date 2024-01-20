const express = require('express');
const app = express();
const { getENVValue } = require('./src/utils/fonction');
const routes = require('./src/routes/routes');
const requestLogMiddleware = require('./src/middlewares/request-log-middleware');

const port = getENVValue('PORT');

app.use(requestLogMiddleware);
app.use('/', routes);
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;