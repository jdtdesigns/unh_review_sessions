import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import { useStore } from '../App';

function FormContainer() {
   const [company, setCompany] = useState('');
   const history = useHistory();
   const { count, setCount } = useStore();

   function createJob(event) {
      event.preventDefault();

      fetch('/api/job', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            company: company
         })
      }).then(() => {
         setCompany('');
         history.push('/');
         // Routes and what do when I want to switch a view
      });
   }

   function inputCallback(event) {
      setCompany(event.target.value);
   }

   return (
      <div id="form-container">
         <form id="job-form" className="column" onSubmit={createJob}>
            <FormHeader />
            <input onChange={inputCallback} value={company} type="text" name="company" placeholder="Type your company name" />

            <button>Submit</button>

            {count}
            <button onClick={(e) => {
               e.preventDefault();

               setCount(count + 1)
            }}>Increase Count</button>



            {/* <h1>Count: {props.count}</h1> */}
            {/* <button onClick={(event) => {
               event.preventDefault();
               props.setCount(props.count + 2);
            }}>Increase Count By 2</button> */}
         </form>
      </div>
   )
}

export default FormContainer;