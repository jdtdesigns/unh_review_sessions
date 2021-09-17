const Job = require('../models/Job');

// Job.deleteMany({}).then(() => console.log('removed'));

// app const from server.js gets passed to our routeCreate function
function routeCreate(app) {
   // API ROUTES
   // POST - Get data from the front end
   app.post('/api/job', (req, res) => {
      // req.body = {company: 'Starbucks'}
      Job.create(req.body)
         .then(job => {
            res.send('Completed!');
         });
   });

   // Send some data to the front end based on a GET request
   app.get('/api/jobs', (req, res) => {
      Job.find()
         .then((jobs) => {
            res.send(jobs);
         });
   });

   app.delete('/api/jobs', (req, res) => {
      // req.body {
      //    _id: 'asdkjwqoiwe@30192309fjnlalkmnvclkvajs'
      // }
      Job.deleteOne(req.body)
         .then(() => {
            res.status(200).send('Completed');
         });
   });

   app.put('/api/jobs', (req, res) => {
      console.log(req.body);
   });

}

module.exports = routeCreate;