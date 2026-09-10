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