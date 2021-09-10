const { model, Schema } = require('mongoose');

const jobSchema = new Schema({
   company: String
});

const Job = model('Job', jobSchema);

module.exports = Job;