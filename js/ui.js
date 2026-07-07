export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");

  if (contador) {
    contador.textContent = carrito.length;
  }
};

//esta función sirve para cuando agregue librerias//
export const mostrarMensaje = (texto) => {
  alert(texto);
};
