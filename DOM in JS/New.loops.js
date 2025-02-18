let a=[1,24,4,5,6,6,]
for (const num of a) {
    console.log(num)
}

// for off loop only work with arrays and SVGStringList;
// examples of for offf;
let b="Hello World"

for (const num of b) {
    console.log(num)
}

// ++++++++++++++++++++++++++++ map ++++++++++++++++++++++++++
//Key-Value Pairs: Map key aur value ka combination store karta hai.
//Order: Map keys ko insertion order mein store karta hai. Iska matlab hai ke aapko keys unke insertion ke order mein milegi.
// Unique Keys: Map mein har key unique hoti hai. Agar aap same key se value update karenge, purani value replace ho jayegi.
// Any Type as Key: Map mein key kisi bhi type ki ho sakti hai, chahe woh primitive types ho (jaise string ya number) ya complex types (jaise objects ya functions).
// Size Property: Map ki size ko size property se jaancha ja sakta hai.
// Iterable: Map iterable hota hai, isliye aap ise for...of loop ke zariye iterate kar sakte hain.
// Map ka Basic Syntax:



// let map=new Map()
// map.set('Pk','Pakistan')
// map.set('cpp','C++')    
// map.set('js','JavaScript')
// map.set('P','programming')
// // console.log(map)

// for (const num of map) {
//     console.log(num)
    
// }//ALg alag array ke shakal me aik aik output detahai
// let myMap = new Map();

// // Adding key-value pairs
// myMap.set('key1', 'value1');
// myMap.set(2, 'value2');
// myMap.set(true, 'value3');

// // Getting a value by key
// console.log(myMap.get('key1')); // Output: value1

// // Checking if a key exists
// console.log(myMap.has(2)); // Output: true

// // Deleting a key-value pair
// myMap.delete(2);

// // Getting the size of the Map
// console.log(myMap.size); // Output: 2

// // Iterating over Map
// myMap.forEach((value, key) => {
//     console.log(key, value);
// });

// // Clearing all key-value pairs
// myMap.clear();


let nEwMap=new Map()
nEwMap.set('+','-')
nEwMap.set('X','/')
nEwMap.set('//','**')

// for (const num of nEwMap) {
//     console.log(num)
    
// }

// let ab='+'
// if(nEwMap.has(ab)){
//     console.log("It Has")
// }
// else{
//     console.log("Not has")
// }
// console.log(nEwMap)
// nEwMap.delete('+')
// console.log(nEwMap)
// console.log(nEwMap.size)
// console.log(nEwMap.clear())
// // console.log(nEwMap)

// let Method8=new Map()
// Method8.set({username:"khan"},"first username")
// Method8.set({Password:"Mardan12"},"Password")
// console.log(Method8)
// for (const num of Method8) {
//     console.log(num)
// }
// let keytypes= new Map()
// keytypes.set(Number,24)
// keytypes.set(Boolean,true)
// keytypes.set(null,undefined)
// console.log(keytypes)

let Method10=new Map()
Method10.set("Name","Tauseef")
Method10.set(Number,27)
Method10.set(Boolean,true)
Method10.get("information",undefined)
Method10.delete(Number)
console.log(Method10)
if(Method10.has(undefined)){
    console.log(true)
}
else{
    console.log(false)  
}
