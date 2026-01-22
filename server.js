// Используем import для ES6 модуля
const express = require('express');

// Используем require для CommonJS модуля
const { au } = require('./VM.js');


const app = express();
const port = 3000;
const hostname = 'localhost'

app.use(express.json());

app.post('/au', (req, res) => {
  const postData = req.body;
  const result = au(postData.a, postData.u, postData.login, postData.password, postData.d1);
  res.json(result);
});

app.listen(port, hostname, () => {
  console.log(`Сервер запущен на http://${hostname}:${port}`);
});