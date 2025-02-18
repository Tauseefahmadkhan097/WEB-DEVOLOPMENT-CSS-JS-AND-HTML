// The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

// Try it

let x = 10;
let y = 20;
let text = "x + y";
let result = eval(text);

// document.getElementById("demo").innerHTML = result;
console.log(result)

console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false
