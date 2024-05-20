function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
 for (let usuario of objetoMuchosUsuarios) {
  usuario.esPremium = true;
 }
  return objetoMuchosUsuarios;
}

// const usuarios = [
//   { nombre: 'Usuario1', esPremium: false },
//   { nombre: 'Usuario2', esPremium: false },
//   { nombre: 'Usuario3', esPremium: false }
// ];
// const usuariosPremium = pasarUsuarioAPremium(usuarios);
// console.log(usuariosPremium);

module.exports = pasarUsuarioAPremium;
