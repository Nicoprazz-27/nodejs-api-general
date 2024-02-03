const { getENVValue } = require('./src/utils/fonction');
const app = require('./src/app');

const port = getENVValue('PORT');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
