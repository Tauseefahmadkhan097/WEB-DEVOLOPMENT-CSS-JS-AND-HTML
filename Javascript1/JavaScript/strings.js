// strings are used to store and manipulate Text;
alert("You are studying string in JavaScript")
let name = 'Tauseef Ahmad Khan'
console.log(name)
console.log(name.length)
// we alse use single quotes for strings 

let a='Armaan khan'
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])


let sentence = 'harry is a "bad" boy'
console.log(sentence)
// We can also use string interpolaation it`` is ussed for
let h= `this is ${name}!`
console.log(h)
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)

// escape sequence character

// let t='angelo'mathews'
// there is  an error but we can solve by escape characters

let t='angelo\'mathews'
let p ="an \" apple"
console.log(t)
console.log(p)

// string properties and methods
// ( )=> is only not ussable with length
let pak= "Armaan Ahmad Khan"
console.log(pak.toUpperCase())
console.log(pak.toLocaleLowerCase())
console.log(pak.codePointAt())
console.log(pak.concat(),name)
console.log(pak.concat(),"hii")
console.log(pak.lastIndexOf())

// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true


// practice 4
console.log("harry\"".length)
let car="Hi this is armaan khaan"

console.log(car.startsWith("Hi"))
console.log(car.endsWith("khaan"))
console.log(car.includes("Hi"))
console.log(car.includes("arman"))
console.log(car.toLowerCase())
let str1="Please give Rs 1000"
console.log(str1.replace("a","A"))



// In JavaScript, /.../ notation is used to denote a regular expression literal. Let's break down what /\d+/ means specifically:

// Regular Expression: /.../

// In JavaScript, a regular expression literal is enclosed between forward slashes (/). This indicates that what follows is a regular expression pattern.
// \d:

// \d is a special character in regular expressions that matches any digit character. It is shorthand for [0-9].
// +:

// + is a quantifier in regular expressions that matches one or more occurrences of the preceding element (\d in this case). So, \d+ means "one or more digits".
// Therefore, /d+/ as a whole means a regular expression pattern that matches one or more consecutive digits in a string.

//  const paragraph = 'Please give Me Rs 1999999';
// const varr = /\d+/;
// const found = paragraph.match(varr);

// console.log('Extracted:',found);
// // Expected output: Array ["T", "I"]

// Faulty calculator
// let random=Math.random()


// let pa=prompt("Enter  value for a")
// console.log(random)
// let b=prompt("Enter  an operator")


// let c=prompt("Enter  value for b")


// // let random=Math.random()

// let obj={
//    "+":"-",
//    "-":"/",
//    "*":"+",
//    "/":"**",

// }
// if (random>0.1) {
//     console.log(`the result is ${eval(`{pa} ${c} ${b}`)}`)
    
// }
// else{
//     b=obj[b]
//     console.log(`the result is ${eval(`{pa} ${c} ${b}`)}`)

// }

// eval() method in JS

let x = 10;
let y = 20;
let pi = "x + y";
let result = eval(pi);
console.log(result)
// the result will be equal to 30
