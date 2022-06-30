const app = require('./app');
require('dotenv').config()

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}....`);
  });