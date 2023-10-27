//? <---------- | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |  ---------->

//! QUESTION NO 01

// function power(a, b) {
//   return Math.pow(a, b);
// }

// let base = 3;
// let exponent = 3;
// let result = power(base, exponent);

// console.log(base + " raised to the power of " + exponent + " is " + result);

//! QUESTION NO 02

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkLeapYear() {
//   let year;

//   do {
//     year = parseInt(prompt("Enter Any Year: "));
//     if (isNaN(year)) {
//       alert("Plaese Enter a Valid Year: ");
//     }
//   } while (isNaN(year));
//   {
//     if (isLeapYear(year)) {
//       console.log(year + " is a Leap Year. ");
//     } else {
//       console.log(year + " is Not a Leap Year.");
//     }
//   }
// }

// checkLeapYear();

//! QUESTION NO 03

// function semiParameter(a, b, c) {
//   return (a + b + c) / 2;
// }

// function triangleArea(a, b, c) {
//   let S = semiParameter(a, b, c);
//   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }

// let sideA = 2;
// let sideB = 3;
// let sideC = 4;

// let areaOfTriangle = triangleArea(sideA, sideB, sideC);

// console.log("The Area of a triangle is: " + areaOfTriangle);

//! QUESTION NO 04

// function calculateAverage(subject1, subject2, subject3) {
//   return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1, subject2, subject3, maxMArks) {
//   let totalMarks = subject1 + subject2 + subject3;
//   return (totalMarks / (maxMArks * 3)) * 100;
// }

// function main() {
//   let subject1Marks = parseFloat(prompt("Enter Marks For Subject 1 "));
//   let subject2Marks = parseFloat(prompt("Enter Marks For Subject 2 "));
//   let subject3Marks = parseFloat(prompt("Enter Marks For Subject 3 "));

//   let maxMArks = 100;

//   let average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//   let percentage = calculatePercentage(
//     subject1Marks,
//     subject2Marks,
//     subject3Marks,
//     maxMArks
//   );
//   console.log("Marks Entered: ");
//   console.log("Subject 1: " + subject1Marks);
//   console.log("Subject 2: " + subject2Marks);
//   console.log("Subject 3: " + subject3Marks);
//   console.log("Average: " + average);
//   console.log("Percentage: " + percentage + "%");
// }

// main();

//! QUESTION NO 05

// function customIndexOf(str, charToFind) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === charToFind) {
//       return i;
//     }
//   }
//   return -1;
// }

// let inputString = "Pakistan";
// let charToSearch = "i";
// let index = customIndexOf(inputString, charToSearch);

// if (index !== -1) {
//   console.log("The Character " + charToSearch + " is found at index " + index);
// } else {
//   console.log("The Character " + charToSearch + " is Not found in The String");
// }

//! QUESTION NO 06

// function removeVowels(sentence) {
//   let vowels = /[aeiouAEIOU]/g;
//   let result = sentence.replace(vowels, "");
//   return result;
// }

// let inputSentence = "My Name is Hamza Raza and I am a Student of Saylani";
// let sentenceWithoutVowels = removeVowels(inputSentence);

// console.log("Orignal Sentence: " + inputSentence);
// console.log("Sentence Without Vowels: " + sentenceWithoutVowels);

//! QUESTION NO 07

// function countSuccessiveVowels(text) {
//   let count = 0;
//   for (let i = 0; i < text.length - 1; i++) {
//     let currentChar = text[i].toLowerCase();
//     let nextChar = text[i + 1].toLowerCase();

//     switch (currentChar + nextChar) {
//       case "ae":
//       case "ai":
//       case "ao":
//       case "au":
//       case "ea":
//       case "ei":
//       case "eo":
//       case "eu":
//       case "ia":
//       case "ie":
//       case "io":
//       case "iu":
//       case "oa":
//       case "oe":
//       case "oi":
//       case "ou":
//       case "ua":
//       case "ue":
//       case "ui":
//       case "uo":
//         count++;
//         break;
//       default:
//         break;
//     }
//   }
//   return count;
// }

// let sentence = "Please read this application and give me gratuity";
// let count = countSuccessiveVowels(sentence);
// console.log(sentence);
// console.log("Number of Occurrences of two Successive Vowels: " + count);

//! QUESTION NO 08

// function convertToMeter(kilometers) {
//   return kilometers * 1000;
// }
// function convertToFeet(kilometers) {
//   return kilometers * 3280.84;
// }
// function convertToInches(kilometers) {
//   return kilometers * 39370.1;
// }
// function convertToCentimeters(kilometers) {
//   return kilometers * 100000;
// }

// function mainFunction() {
//   let distanceKilometers = parseFloat(
//     prompt("Enter The Distance in Kilometers.")
//   );

//   let distanceMeter = convertToMeter(distanceKilometers);
//   let distanceFeet = convertToFeet(distanceKilometers);
//   let distanceInches = convertToInches(distanceKilometers);
//   let distanceCentimeters = convertToCentimeters(distanceKilometers);

//   console.log("Distance in Meters: " + distanceMeter + " m");
//   console.log("Distance in Feet: " + distanceFeet + " ft");
//   console.log("Distance in Inches: " + distanceInches + " in");
//   console.log("Distance in Centimeters: " + distanceCentimeters + " cm");
// }

// mainFunction();

//! QUESTION NO 09

function calculateOvertimePay(hoursWorked) {
  let regularHours = 40;
  let overtimeRate = 12.0;

  if (hoursWorked <= regularHours) {
    return 0;
  } else {
    let overtimeHours = hoursWorked - regularHours;
    let overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
  }
}

let hoursWorked = 45;
let overtimePay = calculateOvertimePay(hoursWorked);

console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
