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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious palsta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngrediaent, ...otherIngrediants) {
    console.log(mainIngrediaent);
    console.log(otherIngrediants);
  },
};

/* // Split and join
console.log("a + very + nice + string".split("+"));
console.log("Andrii Fediai".split(" "));

const [firstName, lastName] = "Andrii Fediai".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("andrii fediai");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Andrii".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(444143256));
console.log(maskCreditCard(4441114444444456));
console.log(maskCreditCard("4441114444444456"));
maskCreditCard("4441114444444456");

// Repeat
const message2 = "Bad weather... All Departues Delayed... ";
console.log(message2.repeat(4));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};
planesInLine(4);
planesInLine(2); */

/* const airline = "TAP Air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "aNdRiI";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const correctName = function (name) {
  let nameLower = name.toLowerCase();
  return nameLower[0].toUpperCase() + nameLower.slice(1);
};
console.log(correctName("aNdrII"));

// Comparing emails
const email = "hello@andrii.com";
const loginEmail = "  Hello@Andrii.CoM \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97#";
const priceUS = priceGB.replace("#", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("A"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection"); */

/* const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle sesats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log(`You have middle seat`);
  else console.log(`You got lucky`);
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("andrii")); */

/* const question = new Map([
  ["question", "What id the best programmong language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Anser ${key}: ${value}`);
}
// const answer = Number(prompt("Your anwer"));
const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get("correct")));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]); */

/* const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :(");

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.size);
// rest.clear();
console.log(rest);

const arr = [1, 2];
rest.set(document.querySelector("h1"), "Heading");
rest.set(arr, "Test");
console.log(rest);
console.log(rest.get(arr)); */

// New Operations to Make Sets Useful!

/* const italianFoods = new Set(["pasta", "gnocchi", "tomatoes", "olive oil", "garlic", "basil"]);

const mexicanFoods = new Set(["tortillas", "beans", "rice", "tomatoes", "avocado", "garlic"]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log("Intersection:", commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union:", italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log("Difference italian:", uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log("Difference mexican:", uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods)); */

/* const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);
console.log(new Set("Andrii"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Grlic Bread");
ordersSet.add("Grlic Bread");
ordersSet.delete("Risotto");
let arr = [...ordersSet];
console.log(arr);
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);
console.log(new Set("AndriiFediaiLoveLifeLoveNature").size); */

/* // Propery NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

/* if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Andrii", email: "andfedyay@gamil.com" }];
console.log(users[1]?.name ?? "User array empty"); */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]); */

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
// // rest2.numGuests = rest1.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && "<ANONYMOUS>";
// // rest2.owner = rest2.owner && "<ANONYMOUS>";

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);
/* console.log("---- OR ----");

console.log(3 || "Andrii");
console.log("" || "Andrii");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;

const guests1 = restaurant.numGuests || 10;
console.log(guests1);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log("---- AND ----");

console.log(0 && "Andrii");
console.log(1 && "Andrii");
console.log("Hello" && 23 && null && "Andrii");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinaach"); */

/* restaurant.orderPizza("mushroms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms"); */

/* const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); */

/* const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); */

/* restaurant.orderDelivery({
  time: "22:30",
  address: "Biberovicha, 9",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Biberovicha, 9",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(starters, menu);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/* const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman (Contributor)"],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: ["computer science", "programming", "javascript", "software", "engineering"],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: ["computer science", "computer systems", "programming", "software", "C", "engineering"],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: ["computer science", "operating systems", "programming", "software", "C", "Java", "engineering"],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: ["computer science", "compilers", "engineering", "interpreters", "software", "engineering"],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
]; */

// const bookChapters = [
//   ["The Basics", 14],
//   ["Sorting", 254],
//   ["Searching", 372],
//   ["Graphs", 526],
//   ["Strings", 706],
// ];

// const logBookChapters = function (arr) {
//   /*   for (const [title, pages] of arr) {
//     let str = "";
//     str += `${title}`.padEnd(15, "_") + ` ${pages}`;
//     console.log(str);
//   } */
//   /*   for (const a of arr) {
//     a[0] = a[0].padEnd(15, "_");
//     console.log(a.join(" "));
//   } */
//   for (const [title, pages] of arr) {
//     console.log(title.padEnd(20, "_") + " " + pages);
//   }
// };

