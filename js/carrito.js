import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();

  actualizarContador(carrito);

  const resumen = document.getElementById("resumen-carrito");

  resumen.innerHTML = "";

  if (!carrito.length) {
    resumen.innerHTML = `
      <p class="mensaje-carrito-vacio">
        El carrito está vacío.
      </p>
    `;
    return;
  }

  const resumenCard = document.createElement("div");
  resumenCard.classList.add("resumen-card");

  const titulo = document.createElement("h2");
  titulo.textContent = "Resumen de compra";

  resumenCard.appendChild(titulo);

  let total = 0;

  carrito.forEach((producto, index) => {
    total += Number(producto.precio);

    const fila = document.createElement("div");
    fila.classList.add("fila-producto");

    const info = document.createElement("span");
    info.textContent = `${producto.nombre} - $${producto.precio}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "bg-secondary");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
      eliminarProducto(index);
      renderizarCarrito();
    });

    fila.appendChild(info);
    fila.appendChild(btnEliminar);

    resumenCard.appendChild(fila);
  });

  const totalCompra = document.createElement("h3");
  totalCompra.classList.add("total-compra");
  totalCompra.textContent = `Total: $${total}`;

  resumenCard.appendChild(totalCompra);

  const btnComprar = document.createElement("button");
  btnComprar.classList.add("btn-comprar");
  btnComprar.textContent = "Finalizar compra";

  btnComprar.addEventListener("click", () => {
    alert("¡Gracias por tu compra!");
  });

  resumenCard.appendChild(btnComprar);

  const btnVaciar = document.createElement("button");
  btnVaciar.classList.add("btn", "bg-secondary");
  btnVaciar.textContent = "Vaciar carrito";

  btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  resumenCard.appendChild(btnVaciar);

  resumen.appendChild(resumenCard);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
