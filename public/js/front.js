(function () {
  const titleEl = document.getElementById('title');
  const formEl = document.getElementById('job-form');
  const formContainer = document.getElementById('form-container');
  const jobsContainer = document.getElementById('jobs-container');
  const submitBtn = document.getElementById('show-jobs');
  // const submitBtn = document.querySelector('body > header > h2');

  submitBtn.addEventListener('click', function (event) {
    formContainer.classList.add('hide');
    jobsContainer.classList.remove('hide');

    fetch('/api/jobs')
      .then(() => {

      });
  }); // method is a function

  formEl.addEventListener('submit', function (event) {
    const company = titleEl.value;
    event.preventDefault();


    // resolve function and reject functions are used inside of a Promise

    fetch('/api/job', {
      method: 'POST',
      body: JSON.stringify({ company: company }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      alert(`${company} has been added!`);
    });

  });

})();








