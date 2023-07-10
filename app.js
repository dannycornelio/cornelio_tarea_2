// Seleccionar el elemento body dentro de esta variable
let bodyElement = document.body;

// Asignar el fondo de imagen al body
bodyElement.style.backgroundImage = "url('tableback.jpg')";
bodyElement.style.backgroundSize = "cover";

//selecionamos el h1 con queryselector
document.querySelector("h1");
//lo alamancenams en ina variable llamada titulo
let titulo = document.querySelector("h1");
console.log(titulo);
//modificamos el titulo
titulo.innerText = "SEGUNDA TAREA DE JS";
//agregamos un fondo al titulo
titulo.style.backgroundColor = "blue";

//aqui almacenamos el elementos input id = email-form, dentro de esta variable
let emailInput = document.getElementById("email-form");
//aqui modificamoes el placeholder del input
emailInput.placeholder = "Nuevo  correo";

//alamceno el imput del nombre dentro de una variable
let nombreInput = document.getElementById("text-form");
//modifico el placeholder
nombreInput.placeholder = "Nuevo nombre";

//alamceno el boton dentro de la bariable
let button = document.querySelector("#button-form");
//aqui modifico el el texto
button.textContent = "ENVIAR AHORA";

//alamcenamos el elemento a dentro de esta variable para llamarla por ese nombre
enlaceElement = document.createElement('a');

//agregamos un link de google
enlaceElement.href = 'https://www.google.com';
enlaceElement.textContent = 'PULSE AQUI PARA BUSQUEDAS';

//agregamos el nodo hijo
bodyElement.appendChild(enlaceElement);

//agregamos un nuevo elemento hijo al body dentro de esta variable
let Parrafo = document.createElement("p");
//aqui con el textcontect agregamos lo que queremos agregar dentro del p
Parrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo sed nemo autem facere! Autem molestiae cumque magnam odio voluptatum necessitatibus eos eligendi tempora ducimus. Necessitatibus consequuntur blanditiis assumenda eaque.";
//para añadir el párrafo como hijo del elemento
bodyElement.appendChild(Parrafo);
