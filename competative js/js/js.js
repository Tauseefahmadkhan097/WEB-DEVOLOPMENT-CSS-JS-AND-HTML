// Summary
// Global Scope: Poore program mein accessible hota hai.
// Local Scope: Sirf specific function ya block ke andar accessible hota hai.
// Is tarah se, JavaScript mein scope ko samajh kar aap apne code ko behtar tarike se manage kar sakte hain aur variables ki visibility ko control kar sakte hain.

// let ab=100
// const abc=150
// var abcd=200

// console.log(ab)
// console.log(abc)
// console.log(abcd)

if (true) {
    let ab=100
const abc=150
var abcd=200
    
}
// console.log(ab)
// console.log(abc)
console.log(abcd)

// Masla ye hai bhai k variable functtion ya koi curly braces use kaarne ke bad bhi console hota hai is liya var ka use nahi karna chay high level me;

// +++++++++ FUNCTIONS **************

// simple function; simple fuction me agar console function k opar karo to pher bhi chalta hai excutes hota hai
console.log(addone(2))
function addone(num) {
    return num+1
    
}



// Expression Function ; But expression fuction me console opar define karne paar error deta hai and excute nahi hota
// console.log(addtwo(2))
const addtwo=function(num) {
    return num+2
    
}
console.log(addtwo(2))


// examples of simple function;

function addTwoNumbers(num1,num2) {
    return num1+num2
    
}
console.log(addTwoNumbers(5,6))

function multiply(num1,num2,num3) {
    return num1*num2*num3
    
}
console.log(multiply(5,6,7))

function Iseven(num) {
    if(num%2===0){
        return true
    }
    return false
    
}
console.log(Iseven(5))

function Square(num) {
    return num*num
    
}
console.log(Square(5))

function Reverse_the_string(str) {
    return str.split('').reverse().join('')
    
}
console.log(Reverse_the_string("khaan"))

// Examples of expression Function
const subtract=function(num1,num2) {
    return num1-num2
    
}
console.log(subtract(1871,1870))

const IsOdd=function(num) {
    if(num%2!==0){
        return true
    }
    return false
    
}
console.log(IsOdd(7))

let cube=function(num) {
    return num*num*num
    
}
console.log(cube(3))

let together=function(str1,str2) {
    return str1+str2
    
}
console.log(together("khan","jaan"))


// ++++++++++++++This Keyword++++++++++++++++++
// this is used for current object only and also used in the arrow function
// this is not used in functions 
// it gives error in the funtion'
// let object={
//     username:"Tauseef Ahmad Khan",
//     password:"Mardan12",
//     MessageTo: function() {
//     console.log(`${this.username},just log in`)
//     }
// }
// object.MessageTo()
// // ye dusra username dega q k iska username change hua abhi
// object.username="Khan";
// object.MessageTo()

// let object={
//     username:"Tauseef Ahmad Khan",
//     password:"Mardan12",
//     MessageTo: function() {
//     console.log(`${this}`)
//     }
// }

// // object.MessageTo()
// // ye dusra username dega q k iska username change hua abhi
// object.username="Khan";
// console.log(`${this}`)
// // object.MessageTo()


function CheckThisKeyWorld() {
    let username="Myname"
    console.log(this.username)
    
}
CheckThisKeyWorld()

// ye undefine dega q k ye functions me kaam he nahi karta

// +++++++++Arrow Function++++++++
// explicit return arrow function q k isme return use howa hai // curly braces k sath return likhna hoga
let addTwoNumber=(num11,num22)=>{
    return num11+num22
}

console.log(addTwoNumber(7,8))

// implicit return Arrow function q k isme brackets use hotay hai return karne ki bajay parasenthese k sath return likhana zroori nahi

let AddTwoNum= (num1,num2)=>(num1+num2)
console.log(AddTwoNum(7,15))

    // object return karne kalya parantesis ka use karna padegaa

    let objj= (num1)=>({username:"khaan"})
    console.log(objj(3,4))


    // this function k andar bhi object k andar usee hota HTMLDetailsElement;
    function ChEchThis() {
        let object={
username:"Myname",
Password:"Random"
        }
        return `my name is ${object.username}`
    }
    console.log(ChEchThis())



