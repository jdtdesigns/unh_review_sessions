import FormHeader from './FormHeader';

function FormContainer(props) {

   function createJob(event) {
      event.preventDefault();

      fetch('/api/job', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            company: props.company
         })
      }).then(() => {
         props.setCompany('');
         props.switchView();
      });
   }

   return (
      <div id="form-container">
         <form id="job-form" className="column" onSubmit={createJob}>
            <FormHeader the_count={props.count} />
            <input onChange={props.inputCallback} value={props.company} type="text" name="company" placeholder="Type your company name" />

            <button>Submit</button>
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