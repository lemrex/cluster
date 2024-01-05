const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World. Ths is test edit 7!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
