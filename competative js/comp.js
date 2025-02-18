// let sum=0;

// function SeriesSum(n) {
//   let a1=1,d=3,sn;
//   for(let i=1;i<=n;i++){
//    sn=a1+(i-1)*d;
//    console.log(1,"/",sn)
//     sum+=1/sn;
//   }
//   return sum;
// }
// SeriesSum(6);
// console.log(sum)

// console.log(parseInt('123'));
// // 123 (default base-10)
// console.log(parseInt('123', 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt('   123 '));
// // 123 (whitespace is ignored)
// console.log(parseInt('077'));
// // 77 (leading zeros are ignored)
// console.log(parseInt('1.9'));
// // 1 (decimal part is truncated)
// console.log(parseInt('ff', 16));
// // 255 (lower-case hexadecimal)
// console.log(parseInt('FxFF', 16));
// // 255 (upper-case hexadecimal with "0x" prefix)
// console.log(parseInt('xyz'));
// // NaN (input can't be converted to an integer)

// function comp(n) {
//   for(i=1;i<=100;i++){
//     if (i%3==0 && i%5==0) {
//       console.log("FizzBuzz")
//       // break;
//     }
//     else if(i%3==0){
//       console.log("Fizz")
      
//     }
//     else if(i%5==0){
// console.log("Buzz")
//     }
//     else{
//       console.log(i)
//     }
//   }
// return n;
// }
// comp(5);


// let A=[];
// function square(n) {
//   for (let i = 0; i <=5; i++) {
//     A[i] = parseFloat(prompt("Enter a value"));
//     console.log(A[i]*A[i])
//   }
//   return n
// }
// square(5)
// let A = [];

// function square(n) {
//   for (let i = 0; i < n; i++) { // Use < n to avoid out-of-bounds errors
//     // Prompt user for input and convert it to a number
//     A[i] = parseFloat(prompt("Enter a value"));
    
//     // Check if the input is a number
//     if (!isNaN(A[i])) {
//       console.log(A[i] * A[i]); // Log the square of the number
//     } else {
//       console.log("Invalid input. Please enter a valid number.");
//       i--; // Decrement i to re-prompt for this index
//     }
//   }
//   return A; // Optionally return the array with user inputs
// }

// square(5); // Call the function with 5 prompts

// factorial=1;

// for(i=1;i<=5;i++){
// factorial*=i;

// }
// console.log(factorial)
// function getRandomRGBColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// console.log(getRandomRGBColor()); 
// let boxes= document.querySelector(".container").children
// Array.from(boxes).forEach(e=>{
//   e.style.backgroundColor= getRandomRGBColor()
// })
function LoginUserMessage(username) {
  return `${username} just log in`
  
}
console.log(LoginUserMessage("Tauseef"))

// Function with arrays and objects

let obj={
  username:"Harry Bhai",
  password:199
}

function handleObjects(objectt) {
  return `The username is ${objectt.username} and password is ${objectt.password}`
  
}
console.log(handleObjects(obj))

let arr=[200,300,400,500]

function HandlingArray(newArray) {
  return newArray[1]
  
}
console.log(HandlingArray(arr))

// rest operator in function;

function name1(...value) {
  return value
  
}
console.log(name1(200,300,400))

// the output is  [200, 300, 400]
// it converts these values to an array and ... this is called rest operator

// examples 
let obj1={
  name2:"Hitesh sir",
  age:35
}
function PrintNameAndAge(func1) {
  return ` name:${func1.name2} \n age: ${func1.age}`
  
}
console.log(PrintNameAndAge(obj1))

// 2nd method

let obj3={
  name3:"S.tauseef",
  age:16
}
function ReturnNameAndAge(obj3) {
  console.log("Name:",obj3.name3)
  console.log("Age:",obj3.age)
  
}

function UpdateAge(person,NewAge) {
  person.age=NewAge
  
}
let person={
  Name:"Commando",
  age:25
}

console.log("Before update")
console.log("Name",person.Name)
console.log("Age",person.age)

UpdateAge(person,30)
console.log("after  update")
console.log("Name",person.Name)
console.log("Age",person.age)

// object k andar functions ke properties used krke unko object method kaha jaata HandlingArray;
const person3 = {
  name: "Ali",
  age: 30,

  // Method to print person's details
  printDetails: function() {
      console.log("Name: " + this.name);
      console.log("Age: " + this.age);
  }
}
person3.printDetails();


