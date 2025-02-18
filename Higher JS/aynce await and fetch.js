// Async Function in JavaScript (Roman Urdu Mein Samjhaai)

// Async functions JavaScript mein ek aisi function hoti hain jo asynchronusly kaam karti hain, iska matlab hai ke ye functions aapko wait karte hain ke koi kaam pehle complete ho jaye aur phir agla kaam karein, bina poora program rokay. Ye async keyword ka istemal karke likhi jati hain aur await keyword ka istemal karke kisi promise ko resolve hone ka intezaar karte hain.

// Iska fayda ye hai ke agar koi kaam zyada waqt le raha hai (jaise ke API call ya database se data lena), to aapka program us wakt rukay ga nahi, balkay baki ka code chal sakta hai jab tak wo kaam poora hota hai.



// async function FetchData() {    
//     let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let datajs=await data.json()
//     console.log(datajs)

    
// }
// FetchData()

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function runAsync() {
//     console.log('Start');
//     await delay(2000);  // 2 seconds ka intezaar karega
//     console.log('End after 2 seconds');
//   }
  
//   runAsync();

// //   method#3

// async function GEtuserINFo() {
//     try {
        
//         let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         let database= await data.json()
//         console.log(database)
//     } catch (error) {
//         console.log(error)
//     }
// }
//   GEtuserINFo()

// //   Promise ko async/await ke sath kaise use kiya ja sakta hai?

// async function fordelayconsole() {
//     console.log('My name is khan')

//     await new Promise(function (resolve,reject) {
//         setTimeout(()=>{
//             console.log("this is 2M delay")
//             resolve()

//                 },2000)
                
//     })
    
// }
// fordelayconsole()


// async function threeSecondDelay() {

//      new Promise(function (resolve,reject) {
//         setTimeout(()=>{
//             console.log("time over")
//             resolve()
//         },3000)
//     })
    
// }
// threeSecondDelay()

// async function Getdata() {
//     try {
//         let data= await fetch('data.com')
//         let database= await data.json()
//         console.log(database)

//     } catch (error) {
//         console.log(error)
//     }
// }
// Getdata()

// // Ek function likhiye jo do alag API calls kare, aur unka result await karke merge kare

// async function getTwoData() {
//     try {
//         let data= await fetch("www.json.com")
//         let data1= await fetch("www.spoping.com")

//         let database1=await data.json()
//         let database2=await data1.json()

//         let combineBothData={...database1,...database2}
//         console.log(combineBothData)
        
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// getTwoData()
// let array=['tauseef','armaan,','shahzeb','tauseef']

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     // console.log(element)
//     async function oneByOne() {
//         try {
//             await new Promise(function (resolve,delay) {
//                 setTimeout(function () {
//                 console.log(element)
//                 resolve()
                
//                 },1000)
                
//             })
//         } catch (error) {
//             console.log(error)
            
//         }
//         // oneByOne()/''
//     }
//     oneByOne()

// }

// let array=['tauseef','armaan,','shahzeb','tauseef']
// let i;

// async function oneByOne() {
//     try {
//         await new Promise(function (resolve,delay) {
//             setTimeout(function () {
//                 let element=array[i]

//             console.log(element)
//             resolve()
            
//             },1000)
            
//         })
//     } catch (error) {
//         console.log(error)
        
//     }
//     // oneByOne()/''
// }

// async function getOnebyone() {
//     for( i=0;i<=array.length;i++){
//         await oneByOne()
//     }
// }
// getOnebyone()

// async function handlePromise() {
//     try {
//         // Ek promise jo reject hota hai
//         let result = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('Something went wrong!');  // Rejecting the promise with an error message
//             }, 5000);
//         });

//         // Agar promise resolve hota hai, to yeh line execute hogi
//         console.log(result);

//     } catch (error) {
//         // Agar promise reject hota hai, to error yahan handle hota hai
//         console.log('Error:', error);
//     }
// }

// handlePromise();


// async function firstconsole() {
//    try{ let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let database= await data.json()
//     console.log(database)}
//     catch(error){
//         console.log(error);
//     }

// }
// async function secondconsole() {
//     try{ let data= await fetch('https://jsunplaceholder.typicode.com/todos/1')
//      let database= await data.json()
//      console.log(database)}
//      catch(error){
//          console.log(error);
//      }
 
//  }
//  Promise.race([firstconsole(),
//     secondconsole()]).then(function () {
//         console.log('completed')
//     }).catch(function () {
//         console.log("something went goes wrong");
//     })
// //  firstconsole()
// // secondconsole()
// // console.log(first)

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
  });
  
  promise
    .then((result) => {
      console.log(result); // 10
      return result * 2;
    })
    .then((result) => {
      console.log(result); // 20
      return result * 3;
    })
    .then((result) => {
      console.log(result); // 60
    });
  