"use strict";

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(4, 2));

// const fruitProcessor2 = function (apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return console.log(juice);
// };

// fruitProcessor2(3, 1);

// function declaration
// function calcAge1(birthYear) {
//   return 2025 - birthYear;
// }
// console.log(calcAge1(1999));

// //  arrow function
// const calcAge2 = birthYear => 2025 - birthYear;
// console.log(calcAge2(1999));

// // function expression
// const calcAge3 = function (birthYear) {
//   return 2025 - birthYear;
// };
// console.log(calcAge3(1999));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1999, "Andrii"));

// const cutFruitPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1999, "Andrii"));

// const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

// const scoreDolphins = calcAverage(86, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     return console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // const years = new Array(1999, 1991, 1984, 2000);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Andrii";
// console.log(friends);

// const calcAge = function (birthYear) {
//   for (let i = 0; i < birthYear.length; i++) {
//     console.log(2025 - birthYear[i]);
//   }
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// calcAge(years);

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Andrii");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Tony");
// console.log(friends);

// // friends.pop();
// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Andrii"));

// friends.push(23);
// console.log(friends.includes("Andrii"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

// const calcTip = function (bill) {
//   let tip;
//   if (50 <= bill && bill <= 300) {
//     tip = bill * 0.2;
//   } else {
//     tip = bill * 0.15;
//   }
//   return tip;
// };

// const calcTip = bill => (50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2);

// const bills = [122, 555, 44, 125, 320];

// const tips = [];

// const addTips = function (billsArr) {
//   for (let i = 0; i < billsArr.length; i++) {
//     tips.push(calcTip(billsArr[i]));
//   }
// };

// const totals = [];

// const totalCheck = function (bills, tips) {
//   for (let i = 0; i < bills.length; i++) {
//     totals.push(bills[i] + tips[i]);
//   }
// };

// addTips(bills);
// totalCheck(bills, tips);

// console.log(tips);
// console.log(totals);
// const andrii = {
//   firstName: "Andrii",
//   lastName: "Fediai",
//   age: 26,
//   job: "programmer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
// };

// console.log(andrii);
// console.log(andrii.firstName);
// console.log(andrii.friends[1]);

// const nameKey = "Name";
// console.log(andrii[`first${nameKey}`]);
// console.log(andrii[`last${nameKey}`]);

// // const interestedIn = prompt(
// // `What do you want to know about Andrii? Choose between firstName, lastName, age, job and friends`
// // );

// andrii.location = "Ukraine";
// andrii[`twitter`] = "@andriifediai";

// // console.log(andrii[interestedIn]);

// console.log(
//   `${andrii.firstName} has ${andrii.friends.length} friends and his best friend is called ${andrii.friends[0]}`
// );

// const andrii = {
//   firstName: "Andrii",
//   lastName: "Fediai",
//   birthYear: 1999,
//   job: "programmer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

//   // calcAge: function (birthYear) {
//   //   return 2025 - birthYear;
//   // },
//   calcAge: function () {
//     return (this.age = 2025 - this.birthYear);
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${
//       this.hasDriversLicense ? "a" : "no"
//     } driver's license`;
//   },
// };

// console.log(andrii.calcAge());
// console.log(andrii);

// console.log(andrii.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.bmi = this.mass / (this.height * this.height));
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.bmi = this.mass / (this.height * this.height));
//   },
// };

// const betterBMI = function (pers1, pers2) {
//   const answer =
//     pers1.calcBMI() > pers2.calcBMI()
//       ? `${pers1.fullName}'s BMI (${pers1.bmi}) is higher than ${pers2.fullName}'s (${pers2.bmi})`
//       : `${pers2.fullName}'s BMI (${pers2.bmi}) is higher than ${pers1.fullName}'s (${pers1.bmi})`;
//   return answer;
// };

// const betterBMI2 = function (p1, p2) {
//   let winner = {};
//   let loser = {};
//   p1.calcBMI() > p2.calcBMI() ? ((winner = p1), (loser = p2)) : ((winner = p2), (loser = p1));
//   let answer = `${winner.fullName}'s BMI (${winner.bmi}) is higher than ${loser.fullName}'s (${loser.bmi})`;
//   return answer;
// };

// const betterBMI3 = function (p1, p2) {
//   p1.calcBMI();
//   p2.calcBMI();
//   const winner = p1.bmi > p2.bmi ? p1 : p2;
//   const loser = winner === p1 ? p2 : p1;
//   const answer = `${winner.fullName}'s BMI (${winner.bmi}) is higher than ${loser.fullName}'s (${loser.bmi})`;
//   return answer;
// };

// console.log(betterBMI(mark, john));
// console.log(betterBMI2(mark, john));
// console.log(betterBMI3(mark, john));

// const andrii = ["Andrii", "Fediai", 2025 - 1999, "programmer", ["Michael", "Peter", "Steven"], true];
// const typesArr = [];

// for (let i = 0; i < andrii.length; i++) {
//   console.log(andrii[i], typeof andrii[i]);
//   typesArr.push(typeof andrii[i]);
// }

// console.log(typesArr);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2025 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i < andrii.length; i++) {
//   if (typeof andrii[i] !== "string") continue;

//   console.log(andrii[i], typeof andrii[i]);
// }

// console.log("----");

// for (let i = 0; i < andrii.length; i++) {
//   if (typeof andrii[i] === "number") break;

//   console.log(andrii[i], typeof andrii[i]);
// }

// const andrii = ["Andrii", "Fediai", 2025 - 1999, "programmer", ["Michael", "Peter", "Steven"]];

// for (let i = andrii.length - 1; i >= 0; i--) {
//   console.log(andrii[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--------STARTING EXERCISE ${exercise} `);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
// console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
// console.log(`While: Lifting weight repetition ${rep}`);
// rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }
