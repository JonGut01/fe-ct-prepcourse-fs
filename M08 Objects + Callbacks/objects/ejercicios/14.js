function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objetoUsuario.email ? true : false;
}

// const persona = {
//   nombre: "Jonathan",
//   edad: 35,
//   email: "jongut01@vsc.com"
// };
// console.log(tieneEmail(persona));

module.exports = tieneEmail;
