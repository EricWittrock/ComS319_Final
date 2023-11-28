const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

app.get('/shopdata', (req, res) => {
    console.log('GET request received at /api');
    res.json(require('./shopdata.json'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

