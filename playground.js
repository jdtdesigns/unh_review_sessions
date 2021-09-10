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

// solution()
//   .then(result => {
//     console.log(result)
//   })
//   .then(() => {
//     console.log('2nd')
//   })
//   .then(() => {
//     console.log('3rd')
//   })
//   .catch(err => {
//     console.log(err);
//   });


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

// class Person {
//   constructor(name, age) {
//     this.age = age;
//     this.name = name;
//   }
// }

// const jd = new Person('jd', 41);

class PromiseClone {
  constructor(cb) {
    // create an initial storable list of then actions
    this.thenChain = [];

    // ensure that the resolve and reject functions passed to our callback are bound to 
    // the parent object that is created
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    // we lose scope to our parent object here unless we .bind()
    cb(this.resolve, this.reject);
  }

  resolve(passed_value) {
    let val = passed_value;
    // Create a loop to handle chained .then() calls
    console.log('resolve'); // watch the order in which this runs

    this.thenChain.forEach(nextAction => {
      console.log('action', nextAction);
      val = nextAction(val);
    });
  }

  reject(err) {
    // handle errors
  }

  then(handleSuccess) {
    // push the next action to our loop to process
    console.log('then', handleSuccess);
    this.thenChain.push(handleSuccess);

    // return the parent object so you can then call .then()'s in a chain
    return this;
  }

  catch() {
    // handle errors
  }
}

const prom = new PromiseClone(function (resolve, reject) {
  // Simulate an API call which would be delayed
  setTimeout(function () {
    resolve('Initial resolved value');
  }, 3000);
}).then(initial_val => {
  console.log(initial_val);
  return 'passed val';
}).then((passed) => console.log(passed));



// function fetch() {
//   return new Promise(function (resolve, reject) {
//     resolve('data');
//     // reject();
//   });
// }

// testThePromise()
//   .then((passed_value) => console.log(passed_value))
// .catch() // object with 2 methods - then and catch





// console.log(something);
// function testing() {
//   console.log('testing')
// }

// testing();


// function something(asdfasdfadsfasdfdasfsdf) {
//   asdfasdfadsfasdfdasfsdf();
// }


// something(() => {
//   console.log('test');
// });

// const submitBtn = document.querySelector('body > header > h2');
// const myFunc = async () => {
//   console.log('myFunc');
// };

// myFunc();

function somethingElse() {
  const someData = await fetch('/api/someplace');
}
somethingElse();
console.log('after');




// const data = {
//   name: 'bob',
//   age: 30
// };

// const another = {
//   title: 'work',
//   something: 'blah'
// }

// const arr = ['apple', 'orange'];

// const obj = { ...data };

// const newArr = [...arr];

// console.log(obj);




