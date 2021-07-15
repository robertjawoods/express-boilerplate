const express = require('express');
const indexRouter = express.Router();

// When the / route is hit with a GET request ie. mywebsite.com>/<, run this function
indexRouter.get('/', (request, response) => {
    // render the index page as the response
    response.render('index');
})

module.exports = indexRouter;