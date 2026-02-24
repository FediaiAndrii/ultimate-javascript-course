"use strict";

// Data needed for first part of the section

const books = [
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
];

// // 17.1
// const bookCategories =
//   "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

// const logBookCategories = function (cat) {
//   const catArr = cat.split(";");
//   for (const c of catArr) {
//     console.log(c);
//   }
// };

// logBookCategories(bookCategories);

// // 17.2
// const getKeywordsAsString = function (books) {
//   const keywordsArr = [];
//   for (const book of books) {
//     keywordsArr.push(...book.keywords);
//   }
//   const uniqueKeywords = [...new Set(keywordsArr)];
//   return uniqueKeywords.join(";");
// };
// console.log(getKeywordsAsString(books));

// // 17.3
// const bookChapters = [
//   ["The Basics", 14],
//   ["Sorting", 254],
//   ["Searching", 372],
//   ["Graphs", 526],
//   ["Strings", 706],
// ];
// const logBookChapters = function (bookChapters) {
//   for (const [title, pages] of bookChapters) {
//     console.log(title.padEnd(15, "_"), pages);
//   }
// };
// logBookChapters(bookChapters);

// // 16.1
// const normalizeAuthorName = function (author) {
//   const authorLower = author.toLowerCase().replace("(contributor)", "").trim();
//   let firstName = authorLower.slice(0, authorLower.indexOf(" "));
//   let lastName = authorLower.slice(authorLower.indexOf(" ") + 1);
//   firstName = firstName[0].toUpperCase() + firstName.slice(1);
//   lastName = lastName[0].toUpperCase() + lastName.slice(1);
//   return firstName + " " + lastName;
// };
// console.log(normalizeAuthorName("  JuliE sussMan (Contributor)"));

// // 16.2
// let newBookTitle = books[1].title.replace("Programs", "Software");
// console.log(newBookTitle);

// // 16.3
// const logBookTheme = function (titleName) {
//   const title = titleName.toLowerCase();
//   if (title.startsWith("computer")) {
//     console.log("This book is about computers");
//   } else if (title.includes("algorithms") && title.includes("structures")) {
//     console.log("This book is about algorithms and data structures");
//   } else if (
//     (title.endsWith("system") && !title.includes("operating")) ||
//     (title.endsWith("systems") && !title.includes("operating"))
//   ) {
//     console.log("This book is about some systems, but definitely not about operating systems");
//   }
// };
// logBookTheme(books[2].title);

// // 15.1
// console.log(books[0].ISBN[6]);
// console.log(books[0].ISBN[4]);
// console.log(books[0].ISBN[9]);
// console.log(books[0].ISBN[8]);

// // 15.2
// const quote = "A computer once beat me at chess, but it was no match for me at kick boxing";
// console.log(quote.indexOf("chess"));

// // 15.3
// console.log(quote.slice(quote.lastIndexOf("b")));
// console.log(quote.slice(quote.lastIndexOf(" ") + 1));

// // 15.4
// const isContributor = function (author) {
//   return author.lastIndexOf("(Contributor)") !== -1;
//   // return author.slice(author.lastIndexOf(" ") + 1) == "(Contributor)";
// };
// console.log(isContributor("Julie Sussman (Contributor)"));

// // 14.1
// const firstBookMap = new Map([...Object.entries(books[0])]);
// console.log(firstBookMap);

// // 14.2
// for (const [key, value] of firstBookMap) {
//   typeof value === "number" && console.log(key);
// }

// // 13.1
// const bookMap = new Map([
//   ["title", "Clean Code"],
//   ["author", "Robert C. Martin"],
// ]);
// console.log(bookMap);

// // 13.2
// bookMap.set("pages", 464);
// console.log(bookMap);

// // 13.3
// console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);

// // 13.4
// console.log(bookMap.size);

// // 13.5
// bookMap.has("author") && console.log("The author of the book is known");

// // 12.1
// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);

// // 12.2
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// // 12.3
// uniqueKeywords.add("coding");
// uniqueKeywords.add("science");
// console.log(uniqueKeywords);

// // 12.4
// uniqueKeywords.delete("business");
// console.log(uniqueKeywords);

// // 12.5
// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// // 12.6
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// // 11.1
// const entries = [];

// for (const [key, value] of Object.entries(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }
// console.log(entries);

// // 11.2
// for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
//   entries[index].push(value);
// }
// console.log(entries);

// // 11.3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// // 11.4
// console.log(entries);
// console.log(entries2);

// // 10.1
// const getFirstKeyword = function (book) {
//   console.log(book.keywords?.[0]);
// };
// getFirstKeyword(books[0]);
// getFirstKeyword(newBook2); // from previous tasks

