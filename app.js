//selecionamos el h1 con queryselector
document.querySelector('h1')
//lo alamancenams en ina variable llamada titulo
let titulo = document.querySelector('h1')
console.log(titulo)
//modificamos el titulo
titulo.innerText = 'SEGUNDA TAREA DE JS'

//aqui almacenamos el elementos input id = email-form, dentro de esta variable
let emailInput = document.getElementById('email-form');
//aqui modificamoes el placeholder del input
emailInput.placeholder = 'Nuevo  correo';


