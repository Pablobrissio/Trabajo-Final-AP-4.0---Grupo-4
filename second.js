$(document).ready(function() {
  // Validación del formulario de contacto
  $('#contact-form').submit(function(event) {
    event.preventDefault(); 
    let nombre = $('#nombre-input').val();
    let correo = $('#correo-input').val();
    let telefono = $('#telefono-input').val();

    if (nombre === '' || correo === '' || telefono === '') {
      alert('Por favor, complete todos los campos del formulario de contacto.');
    } else {
      console.log('Nombre y Apellido: ' + nombre);
      console.log('Correo electrónico: ' + correo);
      console.log('Teléfono: ' + telefono);
      $('#nombre-input').val('');
      $('#correo-input').val('');
      $('#telefono-input').val('');
      alert("Sus datos fueron guardados con Exito.")
    }
  });

  // Validación del formulario de cotización
  $('#cotizacion-form').submit(function(event) {
    event.preventDefault(); 
    let producto = $('#producto-input').val();
    let correo = $('#cotizacion-correo-input').val();

    if (producto === '' || correo === '') {
      alert('Por favor, complete todos los campos del formulario de cotización.');
    } else {
      console.log('Producto a Cotizar: ' + producto);
      console.log('Correo electrónico: ' + correo);
      $('#producto-input').val('');
      $('#cotizacion-correo-input').val('');
      alert("Sus datos fueron guardados con Exito.")
    }
  });
});

