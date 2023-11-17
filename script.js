document.addEventListener("DOMContentLoaded", function () {
    var imagen = document.getElementById("imagenAgus");
  
    // Agregar la clase 'animar' cuando se hace clic en la imagen
    imagen.addEventListener("click", function () {
      imagen.classList.add("animar");
  
      // Después de un tiempo (en este caso, 2 segundos, la duración de la animación),
      // quitar la clase 'animar' para permitir futuras animaciones
      setTimeout(function () {
        imagen.classList.remove("animar");
      }, 2000);
    });
  });