const express = require('express');
const app = express();
const port = 3000;

const _ = require('lodash');

app.get('/', (req, res) => {
//   const arrayRange = _.range(1, 5);
//   res.send(`my Array: ${arrayRange}`);
    res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})