// function returntype() {
//     let promise=new Promise(function (resolve,reject) {
//         setTimeout(()=>{
//             console.log("Sucess!");
//             resolve()
//         },3000)
//     });
//     promise.then(function () {
//         console.log('Process completed')
//     }).catch(function (error) {
//         console.log("ERROR",error)
//     })
// }
// returntype()

// function returntype2() {

//     let promise=new Promise(function (resolve,reject) {
//         setTimeout(function () {
//            let number=11;
//            if(number>10) {
//             resolve('TRUE')
//            }
//            else{
//             reject('FALSE')
//            }
//         },4000)
//     })
//     promise.then(()=>{
// console.log("Process sucessfull")
//     }).catch((error)=>{
//         console.log("There is an error",error)
//     })
// }
// returntype2()

// // Do promises banayein, aik 2 second ke baad resolve hota ho aur doosra 1 second ke baad. Phir inko chain karein aur result console.log karain.

// let promiseOne=new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("The FIrst One")
//         resolve()
//     },2000)
// })
// let promiseTwo=new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("The 2nd One")
//         resolve()
//     },1000)
// })

// promiseOne.then(function () {
//     // console.log(1)
// }).then(function () {
//     // console.log(2)
// })


// // Ek program likhein jo ek promise return kare jo randomly resolve ya reject hota ho (e.g., using Math.random()). Error ko handle karne ke liye catch ka istemal karein.

// let Promise3=new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         let number=Math.floor(Math.random()*15+1)
//         console.log("Gurnted",number);
//         if(number>10){
//             resolve("Congrats You are pass")
//         }
//         else{
//             reject("oops You are non selected")
//         }
//     },6000)
// })
// Promise3.then(function (good) {
// console.log(good);
    
// }).catch(function (error) {
//     console.log(error)
// })

let promise1st=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve("LETS first project")
        // resolve()
    },1000)
})

let promise2nd=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve("LETS 2nd project")
        // resolve()
    },2000)
});

let promise3rd=new Promise(function (resolve,reject) {
    setTimeout(function () {
        const number=5;
        if(number>10){
            resolve("REsolve 3rd")
        }
        else{
            reject('Something goes went wrong')
        }
        // resolve()
    },3000)
})

Promise.all([promise1st,promise2nd,promise3rd]).then(function (results) {
    console.log("All RESOlve");
    console.log(results)
}).catch(function (error) {
    console.log(error);
})

// Do promises banayein: aik 3 seconds aur doosra 5 seconds mein resolve hota ho. Promise.race() ka istemal karein taake jo pehla promise resolve ho uska result mile.

// Promise.race() ka kaam yeh hai ke yeh sirf us pehle promise ka result return karta hai jo sabse pehle resolve hota hai, chahe doosra promise baad mein hi kyun na resolve ho.

let p1st=new Promise(function (resolve,reject) {
    setTimeout(()=>{
resolve("LEt the first")
    },5000)
});
let p2nd=new Promise(function (resolve,reject) {
    setTimeout(()=>{
resolve("LEt the 2nd")
    },5000)
});
Promise.race([p1st,p2nd]).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console(error)
})