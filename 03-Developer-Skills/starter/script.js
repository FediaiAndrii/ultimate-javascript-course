// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temperatures[0];
  let min = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures);

console.log(amplitudeNew); */

/* const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };

  console.table(measurement);

  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin()); */

/* const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug); */

/* const printForecast = function (arr) {
  let result = `...`;
  for (let i = 0; i < arr.length; i++) {
    result += ` ${arr[i]}C in ${i + 1} days ...`;
  }
  return result;
};
console.log(printForecast([17, 21, 23])); */

/* const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const calcTotalHours = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
let total = calcTotalHours(testData);
console.log(`Total hours worked: ${calcTotalHours(testData)}`);

let averageHours = total / 7;
console.log(`Average daily hours: ${averageHours}`);

const calcMostHoursDay = function (arr) {
  let max = arr[0];
  let day = arr.indexOf(0);
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    day = arr.indexOf(i);
  }
  return day;
};
let mostHoursDay = calcMostHoursDay(testData);
console.log(mostHoursDay); */

/* const positiveSum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
}; */

/* const getCount = function (str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      sum += 1;
  }
  return sum;
}; */

/* const padIt = function (str, n) {
  let newStr = str;
  let i = 0;
  do {
    if (i % 2 === 1) {
      newStr = "*" + newStr;
    } else if (i > 0 && i % 2 === 0) {
      newStr = newStr + "*";
    }
    i++;
  } while (i <= n);
  return newStr;
};
console.log(padIt("a", 5)); */
