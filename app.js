
//selecionamos el h1 con queryselector
document.querySelector('h1')
//lo alamancenams en ina variable llamada titulo
let titulo = document.querySelector('h1')
console.log(titulo)
//modificamos el titulo
titulo.innerText = 'SEGUNDA TAREA DE JS'
//agregamos un fondo al titulo
titulo.style.backgroundColor = 'blue';

//aqui almacenamos el elementos input id = email-form, dentro de esta variable
let emailInput = document.getElementById('email-form');
//aqui modificamoes el placeholder del input
emailInput.placeholder = 'Nuevo  correo';


//alamceno el imput del nombre dentro de una variable
let nombreInput = document.getElementById('text-form');
//modifico el placeholder
nombreInput.placeholder = 'Nuevo nombre';

//alamceno el boton dentro de la bariable 
let button = document.querySelector('#button-form');
//aqui modifico el el texto
button.textContent = 'ENVIAR AHORA';