// logBookChapters(bookChapters);

/* const getKeywordsAsString = function (books) {
  const keywordsArr = [];
  for (const book of books) {
    keywordsArr.push(...book.keywords);
  }
  const keywordsNoDuplicates = [...new Set(keywordsArr)];
  return keywordsNoDuplicates.join(";");
};
console.log(getKeywordsAsString(books)); */

/* const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

const logBookCategories = function (str) {
  const strArr = str.split(";");
  for (const word of strArr) {
    console.log(word);
  }
};
logBookCategories(bookCategories); */

/* const logBookTheme = function (title) {
  if (title.startsWith("computer")) console.log("This book is about computers");
  if (title.includes("algorithms") && title.includes("structures"))
    console.log("This book is about algorithms and data structures");
  if ((title.endWith("system") || title.endWith("systems")) && !title.includes("operating"))
    console.log("This book is about some systems, but definitely not about operating systems");
}; */

/* const newBookTitle = books[1].title.replace("Programs", "Software");

console.log(newBookTitle); */

/* const normalizeAuthorName1 = function (name) {
  let lowerName = name.toLowerCase().trim();
  if (lowerName.endsWith("(contributor)")) {
    lowerName = lowerName.slice(0, lowerName.indexOf("(contributor)") - 1);
  }
  let correctName =
    lowerName[0].toUpperCase() +
    lowerName.slice(1, lowerName.indexOf(" ") + 1) +
    lowerName[lowerName.indexOf(" ") + 1].toUpperCase() +
    lowerName.slice(lowerName.indexOf(" ") + 2);

  console.log(correctName);
};

const normalizeAuthorName = function (author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(" "));

  let lastName = "";
  if (author.indexOf(" ") === author.lastIndexOf(" ")) {
    lastName = author.slice(author.indexOf("") + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf("") + 1, author.lastIndexOf(" "));
  }

  const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + capitalizedLastName;
}; */

/* const isContributor1 = function (author) {
  if (author.slice(author.lastIndexOf(" ") + 1) === "(Contributor)") return true;
  else return false;
};

const isContributor = function (author) {
  console.log(author.lastIndexOf("(Contributor)"));
  return author.lastIndexOf("(Contributor)") !== -1;
};

console.log(isContributor("Julie Sussman (Contributor)")); */

/* const string = books[0].ISBN;
console.log(string[6], string[4], string[9], string[8]);

const quote = "A computer once beat me at chess, but it was no match for me at kick boxing";
console.log(quote.indexOf("chess"));
console.log(quote.slice(quote.lastIndexOf(" ") + 1)); */

/* const firstBookMap = new Map(Object.entries(books[0]));

for (const [key, value] of firstBookMap) {
  if (typeof value === "number") console.log(key);
} */

/* const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

bookMap.set("pages", 464);

const title = bookMap.get("title");
const author = bookMap.get("author");

console.log(bookMap);

console.log(`${title} by ${author}`);

console.log(bookMap.size);

bookMap.has("author") && console.log("The author of the book is known"); */

/* let allKeywords = [];
for (const item of books) {
  allKeywords.push(...item.keywords);
}

let uniqueKeywords = new Set(allKeywords);
uniqueKeywords.add("coding");
uniqueKeywords.add("science");
uniqueKeywords.delete("business");

let uniqueKeywordsArr = [...uniqueKeywords];
uniqueKeywords.clear();

console.log(uniqueKeywordsArr);
console.log(uniqueKeywords); */

/* const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
  entries[index].push(value);
}

console.log(entries);

const entries2 = Object.entries(books[0].thirdParty.goodreads);

console.log(entries2); */

/* const getFirstKeyword = function (obj) {
  console.log(obj.keywords?.[0]);
};

getFirstKeyword(books[0]); */

/* const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};
console.log(newBook2); */

/* const allAuthors = [];

for (let item of books) {
  if (typeof item.author !== "string") {
    allAuthors.push(...item.author);
  } else {
    allAuthors.push(item.author);
  }
}

for (let [i, el] of allAuthors.entries()) {
  console.log(`${i + 1}: ${el}`);
} */

