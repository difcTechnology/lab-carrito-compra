let botonesAgregar = document.querySelectorAll(".btn-agregar");
let cantidadItems = 0;
let carritoCompra = [];

botonesAgregar.forEach((boton, index) => {
  boton.addEventListener("click", function () {
    let nombre = boton.dataset.nombre;
    let precio = boton.dataset.precio;
    agregarAlCarrito(nombre, precio);
  });
});

function agregarAlCarrito(nombre, precio) {
  let producto = carritoCompra.find((producto) => producto.nombre == nombre);
  if (producto == undefined) {
    producto = new Producto(nombre, precio, 1);
    let li = document.createElement("li");
    li.id=nombre;
    li.innerHTML = `
    ${nombre} ${precio} ${producto.cantidad}<input type="button" value="Eliminar" class="btn btn-danger"/>
    `;
    let carrito = document.getElementById("lista-carrito");
    carrito.appendChild(li);
    carritoCompra.push(producto);
  }else{
    producto.cantidad++;
    let li = document.getElementById(nombre);
    li.innerHTML = `
    ${nombre} ${precio} ${producto.cantidad}<input type="button" value="Eliminar" class="btn btn-danger"/>
    `;
  }
  cantidadItems++;
      updateBadge();
}

function updateBadge() {
  badge = document.getElementById("badge");
  console.log(badge);
  badge.textContent = cantidadItems;
}

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}
