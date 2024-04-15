function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}

// const usuario1 = {
//   nombre: "Jonathan",
//   edad: 35,
//   email: "jonGut01@vsc.com",
//   password: 1234
// };

// console.log(actualizarPassword(usuario1, "kmn231"));

module.exports = actualizarPassword;
