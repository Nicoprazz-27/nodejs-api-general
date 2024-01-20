const express = require('express');
const app = express();
const port = 3000;
const routes = require('./src/routes/routes');
const requestLogMiddleware = require('./src/middlewares/request-log-middleware');

app.use(requestLogMiddleware);
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
