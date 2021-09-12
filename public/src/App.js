import { useState } from 'react';


function App() {
  const [company, setCompany] = useState(''); // useState gives you 2 things - val, function to update that value
  const [showJobs, setShowJobs] = useState(false);

  function switchView(event) {
    setShowJobs(!showJobs);

    setCompany('');
  }

  function inputCallback(event) {
    setCompany(event.target.value);
    // console.log();
  }

  return (
    <main>
      <header className="row justify-space">
        <h2>Job Tracker</h2>
        <button onClick={switchView}>{showJobs ? 'Show Form' : 'Show Jobs'}</button>
      </header>

      <p>{company}</p>

      {showJobs ?
        (
          <div id="jobs-container">
            <h1 className="text-center">Jobs List</h1>
            <ul id="jobs-list">
            </ul>
          </div>
        ) : (
          <div id="form-container">
            <form id="job-form" className="column">
              <h2 className="text-center">Create Job Form</h2>
              <input onChange={inputCallback} value={company} type="text" name="company" placeholder="Type your company name" />

              <button>Submit</button>
            </form>
          </div>
        )}

    </main>
  );
}

export default App;


  // Grab the value of the input element.addEventListener('onchange' (event) => grab the button and set textContent to the event.value)
  // Select the textContent and set to the value
  // myTestValue = 'something else now';
  // myEl.addEventListener('click', () => {
  //   // wait for this code to run only when the myEl is clicked
  // });

  // When input changes, call a callback function and setMyTestValue to the input's value