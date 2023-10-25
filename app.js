// use strict mode
'use strict'

// import necessary libraries
const express = require('express');
const { join } = require('path');

// create express app
const app = express();

// set up constants
const PUBLIC_PATH = 'public/index.html';
const PUBLIC_FOLDER = 'public';
const ROOT_PATH = '/';
const DIRNAME = __dirname;
const PORT = 8080;

// set up middleware
app.use(express.static(join(DIRNAME, PUBLIC_FOLDER)));

// set up routes
app.get(ROOT_PATH, (_, res) => {
    res.sendFile(join(DIRNAME, PUBLIC_PATH));
});

// start server
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
