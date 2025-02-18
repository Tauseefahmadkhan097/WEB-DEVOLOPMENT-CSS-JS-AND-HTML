// Qusstion1//Q2
alert("this is very dangerous")
//  let obj={harry:98,rohan:70,akash:7}

// for (const key in obj) {
//     {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }
// const a=55;
// for (let i=0;i<=a;i++) {
//     console.log("Try again")

// }
// let correctnumber=55;
// let userinp;
// //infinite loop
// for(;;) {

// userinp=prompt("Enter a correct number")
// if (userinp==correctnumber){
//     console.log("COngratulation you entered a correct number")
//     break;
// }
// else{
//     console.log("try again")
// }
// }

// let a,b,c,d,e,f;
// a=prompt("Enter value for a")
// b=prompt("Enter value for b")
// c=prompt("Enter value for c")
// d=prompt("Enter value for d")
// e=prompt("Enter value for e")
// f=(a+b+c+d+e)/5;
// console.log(f);

// by function q5
// function FindMean(a,b,c,d,e){
//     let mean=(a+b+c+d+e)/2
//     return mean;

// }

// let a=5;
// let b=7;
// let c=8;
// let d=9;
// let e=10;

// let result=FindMean(a,b,c,d,e);
// console.log("Mean of five number is:",result)

// colculate  the sum of numbers from 1 to 100;
// let sum=0;
// for(let i=1;i<=100;i++){
// console.log(i);
// sum=sum+i;

// }
// console.log("total of 100 num is:",sum)
// let sum=0;
// for(let i=1;i<=100;i++){
// console.log(i);
// sum=sum+i;

// }
// console.log("total of 100 num is:",sum)

// table of numbers

// let table=10,limit=10;
// for(let i = 1;i<=limit;i++){
//     console.log(i,"X",table ,"=" ,i*table)
// }
// factorial of number

// let factorial=1;
// let a=prompt("Enter value for a");

// let i;
// for(i=1;i<=a;i++ ){

//     factorial=factorial*i;
// }
// console.log(factorial)
// let f=1;
// let a=prompt("Enter value for a");
// let i;
// array={f0,f1,f2,f3,f4,f5}
// for(i=0;i)
// for(i=1;i<=a;i++ ){

//     f= f(a-1) + f(a-2);
// }
// console.log(f)

// fibonocci sequence

// let n=prompt("enter number for sequence")
// let a=1,b=2;

// console.log("fibonocci sequence")

// console.log(a)
// console.log(b)

// for (let i=2;i<=n;i++){

// let c=a+b;
// console.log(c)
// a=b;
// b=c;
// }

// largest element in an Array;

// let i,A=[10],max;
// max=A[10]
// for(i=1;i<=9;i++){
// A[i]=prompt("Enter values")
// if(A[i]>max){
//     max=A[i]
// }
// }
// console.log("maximumm:",max)
// for in loops
// let maths
// let object={
//   maths : prompt(),
//   phy : prompt(),
//    bio :  prompt()
//     // physics:97,
//     // calculus:97,
//     // programming:90
// }
// let sum=0;
// for (let key in object) {
     
//         const element = object[key];
//         console.log(key,element)
//         if(object.hasOwnProperty(key)){
//         sum+=object[key];
//         }
    
// }
// console.log(sum)

// let object="Tauseef Ahmad Khan"
// for (const element of object) {
//         console.log(element)
// }

// let i=1,sum=0;

// while (i<=100) {
// if(i>=90){
//         console.log(i)
// }
// i++

// }
// let names = ["Alice", "Bob", "Charlie", "David", "Emma"];

// // Initialize index variable
// let i = 0;

// // Use a while loop to iterate over the array
// while (i < names.length) {
//     console.log(names[i]);
//     i++; // Increment index to move to the next element
// }

// 

// let i=1;
// let c;
// let a=0,b=1;
// console.log(a)
// console.log(b)
// let n=prompt("Enter a number for factorial")
// while(i<=n){
// c=a+b
// console.log(c)

// a=b;
// b=c;
// i++
// }


// const readline = require('readline-sync');

// let userInput = '';  // Initialize an empty string to store user input
// let count = 0;       // Initialize a counter for characters entered (excluding 'q')

// // Continue reading input until the user enters 'q'
// while (userInput !== 'q') {
//     userInput = readline.require('Enter a character (or \'q\' to quit): ');
//     if (userInput !== 'q') {
//         count++;  // Increment the count for each valid character input
//     }
// }

// console.log(`You entered ${count} characters before 'q'.`);




// let count=0,userinput='';
// // c=userinp; 
// while(userinput!=='q'){
// if(userinput=='q'){
//         count++
// }

// }
// console.log(`You entered ${count} characters before 'q'.`);