/* let pageSum = 0;
for (const item of books) {
  pageSum += item.pages;
}
console.log(pageSum); */

/* for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
} */

/* for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
} */

/* for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`${books[i].title} provides no data its online content`);
} */

/* const hasExamplesInJawa = function (obj) {
  console.log(obj.programmingLanguage === "Java" ? true : "No data availiable");
  console.log(obj.programmingLanguage === "Java" || "No data availiable");
};
hasExamplesInJawa(books[0]); */

/* for (let i = 0; i < books.length; i++) {
  if (books[i].onlineContent) console.log(`${books[i].title} provides online content`);
  books[i].onlineContent && console.log(`${books[i].title} provides online content`);
} */

/* const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
};
printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne"); */
/* const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (str) {
  console.log(...str);
}; */

/* const { title, author, ISBN } = books[0];
console.log(title, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { language, programmingLanguage = "unknown" } = books[6];
console.log(programmingLanguage);

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRAting },
  },
} = books[0];
console.log(bookRAting);

const printBookInfo = function ({ title, author, year = "unknown" }) {
  return `${title} by ${author}, ${year}`;
};
console.log(printBookInfo(books[0])); */

/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Itera bles: arrays, strings, maps, sets, NOT objects
const str = "Andrii";
const letters = [...str, " ", "S."];
console.log(letters); */

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
/* const newRestaurant = { foundedIn: 1999, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name); */

/* We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀 */

/* const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// #1
const [players1, players2] = game.players;
console.log(players1, players2, game.players);

// #2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// #3
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// #4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// #5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// #6
const printGoals = function (...players) {
  let goalPlayers = players;
  for (let i = 0; i < goalPlayers.length; i++) {
    console.log(goalPlayers[i]);
  }
  console.log(`Have done ${goalPlayers.length} Goals`);
};

// #7
(game.odds.team1 < game.odds.team2 && console.log("Team1")) || console.log("Team2"); */

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/* const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// #1
for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${name}`);
}

//  #2
const values = Object.values(game.odds);
let sumValue = 0;
for (const value of values) {
  sumValue += value;
}
let averageValue = sumValue / values.length;
console.log(averageValue);

// #2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// #3
const { team1, x: draw, team2 } = game.odds;
console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);

// #3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS
let scorers = {};

for (const name of game.scored) {
  if (scorers[name]) {
    scorers[name]++;
  } else {
    scorers[name] = 1;
  }
}

console.log(scorers); */

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/* const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// #1
const events = [...new Set(gameEvents.values())];
console.log(events);

// #2
gameEvents.delete(64);
console.log(gameEvents);

// #3
const average = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${average} minutes`);

// #4
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`;
  console.log(`${half} ${key}: ${value}`);
} */

/* const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
console.log(twoSum1([3, 2, 4], 6)); */

/* const twoSum = function (nums, target) {
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i];
    } else {
      numsMap.set(nums[i], i);
    }
  }
};
console.log(twoSum([3, 2, 4], 6)); */

// Coding Challenge #4

/* Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀 */

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// const textArea = document.querySelector("textarea");
// const convertBtn = document.querySelector("button");
// convertBtn.addEventListener("click", function () {
//   const text = textArea.value.toLowerCase().split("\n");
//   // for (const word of text) {
//   //   let [firstWord, secondWord] = word.trim().split("_");
//   //   secondWord = secondWord.replace(secondWord[0], secondWord[0].toUpperCase());
//   //   let point = "✅";
//   //   console.log(`${firstWord}${secondWord.padEnd(20, " ")}`);
//   // }
//   for (let i = 0; i < text.length; i++) {
//     let [firstWord, secondWord] = text[i].trim().split("_");
//     secondWord = secondWord.replace(secondWord[0], secondWord[0].toUpperCase());
//     let fullString = firstWord + secondWord;
//     console.log(`${fullString.padEnd(25, " ")}${"✅".repeat(i + 1)}`);
//   }
// });

/* document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
}); */

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🚩" : ""}${type.replaceAll("_", " ")} from ${getCode(
//     from
//   )} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(45);

//   console.log(output);
// }
