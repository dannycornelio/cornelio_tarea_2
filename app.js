const formulario = document.getElementById('form');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email-form');
    console.log(email);  
    let nombre = document.getElementById('text-form');
    console.log(nombre);
});


