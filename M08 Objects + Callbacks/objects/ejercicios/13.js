function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  if (objeto.hasOwnProperty(propiedad)) {
    delete objeto[propiedad];
  }
  return objeto;
}

// const persona = {
//   nombre: "Jonathan",
//   edad: 35,
//   ciudad: "Los Reartes"
// };
// eliminarPropiedad(persona, "cuidad");
// console.log(persona);

module.exports = eliminarPropiedad;
