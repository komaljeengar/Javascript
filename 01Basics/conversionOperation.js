let score = 33

console.log(typeof score); // number
console.log(typeof(score)); // number 


let ValueInNumber = Number(score)
console.log(typeof ValueInNumber); // number 
console.log(ValueInNumber); // 33

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true ; 0 => false 
// "" => false 
// "komal" => true 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string 