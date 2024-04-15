function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (!objetoUsuario.hasOwnProperty(password) && objetoUsuario.password !== password ) {
    return false;
  } else {
    return true;
  }
}

// const persona = {
//   nombre: "Jonathan",
//   edad: 35,
//   email: "jonGut01@vsc.com",
//   password: 1234
// };
// console.log(verificarPassword(persona, 1234));
// console.log(verificarPassword(persona, "mkn231"));

module.exports = verificarPassword;
