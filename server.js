const express = require('express');
const path = require('path');
// require('dotenv').config();
// Heroku 
const PORT = process.env.PORT || 3000;
// express returns an Object

// console.log(path.join(__dirname, './index.html'));

const app = express(); // instance = Object
// properties and methods


// Setup our server

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Wait until client/browser visits this route before running this callback
// GET POST UPDATE(PUT) DELETE ---- REST
// app.get('/', (req, res) => {
//   // res = response - gives the backend the ability to SEND something to the frontend
//   // req = request - frontend sends or interacts with the backend
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// Order
// index.html is loaded
// app.post('/') is called. we save the job_title variable and we redirect to '/job'
// app.get('/job') is called and we send the job.html page to the user - VIEW
// job.html is loaded and the JS is ran and we send the '/api/job' GET request to the backend
// app.get('/api/job') is called and we send job title

let job_data = ['Dunkin', 'Starbucks'];

// API ROUTES
// POST - Get data from the front end
app.post('/api/job', (req, res) => {
  job_data.push(req.body.company);
  console.log('post route')
  console.log(req.body);
  // Send user? Call a route
  res.send('Completed!');
});

// Send some data to the front end based on a GET request
app.get('/api/jobs', (req, res) => {
  res.send(job_data);
});




app.get('/job', (req, res) => {
  res.sendFile(path.join(__dirname, './public/job.html'));
});



app.listen(PORT, function () {
  console.log('Server running on port 3000');
});











