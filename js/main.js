/*JS FANATICOS DEL BOXEO, INDEX*/

/*PARA EL SLIDER DE IMAGENES*/

const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');

let counter = 1;

function nextSlide() {
  counter++;
  if (counter > 2) {
    counter = 1;
  }
  slides.style.transform = `translateX(${-100 * (counter - 1)}%)`;
}

setInterval(nextSlide, 3000); /* Cambia de imagen cada 3 segundos*/

/*PARA MOSTRAR LA SUMA DADA POR NUMERO DEL USUARIO*/

document.getElementById('numUsua').addEventListener('submit', function(event) {
    event.preventDefault(); /* Evita que el formulario se envíe y se pueda ejecutar el conteo*/
    
    var number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
      alert('Por favor, ingresa un número válido.');
      return;
    }
    
    var suma = 0;
    for (var i = 1; i <= number; i++) {
        suma += i;
    }
    
    var counterDiv = document.getElementById('suma');
    counterDiv.innerHTML = ''; // Limpiar el contenido anterior
    
    counterDiv.innerHTML = 'La suma de los números hasta ' + number + ' es: ' + suma;
}); 


/*PARA MOSTRAR CONTEO HASTA NUMERO DEL USUARIO*/

document.getElementById('numUsua').addEventListener('submit', function(event) {
    event.preventDefault(); /* Evita que el formulario se envíe y se pueda ejecutar el conteo*/
    
    var number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
      alert('Por favor, ingresa un número válido.');
      return;
    }
    
    var counterDiv = document.getElementById('contador');
    counterDiv.innerHTML = ''; // Limpiar el contenido anterior
    
    /* Función para mostrar el contador */
    function showCounter(count) {
      counterDiv.innerHTML = count;
      if (count < number) {
        setTimeout(function() {
          showCounter(count + 1);
        }, 1000); /* el numero 1000 es 1 segundo, tiempo que se demora mostrando el numero */
      } else {
        counterDiv.innerHTML += '<p>¡Felicidades! Has llegado al número ingresado.</p>';
      }
    }
    
    /* Iniciar el contador*/
    showCounter(0);
}); 

/*PARA MOSTRAR SALUDO DEPENDIENDO LA HORA */

function obtenerSaludo() {
    var hora = new Date().getHours();
    var saludo;
  
    while (true) {
      if (hora >= 0 && hora < 12) {
        saludo = 'Buenos Días Fanatico';
        break;
      } else if (hora >= 12 && hora < 19) {
        saludo = 'Buenas Tardes Fanatico';
        break;
      } else {
        saludo = 'Buenas Noches Fanatico';
        break;
      }
    }
  
    return saludo;
  }
  
  document.getElementById('saludo').innerHTML = obtenerSaludo();

  /*PARA EL FORMULARIO, BORRA LA DATA Y MUESTRA MSJ */

  document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); /* Permite que no se envie el formulario y podamos ver el msj */
    
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var commentTextarea = document.getElementById('comment');
    var messageDiv = document.getElementById('message');
    
    /*  Validacion de los campos vacios*/
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || commentTextarea.value.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
    
    messageDiv.textContent = '¡El comentario ha sido recibido!';
    
    /* Limpia la data del formulario */
    setTimeout(function() {
      nameInput.value = '';
      emailInput.value = '';
      commentTextarea.value = '';
      messageDiv.textContent = '';
    }, 2000); // Cambiar a 2000ms (2 segundos) 
  });
  

/*USO DE DOM */

/*AGREGAR ITEM A NAV*/

var nuevoItemMenu = document.createElement('li');

var nuevoEnlaceMenu = document.createElement('a');
nuevoEnlaceMenu.href = "#"; 
nuevoEnlaceMenu.textContent = "Servicios"; 

nuevoItemMenu.appendChild(nuevoEnlaceMenu);

var listaMenu = document.querySelector('.nav ul');

listaMenu.appendChild(nuevoItemMenu);

/* SE CREA PARA BORRARLO*/

var nuevoItemMenu = document.createElement('li');

var nuevoEnlaceMenu = document.createElement('a');
nuevoEnlaceMenu.href = "PRUEBA"; 
nuevoEnlaceMenu.textContent = "PRUEBA"; 

nuevoItemMenu.appendChild(nuevoEnlaceMenu);

var listaMenu = document.querySelector('.nav ul');

listaMenu.appendChild(nuevoItemMenu);

/* MODIFICAR NAV */

document.addEventListener('DOMContentLoaded', function() {
    var enlaceServicios = document.querySelector('.nav a[href="#"]');
    
    if (enlaceServicios) {
        enlaceServicios.textContent = "Nuestros Servicios";
        enlaceServicios.href = "https://enciclopediaeconomica.com/servicios/";
        enlaceServicios.classList.add('nuevo-estilo');
    } else {
        console.error("El elemento de menú 'Servicios' no se encontró.");
    }
});


/* PARA ELIMINAR EL ITEM PRUEBA QUE SE CREO*/

document.addEventListener('DOMContentLoaded', function() {
  
    var itemServicios = document.querySelector('.nav li a[href="PRUEBA"]').parentNode;
    
    if (itemServicios) {
        itemServicios.parentNode.removeChild(itemServicios);
    } else {
        console.error("El elemento de menú 'PRUEBA' no se encontró.");
    }
});

