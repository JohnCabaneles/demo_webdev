"use strict";

//////////////////////////////////////
//Challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(5, 7, 9)); //checking lang eme lang to

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(`Dolphins score: ${scoreDolphins} | Koalas score: ${scoreKoalas}`);

//functionality para malaman kung sino yung winner
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins.....");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(800, 700);

//Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(`Dolphins score: ${scoreDolphins} | Koalas score: ${scoreKoalas}`);
checkWinner(scoreDolphins, scoreKoalas);
