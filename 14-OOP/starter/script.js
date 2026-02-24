"use strict";

// const Person = function (firstName, birthYear) {
//   //  Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   Never do this
//   //   this.calcAge = function () {
//   //     console.log(2025 - this.birthYear);
//   //   };
// };

// const andrii = new Person("Andrii", 1999);
// console.log(andrii);

// //  1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person("Matilda", 2003);
// const jack = new Person("Jack", 1997);
// console.log(matilda);
// console.log(jack);

// const jay = "Jay";
// console.log(andrii instanceof Person);
// console.log(jay instanceof Person);

// Person.hey = function () {
//   console.log(`hey there xD`);
//   console.log(this);
// };

// Person.hey();
// andrii.hey();

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// andrii.calcAge();
// matilda.calcAge();

// console.log(andrii);
// console.log(andrii.__proto__);
// console.log(Person.prototype);
// console.log(andrii.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(andrii));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = "Homo Sapiens";
// console.log(andrii.species, matilda.species);

// console.log(andrii.hasOwnProperty("firstName"));
// console.log(andrii.hasOwnProperty("species"));
// console.log(andrii.hasOwnProperty("calcAge"));
// console.log(Object.__proto__);

// console.log(andrii.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(andrii.__proto__.__proto__);
// console.log(andrii.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 6, 5, 3, 3, 2]; // new Array === []
// console.log(arr.__proto__);

// const arr2 = [];
// console.log(arr2.__proto__);
// console.log(arr2.__proto__ === Array.prototype);
// console.log(arr2.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector("h1");
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return console.log(`${this.make}: ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   return console.log(`${this.make}: ${this.speed} km/h`);
// };

// const redBull = new Car("RB", 200);
// const mercedes = new Car("Mercedes", 200);

// console.log(redBull);
// console.log(mercedes);
// redBull.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();
// redBull.accelerate();
// mercedes.brake();
// redBull.brake();
// redBull.accelerate();
// mercedes.accelerate();

// class expression
// const PersonCL = class {};

// // class declaration
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods woll be added to .prototype property
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`hey there xD`);
//     console.log(this);
//   }
// }

// const jessica = new PersonCL("Jessica Davis", 2003);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__);
// console.log(jessica.__proto__ === PersonCL.prototype);

// // PersonCL.prototype.greet = function () {
// //   console.log(`Hey ${this.fullName}`);
// // };
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. Classes are executed in strict mode

// // const walter = new PersonCL("Walter", 1992);
// const walter2 = new PersonCL("Walter White", 1992);

// PersonCL.hey();

// const account = {
//   owner: "Andrii",
//   movements: [200, 650, 234, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// console.log(document.querySelectorAll("h1"));
// console.log(Array.from(document.querySelectorAll("h1")));

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 2007);
// sarah.calcAge();
// console.log(sarah);

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// const Car1 = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car1.prototype.accelerate = function () {
//   this.speed += 10;
//   return console.log(`${this.make}: ${this.speed} km/h`);
// };

// Car1.prototype.brake = function () {
//   this.speed -= 5;
//   return console.log(`${this.make}: ${this.speed} km/h`);
// };

// const redBull = new Car1("RB", 200);
// const mercedes = new Car1("Mercedes", 200);

// // 1.
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     return console.log(`${this.make}: ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     return console.log(`${this.make}: ${this.speed} km/h`);
//   }

//   set speedUS(speedMi) {
//     return (this.speed = speedMi * 1.6);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }
// const williams = new Car("Williams", 210);
// const ferrari = new Car("Ferrari", 210);
// console.log(williams);
// console.log(ferrari);
// williams.accelerate();
// ferrari.brake();

// // 2.
// console.log(williams.speed);
// console.log(williams.speedUS);

// // 3.
// ferrari.speedUS = 140;
// console.log(ferrari);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// // Student.prototype = Person.prototype; //bad

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return console.log(`${this.make}: ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   return console.log(`${this.make}: ${this.speed} km/h`);
// };

// const redBull = new Car("RB", 200);
// const mercedes = new Car("Mercedes", 200);

// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// Ev.prototype = Object.create(Car.prototype);
// Ev.prototype.constructor = Ev;

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// };

// const tesla = new Ev("Tesla", 120, 23);
// console.log(tesla);
// tesla.chargeBattery(40);
// console.log(tesla);
// tesla.accelerate();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods woll be added to .prototype property
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`hey there xD`);
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2025 - this.birthYear} years old, but as a student i feel more like ${2025 - this.birthYear + 10}`
//     );
//   }
// }

// // const martha = new StudentCl("Marths Jones", 2001);
// const martha = new StudentCl("Marths Jones", 2001, "Computer Science");
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// ////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// console.log(jay);
// jay.init("Jay", 2010, "Computer Science");
// jay.introduce();
// jay.calcAge();

////////////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// Static version of these 4

// class Account {
//   // public fields
//   locale = navigator.language;
//   bank = "Bankist";

//   // private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;

//     // this.movements = movements;
//     // this.local = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public interface (API)
//   // Public methods
//   getMovements() {
//     return this.#movements;
//     // Not chainable
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   // private method
//   #approveLoan(val) {
//     // Fake method
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static test() {
//     console.log("TEST");
//   }

//   static #test() {
//     console.log("PRIVATE TEST");
//   }
// }
// const acc1 = new Account("Jonas", "EUR", 1111);
// // acc1.deposit(300);
// // acc1.withdraw(100);
// const movements = acc1.deposit(300).withdraw(100).withdraw(50).requestLoan(25000).withdraw(4000).getMovements();
// console.log(movements);

// console.log(acc1);
// // console.log(acc1.#movements);

// Account.test();

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
const Car2 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car2.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(`${this.make}: ${this.speed} km/h`);
};

Car2.prototype.brake = function () {
  this.speed -= 5;
  return console.log(`${this.make}: ${this.speed} km/h`);
};

const redBull = new Car2("RB", 200);
const mercedes = new Car2("Mercedes", 200);

const Ev = function (make, speed, charge) {
  Car2.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car2.prototype);
Ev.prototype.constructor = Ev;

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new Ev("Tesla", 120, 23);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}: ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make}: ${this.speed} km/h`);
    return this;
  }
}

class EvCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EvCl("Rivivan", 100, 40);
rivian.accelerate().brake().chargeBattery(80).accelerate();