// // 9.1
// const bookData = [
//   ["title", "Computer Networking: A Top-Down Approach"],
//   ["author", ["James F. Kurose", "Keith W. Ross"]],
//   ["publisher", "Addison Wesley"],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// console.log(newBook);

// // 9.2
// const pages = 880;

// const newBook2 = {
//   title: "The C Programming Language",
//   author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
//   pages,
// };
// console.log(newBook2);

// // 8.1
// let pageSum = 0;
// for (const i of books) {
//   pageSum += i.pages;
// }
// console.log(pageSum);

// // 8.2
// const allAuthors = [];

// for (const book of books) {
//   if (typeof book.author === "string") {
//     allAuthors.push(book.author);
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }
// console.log(allAuthors);

// // 8.3
// for (const [index, author] of allAuthors.entries()) {
//   console.log(`${index + 1}: ${author}`);
// }

// // 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// // 7.2
// for (let i = 0; i < books.length; i++) {
//   !(books[i].thirdParty.goodreads.rating >= 4.2) ? (books[i].highlighted &&= false) : (books[i].highlighted &&= true);
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// // 6.1
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ?? console.log(`"${books[i].title}" provides no data about its online content`);
// }

// // 5.1
// const hasExamplesInJava = function (book) {
//   return book.programmingLanguage === "Java" || "no dataa available";
// };
// console.log(hasExamplesInJava(books[1]));

// // 5.2

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
// }

// // 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// // 4.2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// // 4.3
// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book ${title} has ${authors.length} authors`);
// };
// printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

// // 3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// // 3.2
// const spellWord = function (str) {
//   console.log(...str);
// };
// spellWord("JavaScript");

// // 2.1
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// // 2.2
// const { keywords: tags } = books[0];
// console.log(tags);

// // 2.3
// const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language, programmingLanguage);

// // 2.4
// let bookTitle = "unknown";
// let bookAuthor = "unknown";

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// // 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// // 2.6
// const printBookInfo = function ({ title, author, year = "year unknown" }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// printBookInfo(books[0]);
// printBookInfo({ title: "Algorithms", author: "Robert Sedgewick", year: "2011" });
// printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });

// // 1.1
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// // 1.2
// const [, , thirdBook] = books;
// console.log(thirdBook);

// // 1.3
// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// // 1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// // 6
// const printGoals = function (...playersName) {
//   for (let i = 0; i < playersName.length; i++) {
//     console.log(playersName[i]);
//   }
//   console.log(playersName.length);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// // 7
// (game.odds.team1 < game.odds.team2 && console.log("team1")) ||

//   (game.odds.team2 < game.odds.team1 && console.log("team2"));

///////////////////////////////////////
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

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [index, value] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${value}`);
// }

// // 2.
// let sum = 0;
// for (const value of Object.values(game.odds)) {
//   sum += value;
// }
// let avgOdd = sum / Object.values(game.odds).length;
// console.log(avgOdd);

// // 3.
// // console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// // console.log(`Odd of victory draw: ${game.odds.x}`);
// // console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// for (const [key, val] of Object.entries(game.odds)) {
//   if (key === "x") console.log(`Odd of draw: ${val}`);
//   else console.log(`Odd of victory ${game[key]}: ${game.odds[key]}`);
// }

// // 4.
// const scorers = {};
// for (const val of game.scored) {
//   if (scorers[val] !== undefined) scorers[val]++;
//   else scorers[val] = 1;
// }

// console.log(scorers);

///////////////////////////////////////
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

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.
// const events = [...new Set([...gameEvents.values()])];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// // 4.
// for (const [key, val] of gameEvents) {
//   let str = "";
//   if (key <= 45) str = "[FIRST HALF] ";
//   else if (key > 45) str = "[SECOND HALF] ";
//   console.log(str + `${key}: ${val}`);
// }

// console.log("=================================");

// // 4. (2)
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

///////////////////////////////////////
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   console.log(rows);
//   console.log(rows.entries());

//   // for (const [i, row] of rows.entries()) {
//   //   const [first, second] = row.toLowerCase().trim().split("_");

//   //   const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//   //   console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   // }

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     console.log(i);
//     console.log(row);
//     console.log(first, second);

//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }

//   // for (const row of rows) {
//   //   const clearRow = row.toLowerCase().trim().split("_");
//   //   let [firstWord, secondWord] = clearRow;
//   //   firstWord = firstWord.replace(firstWord[0], firstWord[0].toUpperCase());
//   //   secondWord = secondWord.replace(secondWord[0], secondWord[0].toUpperCase());
//   //   const resultRow = [firstWord, secondWord];
//   //   console.log(resultRow.join("").padEnd(20, " ") + "✅".repeat());
//   // }
// });

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll("_", " ")} from ${getCode(
    from
  )} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(45, " ");
  console.log(output);
}
