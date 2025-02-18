// classical for loop in array:
alert("This is loop in array")
let a=[1,3,5,7,9]

//  for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

//2)// Let for each :

// a.forEach((value,index,array)=>{
// console.log(value,index,array)
// })

// the output will be:
// 1 0 (5) [1, 3, 5, 7, 9]
// 14 3 1 (5) [1, 3, 5, 7, 9]
// 14 5 2 (5) [1, 3, 5, 7, 9]
// 14 7 3 (5) [1, 3, 5, 7, 9]
// 14 9 4 (5) [1, 3, 5, 7, 9]


// 3) for in loops are used to log key  and values
// It is only used for 

// let object={
//     a:2,
//     b:3,
//     c:4,
//     d:5
// }
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key,element)
//     }
// }

// for of loops is directly used for array:

// for (const iterator of a) {
//     console.log(iterator)
    
// }

// 3) Map() creates a new arary by performing some actions on each array elementss:

// there are two methods

// by using classical array:

// let New_a=[]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     New_a.push(element*element)
    
// }
// console.log(New_a)

//Method 2
// let newarr=a.map((e)=>{
// return e*e
// })
// console.log(newarr)

// let GreaterThanSeven= (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }

// console.log(a.filter(GreaterThanSeven))

// reduce() method:

// reduce method is used for array for first two elements then the other two elements and so on

// this is another program of a factorial
// let arr=[1,2,3,4,5]
// const red=(a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(red))
// similarly for addition:
// let arr=[1,2,3,4,5]
// const red=(a,b)=>{
//     return a+b
// }
// console.log(arr.reduce(red))

// chapter 5 practice set:

// Q1 2,3 4 and 5combine

// var numbers=[]
// for (let index = 0; index <=5; index++) {
//     numbers[index]=prompt("enter values for array")
//     // const element = numbers[index];
//     if(numbers[index]==0){
//         break;
//     }
    
// }
// console.log(numbers)

// let DbyTen=(e)=>{
//     if(e%10==0){
//         return true
//     }
//     return false
// }
// console.log(numbers.filter(DbyTen))

// let newarr=numbers.map((e)=>{
//     return e*e
// })
// console.log(newarr)

// let red=numbers.reduce((a,b)=>{

//     return a*b
// })
// console.log(red)

// 

// Create an array of numbers [1, 2, 3, 4, 5] and write a function that returns the sum of all the numbers in the array.
// first method:
//  let arr=[1,2,3,4,5]
// function sum(a,b) {
//     return 
    
// }
// console.log(arr.reduce(sum))

// Given the array [10, 20, 30, 40, 50], write a function that checks if the number 25 exists in the array and returns true or false.


// let arr1=[10, 20, 30, 40, 50]
// for(let i=0;i<=arr1.length;i++){
//     if(arr1[1]==25){
//         console.log("true")
//     }
//     else{
//         console.log("false")

//     }
// }

// Given the array const numbers = [1, 2, 3, 4, 5];, write a for loop to print each element of the array to the console.

// numbers = [1, 2, 3, 4, 5]
// for (const iterator of numbers) {
//     console.log(iterator)
// }
// Given the array const ages = [34, 23, 45, 67, 89, 12];, use a for loop to find the maximum value in the array.
// const ages = [34, 23, 45, 67, 89, 12];

// for (let i = 0; i <=6; i++) {
//     for(let j=0;j<=5;j++){
// if(ages[j]>ages[j+1]){
//    let temp=ages[j]
// ages[j]=ages[j+1]
// ages[j+1]=temp
// }
// }
// }
// console.log("ascending order is",ages)
// Write a for loop to create a new array containing only the even numbers from const numbers = [1, 2, 3, 4, 5, 6, 7, 8];.

// numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let even=numbers.filter((e)=>{
//     if(e%2==0){
//         return true
//     }
//     return false
// })
// console.log(even)
// Write a for...of loop to iterate through the array const fruits = ["apple", "banana", "cherry", "date"]; and print each fruit to the console.
// const fruits = ["apple", "banana", "cherry", "date"];
// for (const iterator of fruits) {
//     console.log(iterator)
    
// }
// Using the forEach method, iterate through const names = ["Alice", "Bob", "Charlie"]; and print each name to the console.

// const names = ["Alice", "Bob", "Charlie"];
// names.forEach((values)=>{

//     console.log(values)
// })
// Write a for loop to find the index of the first occurrence of the number 5 in the array const numbers = [1, 2, 5, 3, 5, 4];.
// numbers = [1, 2, 5, 3, 5, 4];
// // console.log(numbers.indexOf(5))
// let i;
// for ( i = 0; i < numbers.length; i++) {
// if(numbers[i]==5){
//     console.log(numbers.indexOf(5))
// }
// const numbers = [1, 2, 5, 3, 5, 4];
// let firstIndexOfFive = -1; // Initialize with -1 to indicate not found

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 5) {
//         firstIndexOfFive = i; // Store the index of the first occurrence of 5
//         break; // Exit the loop once the first occurrence is found
//     }
    
// }

// console.log(firstIndexOfFive); // Output the index

    
// const letters = ["a", "b", "a", "c", "a", "b"];
// let count = 0; // Initialize a counter to zero

// // Loop through the array
// for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === "a") { // Check if the current element is "a"
//         count++; // Increment the counter
//     }
// }

// console.log(count); // Output the count
// . Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// for(let i=0;i<=15;i++){
//     if(i%2==0){
//         console.log(i,"is even")
//     }
//     else{
//         console.log(i,"is odd")
//     }
// }
// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
// Click me to see the solution
let arr1=[1, 2, 3]
let arr2=[100, 2, 1, 10]

for (let i = 0;i<=arr1.length; i++) {
        for(let j=0;j<=arr1.length;j++){
    if(arr1[j]>arr1[j+1]){
       let temp=arr1[j]
    arr1[j]=arr1[j+1]
    arr1[j+1]=temp
    }
    }
    }
   console.log(arr1)
    
for (let i = 0;i<=arr2.length; i++) {
        for(let j=0;j<=arr2.length;j++){
    if(arr2[j]>arr2[j+1]){
       let temp=arr2[j]
    arr2[j]=arr2[j+1]
    arr2[j+1]=temp
    }
    }
    }
    console.log(arr2)

    // for the union
    // let result =x.concat(y)
    // console.log(result)
    console.log(arr1.concat(arr2))