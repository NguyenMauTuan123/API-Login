const express = require('express')
const app = express()
const Error = require('./utils/Error');

const loginServices = require('./services/loginServices');

app.use(express.json());

app.post('/api/v1/login',loginServices.login);

app.all('*', (req, res) => {
    res.status(404).send(new Error("Route not found").message);
  });

module.exports =app;


