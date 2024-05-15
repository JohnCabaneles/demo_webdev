"use strict"; //activate strict mode

//////////////////////////////////////////
// Strict mode
/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive "); */

//const interface = Audio;
//const private = 534;
//const if = 12;

//////////////////////////////////////////
//Functions
/* 
function logger() {
  console.log("My name is Lyka");
}
//calling, running, invoking a function
logger();
logger();
logger(); */

/* function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 0)); */

/////////////////////////////////////////////////////
/* function fruitProcessor(apples, oranges) { */
/*  console.log(apples, oranges); */
/*   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
} */

/* const appleJuice = fruitProcessor(7, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice); */

/////////////////////////////////////////
//Functions Declaration vs Expression

//function declaration
/* const age1 = calcAge1(1981);
console.log(age1);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

//Function Expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1990);
console.log(age2);

console.log(age1, age2); */

////////////////////////////////////////////////
// Arrow Function
/* const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1981);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear; //2022 - 1981
  const retirement = 65 - age; //65 - 41 = 24
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1981, "Ryan")); */

/////////////////////////////////////////////////
//Functions Calling Other Functions

/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  //console.log(apples,oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${apples} pieces of apple and ${oranges} peices of orange.`;
  return juice;
}

console.log(fruitProcessor(4, 2)); */

///////////////////////////////////////////////////////////////
//Array
/* 
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1981, 1990, 2012, 2018); */

// To access individual value in an array thru index
/* console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Andres"; // to replace or mutate or palitan ng value
console.log(friends);

//
const firstName = "John";
//             Variable     string     calculation  string  array
const john = [firstName, "Cabaneles", 2022 - 1981, "Gwapo", friends];
console.log(john);
console.log(john.length);

//more samples
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1975, 2002, 2012, 2018];
calcAge(years);
 */

////////////////////////////////////////////////
// Introduction to Objects
/* const juliusArray = [
  "Julius",
  "Agustin",
  2022 - 1980,
  "teacher",
  ["Jamesh", "Joshua", "Gerwell"],
];

const julius = {
  firstName: "Julius",
  lastName: "Agustin",
  Age: 2022 - 1980,
  job: "teacher",
  friends: ["Jamesh", "Joshua", "Gerwell"],
};

console.log(julius);
console.log(julius.lastName); // dot is the operator
console.log(julius["lastName"]); // we can also use bracket notation
// we can use some operation in bracket
const nameKey = "Name";
console.log(julius["first" + nameKey]); //firstName
console.log(julius["last" + nameKey]); //lastName
//console.log(julius.'last' + nameKey);

const interestedIn = prompt(
  "what do you want to know about julius? Choose between fistName, lastName, age,job and friends"
); */
/* console.log(julius.interestedIn); */ // undefined result kasi walang ganyang property
/* console.log(julius[interestedIn]); */

/* if (julius[interestedIn]) {
  console.log(julius[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName,age,job and friends"
  );
}

julius.location = "Kalinga";
julius["twitter"] = "@juliusmarcagustin";
console.log(julius);

console.log(
  `${julius.firstName} has ${julius.friends.length} friends and his bestfriend is called ${julius.friends[0]}`
); */

//////////////////////////////////////////////////////
//object methods

/* const julius = {
  firstName: "Julius",
  lastName: "Agustin",
  birthYear: 1981,
  job: "teacher",
  friends: ["Jamesh", "Joshua", "Gerwell"],
  hasDriversLicense: true,

  calcAge: function () {
    /* console.log(this); */
/* this.age = 2022 - this.birthYear;
    return 2022 - this.age;
  },
};
 */
/* console.log(julius.calcAge()); */
/* console.log(julius["calcAge"](1981)); */
/* console.log(julius.age);
console.log(julius.age);
console.log(julius.age);
console.log(julius.age); */

/* const julius = {
  firstName: "Julius",
  lastName: "Agustin",
  birthYear: 1980,
  job: "teacher",
  friends: ["Jamesh", "Joshua", "Gerwell"],
  hasDriversLicense: true,

  calcAge: function () { */
/* console.log(this); */
/*  this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "no" : "a"} driver license`;
  },
};

console.log(julius.calcAge());
console.log(julius.age);
console.log(julius.getSummary()); */

////////////////////////////////////////////////////////////////////////////////

// iteration: The for loop

/*
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️')
console.log('Lifting weights repetition 1 🏋️‍♀️') 
*/

/* for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
} */

// rep = rep + 1 this is equal to rep++

//Looping Arrays, Breaking and Continuing
/* const julius = [
  "Julius",
  "Agustin",
  2022 - 1980,
  "teacher",
  ["Jamesh", "Joshua", "Gerwell"],
  true,
  false,
];
 */
/* 
console.log(julius[0]);
console.log(julius[1]);
console.log(julius[2]);
console.log(julius[3]);
console.log(julius[4]);
console.log(julius[5]); */

/* for (let i = 0; i < julius.length; i++) {
  console.log(julius[i], typeof julius[i]);
} */

//another example
//              i[0]  i[1]  i[2]  i[3]  i[4]
/* const years = [1980, 1985, 2005, 1969, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages); */

//continue and break
//continue - to exit the current iteration of the loop
//break - is used to completely terminate the whole loop

/* console.log("------ Print Only Strings ------");
for (let i = 0; i < julius.length; i++) {
  if (typeof julius[i] !== "string") continue;
  console.log(julius[i], typeof julius[i]);
}

console.log("------- Break with Number -------");
for (let i = 0; i < julius.length; i++) {
  if (typeof julius[i] === "number") break;
  console.log(julius[i], typeof julius[i]);
} */

//////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops

/* const julius = [
  "Julius",
  "Agustin",
  2022 - 1980,
  "teacher",
  ["Jamesh", "Joshua", "Gerwell"],
  true,
];
 */
// 0, 1 .... 5
// 5, 4 .... 0

/* for (let i = julius.length - 1; i >= 0; i--) {
  console.log(i, julius[i]);
} */

//loop within a loop: three exercise with 5 repetitions each

/* for (let exer = 1; exer < 4; exer++) {
  console.log(`------------ Starting exerciese--------${exer}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise: ${exer}: Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
} */

// While Loop
///////////////////////////////////
//for loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`FOR LOOP: Lifting weights repetition ${rep}`);
}

//while
let rep = 10;
while (rep <= 5) {
  console.log(`WHILE : Lifting weights repetition ${rep}`);
}

//do while - guaranteed to execute at least once

let rep2 = 10;
do {
  console.log(`DO WHILE: Lifting weights repetition ${rep2}`);
  rep++;
} while (rep2 <= 5);

//random number
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end.....");
}
