// Basic  function:
alert("This is function tuturial")
//function without perimeters
function f1() {
    console.log("Helloworld")
    
}
f1();        //call the function

//Function with perimeters

function f2(a,b) {
    return a+b
    
}
let result2=f2(5,6);
console.log(result2)

//function as a veriable 

const subtract=function(a,b){
    return a-b;
}
let result3=subtract(5,6);
console.log(result3)

//Arrow function

const arrow=(a,b)=>{
    return a*b
}
let multiply=arrow(5,6)
console.log(multiply)

// Function with rest parameters
function sum(...numbers) {
   let  total=0
    for (const num of numbers) {
        total=total+num
        
    }
    return total
    
}

let s=sum(1,2,3,4,5);
console.log(s)

// Function returning another function

function fun1(factor) {
    return function fun2(number) {
        return factor*number
        
    }
    
}

let y=fun1(2)
console.log(y(7))

// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial of 5:", factorial(5));

function reverse(x) {
    return x
}


console.log(reverse(32243))

// function for reverse number:

function reversed_number(num) {
    let reverse_number=0;

    while(num!==0){
reverse_number=reverse_number*10+num%10;
num=Math.floor(num/10);

    }
    return reverse_number
    
}
const num=123;
// console.log(reversed_number(num))
const result = reversed_number(num);

// Log the reversed number to the console
console.log("Reversed number: " + result); 
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[7]);
// Expected output: "c"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
function a_order(str) {
    // return str.split("").sort().join()
    return str.split('').sort().join('');
    
}
console.log(a_order("ArmaaN"))
function Find_the_Longest_world(str3) {
    var array1=str3.match(/\w[a-z]{0,}/gi) 
    // var array1=[0]
   let result=array1[0]
    for(var i=1;i < array1.length;i++){
    if(result.length < array1[i].length){
     result=array1[i]
  }
  
 }
 return result
}
 console.log(Find_the_Longest_world('my name is khaan'))
//  match method in js:
const paragraph = 'The quick1 brow2n fox2 jumps3 over4 the lazy dog. It barked.';
const regex = /[1-9]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
function Prime_number(n) {
    let result=n;
    if(result%2!==0 && result%3!==0){
console.log("prime")
    }
else{
    console.log("non")
}
    return result
    
}
Prime_number(11)
// console.log(jj)


let age12;
    age12=prompt()
    if(age12<0){
        console.log("Error")
    }
else if(age12>18){
    alert("You can drive")
    confirm("if you want to see again click ok")
    alert("You can drive")
    }
else{
    console.log("yOu cannot drive")
}
console.log(document.body)
if(age12>4){
    document.body.style.backgroundColor="Green"
}