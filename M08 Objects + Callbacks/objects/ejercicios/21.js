function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8

objetoProducto.calcularPrecioDescuento = function () {
  const descuento = this.precio * (this.porcentajeDeDescuento);
  const precioFinal = this.precio - descuento;
  return precioFinal;
};
return objetoProducto;
}

// const producto1 = {
//   nombre: "copa de vino",
//   precio: 200,
//   porcentajeDeDescuento: 0.1
// };

// agregarMetodoCalculoDescuento(producto1);
// const precioFinal = producto1.calcularPrecioDescuento();
// console.log(precioFinal);

module.exports = agregarMetodoCalculoDescuento;
