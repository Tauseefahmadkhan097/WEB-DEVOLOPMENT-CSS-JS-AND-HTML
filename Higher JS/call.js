// n Roman Urdu, "call" ka matlab yeh hota hai ke hum ek function ko ek specific this value ke sath bula sakte hain. call() method ka use karke, hum kisi bhi function ko kisi aur context (yaani this value) ke sath chala sakte hain.

function Setusername(username) {
    this.username=username;
}
function Getusername(username,password,email) {
    Setusername.call(this,username)

    this.password=password
    this.email=email
}

let user=new Getusername("Pagal_07",123,"tauseef@gmail.com")
console.log(user)

function add(a, b) {
    console.log(this.num + a + b);
}

const obj = { num: 10 };

add.call(obj, 5, 3);  // Output: 18

const person1 = {
    name: "Zain",
    age: 30
};

const person2 = {
    name: "Sana",
    age: 25
};

function showInfo() {

    console.log(this.name + " is " + this.age + " years old.");
}

// Call the function using person2
showInfo.call(person2)

function multiply(x, y) {
    console.log(this.factor * x * y);
}

const obj1 = {
    factor: 10
};

// Call the multiply function with arguments 2 and 3
multiply.call(obj1,5,6)

const book = {
    title: "Shahab Nama",
    author: "Qudrat Ullah Shahab"
};

function bookInfo(year) {
    console.log(this.title + " was written by " + this.author + " in " + year);
}

// Call the bookInfo function with a year
bookInfo.call(book,1997)

const car1 = {
    brand: "Honda",
    model: "Civic"
};

const car2 = {
    brand: "Toyota",
    model: "Corolla"
};

function carDetails() {
    console.log("Car Brand: " + this.brand + ", Model: " + this.model);
}

// Call carDetails using car1
carDetails.call(car1)

const student = {
    name: "Ali",
    score: 85
};
const student2 = {
    name: "Tauseef Ahmad",
    score: 95
};

function grade() {
    if (this.score >= 90) {
        console.log(this.name + " received an A.");
    } else {
        console.log(this.name + " did not receive an A.");
    }
}

// Call grade function using student
grade.call(student)
grade.call(student2)