// Agar aap JavaScript me server ko request bhejna chahte hain, to uska tareeqa bohot asan hai. JavaScript me "Fetch API" use hoti hai jo modern browsers me available hai. Iske zariye aap GET, POST, PUT, aur DELETE requests bhej sakte hain.


// fetch('https://tryhackme.com/r/room/howwebsiteswork').then((Data)=>{
//    return Data.text()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log("error",error)
// })


// +++++++++++++++++

// for sending data

let data = { username: "pagal_khan7", Password: "01010101" };

fetch('https://lms.awkum.edu.pk/Login/index', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },  // Corrected `Content-Type`
    body: JSON.stringify(data)
})
.then((response) => {
    if (!response.ok) {  // Check if response is successful
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();  // Assuming the response is in JSON
})
.then((ans) => {
    console.log('Success:', ans);
})
.catch((error) => {
    console.log('Error:', error);
});

// 3. PUT Request (Data update karna)
// PUT request tab use hoti hai jab humein kisi cheez ko update karna ho, jaise user ka data.

// Example:
// javascript
// Copy code
const updatedData = { username: 'ali', password: 'new_password' };

fetch('https://example.com/update', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log('Updated:', data))
  .catch(error => console.error('Error:', error));
s