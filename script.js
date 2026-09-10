const titulo = document.querySelector("h1");
console.log(titulo);
titulo.textContent = "¡Bienvenido a mi tienda!";
const botones = document.querySelectorAll(".btn-agregar");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    alert("¡Producto agregado al carrito!");
  });
});
