alert("Hii buddy")

// Certainly! Here are 10 array-related questions for you to practice in JavaScript without using functions or loops inside the array operations:

// Accessing Elements: Create an array of your favorite fruits and print out the third fruit in the array.

// Updating Elements: Create an array of numbers and change the second element to a different value.

// Finding Length: Create an array of programming languages and print out the number of languages in the array.

// Concatenating Arrays: Create two arrays of colors and concatenate them into a single array without using concat() method.

// Copying Arrays: Create an array of cities and create a copy of this array without using slice() method.

// Removing Elements: Create an array of animals and remove the last element from the array.

// Searching Elements: Create an array of names and check if "Alice" exists in the array without using indexOf() method.

// Sorting Elements: Create an array of numbers and sort them in ascending order without using sort() method.

// Joining Elements: Create an array of words and join them into a single string separated by commas without using join() method.

// Adding Elements: Create an empty array and add three elements to it without using push() method.

// These exercises focus on manipulating arrays using basic operations in JavaScript. They'll help you get familiar with array handling without relying on functions or looping constructs directly inside the array operations. Happy practicing!



let fruits=["Apple","Mango","Guvava","Banana"]
console.log(fruits[2])

let change=[22,33,44,55,66,67]
change[1]=234;
console.log(change)
let languages=['C++','Python','Js','Php']
console.log(languages.length)
let c1=["black"]
let c2=['white']
console.log(c1.concat(c2))

let cities=['mardan','peshawar','lahore','islamabad']
console.log(cities.length)

let copycities=[];

for(let i=0;i<=3;i++){
copycities[i]=cities[i]

}
copycities.push('bahawalpur')

console.log(cities)
console.log(copycities)

let animals=['Lion','cat','dog','Markhor']
animals.pop()
console.log(animals)
let cities1=['mardan','peshawar','lahore','islamabad']
console.log(cities.length)

// let copycities=[];

for(let i=0;i<=3;i++){
cities1[i]
if(cities1[i]='mardan'){
    console.log("there is mardan in the lis")
    break
}
else{
    console.log("not founded")
}
}

let numbers=[4,6,8,3,2,7];
for(let i=0;i<numbers.length;i++){
for(let j=0;j<=numbers.length-i;j++){
    if(numbers[j]>numbers[j+1]){
        let temp=numbers[j]
        numbers[j]=numbers[j+1]
        numbers[j+1]=temp
    }
}

}
console.log("ascending order array is",numbers)

let peshawar=['khan','king','don','raambo']
console.log(peshawar.join("-"))

let array=[],sum=0;

for(let i=0;i<=2;i++){
    array[i]=prompt("enter first value")
    sum=sum+array[i]

}
console.log(array)
console.log('the sum is',sum)
// the second method is  
let arr=[]
arr[0]='hii'
arr[1]='Hello'
arr[2]='How areu'
arr[3]='hiiii'
console.log(arr)

let arr1=[1,2,4,5,1,2,4,5]

// for(let i=0;i<=arr1.length;i++){
//     if(arr1[i]== arr1[0] && arr1[1] && arr1[2] && arr1[3] && arr1[4] && arr1[5] && arr1[6] && arr1[7]){
// delete arr1[i]

//     }
// }
// console.log(arr1)

let arr2=[1,2,3,4,1,2,3,4]

if (arr1==arr2) {
    arr1.toString()
    
}

console.log(arr1)
console.log(arr2)
 let arr3=[]
 arr3.push(5,6,7)
 arr3.pop()
 console.log(arr3)

 function Find_the_Longest_world(str3) {
   var array1=str.match(/\w[a-z]{0,}/gi) 
   var array1=[0]
   let result=array1[0]
   for(let i=1;i<=result.length;i++)
   if(result.length<array[i].length){
    console.log(array[i])
 }
 return str3
}
console.log(Find_the_Longest_world("my name is khaan"))