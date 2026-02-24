"use strict";

// Data needed for first part of the section

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  // new methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // old methods
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // Split and join
// console.log("a+very+nice+string".split("+"));
// console.log("Andrii Fediai".split(" "));

// const [firstName, lastName] = "Andrii Fediai".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("andrii fediai");

// // Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(20, "+").padEnd(30, "+"));
// console.log("Andrii".padStart(20, "+").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(44411190979));
// console.log(maskCreditCard(4441114443909799));
// console.log(maskCreditCard("4441114443234909799"));

// // Repeat
// const message2 = "Bad weather... All Departures Delayed..! ";
// console.log(message2.repeat(2));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
// };
// planesInLine(6);
// planesInLine(3);
// planesInLine(12);

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Wrong, try again"],
// ]);

// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice([1]);
// console.log(passengerCorrect);

// const correctName = function (name) {
//   const nameLower = name.toLowerCase();
//   return name[0].toUpperCase() + nameLower.slice(1);
// };
// console.log(correctName("aNDriI"));

// // Comparing emails
// const email = "hello@jonas.io";
// const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const checkEmail = function (email, loginEmail) {
//   const clearLoginEmail = loginEmail.toLowerCase().trim();
//   email === clearLoginEmail ? console.log(`wellcome`) : console.log(`wrong email`);
// };
// checkEmail("andrii@gmail.com", "Andrii@Gmail.COM");
// checkEmail("andrii@gmail.com", "Andriy@gmail.com");

// // replacing
// const priceGB = "288,97₴";
// const priceUS = priceGB.replace("₴", "$").replace(",", ".");
// console.log(priceUS);

// const announcement = "All passengers come to boarding door 23. Boarding door 23!";

// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// //  Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log(`Part of the new Airbus family`);
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log(`You are NOT allowed on board`);
//   } else {
//     console.log(`Welcome aboard!`);
//   }
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snack and a gun for protection");

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf("P")));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log(`You got the middle sesat xD`);
//   else console.log(`You got lucky!!!`);
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("andrii"));
// console.log(typeof new String("andrii"));

// console.log(typeof new String("andrii").slice(1));

// console.log(question);

// // ConvertObject to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //  Quiz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt("Your answer"));
// const answer = 3;
// console.log(answer);

// console.log(question.get(answer === question.get("correct")));

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open xD")
//   .set(false, "We are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// // ////////////////////////////////////////
// // New Operations to Make Sets Useful!
// const italianFoods = new Set(["pasta", "gnocchi", "tomatoes", "olive oil", "garlic", "basil"]);
// const mexicanFoods = new Set(["tortillas", "beans", "rice", "tomatoes", "avocado", "garlic"]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log(commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log(italianMexicanFusion);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log(uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log(uniqueMexicanFoods);

// const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
// console.log(ordersSet);

// console.log(new Set("Andrii"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);
// console.log(new Set("AndriiFediai").size);

// // Propery NAMES

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);
// // console.log(restaurant.openingHours.mon.open);

// // With optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// // Arrays
// const users = [{ name: "Andrii", email: "hello@andrii.com" }];
// console.log(users[0]?.name ?? "User array empty");
// console.log(users[1]?.name ?? "User array empty");

// if (users.length > 0) console.log(users[0].name);
// else console.log("user array empty");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// const rest1 = {
//   name: "Capri",
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest1.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && "<ANONYMOUS>";
// // rest2.owner = rest2.owner && "<ANONYMOUS>";

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1, rest2);

// restaurant.numGuests = 0;

// //
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//////////////////////////////////
// Short Circuiting (&& and ||)

// console.log("======OR======");
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || "Andrii");
// console.log("" || "Andrii");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "hello" || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("======AND======");
// console.log(0 && "Andrii");
// console.log(7 && "Andrii");

// console.log("Hello" && 23 && null && "andrii");

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// // 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

// const arr = [7, 8, 9];
// const arr2 = [5, 6, ...arr];
// console.log(arr2);

// console.log(...arr2);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = "Andrii";
// const letters = [...str, " ", "s."];
// console.log(letters);
// console.log(...str);
// console.log(...str, `Fediai`);

// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Let's make pasta! Ingredient 2?"),
//   // prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// restaurant.orderDelivery({ time: "22:30", address: "Via del Sole, 21", mainIndex: 2, starterIndex: 2 });
// restaurant.orderDelivery({ address: "Via del Sole, 21", starterIndex: 2 });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutatung variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructoring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
