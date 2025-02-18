// object literals in js Object literals JavaScript mein wo objects hain jo seedha {} curly braces ke beech likhe jaate hain. Object literals mein hum directly key-value pairs define karte hain. Key woh naam hota hai jo hum object ke andar kisi cheez ko de rahe hain, aur value wo hoti hai jo uss key ke liye assigned hoti hai.

let student = {
    username:"Tauseef Ahmad",
    age:20,
    course:"Computer science"

}
console.log(student);


// constructor function JavaScript mein constructor function wo function hota hai jo kisi object ko banane ke liye use hota hai. Jab hum constructor function ka use karte hain, toh hum new keyword ke zariye naya object bana sakte hain. Is function ke andar this keyword uwse kiya jata hai jo naye object ko refer karta hai jo abhi banaya ja raha hota hai.
// ye by default return hota hai esko return karne ki zrort nahi hoti

function User(name,age,car){
    this.name=name
    this.age=age
    this.car=car
}
const User1=new User("khan",20,'civics')
const User2=new User("Armaan khan",12,'Parari')
console.log(User1);
console.log(User2);


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true


//   +++++++++++++ practice in constructor function 

function student1(name,age,gender) {
    this.name=name
    this.age=age
    this.gender=gender
}
let person1=new student1("Izaz ahmad",19,'male')
let person2=new student1("Tauseef ahmad",19,'male')
console.log(person1);
console.log(person2);

function book(title,author,yearpublished){
    this.title=title
    this.author=author
    this.yearpublished=yearpublished
}
let book1=new book('Quran','ALLAH',"infinity")
let book2=new book('Cybersecurity','Tauseef Ahmad',2027)
let book3=new book('webhacking Arsenal','Tauseef ahmad',2028)

console.log(book1);
console.log(book2);
console.log(book3);

function phone(brand,model,price){
    this.brand=brand
    this.model=model
    this.price=price
}

let phone1=new phone('Iphone 11 promax',2010,180000)
let phone2=new phone('samsung',2000,18000)
let phone3=new phone('huwawie',2015,1800)

console.log(phone1);
console.log(phone2);
console.log(phone3);

function Course(name,duration,instructor) {
    this.name=name
    this.duration=duration
    this.instructor=instructor
}
let course1=new Course('Web Devolopment','1year',12)
let course2=new Course('Ethical Hacking','2year',20)
let course3=new Course('Experience','1year',1)
console.log(course1);
console.log(course2);
console.log(course3);

function BankAccount(accountHolder, balance,accountType) {
    this.accountHolder=accountHolder
    this.balance=balance
    this.accountType=accountType
}
let account1=new BankAccount('salman khan',20,'EAsy paisa')
let account2=new BankAccount('fawad ali',0,'jazcash')
let account3=new BankAccount('salman khan',0,'sadapay')
console.log(account1);
console.log(account2);
console.log(account3);