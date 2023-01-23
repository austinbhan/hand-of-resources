const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/vegetables', require('./controllers/vegetables'));
app.use('/dictators', require('./controllers/dictators'));
app.use('/cities', require('./controllers/cities'));
app.use('/games', require('./controllers/games'));
app.use('/arnold', require('./controllers/arnolds'));
app.use('/countries', require('./controllers/countries'));


// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
