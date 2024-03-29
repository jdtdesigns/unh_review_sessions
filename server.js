const express = require('express');
// require('dotenv').config();
// Heroku 
const PORT = process.env.PORT || 3000;
// express returns an Object

const app = express(); // instance = Object
// properties and methods


// Setup our server
// Callback Function
app.use('/', (req, res) => {
  // res = response - gives the backend the ability to SEND something to the frontend
  // req = request - frontend sends or interacts with the backend
  res.send(`
    <html>
      <head>
        <title>Amazing Web Page</title>
      </head>
      <body>
        <h1 style="color: red;">Yes!</h1>
        <script>
          console.log('test');
        </script>
      </body>
    </html>
  `);
});


app.listen(PORT, function () {
  console.log('Server running on port 3000');
});


// Callback Hell - function vs arrow
function solution() {
  const new_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!');
      // reject('some err');
    }, 3000);
  });

  return new_promise;
}

solution()
  .then(result => {
    console.log(result)
  })
  .then(() => {
    console.log('2nd')
  })
  .then(() => {
    console.log('3rd')
  })
  .catch(err => {
    console.log(err);
  });


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.haveBirthday = function () {
//     const add = () => {
//       this.age++;
//     }

//     add();
//   }
// }

// const jd = new Person('JD', 41);

// jd.haveBirthday();

// console.log(jd.age);

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  haveBirthday() {
    this.age++;
    // return this.age;
    // console.log('something');
  }

}

// const jd = new Person('JD', 41);

// console.log(jd.age);



// const` person = {
//   name: 'Bob',
//   hobbies: ['hiking', 'camping'],
//   traits: {
//     height: 6,
//     hair: 'blond'
//   }
// };
// // Accessing nested objects
// // console.log(person.traits.height);


// function ourListener(port, adefasdfasdf) {
//   // callback and do something
//   setTimeout(() => {
//     adefasdfasdf(function () {
//       console.log('first');
//     });
//   }, 3000);
// }


// ourListener(3, function (cb) {
//   cb();

//   console.log('second');
// });

// console.log(add(2, 3, 'a', [1, 2, 3], function () { return 5; }));

// console.log(typeof function () { });

// 









