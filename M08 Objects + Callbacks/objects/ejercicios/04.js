function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:

  return objeto.hasOwnProperty(propiedad) || propiedad in objeto;
}
// const datosPersonales = {
//   nombre: "Jonathan",
//   direccion: {
//     calle: "Cambre",
//     numero: false,
//     ciudad: "Los Reartes",
//   },
// };

// console.log(verificarPropiedad(datosPersonales, "direccion"));
// console.log(verificarPropiedad(datosPersonales, "edad"));
// console.log(verificarPropiedad(datosPersonales, "numero"));
// console.log(verificarPropiedad(datosPersonales, "ciudad"));

module.exports = verificarPropiedad;
