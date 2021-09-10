(function () {
  const titleEl = document.getElementById('title');
  const formEl = document.getElementById('job-form');
  const formContainer = document.getElementById('form-container');
  const jobsContainer = document.getElementById('jobs-container');
  const submitBtn = document.getElementById('show-jobs');
  const jobsList = document.getElementById('jobs-list');
  let show_jobs = false;

  // Show Jobs Button Listener - Get all jobs and then show the Jobs List
  submitBtn.addEventListener('click', function (event) {
    // If show_jobs is false, we are currently on the form view
    if (show_jobs === false) {
      fetch('/api/jobs')
        .then((res) => {
          return res.json();
        })
        .then((jobs) => {
          jobsList.innerHTML = '';

          jobs.forEach((job) => {
            const jobEl = document.createElement('li');

            jobEl.textContent = job.company;
            jobsList.appendChild(jobEl);
          });

          show_jobs = true;
          submitBtn.innerText = 'Show Form';
          formContainer.classList.add('hide');
          jobsContainer.classList.remove('hide');
        });
    } else {
      show_jobs = false;
      submitBtn.innerText = 'Show Jobs';
      formContainer.classList.remove('hide');
      jobsContainer.classList.add('hide');
    }


  }); // method is a function

  formEl.addEventListener('submit', function (event) {
    let company = titleEl.value;
    event.preventDefault();


    // resolve function and reject functions are used inside of a Promise

    fetch('/api/job', {
      method: 'POST',
      body: JSON.stringify({ company: company }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        alert(`${company} has been added!`);
      })
      .then(() => {
        titleEl.value = '';
      });

  });

})();








