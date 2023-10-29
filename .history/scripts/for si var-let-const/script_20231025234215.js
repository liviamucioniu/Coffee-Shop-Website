// #VAR
var userName = "Andrei";
console.log(userName);

userName = "Mihai";
console.log(userName);

var userName = "Marius";
console.log(userName);

// #LET
let userAge = 10;
console.log(userAge);

userAge = 20;
console.log(userAge);
// let userAge = 30 -> Eroare!!

// #CONST
const userCity = "Timisoara";
console.log(userCity);

userCity = "Cluj ";
// nu se poate da o noua valoare sau o redeclarare

//Var are function scope
// Let si Const au block scope
// Hoinsting = var fiind function scope prin hoisting declararea variabilei se va muta in parte de sus a functiei

// *****FOR*****

const randomArray = ["A", "B", "C ", "D", "E"];
const randomObjects = { 
    name : 'Luis',
    age : 15
}

// Varianta 1
for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
}

// Varianta 2
for ( let string of randomArray) {
    console.log(string)
}

// Varianta 3
for ( let ceva in rand)
