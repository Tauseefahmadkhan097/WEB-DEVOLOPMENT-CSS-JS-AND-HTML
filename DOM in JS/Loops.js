console.log("I am here")

const objjj={
    Username:"Pagal_khan07",
    Password:100100,
    Account:"Tik Tok"
}

for (const [key,value] in objjj) {
    console.log(`${key} and the value is ${value}`)
}

let a=[1,2,4,,5,6]
console.log(a)
let number=[1,2,3,5,6]

// For.Each item In collection
//     ' Code to execute
// Next


// +++++++++++++For Each Loop +++++++++++++

let king=['Cpp','Js','Python']
// Method 1
king.forEach(function(item){
    console.log(item)
});

// Method 2;

king.forEach((item)=>
{
    console.log(item)
})

// Method 3:

function PrintME(item) {
    console.log(item)
    
}
king.forEach(PrintME)

king.forEach((item,index,arr)=>
{
    console.log(item,index,arr)
})

let coding=[
    {
        username:"Tauseefahmadkhan",
        Password:"100100"
    },
    {
        username:"Armaankhan_07",
        Password:"10010012"
    },
    {
        username:"Aamir",
        Password:"10010011"
    }
]

coding.forEach((e)=>{
    console.log(e)
    console.log(e.username)
    console.log(e.Password)
})

// +++++++++++++practice Questions+++++++++++++
let doubleArray=[]
let array=[1,2,3,4,5,6,7,8]
array.forEach((e)=>{
    doubleArray.push(e*e)
})
console.log(doubleArray)

let strArray=['web dev','It engineer'];

strArray.forEach((e=>{
    console.log(e.toUpperCase())
}))

let Arr=[1,2,3,4,5,6,7,8,9]
Arr.forEach((e)=>{
    if(e%2==0){
        console.log(e)
    }
})

let Arr1=[1,2,3,4,5,6,7,8,9]
let sum=0;
Arr1.forEach((e)=>{
sum+=e;
})
console.log(sum)

let object={
    username:"S khan",
    husband:"t khan",
    marriage:"love"
}
let key=Object.keys(object)

key.forEach((key)=>{
    console.log(key,object[key])
})

// // Ek object banate hain
// let person = {
//     name: "Ali",
//     age: 30,
//     occupation: "Developer"
// };

// // Object ke keys ko array mein convert karte hain
// let keys = Object.keys(person);

// // Keys ke saath `forEach` loop ka use karke console pe print karte hain
// keys.forEach(function(key) {
//     // Har key ke liye, uski value ko access karte hain aur print karte hain
//     console.log("Key: " + key + ", Value: " + person[key]);
// });

let reverseOrder=[23,5,6,6,7,75];

let newrev=reverseOrder.slice().reverse()
newrev.forEach((e)=>{
    console.log(e)

})


let arrayy=[1,2,4,5,66,77,88,5,3,32,2,12,14];
let newarrr=[]

array.forEach((e)=>{
if(e%2==0){
    newarrr.push(e)
}

})

console.log(newarrr)

let codechef=['Js','ruby','cpp','iamking']
codechef.forEach((e)=>{
    console.log(e)
})

let dictionary={
    Name:"khan",
    cast:"pathan",
    city:"mardan"
}

let newdict=Object.keys(dictionary)

newdict.forEach((e)=>{
console.log(e,dictionary[key])
})

// let codechef=['Js','ruby','cpp','iamking']
let newstr="  khan"
codechef.forEach((e)=>{
   console.log(e.concat(newstr))

})
// console.log(newstr)


// other example

let arr=['apun','villian','rambo','don']

let newarr='';

arr.forEach((e)=>{
    newarr+=e;
})
console.log(newarr.trim())

// ++++++++Array.from+++++++++++++++++
// ye ek static method hai jo ek string ko ya object ko array me convert karta hai;

let str="Hello WOrld"
let nstr=Array.from(str)
console.log(nstr)
// ye new array banata hai

let str11=new Set([1,23,4,5])
let str12=Array.from(str11)
console.log(str12)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array.of
// Array.of bhi ek static method hai, lekin iska use multiple arguments ko ek array mein convert karne ke liye hota hai. Yeh array ko create karta hai bina kisi size ya length ke constraints ke.

// ye ek array banata hai directly multiple orgoments passs karky
// example

let ar=Array.of(1,2,4,5)
console.log(ar)

let string="Hello world"
let string1=Array.from(string)
console.log(string1)