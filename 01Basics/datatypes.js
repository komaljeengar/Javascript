//"use strict"; //this is a convention to let the compiler know that we are writing the code using the new version of javascript
// although most compilers already treat the code as the new version so its not necessarry to write it

 // alert(3+3) 
 // // this will not work for node compiler, this only works in browser. so the output on browser will be 6 but here it will throw an error

let name = "Komal" // string datatype, can also be used with single quotes 
let age = 18 // number datatype
// let IsLoggedIn = true // boolean datatype 
// let state = null // null
//let hello; // undefined 

//number datatype has limitations, 2 to the power of 53  
// string we just have to put the text into double or single quotes  
//boolean => true/false 
 
// null => is not only a datatype but its also a standalone value 

//undefined => means that we declare a variable using let but we do not initialize it by assigning it a value

// symbol => usually used in react, helps define what is unique 

// object => will talk about it later 

console.log(typeof age); // typeof is used to know whats the datatype of a variable 

// null is here an exception as when we try to find the datatype of null the terminal gives us the output that the datatype is object
// this is one flaw in javascript 

// undefined has its own datatype which is also reflected when we write typeof 

