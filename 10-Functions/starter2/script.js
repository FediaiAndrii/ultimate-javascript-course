"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 3);
// createBooking("LH123", undefined, 300);

// const flight = "LH234";
// const andrii = {
//   name: "Andrii Fediai",
//   passport: 234543245,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 234543245) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// // checkIn(flight, andrii);

// // console.log(flight);
// // console.log(andrii);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(andrii);
// console.log(andrii);

// checkIn(flight, andrii);

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...otherWords] = str.split(" ");
//   return [firstWord.toUpperCase(), ...otherWords].join(" ");
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original sting: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
//   console.log("===========================================");
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);

// const arr = ["Andrii", "Vova", "Katya", "Nastya"];
// arr.forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet("Hey");
// greeterHey("Andrii");
// greeterHey("Steven");

// greet("Hello")("Andrii");

// const greet2 = greeting => name => console.log(`${greeting} ${name}`);
// const greeterHey2 = greet2("Hey");
// greeterHey2("Andrii");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],

//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Andrii Fediai");
// lufthansa.book(635, "John Smith");
// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, "Sarah Williams");

// // Call method
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Mary Cooper");
// console.log(swiss);

// // Apply method
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method
// // book.call(eurowings, 23, "Sarah Williams");

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, "Steven Williams");
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Andrii Fediai");
// bookEW23("Martha Cooper");

// // With Ecent Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTax2 = function (rate) {
//   return function (value) {
//     return console.log(value + value * rate);
//   };
// };
// const addVAT2 = addTax2(0.23);
// addVAT2(100);
// addVAT2(23);
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const input = prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`);
//     const answer = Number(input);
//     if (input !== null && input !== "" && !isNaN(answer) && answer <= this.answers.length && answer >= 0) {
//       this.answers[answer]++;
//     } else {
//       console.log(`Write an option number!`);
//     }
//     this.displayResults(prompt('Write "string" if u want to see the resault as a string and "array" if array'));
//   },
//   displayResults(type = "array") {
//     if (type === "string") {
//       // console.log(`Poll result are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`);
//       console.log(`Poll result are ${this.answers.join(", ")}`);
//     } else {
//       console.log(this.answers);
//     }
//   },
// };

// document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// // IIFE
// (function () {
//   console.log("This will never run again 2");
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log("This will never run again 3"))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(notPrivate);
// console.log(isPrivate);

// Closures
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assinging f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// setTimeout(function () {
//   console.log("Timer");
// }, 1000);
// const perGroup = 1000;

// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

// const firstName = "Andrii";

// function sayHello() {
//   const lastName = "Fediai";
//   return function () {
//     console.log(firstName);
//     console.log(lastName);
//   };
// }

// sayHello()();

// const test = sayHello();
// test();

// console.log(lastName);
