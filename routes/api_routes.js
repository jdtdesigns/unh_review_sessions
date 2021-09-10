const Job = require('../models/Job');

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

   app.get('/job', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/job.html'));
   });
}

// API ROUTES
// POST - Get data from the front end
// router.post('/api/job', (req, res) => {
//    // req.body = {company: 'Starbucks'}
//    Job.create(req.body)
//       .then(job => {
//          res.send('Completed!');
//       });
// });

// // Send some data to the front end based on a GET request
// router.get('/api/jobs', (req, res) => {
//    Job.find()
//       .then((jobs) => {
//          res.send(jobs);
//       });
// });

// router.get('/job', (req, res) => {
//    res.sendFile(path.join(__dirname, '../public/job.html'));
// });


module.exports = routeCreate;