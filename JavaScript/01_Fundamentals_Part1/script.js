// this is a comment
//////////////////////////////
// This is a test for linking only
/* console.log("Hello World!"); */

////////////////////////////
// Values and Variables
/* console.log("Ryan");
console.log(29); */

/* let firstName = "Pickachu"; */ //declare a variable

//firstName ; first_name ; FIRST_NAME

/* console.log(firstName);
console.log(firstName);
console.log(firstName);
 */
//Variable Name Conventions
//firstName ; first_name ; FIRST_NAME

/* let ryan_azur = "RA"; */
//let new = 29;  this will not work because new is a reserved word
/* let $function = 29; */

/* let person = "John";
let PI = 3.1415;

let job1 = "Programmer";
let job2 = "Teacher";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob); */

////////////////////////////////
/* // Data Types
/* let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "23");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null); */

////////////////////////////
// let, const and var
/* let age = 22;
age = 41; */ //reassign new value

/* const birthYear = 2000;
birthYear = 2002; */
/* const job; */
//limit the user to mutate because this could lead to bugs
//decide on the use case to use let or const

/* var job = "programmer";
job = "teacher"; */

////////////////////////////
// Basic Operators
// Math Operators
/* const now = 2022;
const ageReyn = now - 1981;
const ageLyka = now - 1995;
console.log(ageReyn, ageLyka);

console.log(ageReyn * 2, ageReyn / 10, 2 ** 3); // 2 * 2 * 2

const firstName = "Lyka";
const lastName = "Delima";
console.log(firstName + " " + lastName); */

// Assignment Operators
/* let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison Operators

console.log(ageReyn > ageLyka);
console.log(ageLyka >= 18);

const isFullAge = ageLyka >= 18;
console.log(isFullAge);

console.log(now > 1991 > now - 2018); */

//Operator Precedence
/* const now = 2037;
const ageReyn = now - 1991;
const ageLyka = now - 2018;
// 30           3
console.log(now - 1991 > now - 2018);

console.log(25 - 10 * 2);
console.log((25 - 10) * 2);
console.log((85 + 80 + 90) / 3);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);
 */

/* let javascriptIsFun = true;
console.log(javascriptIsFun); */

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "23");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1990;
// console.log(typeof year);

// console.log(typeof null);

//////////////////////////////////////////
//Strings and Template Literals
/* const firstName = "Jonas";
const job = "teacher";
const birthYear = 1981;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

//using template literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log(
  "String with \n\
multiple \n\
lines"
);
 */

///////////////////////////////////////////////////
// Taking Decisions: if / else statements

/* const age = 19; 
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Lyka can start drving");
} */

/* const age = 15;
if (age >= 18) {
  console.log("Lyka can start drving 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Lyka is too young. Wait for another ${yearsLeft} years :)`);
}

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

//////////////////////////////////////////////////
//Type Conversion and Coercion

/* const inputYear = "1991"; */ //string
/* console.log(inputYear * 18); */ // number     string + number = concat

// Type Conversion
/* const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Ronald"));
console.log(typeof NaN);

console.log(String(23), 23); */
//number to string; number to boolean

//type of coercion
/* console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3); //type coercion
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
 */

//////////////////////////////////////////////////
//  Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean("john"));
console.log(Boolean({})); //empty object */

/* const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("Yehey, height has a value");
} else {
  console.log("Height is UNDEFINED");
}
 */

//////////////////////////////////////////////////

// Equality Operators:    == vs. ===
/* const age = 18;
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
122;
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 8) {
  console.log("8 is also a great number!");
} else if (favorite === 24) {
  console.log("24 is also a great number!");
} else {
  console.log(" Your number is not a great number for a jersey");
}

if (favorite !== 23) console.log("Why not 23?"); */

///////////////////////////////////////////////////////////
//Logical operators

const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision); //and
console.log(hasDriverLicense || hasGoodVision); //or
console.log(!hasDriverLicense); //not

const isTired = false; //C

console.log(hasDriverLicense && hasGoodVision && !isTired);
