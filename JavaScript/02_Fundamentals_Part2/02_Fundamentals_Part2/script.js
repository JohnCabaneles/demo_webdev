"use strict"; //activate strict mode

////////////////////////////////////
// Strict Mode
/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive "); */

//const interface = "Audio";
//const private = 534;
//const if = 12;

////////////////////////////////////
//Functions    DRY = Do not Repeat Yourself

/* function logger() {
  console.log("My name is Lyka");
} */
// calling, running, invoking a function
/* logger();
logger();
logger(); */

/* function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;  
}

console.log(fruitProcessor(7, 0)); */

///////////////////////////////////////////////////////
/* function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(7, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice); */

/////////////////////////////////////////////////////
// Function Declaration vs Expressions

//function declaration

/* function calcAge1(birthYear) {
  return 2022 - birthYear;
  /* const age = 2022 - birthYear;
  console.log(age1); 
}

const age1 = calcAge1(1981);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1990);
console.log(age2);

console.log(age1, age2); */

/////////////////////////////////////////////////
// Arrow functions
/* const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1981);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear; //2022 - 1981 = 41
  const retirement = 65 - age; //65 -41 =24
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1981, "Ryan"));

//////////////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(4, 2)); */
//////////////////////////////////////////
//Array
/* const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1981, 1990, 2012, 2018);

//to access individual value in an array thru index
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Andres"; //replace or mutate or palitan ng value
console.log(friends);

//
const firstName = "John";
//            variable     string       calculation string   array
const john = [firstName, "Cabaneles", 2022 - 1981, "Gwapo", friends];
console.log(john);
console.log(john.length);

//more samples
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1975, 2002, 2012, 2018];

calcAge(years);
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); */

////////////////////////////////////////////
//Basic Array Operations (Methods)

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//Add elements
const newLength = friends.push("Andres"); //maglalagay sa dulo
console.log(friends);
console.log(newLength);

friends.unshift("Arjay"); // magsisingit sa unahan
console.log(friends);

//Remove elements
friends.pop(); //last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //remove first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Brian"));

//ES6 methods
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

//we can use the unclude method to write conditionals
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven;");
}
