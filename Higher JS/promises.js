// Promise ka matlab yeh hota hai ke yeh aapko yeh wada karta hai ke future mein ya to kaam successfully poora hoga (resolve ho jayega), ya koi error (reject) aa jayegi.

// Teen states hoti hain promise ki:
// Pending: Jab promise bana hota hai lekin abhi tak result nahi aaya.
// Resolved (Fulfilled): Jab promise ka kaam successfully poora ho jata hai.
// Rejected: Jab promise ka kaam fail ho jata hai ya koi error aa jati hai.

let promiseOne=new Promise(function (resolve,reject) {
    
    setTimeout(function () {
       console.log("This is task"); 
       //we set reject or resolove here for checking
       resolve()
    },1000)
})

promiseOne.then(function () {
    console.log("Task is completed");
    
})


// +++++++++++++++++++++++++++++Direct +++++++++++++++++++++

new Promise(function (resolove,reject) {
    setTimeout(function () {
        console.log("asynce task 2")
        resolove()
    },2000)
    
}).then(function () {
    console.log("task 2 is completed");
})

    // +++++++++++++++++++++++ to pass parameters in the resolve+++++++++++++

    new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log("task 3");
            resolve({username:"Tauseef Ahmad Khan",Password:"Mardan123"});
            
        },3000)
    })
    .then(function (user) {
    console.log(user);
    
});


let promise4rth=new Promise(function (resolve,reject) {

    setTimeout(function () {
    let error=true;
    if(!error){
        resolve({username:"harry",password:"bhai"})
    }
    else{
        reject('ERROR')
    }
},4000)
});
promise4rth
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('Finally process is completed')
})// cach is used for reject


// JavaScript mein async aur await ka tafseeli tarruf
// JavaScript mein async aur await ES2017 mein introduce kiye gaye the, jo asynchronus (ghair-hum waqt) code ko handle karna asaan banate hain, khaaskar promises ke sath. Yeh dono keywords humein aise code likhne mein madad dete hain jo dekhnay mein synchronous (ek k baad ek chalne wala) lagta hai, magar asal mein yeh asynchronous code hota hai. Iska maqsad code ko zyada readable aur understandable banana hai, jahan multiple tasks aik dosray ka intezar karain baghair execute ho sakte hain.

// 1. async Function
// Agar hum kisi function ko async declare karte hain, to yeh function automatically ek Promise return karta hai. Iska matlab yeh hai ke hum is function ko await keyword ke zariye call kar sakte hain.

// 2. await Keyword
// await ka istemal kisi async function ke andar hota hai aur yeh kisi promise ka intezar karta hai ke woh resolve ho jaye. Iska matlab yeh hota hai ke JavaScript ko temporarily pause kar diya jata hai, jab tak ke promise resolve ya reject nahi hota.

let promise5th=new Promise(function (resolve,reject) {
    
    setTimeout(()=>{
let error=true;
if(!error){
    resolve({newuser:"Shah phones",location:"Mardan"})
}
else{
    reject("ERROR something went wrong")
}

    },5000)
});

// async function ResolveTHisONe() {
//    let response= await promise5th
//    console.log(response) // it handles error
    
// }
// ResolveTHisONe()

// method 2
async function ResolveTHisONe() {
    try{
        let response= await promise5th
    console.log(response)
    }
     catch(error){
console.log(error);// it gives error without handle
     }
 }
 ResolveTHisONe()

//  ++++++++++++++++ two methods to get data++++++++++++++++
// fetch is used for taking data

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(function (response) {
//     return response.json()
    
// }).then(function (data) {
//     console.log(data)
// })
// .catch(function (error) {
//     console.log('error',error)
// })

// method 2
async function getData() {
    try {
     let data =   await fetch('https://api.github.com/users/hiteshchoudhary')
     
     await data.json()
     console.log(data)
    } catch (error) {
        console.log(error);
        
    }
    
}
getData()
