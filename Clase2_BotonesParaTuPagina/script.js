//Reposotorio en Github: https://github.com/Frank0125/SoyTutor_IntroJavaScript

// Clase 2: Botones para tu página web

// Crear un botón 
//usaremos getbyId porque es más preciso y rapido
let boton = document.getElementById('miBoton');
let parrafo = document.getElementById('miParrafo');

boton.addEventListener('click', function() {
    parrafo.textContent = "¡CHAAALLLLEEEE, porque me lo cambias!";
    parrafo.style.color = "#d9ff00";
});

let boton2 = document.getElementById('borrar');
let parrafo2 = document.getElementById('miInput');

boton2.addEventListener('click', function() {
    parrafo2.value = "";
});
