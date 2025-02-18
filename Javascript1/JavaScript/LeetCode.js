alert("This is Leet code begining")

function createHelloWorld() {
    
     return function() {
            return "HelloWorld"
            
        }
        
    
    
}
let f=createHelloWorld()
console.log(f)

function CreateCounter(n) {
    // let n;
    return function(){
 return n++

    }
    
}
let counter=CreateCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());

function ToBe(n) {
    let n=prompt("Enter value")
    return function () {
        if(n==15){
            console.log("Equal")
        }
        else[
            console.log("not equal")
        ]
        
    }
    
}