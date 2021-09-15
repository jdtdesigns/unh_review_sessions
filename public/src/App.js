import { useState } from 'react';
import Header from './components/Header';
import JobsList from './components/JobsList';
import FormContainer from './components/FormContainer';


function App() {
  // useState gives you 2 things - val, function to update that value
  const [company, setCompany] = useState('');
  const [showJobs, setShowJobs] = useState(false);
  const [count, setCount] = useState(0);
  const [jobs, setJobs] = useState([]);

  function switchView() {

    if (!showJobs) {
      fetch('/api/jobs')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setJobs(data);
        });
    }

    setShowJobs(!showJobs);
  }

  function inputCallback(event) {
    setCompany(event.target.value);
  }


  return (
    <main>

      <Header setCount={setCount} count={count} showJobs={showJobs} switchView={switchView} />

      <p>{company}</p>

      {showJobs ?
        (
          <JobsList jobs={jobs} />
        ) : (
          <FormContainer switchView={switchView} setCompany={setCompany} count={count} inputCallback={inputCallback} company={company} />
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