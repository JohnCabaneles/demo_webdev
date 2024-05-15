"use strict";

// Scoping in Practice
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const outPut = `You are ${age}, born in ${birthYear}`;
    console.log(outPut);
  }

  printAge();
  return age;
}

const firstName = "Ryan";
calcAge(1981);


/////////////////////////////////////////////////////
/* function calcAge (birthYear){ 
    const age = 2022 - birthYear;
    
    function printAge(){
        const outPut = `You are ${age}, born in ${birthYear}`;
        console.log(outPut);
    }
    printAge();
    return age;
}

const firstName = 'Ryan';
calcAge(1981); */
//console.log(outPut) //error mga bagay na hndi maaaccess
//console.log(age) //error mga bagay na hndi maaaccess
//printAge(); //error mga bagay na hndi maaaccess

/////////////////////////////////////////////////////
/* function calcAge (birthYear){
    const age = 2022 - birthYear;
    
    function printAge(){
        const outPut = `You are ${age}, born in ${birthYear}`;
        console.log(outPut);

        if (birthYear >= 1981 && birthYear <= 1996){
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
    }

    printAge();
    return age;
}

const firstName = 'Ryan';
calcAge(1981); */
/////////////////////////////////////////////////////
/* function calcAge (birthYear){
    const age = 2022 - birthYear;
    
    function printAge(){
        const outPut = `You are ${age}, born in ${birthYear}`;
        console.log(outPut);

        if (birthYear >= 1981 && birthYear <= 1996){
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
        //console.log(str) // error, because you cannot look down
        
    }

    printAge();
    return age;
}

const firstName = 'Ryan';
calcAge(1981); */
/////////////////////////////////////////////////////
/* function calcAge (birthYear){
    const age = 2022 - birthYear;
    
    function printAge(){
        var millenial = true // lumang galawan PRE-ES6
        const outPut = `You are ${age}, born in ${birthYear}`;
        console.log(outPut);

        if (birthYear >= 1981 && birthYear <= 1996){
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
        //console.log(str) // error, because you cannot look down
        console.log(millenial)
    }

    printAge();
    return age;
}

const firstName = 'Ryan';
calcAge(1981); */
/////////////////////////////////////////////////////
/* function calcAge (birthYear){
    const age = 2022 - birthYear;
    
    function printAge(){
        var millenial = true // lumang galawan PRE-ES6
        const outPut = `You are ${age}, born in ${birthYear}`;
        console.log(outPut);

        if (birthYear >= 1981 && birthYear <= 1996){
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b
               
                
            }
            let num1 = add(2, 3)
            console.log(num1)
        }
        //console.log(str) // error, because you cannot look down
        console.log(millenial)
        // let num1 = add(2, 3) // pag nilagay dito, off mo yung strict
        //console.log(num1) 
        
    }

    printAge();
    return age;
}

const firstName = 'Ryan';
calcAge(1981); */
/////////////////////////////////////////////////////
/* function calcAge (birthYear){
    const age = 2022 - birthYear;
    
    function printAge(){
        const outPut = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(outPut);

        if (birthYear >= 1981 && birthYear <= 1996){
            var millenial = true
            const firstName = 'Benjamin';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b
               
                
            }
            let num1 = add(2, 3)
            console.log(num1)
            outPut = 'NEW OUTPUT!'
        }
        //console.log(str) // error, because you cannot look down
        console.log(millenial)
        console.log(outPut)
    }

    printAge();
    return age;
}

const firstName = 'Ryan';
calcAge(1981); */
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

