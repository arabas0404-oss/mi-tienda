const titulo = document.querySelector("h1");
console.log(titulo);
titulo.textContent = "¡Bienvenido a mi tienda!";
const botones = document.querySelectorAll(".btn-agregar");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const producto = boton.closest(".producto");
    const nombreProducto = producto.querySelector("h3").textContent;
    alert(nombreProducto + " agregado al carrito!");
  });
});
const formulario = document.querySelector("#formulario-contacto");
const mensajeEstado = document.querySelector("#mensaje-estado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  if (nombre === "" || email === "" || mensaje === "") {
    mensajeEstado.textContent = "Por favor completa todos los campos.";
    mensajeEstado.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    mensajeEstado.textContent = "Ingresa un correo válido.";
    mensajeEstado.style.color = "red";
    return;
  }

  mensajeEstado.textContent = "¡Mensaje enviado con éxito!";
  mensajeEstado.style.color = "green";
  formulario.reset();
});