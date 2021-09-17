import { useState, useEffect } from 'react';
import { useStore } from '../store';

function JobsList(props) {
   const [jobs, setJobs] = useState([]);
   const [hasJobs, setHasJobs] = useState(true);
   const { count } = useStore();


   useEffect(() => {
      fetch('/api/jobs')
         .then((res) => {
            return res.json(); // .json() turns json object into a JS object
         })
         .then((data) => {
            data.forEach((obj) => obj.edit = false);

            setJobs(data);

            if (!data.length) {
               setHasJobs(false);
            }
         });
   }, []);

   function deleteJob(event, job, i) {
      fetch('/api/jobs', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            _id: job._id
         })
      }).then(res => {
         jobs.splice(i, 1);
         setJobs([...jobs]);

         if (!jobs.length) {
            setHasJobs(false);
         }
      });
   }

   function showEditJobInput(event, job, i) {
      job.edit = true;

      setJobs([...jobs]);
   }

   function editJob(event, job, i) {
      job.company = event.target.value;
      // console.log(event);
      setJobs([...jobs]);
   }

   function closeEdit(event, job) {

      if (event.keyCode === 13) {
         job.edit = false;
         setJobs([...jobs]);

         fetch('/api/jobs', {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               _id: job._id
            })
         }).then(() => {

         })
      }
   }
   // const data = [
   //    5,
   //    {name: 'JD'},
   //    {name: 'Sarah'}
   // ];


   // data.map((val, index) => {

   // });

   return (
      <div id="jobs-container">
         <h1 className="text-center">Jobs List</h1>

         <p>Count: {count}</p>

         <ul id="jobs-list">
            {jobs.length ? (
               jobs.map((job, i) => {
                  return (
                     <li key={i}>

                        {job.edit ? <input onKeyUp={((event) => closeEdit(event, job))} onChange={(event) => editJob(event, job, i)} value={job.company} type="text" /> : job.company}
                        <button onClick={(event) => deleteJob(event, job, i)}>Delete</button>
                        <button onClick={(event) => showEditJobInput(event, job, i)}>Edit</button>
                     </li>
                  )
               })
            ) : hasJobs ? <p>Loading</p> : <p className="text-center">No Data Currently Saved</p>}
         </ul>
      </div>
   )
}

export default JobsList;

// array.forEach((val, i) => {
//    // gives you each val, but does not let you return the value or something else
// });

// array.map(() => {

// })


// const arr = ['one', 'two', 'three'];

// const new_arr = arr.forEach((val) => {
//    // use them at a basic
//    // I want to loop through and return an <li>{val}</li>
//    return val + ' some text';
// })

// const new_arr = arr.map((val) => {
//    return val + ' some more text';
// });

// console.log(new_arr);

