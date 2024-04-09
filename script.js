document.getElementById('myForm').addEventListener('input', function() { // Changed id to 'myForm'
    var formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', (event) => {
    var savedData = localStorage.getItem('formData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById('username').value = formData.username;
        document.getElementById('displayUsername').textContent = formData.username; // Display the username
        document.getElementById('email').value = formData.email;
        document.getElementById('displayEmail').textContent = formData.email;
    }
});