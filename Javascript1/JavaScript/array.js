// Array are used to store more data
// Array can hold more values under single name  
// typeof array will return object  
alert("This is array tuturial")
let a=[1,2,3,4,5]
console.log(a)
// Accessing values  

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
// finding the length of an array  
console.log("length of ana array",a.length)

// changing the values of an array  

a[0]=7,a[2]=8;
console.log(a)
// In JavaScript array are an object   

console.log(typeof a)

        //   Array methods

// 1) toString conver an array to string comma separated

console.log(a.toString())
// console.log(typeof a)

// 2) join() join all elements through separator *&^%$=_- etc  
console.log(a.join("-"))
console.log(a.join("*"))

// 3)unshift and push are brothers:

// unshift add element at the begining of an Array
console.log(a.unshift(8))
console.log(a.unshift(78))
console.log(a)

// push add element at the end of an array
console.log(a.push(55))
console.log(a.push(92))
console.log(a)

// 3)shift and pop are brothers:

// shift remove first element from an array:

console.log(a.shift(55))
console.log(a.shift(92))
console.log(a)
// pop remove elements from the last:
console.log(a.pop(8))
console.log(a.pop(78))
console.log(a)

// 5)array can also delete elements using delete:

// console.log(a.delete[1])
// delete is an operator
delete a[1];
console.log(a)
// the size of an array will be the same ofter delete an element to array:
console.log(a.length)
// but when we check it will show undefine:
console.log(a[1])

// 6) concate method are use to join many arrays

let p=[1,2,3]
let q=[4,5,6]
let r=[7,8,9]
console.log(p.concat(q,r))

// 7) sort ( ) method is used to sort an elements alphabetically

let d=[9,8,6,7,5]
console.log(d.sort())
 
let x=[1,7,8]
let y=[7,1,8]
// console.log(x.sort(y))
// *8) splice can be used to add new items to an array:
x.splice(4,9,0)
x.splice(34,44,55)
    console.log(x)

    // 9)slice are used to out element from an array:

    let f=[1,2,4,5,6,7]
    
    console.log(f.slice(2))

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(1,3));

// 10) reverse method are used to reversed the elements in the array:

let j=["Aamir","Armaan","khaan"]
console.log(j.reverse())






