//Prototype);A protoype is linked : the newly created object gets the prototype properties of the constructor function;
//JavaScript mein Prototype ki Tafseel:
// JavaScript ek object-oriented programming language hai, aur har object ke paas ek hidden property hoti hai jise hum prototype kehte hain. Prototype ka concept inheritance ko implement karne ke liye use hota hai. Iska matlab ye hai ke ek object doosray object se properties aur methods inherit kar sakta hai.

// Jab ek object banaya jata hai, to us object ka prototype function ke sath link hota hai. Agar koi property ya method object ke andar nahi hoti, to JavaScript us object ke prototype mein us property ya method ko dhoondhta hai. Ye process tab tak chalta rehta hai jab tak ya to property mil jaye ya phir prototype chain khatam ho jaye.
function CreateAcc(username,score) {
    this.username=username
    this.score=score
};
CreateAcc.prototype.increment=function () {
    console.log(`Price is ${this.score}`)
}
//the new keyword initiates the creation of new js object
let chai=new CreateAcc("chai",199);
// chai.CreateAcc()
chai.increment()


function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function() {
      console.log("Hello, my name is " + this.name);
    };
  }
  
  let person1 = new Person("Ali", 25);
  let person2 = new Person("Sara", 30);
  
  person1.sayHello(); // Output: Hello, my name is Ali
  person2.sayHello(); // Output: Hello, my name is Sara
  

  let array=['Khan','Mardan','Pakistan']
  let obj={
    username:"Pagal_khan07",
    password:"Lofar***",
    getUsername:function () {
        console.log(`This is ${this.username}`)
    }
  }

  Object.prototype.tauseef=function () {
    console.log("Present obj");
  }
obj.tauseef();
Array.prototype.arman=function () {
    console.log('This is array');       
}

array.arman()

// Examples +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function person(car,model) {
    this.car=car
    this.model=model
}
person.prototype.SayHi=function () {
    console.log(`The car is ${this.car} and model is ${this.model}`);
}

let new1=new person("Toyota",2016)
let new2=new person("Civics",2022)
new1.SayHi()
new2.SayHi()

function Animal(type) {
    this.type=type;
}
Animal.prototype.sound="No sound"

let animal1=new Animal("DOg")
let anima2=new Animal("Lion")
console.log(animal1.sound);
console.log(anima2.sound);
// anima2.check()

function rectangle(width,height) {
    this.width=width
    this.height=height
}

rectangle.prototype.func2=function () {
    return this.width*this.height
}

let rect1=new rectangle(5,6)
let rect2=new rectangle(6,7)
console.log(rect1.func2())
console.log(rect2.func2())


function car(make,model,year) {
    this.make=make
    this.model=model
    this.year=year
}

car.prototype.GetDetails=function () {
console.log(`Name of car ${this.make}
model ${this.model}
year ${this.year}
    `)
}

let car1=new car("Civics",2026,2026)

car1.GetDetails()

function Student(name,grade) {
    this.name=name
    this.grade=grade
}

Student.prototype.Getgrade=function () {
    console.log(`Name of student ${this.name} and the Grade is ${this.grade}`)
}
 let std1=new Student("Tauseef Ahmad Khan","A+")
 std1.Getgrade()

 function Book(title,author,pages) {
    this.title=title
    this.author=author
    this.pages=pages
 }

 Book.prototype.Getsummary=function () {
    console.log(`Summary 
     Author: ${this.author} 
      title:${this.title} 
      pages:${this.pages}`)
 }
 let book1=new Book("Harry","Hacking",287)
 book1.Getsummary()