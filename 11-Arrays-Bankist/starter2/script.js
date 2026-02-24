"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standart",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  //  .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name.at(0))
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  //  Display summary
  calcDisplaySummary(acc);
};

//  Event handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  //  Prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = "1";

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
  inputTransferTo.blur();
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov * 0.1 >= amount)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
  console.log(accounts);
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// //////////////////////////////////////////
////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// // SLICE

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE

// // console.log(arr.splice(2));
// // console.log(arr);
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE

// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN

// console.log(letters.join("-"));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log("Andrii".at(0));
// console.log("Andrii".at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const num of movements) {
// for (const [i, num] of movements.entries()) {
//   console.log(`Movement ${i + 1} - ${num >= 0 ? "Deposit" : "Withdraw"}:`.padEnd(25, " ") + `${num}`.padStart(4, " "));
// }

// console.log(`/////////////////////- forEach -///////////////////////////////`);

// movements.forEach(function (num, i, arr) {
//   console.log(`Movement ${i + 1} - ${num >= 0 ? "Deposit" : "Withdraw"}:`.padEnd(25, " ") + `${num}`.padStart(4, " "));
// });

// // 0: function(200)
// // 1: function(450)
// // 2: function(-400)
// //  ...

// // With Map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// //  With Set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (arr1, arr2) {
//   const arr1Copy = arr1.slice();
//   arr1Copy.splice(0, 1).splice(-2);
//   const juliaAndKateDogs = arr1Copy.concat(arr2);
//   juliaAndKateDogs.forEach(function (dogsAge, i) {
//     console.log(
//       `Dog number ${i + 1} is ${dogsAge >= 3 ? `an adult, and is ${dogsAge} years old` : `still a puppy 🐶`}`
//     );
//   });
// };
// checkDogs(dogsJulia, dogsKate);

// const eurToUsd = 1.1;

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSD2 = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSD2);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// const movementsDescriptio0ns = movements.map(
//   (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
// );
// console.log(movementsDescriptio0ns);

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// console.log(movements);

// // accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// const balance2 = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance2);

// let balance3 = 0;
// for (const mov of movements) balance3 += mov;
// console.log(balance3);

// Maximum value
// const maxNum = movements.reduce(function (acc, mov) {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(maxNum);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const arrDogsAges = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (dogsArr) {
//   // const dogsToHumanAges = dogsArr.map(function (dogsAge) {
//   //   if (dogsAge <= 2) return dogsAge * 2;
//   //   else return dogsAge * 4 + 16;
//   // });
//   // const adultDogs = dogsToHumanAges.filter(dog => dog >= 18);
//   // const averageAge = adultDogs.reduce((acc, dog) => acc + dog, 0) / adultDogs.length;
//   const averageAge = dogsArr
//     .map(dog => (dog <= 2 ? dog * 2 : dog * 4 + 16))
//     .filter(dog => dog >= 18)
//     .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
//   return averageAge;
// };
// console.log(calcAverageHumanAge(arrDogsAges));

// const eurToUsd = 1.1;
// console.log(movements);

// // PiPELINE
// const totalDepositesUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositesUSD);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === "Jessica Davis");

// let accountTwo;
// for (const acc of accounts) if (acc.owner === "Jessica Davis") accountTwo = acc;
// console.log(account);
// console.log(accountTwo);

// console.log(movements);
// // const lastWithdrawal = movements.findLast(mov => mov < 0);
// // console.log(lastWithdrawal);
// console.log("Your latest large (2000+) movements was X movements ago");
// const large = movements.findLast(mov => mov >= 2000);
// console.log(large);
// const x = movements.findIndex(mov => mov === large);
// console.log(x);
// console.log(`Your latest large movement was ${movements.length - x} movements ago`);

// const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) >= 1000);
// console.log(latestLargeMovementIndex);
// console.log(`Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`);

// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));

// // SOME: CONDITION
// console.log(movements.some(mov => mov === -130));

// const someDeposits = movements.some(mov => mov > 0);
// console.log(someDeposits);

// // EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(account4.movements.some(deposit));
// console.log(account4.movements.every(deposit));
// console.log(account4.movements.filter(deposit));

// console.log(movements);

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flat
// const overalBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// // flatMap

// const overalBalance3 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/
// const breeds = [
//   {
//     breed: "German Shepherd",
//     averageWeight: 32,
//     activities: ["fetch", "swimming"],
//   },
//   {
//     breed: "Dalmatian",
//     averageWeight: 24,
//     activities: ["running", "fetch", "agility"],
//   },
//   {
//     breed: "Labrador",
//     averageWeight: 28,
//     activities: ["swimming", "fetch"],
//   },
//   {
//     breed: "Beagle",
//     averageWeight: 12,
//     activities: ["digging", "fetch"],
//   },
//   {
//     breed: "Husky",
//     averageWeight: 26,
//     activities: ["running", "agility", "swimming"],
//   },
//   {
//     breed: "Bulldog",
//     averageWeight: 36,
//     activities: ["sleeping"],
//   },
//   {
//     breed: "Poodle",
//     averageWeight: 18,
//     activities: ["agility", "fetch"],
//   },
// ];

