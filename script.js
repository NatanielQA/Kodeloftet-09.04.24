document.getElementById('conversionForm').addEventListener('input', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromValue = document.getElementById('fromValue').value;

let resultCM, resultM, resultKM, resultMile;

// Conversion if else.
if (fromValue === "CM") {
    resultCM = inputValue
    resultM = inputValue / 100
    resultKM = inputValue / 100000
    resultMile = inputValue / 1000000
} else if (fromValue === "M"){
    resultCM = inputValue * 100
    resultM = inputValue 
    resultKM = inputValue / 1000
    resultMile = inputValue / 10000
    } else if (fromValue === "KM") {
    resultCM = inputValue * 100000
    resultM = inputValue * 1000
    resultKM = inputValue
    resultMile = inputValue / 10
} else { 
    resultCM = inputValue * 1000000
    resultM = inputValue * 10000
    resultKM = inputValue * 10
    resultMile = inputValue 
};

// Making sure the right text and units are displayed where they belong.
document.getElementById('resultCM').textContent = `Result in Centimeters: ${resultCM} CM`;
document.getElementById('resultM').textContent = `Result in Meters: ${resultM} M`;
document.getElementById('resultKM').textContent = `Result in Kilometers: ${resultKM} KM`;
document.getElementById('resultMile').textContent = `Result in Norwegian Miles: ${resultMile} Mile(norwegian)`;


});