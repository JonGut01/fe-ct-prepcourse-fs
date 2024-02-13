function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:

  const objetoClonado = {...objeto};
  const propiedades = propiedad.split(/\.|\["|"\]/);

  let objetoActual = objetoClonado;

  for (let i = 0; i < propiedades.length -1; i++) {
    const propiedadActual = propiedades[i];
    if (!objetoActual.hasOwnProperty(propiedadActual) || typeof objetoActual[propiedadActual] !== "object") {
      objetoActual[propiedadActual] = {};
    }
    objetoActual = objetoActual[propiedadActual];
  }
  objetoActual[propiedades[propiedades.length -1]] = valor;
  return objetoClonado;
}

// const datosPersonales = {
//   nombre: "Jonathan",
//   direccion: {
//     calle: "Cambre",
//     numero: 236,
//     ciudad: "Los Reartes",
//   },
// };
// datosPersonalesActualizado = actualizarValorPropiedad(datosPersonales, "contacto.email", "jonathangutierrez1905@gmail.com");
// console.log(datosPersonales);
// console.log(datosPersonalesActualizado);

module.exports = actualizarValorPropiedad;
