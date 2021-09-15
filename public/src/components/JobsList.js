function JobsList(props) {
   return (
      <div id="jobs-container">
         <h1 className="text-center">Jobs List</h1>
         <ul id="jobs-list">
            {props.jobs.length ? (
               props.jobs.map((job, i) => {
                  return <li key={i}>{job.company}</li>
               })
            ) : <p>Loading</p>}
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

