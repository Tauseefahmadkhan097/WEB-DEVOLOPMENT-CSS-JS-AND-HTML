// JavaScript Mein Singleton Aur Object Literal Pattern
// Singleton Pattern:
// Singleton pattern ek design pattern hai jo ensure karta hai ke ek class ka sirf ek hi instance create ho. Iska use tab kiya jata hai jab aapko application ke throughout ek shared resource ya object ki zaroorat hoti hai.
// Singleton pattern ka maksad ye hota hai ke ek class ka sirf ek hi instance create kiya jaye aur woh instance globally accessible ho. Iska use tab kiya jata hai jab aap chahte hain ke aapki application ke ek particular component ka ek hi instance ho, aur woh sab jagah se access kiya ja sake.

let obj= new Object()// singleton
const obj1={} //non  singleton
obj.username=("khan")
obj.password="Mardan123"
console.log(obj)

// Object Literal Pattern:
// Object Literal Pattern ek simple aur common way hai JavaScript mein objects create karne ka. Is pattern mein aap directly ek object define karte hain jisme properties aur methods hoti hain.

let TinderUser={

    username:"Pagalkhan_7",
    password:"Mardan123",
    email:"Tauseefahmadkhan097@gmail.com",
    location:"Takhtbhai dis Mardan",
    profession:"Cyber-Security Expert",
    Institute:"GIKI"
}

// ++++++++++++++++++++++ properties+++++++++++++++++++++
console.log(Object.keys(TinderUser));
// ['username', 'password', 'email', 'location', 'profession', 'Institute']
console.log(Object.values(TinderUser));
// ['Pagalkhan_7', 'Mardan123', 'Tauseefahmadkhan097@gmail.com', 'Takhtbhai dis Mardan', 'Cyber-Security Expert', 'GIKI']

console.log(TinderUser.hasOwnProperty("email"));
//true

// ++++++++++++++++++++Examples+++++++++++++++++

// let car={
//     make:"By Steel",
//     model:125,
//     year:2022
// }
// console.log(car);

let rectangular={
    width:20,
    height:50,

    area :function(){
        console.log(this.height*this.width)
        
    }
}
rectangular.area()

let course={
    coursename:"js",
    couseprice:"1000",
    courseinstructor:"hitesh"
}
// console.log(course.courseinstructor)
// 2nd method

// +++++++++++++++++++++++++++ Destructured+++++++++++++++
// let {courseinstructor}=course
// console.log(courseinstructor);

let {courseinstructor:construct}=course
console.log(construct);


// ++++++++++++++++++ JSON APi++++++++++++++++++++

// {
//     name :  "khan",
//     rollno :  25,
//     class :  "9th",
// }



let car={
    make:"By Steel",
    model:125,
    year:2022
}
let {make}=car
console.log(make);
let {model}=car
console.log(model);


function getUser() {
    return khan={
        id:"Tauseef Ahmad Khan",
        name:"Tauseef Ahmad",
        email:"Tauseef@gmail.com",

    }
    
}
getUser()
let {name}=khan
console.log(getUser().name)
let {email}=khan
console.log(getUser().email)

let book={
    title:"Quran",
    author:"ALLAH",
    PublishenYear:"Infinite years ago"
}

let {author}=book
console.log(author)


function getSettings() {
    return {
        Theme:"Dark Mood",
        Language:"Js",
        Notifications:"Massenger"
    }
    
}

getSettings()

let {Theme}=getSettings()
let {Language}=getSettings()
console.log(Theme);
console.log(Language);