// Arrow Function in JavaScript (Roman Urdu Mein)
// Arrow function JavaScript mein ek naya syntax hai jo ES6 (ECMAScript 2015) se introduce hua tha. Yeh function declaration ko simpler aur concise banata hai. Arrow functions ki kuch khasiyat hain:

// Syntax: Arrow function ka syntax traditional function ke comparison mein chhota hota hai.

// javascript
// Copy code
// // Traditional function
// function add(x, y) {
//     return x + y;
// }

// Arrow function
// const add = (x, y) => x + y;
// Implicit Return: Agar arrow function sirf ek expression return karta hai, to aap {} braces aur return keyword ke bina bhi likh sakte hain.

// javascript
// Copy code
// Without braces
// const square = x => x * x;

// // With braces and return
// const square = x => {
//     return x * x;
// };
// this Context: Arrow functions apne parent scope ka this use karte hain. Yeh this ko dynamically bind nahi karte, jo ke traditional functions me hota hai.

// javascript
// Copy code
// let Counter= function() {
//     this.num = 0;
//     setInterval(() => {
//         this.num++;
//         console.log(this.num);
//     }, 1000);
// }

// console.log(Counter());

// const sum = (...args) => args.reduce((a, b) => a + b, 0);
// console.log(sum(1,2))


let AddNum=(num1,num2)=>{
    return num1+num2
}
console.log(AddNum(3,4))

const square=x=>x*x;
console.log(square(5))

let upperCase=y=> y.toUpperCase()
console.log(upperCase("khaan"))

let average=(y,y1,y2)=>( y+y1+y2)/3;

console.log(average(3,4,5))
// now you see this will work in the arrow function;
const obj = {
    value: 10,
    arrowFunc: () => {
        console.log(this.value);
    },
    regularFunc: function() {
        console.log(this.value);
    }
};

obj.arrowFunc(); // What will be printed? this ans is 10
obj.regularFunc(); // What will be printed? this is undefine

let obj12={
    array:[1,2,3,4,5],
    arrowfunc(){
        return this.array.map(num=>num*num)
    }

}
console.log(obj12.arrowfunc())

let arrr=[1,2,3,4,5,6,7,8,9]

let FilterEvenNumbers=arrr.filter(num=>num%2==0)
console.log(FilterEvenNumbers)

const processNumber = num => num * 2;
const addFive = num => num + 5;

// const result = addFive(processNumber(3));
console.log(addFive(processNumber(3))); // Output should be 11

// ++++++++++++++ IIFE FUNCTION+++++++++++++++++++
// FULL NAME IMMEDIATELY INVOCKED Function;
// Immediately Invoked: Function apne aap call hota hai bina kisi external call ke.
// Self-Contained: Function ke andar jo variables aur functions hote hain, woh bahar nahi dikhai dete.
// No Global Pollution: Yeh global scope ko pollute nahi karta, kyunki variables aur functions sirf IIFE ke andar hi accessible hote hain.

(function () {
    console.log(`This is for competative programming tricks and tips`)
    
}) ();

// for the run of second IIFE function there will be used semi colon ; after the first IIFE function

(()=>{
    console.log(`This is second`)
}) ();

(function () {
    let cat="dog"
    console.log(cat)
    
})();

// With IIFE:
// IIFE ka use karke, aap variables ko local scope mein rakh sakte hain aur global scope ko clean aur safe rakh sakte hain.

// javascript
// Copy code
(function() {
    // Local scope
    var localVariable = "I am a local variable";
    
    function showLocalVariable() {
        console.log(localVariable);
    }
    
    showLocalVariable(); // Output: I am a local variable
})();

// Trying to access localVariable outside the IIFE
console.log(typeof localVariable); // Output: undefined


(function chai() {
    var ac=15;
    function ourcode() {
        console.log(ac)
        
    }
    ourcode()
    
})();

///Function Declaration (like function ourcode() { ... }) is used to define a function, but it is not immediately invoked.
//Function Expression (like (function chai() { ... })) is used to create a function that is immediately invoked upon creation.
(function(nummm) {
    return nummm*nummm
       
   })(5) //this give 15 output
   
const result=(function(nummm) {
 return nummm*nummm
    
})(5) 

console.log(result) ///this give 25 output