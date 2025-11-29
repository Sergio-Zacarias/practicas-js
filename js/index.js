// 1 Crear el formulario  OK
// ● Armá en tu HTML un formulario con dos campos:
// ○ un campo para el nombre (input).
// ○ un selector (select) con diferentes colores de fondo.
// ● Sumale un botón de enviar para guardar las preferencias.

// 2. Capturar los datos OK
// ● En JavaScript, usá un evento submit para capturar el nombre y el color cuando el
// usuario envía el formulario.
// ● Recordá usar preventDefault() para evitar que el formulario recargue la página.
// 3. Guardar en LocalStorage
// ● Usá localStorage.setItem() para guardar el nombre y el color.
// 4. Recuperar y aplicar preferencias
// ● Cada vez que la página se cargue, verificá si hay datos guardados en LocalStorage.
// ● Si existen, aplicá automáticamente:
// ○ el saludo con el nombre del usuario.
// ○ el color de fondo elegido.
// Usá localStorage.getItem() para leer los datos
// Manipulá el DOM con document.body.style.backgroundColor para
// cambiar el color
// Probá recargando la página para chequear que la preferencia se mantiene

// document.addEventListener("DOMContentLoaded", () => {
//   aplicarPreferenciasGuardadas();
//   //traigo el form del html
//   const formulario = document.getElementById("form-preferencias");
//   formulario.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     // traigo nombre y color del html
//     const nombreForm = document.getElementById("nombre");
//     const colorForm = document.getElementById("colores-fondo");
//     //obtengo el valor
//     const nombre = nombreForm.value;
//     const color = colorForm.value;

//     if (nombre && color) {
//       localStorage.setItem("nombre", nombre);
//       localStorage.setItem("colores-fondo", color);
//       aplicarPreferenciasGuardadas();
//     } else {
//       alert("Campos vacios, completar antes de enviar el formulario");
//     }
//   });
// });

// const aplicarPreferenciasGuardadas = () => {
//   // busca en el local storage
//   const nombreGuardado = localStorage.getItem("nombre");
//   const colorGuardado = localStorage.getItem("colores-fondo");

//   if (nombreGuardado && colorGuardado) {
//     const saludo = document.getElementById("saludo");
//     document.body.style.backgroundColor = colorGuardado;
//     saludo.textContent = `Bienvenido nuevamente ${nombreGuardado}`;
//   } else {
//     alert("Faltan cargar datos");
//   }
// };

//EJERCICIO 2
// 1. Armar el catálogo
// ● Creá un listado de productos en el HTML (pueden utilizar los que ya armaron
// anteriormente “Agregar al carrito”).
// 2. Configurar el contador
// ● Mostrá un contador (por ejemplo, en la esquina superior) que indique cuántos
// productos hay en el carrito.
// 3. Programar el agregado
// ● Cuando el usuario haga clic en “Agregar al carrito”, aumentá la cantidad de
// productos.
// ● Guardá el valor actualizado en LocalStorage.
// 4. Recuperar los datos al cargar
// ● Cada vez que se recargue la página, tomá el número guardado en LocalStorage.
// ● Mostralo en el contador del carrito.

document.addEventListener("DOMContentLoaded", function () {
  cargarCarrito();
});
// Agregar producto al carrito
var botonesAgregar = document.getElementsByClassName("agregar-carrito");
for (var i = 0; i < botonesAgregar.length; i++) {
  botonesAgregar[i].addEventListener("click", agregarProducto);
}
// Vaciar carrito
document
  .getElementById("vaciar-carrito")
  .addEventListener("click", function () {
    localStorage.removeItem("carrito");
    cargarCarrito();
  });
function agregarProducto(event) {
  var producto = {
    id: event.target.getAttribute("data-id"),
    nombre: event.target.getAttribute("data-nombre"),
    precio: event.target.getAttribute("data-precio"),
  };

  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}
function cargarCarrito() {
  var listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";
  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    var li = document.createElement("li");
    li.textContent = producto.nombre + " - $" + producto.precio;
    listaCarrito.appendChild(li);
  }
}
