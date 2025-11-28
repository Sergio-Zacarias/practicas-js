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

document.addEventListener("DOMContentLoaded", () => {
  aplicarPreferenciasGuardadas();
  //traigo el form del html
  const formulario = document.getElementById("form-preferencias");
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // traigo nombre y color del html
    const nombreForm = document.getElementById("nombre");
    const colorForm = document.getElementById("colores-fondo");
    //obtengo el valor
    const nombre = nombreForm.value;
    const color = colorForm.value;

    if (nombre && color) {
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("colores-fondo", color);
      aplicarPreferenciasGuardadas();
    } else {
      alert("Campos vacios, completar antes de enviar el formulario");
    }
  });
});

const aplicarPreferenciasGuardadas = () => {
  // busca en el local storage
  const nombreGuardado = localStorage.getItem("nombre");
  const colorGuardado = localStorage.getItem("colores-fondo");

  if (nombreGuardado && colorGuardado) {
    const saludo = document.getElementById("saludo");
    document.body.style.backgroundColor = colorGuardado;
    saludo.textContent = `Bienvenido nuevamente ${nombreGuardado}`;
  } else {
    alert("Faltan cargar datos");
  }
};
