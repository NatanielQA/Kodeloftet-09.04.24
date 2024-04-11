//  document.getElementById('myForm').addEventListener('input', function() { // Changed id to 'myForm'
    // var formData = {
        // username: document.getElementById('username').value,
        // email: document.getElementById('email').value,
    // };
    // localStorage.setItem('formData', JSON.stringify(formData));
// });

// window.addEventListener('DOMContentLoaded', (event) => {
    // var savedData = localStorage.getItem('formData');
    // if (savedData) {
        // var formData = JSON.parse(savedData);
        // document.getElementById('username').value = formData.username;
        // document.getElementById('displayUsername').textContent = formData.username; // Display the username
        // document.getElementById('email').value = formData.email;
        // document.getElementById('displayEmail').textContent = formData.email;
    // }
// });

document.getElementById('conversionForm').addEventListener('input', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromValue = document.getElementById('fromValue').value;

let resultCM, resultM, resultkM, resultMile;

if (fromvalue === "CM") {
    resultCM = inputValue
    resultM = inputValue / 100
    resultkM = inputValue / 100000
    resultMile = inputValue / 1000000
} else if (fromvalue === "M"){
    resultCM = inputValue * 100
    resultM = inputValue 
    resultkM = inputValue / 1000
    resultMile = inputValue / 10000
    } else if (fromvalue === "KM") {
    resultCM = inputValue * 100000
    resultM = inputValue * 1000
    resultkM = inputValue
    resultMile = inputValue / 10
} else { 
    resultCM = inputValue * 1000000
    resultM = inputValue * 10000
    resultkM = inputValue * 10
    resultMile = inputValue 
};


document.getElementById('resultCM').textContent = `Result in Centimeters: ${resultCM} CM`;
document.getElementById('resultM').textContent = `Result in Meters: ${resultM} M`;
document.getElementById('resultKM').textContent = `Result in Kilometers: ${resultKM} KM`;
document.getElementById('resultMile').textContent = `Result in Miles: ${resultMile} Mile(norwegian)`;


});