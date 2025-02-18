// let a = new Number(100)
// console.log(a)
// console.log(Math)
// let b=5
// console.log(Math.sqrt(b))
// console.log(Math.cbrt(b))
// console.log(Math.exp(b))
// console.log(Math.fround(b))
// console.log(Math.fround(b))
// console.log(Math.pow(2))

//   let tauseef=Math.ceil(Math.random()*100+1)
// console.log(tauseef)
// let Armaan=Math.ceil(Math.random()*100+1)
// console.log(Armaan)

// let Aamir=Math.ceil(Math.random()*100+1)
// console.log(Aamir)

// let Shahzeb=Math.ceil(Math.random()*100+1)
// console.log(Shahzeb)


// let a=Math.ceil(Math.random()*100+1)
// console.log(a)
// if(a>50){
//     console.log("Nice luck")
// }
// else if(a>50 && a<75){
//     console.log("intermediate")
// }
// else{
//     console.log("HUHUHHHUHUHUHUHUHUHU")
// }
let obj={}
// console.log(typeof obj)

if(['a']==['a']){
    console.log(true)
}
else{
    console.log(false)

} //false 
// result isly false hai q k inlo refernces k base par dekha jata hai na k content k base par refernces ka matlab hai memory location agar in dono ka memory location same hoga to same hogi wrna false

// function CheckTwoArrays(array1,array2) {
//     if(array1.length==array2.length)
//         return true
    
//     for(let i=0;i<array1.length;i++){
//         if(array1[i]==array2[i]){
//             return true
//         }
//     }
//     return false
// }
// let array1=[1,2,4]
// let array2=[1,2,4]
// // let array1=[1,2,4]
// console.log(CheckTwoArrays(array1,array2))
// function arraysEqual(arr1, arr2) {
//     // Check length first
//     if (arr1.length !== arr2.length) return false;
    
//     // Check each element
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) return false;
//     }
    
    // If all elements are equal
//     return true;
//   }
  
//   let array1 = [1, 2, 3];
//   let array2 = [1, 2, 3];
//   let array3 = [1, 2, 4];
  
//   console.log(arraysEqual(array1, array2)); // true
//   console.log(arraysEqual(array1, array3)); // false


// function CheckTwoArrays(array1, array2) {
//     // Pehle check karo agar lengths alag hain
//     if (array1.length !== array2.length) {
//         return false;
//     }
    
//     // Har element ko compare karo
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }
    
//     // Agar sab elements match karte hain
//     return true;
// }

// let array1 = [1, 2, 4];
// let array2 = [1, 2, 4];
// if (array1.length == array2.length) {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// // console.log(CheckTwoArrays(array1, array2)); // true

  
function randomRgb(){
let r=(Math.floor(Math.random()*100+1))
let g=(Math.floor(Math.random()*100+1))
let b=(Math.floor(Math.random()*100+1))

return `${r},${g},${b}`
// console.log(rgb)
}
let rgb=randomRgb()
console.log(rgb)