// functions with arrays

let arrray1=[1,2,3,4,5]

function sumThearray(arrray1) {
  return arrray1[0]+arrray1[1]+arrray1[2]+arrray1[3]+arrray1[4]
  
}
console.log(sumThearray(arrray1))

// 2nd method:

function sum_the_array(arrr) {

  let sum=0;
  for(let i=0;i<arrr.length;i++){
    sum+=arrr[i]
  }
return sum;
}

const number=[1,2,4,6,6,8];
console.log(sum_the_array(number))

function Find_The_Largest_num(num1) {

    for(let j=0;j<=num1.length;j++){
    if(num1[j]>num1[j+1]){
      maximum=num1[j]
    
    }
  }
  return maximum
}
// let number=[1,2,4,5,7]
let number1=[1,25,6,78,9]
console.log(Find_The_Largest_num(number1))

let array3=[11,22,55,66,77]
function ReverseTheArray(numReverse) {
  return numReverse.reverse();
  
}
console.log(ReverseTheArray(array3))


  // map method new array ko banane kalya use hota hai
const DoubleNumber=array3.map(function NewArr3(num3) {
  return num3*2
  
})
// console.log(NewArr3(array3))
console.log("THe original array",array3)
console.log("THe modified array",DoubleNumber)
// let arr23=["khaan"]
function Reverse_THe_string(str1) {
   // Convert string to array
   let arr = str1.split('');
  
   // Reverse the array
   arr.reverse();
   
   // Convert array back to string
   return arr.join('');
  
}
console.log(Reverse_THe_string("khan"))

// Description: split() method ek string ko ek array mein convert kar deta hai, jahan array ke elements specified delimiter ke basis par hote hain.
let a='Hello World,KHanna'
console.log(a.split())
// 3. join() Method
// Description: join() method array ke elements ko ek single string mein convert kar deta hai, jahan elements specified delimiter se separated hote hain.
let b=["hello","World"]
console.log(b.join(''))

let arr13 = [10, 20, 30, 40];
// Your code here
console.log(arr13.reverse())
let str = "apple banana cherry";
// Your code here
let str1 = "a,b,c,d,e";
// Your code here
console.log(str1.split(',').reverse())

let arr3 = ["red", "green", "blue"];
// Your code here
console.log(arr3.join(','))

let arr5 = [1, 2, 3, 4, 5];
// Your code here
console.log(arr5.reverse().join('-'))
let str6 = "hello world";
// Your code here
console.log(str6.toUpperCase().split(''))
let arr6 = [9, 8, 7, 6];
// Your code here
b=arr6.reverse()
console.log(b[0])

let st7 = "JavaScript is fun";
// Your code here
console.log(st7.split(' '))
let q=['JavaScript', 'is', 'fun']
console.log(q.join())
let ar8 = ["hello", "world"];
// Your code here
// let w=ar8.join(' ')
console.log(ar8.join(''))
let str9 = "a b c d";
// Your code here
console.log(str9.split('').reverse().join(''))

// Bilkul! JavaScript mein map method array ke elements ko manipulate karne ke liye use hoti hai. Ye method ek naya array return karta hai jismein har element ko ek provided function se process kiya gaya hota hai.

// map Method Ki Samajh:
// Syntax:

// javascript
// Copy code
// array.map(function(element, index, array) {
//     // Function body
// });

let array=[1,2,3,4,5]
let square=array.map(function square(numm) {
  return numm*5
  
})

console.log(square)

let array22=['words']
let touppercase=array22.map(function toupper(letterss) {
  return letterss.toUpperCase()
  
})
console.log(touppercase)

let people=[
  {
    Naam:"ihsan",
    Agee:64
  },
  {
    khan:"mardan",
    Agee:20
  }
]
let NewPeople=people.map(function inc(people) {
  return people.Agee+1
  
})
console.log(NewPeople)

let strings=["Shahzeb","Tauseef","Aamir","Armaan"]
let strings2=strings.map(function CalculateLength(strings) {
  return strings.length
  
})
console.log(strings2)

// Summary
// Global Scope: Poore program mein accessible hota hai.
// Local Scope: Sirf specific function ya block ke andar accessible hota hai.
// Is tarah se, JavaScript mein scope ko samajh kar aap apne code ko behtar tarike se manage kar sakte hain aur variables ki visibility ko control kar sakte hain.

let ab=100
const abc=150
let