// First of all these 3 methods are  call back methods;
// the are smart methods of loops

// +_++++++++++++++++++++++++++Fiter Method++++++++++++++++++++++++++
// let array=[1,23,5,6,6,7,8]

// let newarray=array.filter((item)=>item>4)
// agar isko {} function me lkhty to osko return karna padta pher let see the example
// let newarray=array.reduce((item)=>{
    // return  item > 4
// })
// console.log(newarray);// [23,5,6,6,7,8],


// +++++++++++++++++++++++Map Method++++++++++++++++

// let arr=[1,2,3,4,5,6]
// let newarr=arr.map((num) => num+1 )
// console.log(newarr)


// using double map;
let arr=[1,2,3,4,5,6]
let newarr=arr.map((num) => num+1 ).map((num)=>num*5)
console.log(newarr)



// ++++++++++++++++++++++++Reduce Method++++++++++++++++++++
// This method is used for addition in loops

// let array1=[1,2,3,5,6,6,7]
// let newarray1=array1.reduce((accumulator,currentvalue)=> accumulator+currentvalue,0)/// comma k bad 0 accumulator value hai
// console.log(newarray1)// this sum the all elements of the array


let shoppingCart=[
    {
        course:"js",
        price:2000
    },
    {
        course:"py",
        price:5000
    },
    {
        course:"cpp",
        price:17999
    },
    {
        course:"web dev",
        price:5000
    },


]

let total=shoppingCart.reduce((accumulator,currentvalue)=> accumulator+currentvalue.price,0)
console.log(total);


// +++++++++++++++++++++++Examples of filter++++++++++++++++++++
// Kaam: filter method array ke elements ko ek condition ke zariye filter karta hai aur ek naya array return karta hai jisme sirf wo elements hote hain jo condition ko meet karte hain
let array1= [5, 10, 15, 20]
let newarray1=array1.filter((e)=> e>10)
console.log(newarray1)

let length=['cat', 'dog', 'elephant']
let length1=length.filter((e)=> e.length>3)
console.log(length1)

let odd=[1, 2, 3, 4, 5]
let odd1=odd.filter((e)=> e%2!==0)
console.log(odd1);

let age=[{name: 'Alice', age: 30}, {name: 'Bob', age: 20}]
let age1=age.filter((e)=> e.age>25)
console.log(age1);

let DivisibleByFive=[10, 15, 20, 25, 30]
let divByFIve=DivisibleByFive.filter((e)=> e%5==0)
console.log(divByFIve)

let FilterTheNull=['apple', null, 'banana', undefined]
let FilterTheNull1=FilterTheNull.filter((e)=> e!==null)
console.log(FilterTheNull1)

let lessThan250=[100, 200, 300]
console.log(lessThan250.filter((e)=> e<250));

let AandC=['A', 'B', 'C', 'D']
console.log(AandC.filter((e)=> e>"A" && e<"C"));

let btw5and10=[1, 4, 7, 9, 12]
console.log(btw5and10.filter((e)=>e>5 && e<10));

let contain_i=['dog', 'cat', 'bird', 'fish']
console.log(contain_i.filter((e) => e.includes('i') ));
// ++++++++++++++++++++++++++Map+++++++++++++++++++
// map:
// Kaam: map method array ke har element par ek function apply karta hai aur ek naya array return karta hai jisme updated elements hote hain.

const multipyBy3=[1, 2, 3, 4]
let multiply=multipyBy3.map((e)=>{ return e*3})
console.log(multiply);

let uppercase=['hello', 'world']
console.log(uppercase.map((e)=>e.toUpperCase()));

let subt5=[10, 20, 30]
console.log(subt5.map((e)=> e - 5));

let square=[1, 2, 3, 4, 5]
console.log(square.map((e)=> e * e));

let fruit=['apple', 'banana', 'cherry']
console.log(fruit.map((e)=> e.concat('-fruit')));

let FindTHelength=['one', 'two', 'three']
console.log(FindTHelength.map((e)=>e.length))


// reduce:
// Kaam: reduce method array ke elements ko ek cumulative value mein reduce karta hai. Yeh ek single output value return karta hai.

let calculateTheSum=[1, 2, 3, 4, 5]
let calculateTheSum1=calculateTheSum.reduce((acc,curr)=> acc+curr,0)
console.log(calculateTheSum1);

let product=[2, 4, 6]
let product1=product.reduce((acc,curr)=> acc*curr,1)
console.log(product1);

let ConcatenateTheString=['a', 'b', 'c']
console.log(ConcatenateTheString.reduce((curr)=> curr.concat('')))


let findTHetotalAge=[{age: 10}, {age: 20}, {age: 30}]
console.log(findTHetotalAge.reduce((acc,current)=> acc+current.age,0))

let findTheAverage=[10, 20, 30]
console.log(findTheAverage.reduce((acc,curr)=> acc+curr/3,0))

let FindTHemaximum=[4,32,21,1]
let max=FindTHemaximum.reduce((max,curr)=> curr>max? curr:max,1 )
console.log(max)

let FindTHeminimum=[4,32,21,1]
let min=FindTHeminimum.reduce((min,curr)=> curr<min? curr:min,1 )
console.log(min)

let sumofthesquares=[1, 2, 3, 4, 5]
let sumofsquares=sumofthesquares.reduce((acc,curr)=> acc+curr*curr,0)
console.log(sumofsquares)