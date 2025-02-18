// (DOM)=documents object model
// dom is a HTML documents

// (BOM)=browser object model
// bom is a browser interface example
// prompt alert confirm and shows the web page etc:

// Js= Javascript is used to alive web pages:
// and use logics in the web pages
// examples functions arrays conditional etc
// let age12;
//     age12=prompt()
//     if(age12<0){
//         console.log("Error")
//     }
// else if(age12>18){
//     alert("You can drive")
//     confirm("if you want to see again click ok")
//     alert("You can drive")
//     }
// else{
//     console.log("yOu cannot drive")
// }
// console.log(document.body)
// if(age12>4){
//     document.body.style.backgroundColor="Green"
//}
// alert("jjjj")
// function Changeurlbasedonnum() {

//     let num=prompt("ENter any number")
//     // num=Number(num)

//     if(num!==Number(1-9)){
//         if(num>4){
//             window.location.href="https://www.google.com"
//         }
//         else{
//             console.log("num is < 4 no url change")
//         }
    
   
    
// }
// else{
//     console.log("wrong number")
// }
// }
alert("hii")


    // Prompt the user to enter a number
    let num = prompt("Enter any number:");
    
    // Convert the input to a number
    num = Number(num);
    
    // Check if the input is a valid number
    if (!isNaN(num)) {
        if (num > 4) {
            // Redirect to google.com if the number is greater than 4
            window.location.href = "https://www.google.com";
        } else {
            // Log a message if the number is 4 or less
            console.log("Number is 4 or less. No URL change.");
        }
    } else {
        // Log a message if the input is not a valid number
        console.log("Invalid input. Please enter a valid number.");
    }
