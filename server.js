const express = require('express');
const path = require('path');
const routes = require('./routes/api_routes');
const db = require('./config/connection');
// require('dotenv').config();
// Heroku 
const PORT = process.env.PORT || 3000;

// express returns an Object
const app = express(); // instance = Object

// Setup our server

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

db.once('open', () => {
  // Start the Server
  app.listen(PORT, function () {
    console.log('Server running on port 3000');
  });
}); // open // object that gives you some methods to test or check our connection






