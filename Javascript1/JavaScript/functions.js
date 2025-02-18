alert("this is me today we practice functions in js")

// Functions

// function practice(name) {
//     console.log("Hi buddy"+ name +"You are so nice")
//     console.log("Hi buddy"+ name +"You are so Intelligent")
//     console.log("Hi buddy"+ name +"You are so Cool")
//     console.log("Hi buddy"+ name +"You are so Smart")
// }
// practice(804);
// 2)Return Type Function 
// function myfunction(a,b) {
//     return a+b
// }

// c=myfunction(4,5)

// console.log("a+b =",c)

// function myfunction(a,b) {
//     return a+b
// }

// c=myfunction(4,5)
// c1=myfunction(5,6)
// c2=myfunction(7,8)

// console.log("a+b =",c)
// console.log("a+b =",c1)
// console.log("a+b =",c2)
// Arrow Function

// const sum = (a,b)=>{
//     let c=a+b;
//     return c
// }
// y=sum(5,6)
// console.log("sum of numbers is:",y)

// const sum = (x)=>{
//     console.log("i am an arrrow funtion",x)
//     // return a
// }
// sum(333);
// sum(33);
// sum(55);


// practice 3 q 5

// function mean(a,b,c,d,e) {
//     m=(a+b+c+d+e)
//     return m
    
// }
// result=mean(5,6,7,8,9)
// console.log("Mean is:",result)

// function evenorodd(p) {
// if (p%2==0){
//     console.log("Iseven:True")
// }
// else{
//     console.log("Isodd:True")
// }

// }
// evenorodd(5);
// evenorodd(6);
// evenorodd(7);

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// function area(w,l,h) {

//     return w*l*h
    
// }
// Area=area(3,4,5)

// console.log("Area of the tringle is :",Area)

// rest parameter syntax

// function Sumnumbers(...numbers) {
//     sum=0;
//     for (const number of numbers) {
//         sum+=number;
        
//     }
//     return sum;
// }
//      x=Sumnumbers(3,4,55,77,88)

//     y =Sumnumbers(6,7,85,77,88)

//     z =Sumnumbers(4,5,65,77,88)
//     j =Sumnumbers(4,5,65,77,88)

//  console.log("sum is:",x)
// console.log("sum is:",y)
//  console.log("sum is:",z)
//  console.log("sum is:",j)

//  function double(number) {
//     return number*2
    
// }
// console.log(double(5));

// console.log(double(10));
 
// const sum= (x,y)=>{

//     return x*y
// }
// console.log("6x5:",sum(5,6))
// console.log("6x7:",sum(6,7))


// 2. Anonymous Functions:
// Functions without a name are called anonymous functions and can be assigned to variables or used directly.

//      let pi=function(a,b) {
//     return a*b
    
// }
// (3,4)
// console.log(pi)
// let result = add(3, 4); // result will be 

// Foulty calculator

let a=prompt("Enter any number1")
let b=prompt("Enter any number2")

// let a,b;
let c=Math.random()
let add=a+b;
let sub=a-b
let mult=a*b
let div=a/b
let exp=a**b
// function foultycalcultaot(a,b) {
//    return a,b
   
//     }
//     foultycalcultaot(3,5)

    
    // if(c<0.1){
    //     console.log("addition",add)
    //     console.log("subtraction",sub)
    //     console.log("multiplication",mult)
    //     console.log("division ",div)
       
    // }
    // else{
       

    //     console.log("addition",sub)
    //     console.log("subtraction",mult)
    //     console.log("multiplication",add)
    //     console.log("division ",exp)
    // }