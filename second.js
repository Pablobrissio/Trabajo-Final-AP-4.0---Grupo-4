// Definimos las variables para guardar el contenido de los formularios
var nombre = "";
var correo = "";
var telefono = "";
var producto = "";
var correoCotizacion = "";

// Obtenemos los elementos del DOM correspondientes a cada formulario
var contactoForm = document.getElementById("contact-form");
var cotizacionForm = document.getElementById("cotizacion-form");

// Agregamos event listeners a cada formulario para manejar el evento submit
contactoForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
  // Obtenemos el contenido de cada campo del formulario
  nombre = document.getElementById("nombre-input").value;
  correo = document.getElementById("correo-input").value;
  telefono = document.getElementById("telefono-input").value;
  // Mostramos los valores en consola para verificar que se hayan guardado correctamente
  console.log("Nombre: " + nombre);
  console.log("Correo: " + correo);
  console.log("Teléfono: " + telefono);
});

cotizacionForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
  // Obtenemos el contenido de cada campo del formulario
  producto = document.getElementById("producto-input").value;
  correoCotizacion = document.getElementById("cotizacion-correo-input").value;
  // Mostramos los valores en consola para verificar que se hayan guardado correctamente
  console.log("Producto: " + producto);
  console.log("Correo: " + correoCotizacion);
});
