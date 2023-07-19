'use strict'
const express = require('express')
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public/index.html');
    res.sendFile(filePath);
  });
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
