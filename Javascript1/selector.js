//document.body.getElementsByClassName("box").style.backgroundColor="red"
// let a=document.getElementsByClassName('box')
// a[1].style.backgroundColor="red"
// a[2].style.backgroundColor="green"
// a[3].style.backgroundColor="blue"
// let b = document.getElementById("box#")
// b.style.backgroundColor="green"

// query selector select only one element from 6 100 or 2000 classes queryselector always select one

// let c = document.querySelector(".box")
// c.style.backgroundColor="yellow"

// // or also another method"

// document.querySelector(".box").style.color="blue"

// query selector select All is not same as a query selector for query selector  work with for loop


// document.querySelectorAll(".box").forEach(e=> {
//     e.style.color="red"
    
// });
// match method returns true or false agar e[0] ka id #box# hai to return karega true otherwise false

// e = document.getElementsByTagName("div")
// e[0].matches("box#")
e = document.getElementsByTagName("div")
HTMLCollection(8) [div.container, div#box#.box, div.box, div.box, div.box, div.box, div.box, div.box, box#: div#box#.box]0: div.container1: div#box#.box2: div.box3: div.box4: div.box5: div.box6: div.box7: div.boxbox#: div#box#.boxlength: 8[[Prototype]]: HTMLCollection
8[Deprecation] The 'textprediction' attribute will be removed in the future. Use the 'writingsuggestions' attribute instead. See <URL> for more information.
e[0].matches("box#")
VM146:1 Uncaught DOMException: Failed to execute 'matches' on 'Element': 'box#' is not a valid selector.
    at <anonymous>:1:6
(anonymous) @ VM146:1
e[0].matches("#box#")
VM240:1 Uncaught DOMException: Failed to execute 'matches' on 'Element': '#box#' is not a valid selector.
    at <anonymous>:1:6
(anonymous) @ VM240:1
e[1].matches("#box#")
VM363:1 Uncaught DOMException: Failed to execute 'matches' on 'Element': '#box#' is not a valid selector.
    at <anonymous>:1:6
(anonymous) @ VM363:1
e[1].matches(".box")
true
e[1].matches("#box#")
VM482:1 Uncaught DOMException: Failed to execute 'matches' on 'Element': '#box#' is not a valid selector.
    at <anonymous>:1:6
(anonymous) @ VM482:1
e[2].closest("html")
<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
e[1].closest(".container")
<div class=​"container">​…​</div>​
document.querySelectorAll(.container).contains(e[4])
VM750:1 Uncaught SyntaxError: Unexpected token '.'
document.querySelectorAll(".container").contains(e[3])
VM927:1 Uncaught TypeError: document.querySelectorAll(...).contains is not a function
    at <anonymous>:1:41
(anonymous) @ VM927:1
document.querySelector(".container").contains(e[4])
true