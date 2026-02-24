"use strict";

/* const personOne = {
	firstName: prompt("Enter person one first name"),
	lastName: prompt("Enter person one last name"),
	mass: +prompt("Enter person one mass (kg)"),
	height: +prompt("Enter person one height (m)"),

	calcFullName: function () {
		return this.fullName = `${this.firstName} ${this.lastName}`
	},

	calcBMI: function () {
		return this.bmi = this.mass / (this.height * this.height);
	}
};

const personTwo = {
	firstName: prompt("Enter person two first name"),
	lastName: prompt("Enter person two last name"),
	mass: +prompt("Enter persone mass (kg)"),
	height: +prompt("Enter person two height (m)"),

	calcFullName: function () {
		return this.fullName = `${this.firstName} ${this.lastName}`
	},

	calcBMI: function () {
		return this.bmi = this.mass / (this.height * this.height);
	}
};

const result = function () {
	if (personOne.calcBMI() > personTwo.calcBMI()) {
		return `${personOne.calcFullName()}'s BMI (${personOne.calcBMI()}) is higher than ${personTwo.calcFullName()}'s (${personTwo.calcBMI()})!`;
	} else if (personOne.calcBMI() < personTwo.calcBMI()) {
		return `${personTwo.calcFullName()}'s BMI (${personTwo.calcBMI()}) is higher than ${personOne.calcFullName()}'s (${personOne.calcBMI()})!`;
	}
};
alert(result());
console.log(result()); */


/* for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
} */

/* const andriiArray = [
	"Andrii",
	"Fediai",
	2025 - 1999,
	"programmer",
	["Dima", "Yura", "Vova"],
	true
];

const types = [];

for (let i = 0; i < andriiArray.length; i++) {

	console.log(andriiArray[i], typeof andriiArray[i]);

	// types[i] = typeof andriiArray[i];
	types.push(typeof andriiArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020, 1999];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2025 - years[i]);
}
console.log(ages);

console.log("--- ONLY STRINGS ---")
for (let i = 0; i < andriiArray.length; i++) {
	if (typeof andriiArray[i] !== "string") continue;

	console.log(andriiArray[i], typeof andriiArray[i]);
}

console.log("--- BREAK WITH NUMBER ---")
for (let i = 0; i < andriiArray.length; i++) {
	if (typeof andriiArray[i] === "number") break;
	console.log(andriiArray[i], typeof andriiArray[i]);
} */

/* const andriiArray = [
	"Andrii",
	"Fediai",
	2025 - 1999,
	"programmer",
	["Dima", "Yura", "Vova"],
	true
];

for (let i = andriiArray.length - 1; i >= 0; i--) {
	console.log(i, andriiArray[i], typeof andriiArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`----- STARTING EXERCISE ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
	}
} */

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep}`);
// }

/* let rep = 1;
while (rep <= 10) {
	console.log(`WHILE: Lifting weights repetition ${rep}`);
	rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) console.log(`Loop is about to end... on ${dice}`);
while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log(`Loop is about to end... on ${dice}`);
} */

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const calcTotals = (bill, tip) => bill + tip;


for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
	totals.push(calcTotals(bills[i], tips[i]));
}

console.log(bills);
console.log(tips);
console.log(totals); */

// ============================

/* const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals)); */

// ============================

/* const equipmentCheck = function (equipment) {
	for (let machine in equipment) {
		if (equipment[machine] !== "working") {
			return "Maintenance required!"
		}
	}
	return "All systems go!";
} */

// ============================

/* const monkeyCount = function (n) {
	let count = [];
	for (let i = n; i >= 1; i--) {
		count.unshift(i);
	}
	return count;
} */

// ============================

/* const points = function (score) {
	let count = 0;

	for (let i = 0; i < score.length; i++) {
		let result = score[i].split(":");
		let x = result[0];
		let y = result[1];
		let xNum = Number(x);
		let yNum = Number(y);
		if (xNum > yNum) {
			count += 3;
		} else if (xNum == yNum) {
			count += 1;
		}
	}
	return count;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])); */

// ============================

/* const removeExclamationMarks = function (str) {
	let newString = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== "!" && str[i] !== "?" && str[i] !== "." && str[i] !== ",") {
			newString += str[i];
		}
	}
	return newString;
}
console.log(removeExclamationMarks("Hello world!?.,")); */

// ============================

/* const doubleChar = function (str) {
	let newString = "";
	for (let i = 0; i < str.length; i++) {
		newString += str[i] + str[i];
	}
	return newString;
}
console.log(doubleChar("abcd")); */

// ============================

/* const stringToArray = function (str) {
	return str.split(" ");
} */

// ============================

/* const countSheep = function (count) {
	let newString = "";
	for (let i = 1; i <= count; i++) {
		newString += `${i} sheep...`;
	}
	return newString;
} */

// ============================

/* const grow = function (arr) {
	let res = arr[0];
	for (let i = 1; i < arr.length; i++) {
		res *= arr[i];
	}
	return res;
} */

// ============================

/* const smash = function (arr) {
	return newString = arr.join(" ");
} */

// ============================
// не мій розв'язок нижче

/* function smash(words) {
	"use strict";
	var smashed = '';
	for (var i = 0; i < words.length; i++) {
		smashed += words[i];
		if (i != words.length - 1) {
			smashed += ' ';
		}
	}
	return smashed;
};

console.log(smash(["this", "is", "a", "really", "long", "sentence"])); */

// ============================

/* const isVow = function (arr) {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 97) {
			newArray.push("a");
		} else if (arr[i] == 101) {
			newArray.push("e");
		} else if (arr[i] == 105) {
			newArray.push("i");
		} else if (arr[i] == 111) {
			newArray.push("o");
		} else if (arr[i] == 117) {
			newArray.push("u");
		} else {
			newArray.push(arr[i]);
		}
	}
	return newArray;
} */

/* const isVow = function (arr) {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 97) {
			arr[i] = "a";
		} else if (arr[i] == 101) {
			arr[i] = "e";
		} else if (arr[i] == 105) {
			arr[i] = "i";
		} else if (arr[i] == 111) {
			arr[i] = "o";
		} else if (arr[i] == 117) {
			arr[i] = "u";
		}
	}
	return arr;
} */

// ============================

/* const sayHello = function (arr, city, state) {
	let fullName = "";
	for (let i = 0; i < arr.length; i++) {
		fullName += arr[i];
		if (i != arr.length - 1) {
			fullName += " ";
		}
	}
	return newString = `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
} */

// ============================

/* const sum = function (arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sum([2, 2])); */