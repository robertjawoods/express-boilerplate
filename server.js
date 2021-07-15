const express = require('express');
const path = require('path');
const indexRouter = require('./src/routers/index');

const port = 3000;

// set up express server
const server = express();

server.use(express.json());

// allows you to access things in the /public folder
server.use('/public', express.static('public'));

// set the view engine - see here https://expressjs.com/en/resources/template-engines.html
server.set('view engine', 'ejs');

// set the paths for the view files
server.set('views', path.join(__dirname, 'src', 'views'));

// set up the router so the app knows what to do when urls are navigated to
server.use('/', indexRouter);

// run the server 
server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})
