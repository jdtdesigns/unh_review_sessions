// import { useState } from 'react';

function Header(props) {
   return (
      <header className="row justify-space">
         <h2>Job Tracker</h2>
         {/* <h1>Count: {props.count}</h1> */}
         {/* <button onClick={() => {
            props.setCount(props.count + 1);
         }}>Increase Count</button> */}
         <button onClick={props.switchView}>{props.showJobs ? 'Show Form' : 'Show Jobs'}</button>
      </header>
   )
}

export default Header;



// const some_data = {
//    title: 'Dunkin',
//    place: 'Atlanta',
//    changeName: function () {
//       console.log('changed!');
//    }
// }

// const jd = {
//    info: {...some_data}
// }

// console.log(jd);
// const fruit = ['apple', 'orange'];

// const more_fruit = [...fruit, 'grape'];

// console.log(more_fruit);

// console.log(some_data.place);

// some_data.changeName();



// let myFunc;

// function testFunc() {

// }

// myFunc = testFunc;



// const data = {
//    name: 'JD',
//    age: 41
// };

// console.log(data.age);


// const { age } = data;
// console.log(age);
// // myFunc();


// useState(); what does this return?

// const fruits = ['state value', function () { }];

// const [a, b] = fruits;

// console.log(b);

// console.log(fruits[1], fruits[2]);