// // 1.
// const huskyWeight = breeds.find(dog => dog.breed === "Husky").averageWeight;
// console.log(huskyWeight);

// // 2.
// const dogBothActivities = breeds.find(
//   dog => dog.activities.includes("running") && dog.activities.includes("fetch")
// ).breed;
// console.log(dogBothActivities);

// // 3.
// const allActivities = breeds.flatMap(dog => dog.activities);
// console.log(allActivities);

// // 4.
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // 5.
// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes("swimming"))
//       .flatMap(breed => breed.activities)
//       .filter(act => act !== "swimming")
//   ),
// ];
// console.log(swimmingAdjacent);

// // 6.
// console.log(breeds.every(breed => breed.averageWeight >= 10));

// // 7.
// console.log(breeds.some(breed => breed.activities.length >= 3));

// // 8.
// const maxWeight = Math.max(
//   ...breeds.filter(breed => breed.activities.includes("fetch")).map(breed => breed.averageWeight)
// );
// console.log(maxWeight);

// Strings
// const owners = ["Andrii", "Zach", "Adam", "Martha"];
// console.log(owners.sort());

// // Numbers
// console.log(movements);

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// console.log(movements);

// const groupedMovements = Object.groupBy(movements, movement => (movement > 0 ? "deposits" : "withdrawals"));
// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;
//   if (movementCount >= 8) return "very active";
//   if (movementCount >= 4) return "active";
//   if (movementCount >= 1) return "moderate";
//   return "inactive";
// });
// console.log(groupedByActivity);

// // const groupedAccounts = Object.groupBy(accounts, account => account.type);
// const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
// console.log(groupedAccounts);
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7).fill(7);
// console.log(x);
// // x.fill(1);
// console.log(x);
// x.fill(1, 3, 5);
// console.log(x);
// arr.fill(23, 4, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// const hDice = Array.from({ length: 100 }, (_, i) => Math.trunc(Math.random() * 6 + 1));
// console.log(hDice);

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(document.querySelectorAll(".movements__value"), el =>
//     Number(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll(".movements__value")];
// });
// console.log(movements);
// // const reversedMov = movements.slice().reverse();
// const reversedMov = movements.toReversed();
// console.log(reversedMov);
// console.log(movements);

// // toSorted (sort), toSpliced (splice)
// // movements[1] = 2000;
// const newMovements = movements.with(1, 2000);

// console.log(newMovements);
// console.log(movements);
/////////////////////////////////////
// Array Methods Practice

// // 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

// // 2.
// // const numDepistits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// const numDepistits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDepistits1000);

// // 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .trim()
//     .split(" ")
//     .map(word => (!exceptions.includes(word) ? capitalize(word) : word))
//     .join(" ");
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too long"));
// console.log(convertTitleCase("and here is another title with an EXAMPLE"));

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
//   { weight: 18, curFood: 244, owners: ["Joe"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // 1.
// dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 2.
// const curFood = dogs.find(dog => dog.owners.includes("Sarah")).curFood;
// const recFood = dogs.find(dog => dog.owners.includes("Sarah")).recFood;
// if (curFood > recFood) console.log("too much");
// if (curFood < recFood) console.log("too little");

// // 3.
// const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
// const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
// console.log(ownersTooMuch);
// console.log(ownersTooLittle);

// // 4.
// console.log(`${ownersTooMuch.join(" and ")}'s dogs eat too much`);
// console.log(`${ownersTooLittle.join(" and ")}'s dogs eat too little`);

// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.
// console.log(dogs.every(dog => dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9));

// // 7.
// const okayDogs = dogs.filter(dog => dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9);
// console.log(okayDogs);

// // 8.
// const dogsGroupsByPortions = Object.groupBy(dogs, dog => {
//   if (dog.curFood > dog.recFood) return "too-much";
//   if (dog.curFood < dog.recFood) return "too-little";
//   return "exact";
// });
// console.log(dogsGroupsByPortions);

// // 9.
// const dogsGroupsByOwners = Object.groupBy(dogs, dog => {
//   return dog.owners.length;
// });
// console.log(dogsGroupsByOwners);

// // 10.
// const sortedByRecFood = dogs.toSorted((a, b) => a.recFood - b.recFood);
// console.log(sortedByRecFood);
