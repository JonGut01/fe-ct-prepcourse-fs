function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:

 if (objeto.hasOwnProperty(propiedad)) {
  return true;
 } 
 const propiedades = Object.getOwnPropertyNames(objeto);
 if (propiedades.includes(propiedad)) {
  return false;
 }
 for (let key in objeto) {
  if (key === propiedad) {
    return true;
  }
 }
 return false;
}

// const datosPersonales = {
//   nombre: "Jonathan",
//   calle: "Cambre",
//   numero: 123,
//   ciudad: "Los Reartes" 
// };

// console.log(verificarPropiedad(datosPersonales, "direccion"));
// console.log(verificarPropiedad(datosPersonales, "edad"));
// console.log(verificarPropiedad(datosPersonales, "numero"));
// console.log(verificarPropiedad(datosPersonales, "ciudad"));

module.exports = verificarPropiedad;
